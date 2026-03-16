type SeoLanguage = "ar" | "en";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SeoAlternates = {
  ar: string;
  en: string;
  xDefault?: string;
};

export type SeoOptions = {
  title: string;
  description: string;
  path: string;
  language: SeoLanguage;
  keywords?: string;
  noindex?: boolean;
  type?: "website" | "article";
  alternates?: SeoAlternates;
  breadcrumb?: BreadcrumbItem[];
  faqs?: FaqItem[];
};

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.takedgroup.com").replace(/\/+$/, "");
const DEFAULT_OG_IMAGE = "/the-website.png";

const toAbsoluteUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const clearManagedTags = () => {
  document
    .querySelectorAll("link[data-seo-managed='alternate'],script[data-seo-jsonld='true']")
    .forEach((node) => node.remove());
};

const appendAlternate = (href: string, hreflang: string) => {
  const link = document.createElement("link");
  link.setAttribute("rel", "alternate");
  link.setAttribute("hreflang", hreflang);
  link.setAttribute("href", href);
  link.setAttribute("data-seo-managed", "alternate");
  document.head.appendChild(link);
};

const appendJsonLd = (schema: Record<string, unknown>) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-jsonld", "true");
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const applySeo = ({
  title,
  description,
  path,
  language,
  keywords,
  noindex,
  type = "website",
  alternates,
  breadcrumb = [],
  faqs = [],
}: SeoOptions) => {
  const pageUrl = toAbsoluteUrl(path);
  const html = document.documentElement;

  document.title = title;
  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";

  upsertMeta("name", "description", description);
  if (keywords) {
    upsertMeta("name", "keywords", keywords);
  }
  upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", pageUrl);
  upsertMeta("property", "og:site_name", "Taked");
  upsertMeta("property", "og:locale", language === "ar" ? "ar_AE" : "en_AE");
  upsertMeta("property", "og:image", toAbsoluteUrl(DEFAULT_OG_IMAGE));

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", toAbsoluteUrl(DEFAULT_OG_IMAGE));

  upsertCanonical(pageUrl);
  clearManagedTags();

  if (alternates) {
    appendAlternate(toAbsoluteUrl(alternates.ar), "ar-AE");
    appendAlternate(toAbsoluteUrl(alternates.en), "en-AE");
    appendAlternate(
      toAbsoluteUrl(alternates.xDefault || alternates.en || alternates.ar),
      "x-default"
    );
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Taked",
    url: SITE_URL,
    logo: toAbsoluteUrl("/thewebsite.png"),
    sameAs: ["https://www.facebook.com/taked24/", "https://www.instagram.com/taked.ae/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971564331993",
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
        areaServed: "AE",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Taked",
    image: [toAbsoluteUrl("/the-website.png")],
    url: SITE_URL,
    telephone: "+971564331993",
    email: "info.taked@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor, Al Mamzar Centre, Deira",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: "United Arab Emirates",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const breadcrumbSchema =
    breadcrumb.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: toAbsoluteUrl(item.path),
          })),
        }
      : null;

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  appendJsonLd(organizationSchema);
  appendJsonLd(localBusinessSchema);
  if (breadcrumbSchema) {
    appendJsonLd(breadcrumbSchema);
  }
  if (faqSchema) {
    appendJsonLd(faqSchema);
  }
};

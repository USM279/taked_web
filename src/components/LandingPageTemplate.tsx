import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { ArNavbar } from "./ArNavbar";
import { EnNavbar } from "./EnNavbar";
import { ArFooter } from "./ArFooter";
import { EnFooter } from "./EnFooter";

type LandingItem = {
  title: string;
  description: string;
};

type LandingFaq = {
  question: string;
  answer: string;
};

type LandingLink = {
  label: string;
  to: string;
};

type LandingPageTemplateProps = {
  language: "ar" | "en";
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string;
  featureTitle: string;
  features: LandingItem[];
  processTitle: string;
  processSteps: LandingItem[];
  faqTitle: string;
  faqs: LandingFaq[];
  relatedTitle: string;
  relatedLinks: LandingLink[];
  ctaTitle: string;
  ctaDescription: string;
  contactPath: string;
  keywords: string[];
};

export const LandingPageTemplate = ({
  language,
  heroTitle,
  heroDescription,
  introTitle,
  introDescription,
  featureTitle,
  features,
  processTitle,
  processSteps,
  faqTitle,
  faqs,
  relatedTitle,
  relatedLinks,
  ctaTitle,
  ctaDescription,
  contactPath,
  keywords,
}: LandingPageTemplateProps) => {
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-white" dir={isArabic ? "rtl" : "ltr"}>
      {isArabic ? <ArNavbar /> : <EnNavbar />}

      <main className="pt-32">
        <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
                {heroTitle}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                {heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white border border-sky-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{introTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{introDescription}</p>
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{featureTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{processTitle}</h2>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <p className="text-sm font-bold text-sky-900 mb-2">
                      {isArabic ? `الخطوة ${index + 1}` : `Step ${index + 1}`}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-700 mt-2">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{faqTitle}</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-gray-200 p-5">
                    <summary className="cursor-pointer text-lg font-semibold text-gray-900 list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <ArrowRight className="h-5 w-5 text-sky-900 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{relatedTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group rounded-2xl border border-sky-100 bg-sky-50 p-5 hover:bg-sky-100 transition-colors"
                  >
                    <p className="font-bold text-sky-900 flex items-center justify-between gap-2">
                      <span>{item.label}</span>
                      <Sparkles className="h-4 w-4" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 p-10 text-white text-center">
              <h2 className="text-3xl font-bold">{ctaTitle}</h2>
              <p className="text-sky-100 mt-4 text-lg max-w-2xl mx-auto">{ctaDescription}</p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+971564331993"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sky-900 font-bold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {isArabic ? "اتصل الآن" : "Call Now"}
                </a>
                <a
                  href="https://wa.me/971564331993?text=Hello%2C%20I%20need%20business%20setup%20support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-3 text-white font-bold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isArabic ? "واتساب" : "WhatsApp"}
                </a>
                <Link
                  to={contactPath}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-sky-300 px-7 py-3 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  {isArabic ? "طلب استشارة" : "Book Consultation"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isArabic ? <ArFooter /> : <EnFooter />}
    </div>
  );
};

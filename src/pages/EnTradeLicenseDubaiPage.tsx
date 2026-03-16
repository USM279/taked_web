import { useEffect } from "react";
import { LandingPageTemplate } from "../components/LandingPageTemplate";
import { applySeo } from "../lib/seo";

export const EnTradeLicenseDubaiPage = () => {
  useEffect(() => {
    applySeo({
      title: "Trade License Dubai | Issue or Renew Fast - Taked",
      description:
        "Trade license Dubai support for first-time issuance and renewals with full documentation checks and compliance follow-up.",
      path: "/en/trade-license-dubai",
      language: "en",
      keywords:
        "trade license dubai, trade license dubai cost, trade license dubai renewal, issue trade license dubai",
      alternates: {
        ar: "/ar/trade-license-dubai",
        en: "/en/trade-license-dubai",
      },
      breadcrumb: [
        { name: "Home", path: "/en" },
        { name: "Trade License Dubai", path: "/en/trade-license-dubai" },
      ],
      faqs: [
        {
          question: "Can I issue a trade license online in Dubai?",
          answer:
            "Many license flows include online stages, depending on activity and authority requirements.",
        },
      ],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingPageTemplate
      language="en"
      heroTitle="Trade License Dubai: Issue and Renew with Clarity"
      heroDescription="We help you secure and maintain your Dubai trade license with reliable process management and accurate documentation."
      introTitle="Avoid delays and compliance mistakes"
      introDescription="Your trade license is the legal core of your operation. We structure your file correctly from day one and support renewals to keep your business compliant."
      featureTitle="Trade license support scope"
      features={[
        {
          title: "Activity mapping and compliance",
          description:
            "Select the right activity code and structure to avoid avoidable rejections.",
        },
        {
          title: "Name reservation and approvals",
          description:
            "Name checks, filing, and authority coordination for faster progress.",
        },
        {
          title: "Issuance and renewal workflows",
          description:
            "Full support for new licenses and annual renewals with timeline tracking.",
        },
        {
          title: "Post-license advisory",
          description:
            "Guidance for modifications, additions, and ownership-related updates.",
        },
      ]}
      processTitle="How we execute your trade license file"
      processSteps={[
        {
          title: "Requirement check",
          description:
            "We review your business model and determine the correct licensing route.",
        },
        {
          title: "File preparation",
          description:
            "Documents are validated and arranged for accurate first-time submission.",
        },
        {
          title: "Submission and authority follow-up",
          description:
            "We monitor updates and resolve procedural blockers until final issuance.",
        },
        {
          title: "Delivery and ongoing support",
          description:
            "You receive your license with clear guidance for upcoming obligations.",
        },
      ]}
      faqTitle="Frequently Asked Questions"
      faqs={[
        {
          question: "How much does a trade license in Dubai cost?",
          answer:
            "The total cost depends on activity, jurisdiction, and specific filing requirements. We provide accurate estimates before starting.",
        },
        {
          question: "How long does trade license issuance take?",
          answer:
            "Many standard cases move quickly once all required documents and approvals are complete.",
        },
        {
          question: "Can I modify my license after issuance?",
          answer:
            "Yes. Modifications are possible through official procedures depending on the requested change.",
        },
      ]}
      relatedTitle="Related pages"
      relatedLinks={[
        { label: "Business Setup Dubai", to: "/en/business-setup-dubai" },
        { label: "Free Zone Company Setup", to: "/en/free-zone-company-setup" },
        { label: "Investor Visa UAE", to: "/en/investor-visa-uae" },
        { label: "All Services", to: "/en/services" },
      ]}
      ctaTitle="Need a fast and clean trade license process?"
      ctaDescription="Talk to our team and get your issue or renewal plan today."
      contactPath="/en/contact-us"
      keywords={["Trade License Dubai", "License Renewal Dubai", "Company Registration Dubai"]}
    />
  );
};

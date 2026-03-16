import { useEffect } from "react";
import { LandingPageTemplate } from "../components/LandingPageTemplate";
import { applySeo } from "../lib/seo";

export const EnFreeZoneCompanySetupPage = () => {
  useEffect(() => {
    applySeo({
      title: "Free Zone Company Setup Dubai | Cost & Process - Taked",
      description:
        "Set up a free zone company in Dubai with a clear comparison of zones, expected costs, licensing requirements, and visa options.",
      path: "/en/free-zone-company-setup",
      language: "en",
      keywords:
        "free zone company setup dubai, free zone business setup dubai, free zone company formation dubai",
      alternates: {
        ar: "/ar/free-zone-company-setup",
        en: "/en/free-zone-company-setup",
      },
      breadcrumb: [
        { name: "Home", path: "/en" },
        { name: "Free Zone Company Setup", path: "/en/free-zone-company-setup" },
      ],
      faqs: [
        {
          question: "Which free zone is best for my business?",
          answer:
            "The best choice depends on your activity, budget, visa needs, and market strategy. We shortlist only relevant options for your case.",
        },
      ],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingPageTemplate
      language="en"
      heroTitle="Free Zone Company Setup in Dubai"
      heroDescription="Launch your free zone company with a setup strategy that balances cost, speed, and long-term business goals."
      introTitle="Why founders choose free zone setup"
      introDescription="Free zone structures are popular for flexibility and efficient processing. We help you choose the right zone, not just the easiest package."
      featureTitle="What our free zone setup service includes"
      features={[
        {
          title: "Free zone comparison analysis",
          description:
            "A practical side-by-side review based on your activity profile and operational needs.",
        },
        {
          title: "Transparent cost mapping",
          description:
            "You get a full cost outline, including base fees and common add-ons, before proceeding.",
        },
        {
          title: "Complete registration handling",
          description:
            "We manage the setup workflow from application prep to license and incorporation documents.",
        },
        {
          title: "Visa and residency support",
          description:
            "If needed, we coordinate investor visa and related compliance steps.",
        },
      ]}
      processTitle="Setup flow"
      processSteps={[
        {
          title: "Business model review",
          description:
            "We define your key requirements to identify zones that actually fit your operations.",
        },
        {
          title: "Package and structure selection",
          description:
            "We align your selected package with license scope, workspace requirements, and visa capacity.",
        },
        {
          title: "Application and approvals",
          description:
            "Your documents are submitted and tracked through each approval stage.",
        },
        {
          title: "Post-license activation",
          description:
            "We support key next steps to help your company become operational quickly.",
        },
      ]}
      faqTitle="Frequently Asked Questions"
      faqs={[
        {
          question: "What is the average cost of free zone company setup in Dubai?",
          answer:
            "Costs vary by zone, activity, and package structure. We provide tailored options to match your budget and targets.",
        },
        {
          question: "Can I manage the company remotely?",
          answer:
            "In many cases yes, depending on zone rules and license conditions.",
        },
        {
          question: "How fast can a free zone company be incorporated?",
          answer:
            "Standard files can often be processed in a short timeframe when documentation is complete.",
        },
      ]}
      relatedTitle="Related pages"
      relatedLinks={[
        { label: "Business Setup Dubai", to: "/en/business-setup-dubai" },
        { label: "Trade License Dubai", to: "/en/trade-license-dubai" },
        { label: "Investor Visa UAE", to: "/en/investor-visa-uae" },
        { label: "Contact Us", to: "/en/contact-us" },
      ]}
      ctaTitle="Start your free zone setup with confidence"
      ctaDescription="Get a focused recommendation for the right Dubai free zone for your business."
      contactPath="/en/contact-us"
      keywords={["Free Zone Company Setup", "Dubai Free Zone", "Company Formation Dubai"]}
    />
  );
};

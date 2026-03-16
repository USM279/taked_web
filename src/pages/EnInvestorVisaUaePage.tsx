import { useEffect } from "react";
import { LandingPageTemplate } from "../components/LandingPageTemplate";
import { applySeo } from "../lib/seo";

export const EnInvestorVisaUaePage = () => {
  useEffect(() => {
    applySeo({
      title: "Investor Visa UAE | Apply and Renew - Taked",
      description:
        "Investor visa UAE service for entrepreneurs and company owners, including file preparation, process tracking, and renewal support.",
      path: "/en/investor-visa-uae",
      language: "en",
      keywords:
        "investor visa uae, investor visa uae requirements, investor visa uae cost, apply investor visa uae",
      alternates: {
        ar: "/ar/investor-visa-uae",
        en: "/en/investor-visa-uae",
      },
      breadcrumb: [
        { name: "Home", path: "/en" },
        { name: "Investor Visa UAE", path: "/en/investor-visa-uae" },
      ],
      faqs: [
        {
          question: "What are common investor visa requirements in the UAE?",
          answer:
            "Requirements differ by investment route but often include business or ownership documents, identity details, and medical/ID steps.",
        },
      ],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingPageTemplate
      language="en"
      heroTitle="Investor Visa UAE: Structured End-to-End Support"
      heroDescription="From eligibility to issuance, we support your UAE investor visa process with clear documentation and accurate follow-up."
      introTitle="Built for founders and investors"
      introDescription="Whether you are setting up a new company or managing an existing entity, we simplify investor visa procedures and reduce avoidable delays."
      featureTitle="What is included in our investor visa service"
      features={[
        {
          title: "Eligibility and file strategy",
          description:
            "We define the right investor visa route based on your profile and business status.",
        },
        {
          title: "Government process management",
          description:
            "All filing stages are tracked and coordinated until final visa issuance.",
        },
        {
          title: "Medical and Emirates ID coordination",
          description:
            "We align required appointments and processing steps as part of your visa path.",
        },
        {
          title: "Renewal continuity planning",
          description:
            "Stay compliant with structured reminders and renewal support before expiry.",
        },
      ]}
      processTitle="Investor visa process flow"
      processSteps={[
        {
          title: "Case review and route selection",
          description:
            "We validate eligibility and pick the most suitable visa route for your case.",
        },
        {
          title: "Document preparation",
          description:
            "Your required documents are organized and verified for accurate submission.",
        },
        {
          title: "Submission and coordination",
          description:
            "We manage all required steps and timeline checkpoints with relevant authorities.",
        },
        {
          title: "Visa issuance and renewal planning",
          description:
            "You receive clear post-issuance guidance and a practical renewal roadmap.",
        },
      ]}
      faqTitle="Frequently Asked Questions"
      faqs={[
        {
          question: "How long does investor visa processing usually take?",
          answer:
            "Processing time depends on file readiness and authority workflow, but complete files are typically processed faster.",
        },
        {
          question: "Can non-residents apply for an investor visa in the UAE?",
          answer:
            "Yes, in many scenarios this is possible with the right setup and documentation.",
        },
        {
          question: "Do you support visa renewals as well?",
          answer:
            "Yes. We handle both first-time applications and renewals through structured support.",
        },
      ]}
      relatedTitle="Related pages"
      relatedLinks={[
        { label: "Business Setup Dubai", to: "/en/business-setup-dubai" },
        { label: "Free Zone Company Setup", to: "/en/free-zone-company-setup" },
        { label: "Trade License Dubai", to: "/en/trade-license-dubai" },
        { label: "Contact Us", to: "/en/contact-us" },
      ]}
      ctaTitle="Start your investor visa file today"
      ctaDescription="Get a clear checklist and timeline in a single consultation call."
      contactPath="/en/contact-us"
      keywords={["Investor Visa UAE", "UAE Residency", "Business Investor Visa"]}
    />
  );
};

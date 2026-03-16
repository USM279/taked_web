import { useEffect } from "react";
import { LandingPageTemplate } from "../components/LandingPageTemplate";
import { applySeo } from "../lib/seo";

export const EnBusinessSetupDubaiPage = () => {
  useEffect(() => {
    applySeo({
      title: "Business Setup Dubai | Fast Company Formation - Taked",
      description:
        "End-to-end business setup in Dubai: activity selection, trade license issuance, investor residency support, and launch guidance.",
      path: "/en/business-setup-dubai",
      language: "en",
      keywords:
        "business setup dubai, company formation dubai, company setup dubai, open business in uae",
      alternates: {
        ar: "/ar/business-setup-dubai",
        en: "/en/business-setup-dubai",
      },
      breadcrumb: [
        { name: "Home", path: "/en" },
        { name: "Business Setup Dubai", path: "/en/business-setup-dubai" },
      ],
      faqs: [
        {
          question: "How long does company formation in Dubai usually take?",
          answer:
            "The timeline depends on activity type and authority approvals, but many standard cases can be completed within a few working days once documents are ready.",
        },
        {
          question: "Can non-residents start a business in Dubai?",
          answer:
            "Yes. In many scenarios, non-residents can establish a company by selecting the right legal structure and compliant setup route.",
        },
      ],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LandingPageTemplate
      language="en"
      heroTitle="Business Setup in Dubai, Built for Speed"
      heroDescription="We handle your Dubai company setup from strategy to license issuance, with practical timelines and clear cost guidance."
      introTitle="A practical route to launch your company"
      introDescription="If you are searching for business setup Dubai services, this page gives you a direct path to launch. We structure your file correctly, follow up with authorities, and keep the process simple."
      featureTitle="What you get in our business setup service"
      features={[
        {
          title: "Activity and market-fit review",
          description:
            "We map your target activity to the correct legal and licensing framework before submission.",
        },
        {
          title: "Legal structure selection",
          description:
            "Choose the setup model that supports your growth plan and operational goals.",
        },
        {
          title: "License processing support",
          description:
            "Full support from name reservation to final trade license issuance.",
        },
        {
          title: "Investor residency guidance",
          description:
            "Structured assistance for investor visa and Emirates ID related requirements.",
        },
      ]}
      processTitle="How the process works"
      processSteps={[
        {
          title: "Discovery and eligibility check",
          description:
            "We define your activity, ownership structure, and target market to build the right setup path.",
        },
        {
          title: "Documentation and application prep",
          description:
            "Your documents are prepared and verified before submission to avoid avoidable delays.",
        },
        {
          title: "Authority submission and follow-up",
          description:
            "We manage approvals and coordinate updates until your file is fully approved.",
        },
        {
          title: "Post-setup launch support",
          description:
            "After licensing, we guide your next actions for smooth operational launch.",
        },
      ]}
      faqTitle="Frequently Asked Questions"
      faqs={[
        {
          question: "How much does business setup in Dubai cost?",
          answer:
            "Costs vary by activity, jurisdiction, and visa package. We provide a clear estimate before you commit.",
        },
        {
          question: "Do I need office space from day one?",
          answer:
            "It depends on activity and setup route. Some models allow flexible workspace solutions.",
        },
        {
          question: "Do you support after incorporation?",
          answer:
            "Yes. We support critical follow-up steps after incorporation so you can start operations confidently.",
        },
      ]}
      relatedTitle="Related pages"
      relatedLinks={[
        { label: "Free Zone Company Setup", to: "/en/free-zone-company-setup" },
        { label: "Trade License Dubai", to: "/en/trade-license-dubai" },
        { label: "Investor Visa UAE", to: "/en/investor-visa-uae" },
        { label: "All Services", to: "/en/services" },
      ]}
      ctaTitle="Ready to launch your company in Dubai?"
      ctaDescription="Talk to our team and get a clear setup roadmap with cost and timeline."
      contactPath="/en/contact-us"
      keywords={["Business Setup Dubai", "Company Formation Dubai", "Open Business in UAE"]}
    />
  );
};

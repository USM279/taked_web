import { useEffect } from "react";
import { EnNavbar } from "../components/EnNavbar";
import { EnHero } from "../components/EnHero";
import { EnAbout } from "../components/EnAbout";
import { EnServices } from "../components/EnServices";
import { EnTestimonials } from "../components/EnTestimonials";
import { EnContact } from "../components/EnContact";
import { EnChatbot } from "../components/EnChatbot";
import { EnFooter } from "../components/EnFooter";
import { applySeo } from "../lib/seo";

export const EnPage = () => {
  useEffect(() => {
    applySeo({
      title: "Business Setup Dubai & UAE | Trade License & Investor Visa | Taked",
      description:
        "Business setup in Dubai and the UAE with trade license, investor visa, PRO services, and step-by-step company formation support.",
      path: "/en",
      language: "en",
      keywords:
        "business setup dubai, company formation dubai, trade license dubai, investor visa uae, pro services dubai",
      alternates: {
        ar: "/ar",
        en: "/en",
      },
      breadcrumb: [{ name: "Home", path: "/en" }],
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <EnNavbar />
      <EnHero />
      <EnAbout />
      <EnServices />
      <EnTestimonials />
      <EnContact />
      <EnChatbot />
      <EnFooter />
    </div>
  );
};

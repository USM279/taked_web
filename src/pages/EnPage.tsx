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
      title: "Taked | Business Setup Services in Dubai & UAE",
      description:
        "Taked provides company formation in Dubai and UAE, trade license support, investor visa services, and full PRO/government processing.",
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

import { useEffect } from "react";
import { ArNavbar } from "../components/ArNavbar";
import { ArHero } from "../components/ArHero";
import { ArAbout } from "../components/ArAbout";
import { ArServices } from "../components/ArServices";
import { ArTestimonials } from "../components/ArTestimonials";
import { ArContact } from "../components/ArContact";
import { ArChatbot } from "../components/ArChatbot";
import { ArFooter } from "../components/ArFooter";
import { applySeo } from "../lib/seo";

export const ArPage = () => {
  useEffect(() => {
    applySeo({
      title: "تأسيس شركات في دبي والإمارات | رخص وإقامة مستثمر - تأكيد",
      description:
        "تأسيس شركات في دبي والإمارات مع استخراج الرخص التجارية وإقامة المستثمر وخدمات رجال الأعمال والمتابعة حتى التشغيل.",
      path: "/ar",
      language: "ar",
      keywords:
        "تأسيس شركة في دبي, تأسيس شركة في الامارات, رخصة تجارية دبي, اقامة مستثمر الامارات, خدمات رجال الأعمال دبي",
      alternates: {
        ar: "/ar",
        en: "/en",
      },
      breadcrumb: [{ name: "الرئيسية", path: "/ar" }],
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ArNavbar />
      <ArHero />
      <ArAbout />
      <ArServices />
      <ArTestimonials />
      <ArContact />
      <ArChatbot />
      <ArFooter />
    </div>
  );
};

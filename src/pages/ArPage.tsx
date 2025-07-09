import { useEffect } from "react";
import { ArNavbar } from "../components/ArNavbar";
import { ArHero } from "../components/ArHero";
import { ArAbout } from "../components/ArAbout";
import { ArServices } from "../components/ArServices";
import { ArTestimonials } from "../components/ArTestimonials";
import { ArContact } from "../components/ArContact";
import { ArChatbot } from "../components/ArChatbot";
import { ArFooter } from "../components/ArFooter";
import { TypingAnimation } from "../components/motions/TypingAnimation";

export const ArPage = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.title = "تأكيد - شريكك الموثوق لتأسيس الشركات في الإمارات";
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

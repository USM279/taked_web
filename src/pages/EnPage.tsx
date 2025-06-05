import { useEffect } from "react";
import { EnNavbar } from "../components/EnNavbar";
import { EnHero } from "../components/EnHero";
import { EnAbout } from "../components/EnAbout";
import { EnServices } from "../components/EnServices";
import { EnTestimonials } from "../components/EnTestimonials";
import { EnContact } from "../components/EnContact";
import { EnChatbot } from "../components/EnChatbot";
import { EnFooter } from "../components/EnFooter";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "../components/TypingAnimation";

export const EnPage = () => {
  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.title =
      "Taked - Your trusted partner for business setup in the UAE";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <EnNavbar />
      <EnHero />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
        <TypingAnimation
          text="Welcome to Taked"
          highlightedWord="Taked"
          direction="ltr"
          speed={DEFAULT_TYPING_SPEED}
        />
      </h1>
      <EnAbout />
      <EnServices />
      <EnTestimonials />
      <EnContact />
      <EnChatbot />
      <EnFooter />
    </div>
  );
};

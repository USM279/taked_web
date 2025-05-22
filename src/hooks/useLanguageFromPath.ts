import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "@/i18n";

export function useLanguageFromPath() {
  const location = useLocation();
  const lang = location.pathname.split("/")[1];

  useEffect(() => {
    if (lang === "ar" || lang === "en") {
      i18n.changeLanguage(lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);
}

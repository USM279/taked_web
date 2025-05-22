import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export const LanguageHashHandler = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;

    // Check the path and determine the language
    const pathParts = pathname.split("/").filter(Boolean);
    const currentLang = pathParts[0];

    // Handle the normal path
    if (["ar", "en"].includes(currentLang)) {
      i18n.changeLanguage(currentLang);
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      // Save language in local storage
      localStorage.setItem("i18nextLng", currentLang);
    } else if (pathname === "/") {
      // Retrieve language from local storage or use Arabic as default
      const savedLang = localStorage.getItem("i18nextLng");
      const langToUse =
        savedLang && ["ar", "en"].includes(savedLang) ? savedLang : "ar";
      navigate(`/${langToUse}`);
    }
  }, [location.pathname]);

  return null;
};

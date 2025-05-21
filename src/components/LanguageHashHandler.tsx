import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export const LanguageHashHandler = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    const hash = location.hash;

    // Check the path and determine the language
    const pathParts = pathname.split("/").filter(Boolean);
    const currentLang = pathParts[0];

    // If there is a hash containing a language
    if (hash.startsWith("#") && ["ar", "en"].includes(hash.slice(1))) {
      const newLang = hash.slice(1);
      // If the language in the hash is different from the language in the path
      if (newLang !== currentLang) {
        navigate(`/${newLang}${location.search}`);
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
        // Save language in local storage
        localStorage.setItem("i18nextLng", newLang);
      }
      return;
    }

    // Handle  the normal path
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
  }, [location.pathname, location.hash]);

  return null;
};

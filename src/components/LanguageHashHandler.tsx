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

    // التحقق من المسار وتحديد اللغة
    const pathParts = pathname.split("/").filter(Boolean);
    const currentLang = pathParts[0];

    // إذا كان هناك هاش يحتوي على لغة
    if (hash.startsWith("#") && ["ar", "en"].includes(hash.slice(1))) {
      const newLang = hash.slice(1);
      // إذا كانت اللغة في الهاش مختلفة عن اللغة في المسار
      if (newLang !== currentLang) {
        navigate(`/${newLang}${location.search}`);
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      }
      return;
    }

    // التعامل مع المسار العادي
    if (["ar", "en"].includes(currentLang)) {
      i18n.changeLanguage(currentLang);
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    } else if (pathname === "/") {
      // إذا كان المسار الرئيسي، توجيه إلى اللغة الافتراضية
      navigate("/ar");
    }
  }, [location.pathname, location.hash]);

  return null;
};

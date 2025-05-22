import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const RouteHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    // التحقق من المسار الحالي
    const path = location.pathname;
    const pathParts = path.split("/").filter(Boolean);

    // إذا كان المسار فارغًا، قم بالتوجيه إلى المسار الصحيح مع اللغة المحفوظة
    if (!pathParts.length) {
      const savedLang = localStorage.getItem("i18nextLng") || "ar";
      navigate(`/${savedLang}`, { replace: true });
      return;
    }

    // التحقق من اللغة في المسار
    const currentLang = pathParts[0];

    // إذا كانت اللغة غير صالحة، قم بالتوجيه إلى المسار الصحيح مع اللغة المحفوظة
    if (!["ar", "en"].includes(currentLang)) {
      const savedLang = localStorage.getItem("i18nextLng") || "ar";
      navigate(`/${savedLang}${path}`, { replace: true });
      return;
    }

    // تغيير اللغة في i18n بناءً على المسار
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }

    // تعيين اتجاه الصفحة بناءً على اللغة
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;

    // حفظ اللغة في التخزين المحلي
    localStorage.setItem("i18nextLng", currentLang);
  }, [location.pathname]);

  return null;
};

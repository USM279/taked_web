import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export const LanguageHashHandler = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;

    // تقسيم المسار للحصول على اللغة
    const pathParts = pathname.split("/").filter(Boolean);
    const currentLang = pathParts[0];

    // التحقق من اللغة في المسار
    if (["ar", "en"].includes(currentLang)) {
      // تغيير اللغة في i18n
      i18n.changeLanguage(currentLang);

      // تعيين اتجاه الصفحة بناءً على اللغة
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

      // حفظ اللغة في التخزين المحلي
      localStorage.setItem("i18nextLng", currentLang);
    } else if (pathname === "/" || !currentLang) {
      // إذا كان المسار هو الجذر أو لا توجد لغة محددة
      // استرجاع اللغة المحفوظة أو استخدام العربية كلغة افتراضية
      const savedLang = localStorage.getItem("i18nextLng");
      const langToUse =
        savedLang && ["ar", "en"].includes(savedLang) ? savedLang : "ar";

      // توجيه المستخدم إلى المسار الصحيح مع اللغة المحفوظة
      navigate(`/${langToUse}${location.search}`, { replace: true });
    } else {
      // إذا كان المسار غير صالح، توجيه المستخدم إلى المسار الصحيح مع اللغة المحفوظة
      const savedLang = localStorage.getItem("i18nextLng");
      const langToUse =
        savedLang && ["ar", "en"].includes(savedLang) ? savedLang : "ar";

      navigate(`/${langToUse}${location.search}`, { replace: true });
    }
  }, [location.pathname]);

  return null;
};

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  isValidLanguage,
  getCurrentLanguage,
  changeLanguage,
  handleRootLanguagePaths,
} from "@/lib/language";

export const RouteHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // التحقق من المسار الحالي
    const path = location.pathname;
    const pathParts = path.split("/").filter(Boolean);

    // إذا كان المسار فارغًا، قم بالتوجيه إلى المسار الصحيح مع اللغة المحفوظة
    if (!pathParts.length) {
      const currentLang = getCurrentLanguage();
      navigate(`/${currentLang}`, { replace: true });
      return;
    }

    // التحقق من اللغة في المسار
    const pathLang = pathParts[0];

    // إذا كانت اللغة غير صالحة، قم بالتوجيه إلى المسار الصحيح مع اللغة المحفوظة
    if (!isValidLanguage(pathLang)) {
      const currentLang = getCurrentLanguage();
      navigate(`/${currentLang}${path}`, { replace: true });
      return;
    }

    // تغيير اللغة بناءً على المسار
    changeLanguage(pathLang);

    // معالجة المسارات الرئيسية للغة
    if (pathParts.length === 1 && isValidLanguage(pathLang)) {
      handleRootLanguagePaths();
    }
  }, [location.pathname, navigate]);

  return null;
};

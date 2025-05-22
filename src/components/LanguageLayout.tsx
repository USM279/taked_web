import { Outlet, useParams, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import i18n from "@/i18n"; // Make sure this path is correct

export const LanguageLayout = () => {
  const { lng } = useParams<{ lng?: string }>();
  const location = useLocation();

  // التحقق من صحة اللغة
  const isValidLanguage = (lang: string | undefined): lang is "ar" | "en" => {
    return lang === "ar" || lang === "en";
  };

  // إذا كانت اللغة غير صالحة، اعرض صفحة NotFound
  if (!isValidLanguage(lng)) {
    return <Navigate to="/404" replace />;
  }

  // التحقق من المسارات الفرعية الصالحة
  const pathParts = location.pathname.split("/").filter(Boolean);
  const validSubPaths = ["home", "about", "services", "contact"];

  // إذا كان هناك مسار فرعي، تحقق من صحته
  if (pathParts.length > 1) {
    const subPath = pathParts[1];
    if (!validSubPaths.includes(subPath)) {
      return <Navigate to="/404" replace />;
    }
  }

  useEffect(() => {
    // تغيير اللغة في i18n فقط إذا لم تكن محددة بالفعل
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }

    // تحديث اتجاه الصفحة ولغتها
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;

    // حفظ اللغة في localStorage
    localStorage.setItem("i18nextLng", lng);

    // التمرير إلى القسم المطلوب إذا كان موجوداً في الـ URL
    if (pathParts.length > 1) {
      const targetSection = pathParts[1];
      setTimeout(() => {
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
          const navbarHeight = 80;
          const elementPosition = targetElement.offsetTop - navbarHeight;
          window.scrollTo({ top: elementPosition, behavior: "smooth" });
        }
      }, 500); // انتظار أطول للتأكد من تحميل الصفحة
    }
  }, [lng, location.pathname]);

  return <Outlet />;
};

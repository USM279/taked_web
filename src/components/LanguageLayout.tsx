import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "@/i18n"; // Make sure this path is correct

export const LanguageLayout = () => {
  const { lng } = useParams<{ lng?: string }>(); // Add type for lng

  useEffect(() => {
    if (lng === "ar" || lng === "en") {
      i18n.changeLanguage(lng);
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
    }
    // Optional: Redirect to a 404 or default language if lng is invalid
    // else if (lng) {
    //   // Handle invalid language parameter, e.g., navigate to a 404 page
    // }
  }, [lng]);

  return <Outlet />;
};

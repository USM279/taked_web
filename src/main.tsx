import { createRoot } from "react-dom/client";
import App from "./App";
import i18n from "./i18n";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

// تهيئة اللغة من URL عند بداية التطبيق
const initializeLanguageFromURL = () => {
  const pathLang = window.location.pathname.split("/")[1];
  if (pathLang === "ar" || pathLang === "en") {
    i18n.changeLanguage(pathLang);
    document.documentElement.dir = pathLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = pathLang;
    localStorage.setItem("i18nextLng", pathLang);
  }
};

// تهيئة اللغة قبل تحميل التطبيق
initializeLanguageFromURL();

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

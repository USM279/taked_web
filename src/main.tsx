import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";
import "./index.css";
import { initializeLanguage, handleRootLanguagePaths } from "./lib/language";
import { Analytics } from "@vercel/analytics/react";

// تهيئة اللغة قبل تحميل التطبيق
initializeLanguage();

// معالجة المسارات الرئيسية للغة
handleRootLanguagePaths();

createRoot(document.getElementById("root")!).render(<App />);

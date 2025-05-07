import { createRoot } from "react-dom/client";
import App from "./App";
import i18n from './i18n';
import "./index.css";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")!).render(<App />);
i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  });
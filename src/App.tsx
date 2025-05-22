import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { RouteHandler } from "./components/RouteHandler";
import { Analytics } from "@vercel/analytics/react";
import { Chatbot } from "@/components/Chatbot";
import { getCurrentLanguage, handleRootLanguagePaths } from "./lib/language";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // الحصول على اللغة الحالية
  const defaultLanguage = getCurrentLanguage();

  // تهيئة اللغة عند تحميل التطبيق
  useEffect(() => {
    // تعيين اتجاه الصفحة بناءً على اللغة
    document.documentElement.dir = defaultLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = defaultLanguage;

    // معالجة المسارات الرئيسية للغة
    handleRootLanguagePaths();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteHandler />
          <Routes>
  <Route path="/" element={<Navigate to="/ar" replace />} />
  <Route path="/ar/*" element={<Index />} />
  <Route path="/en/*" element={<Index />} />
  <Route path="*" element={<NotFound />} />
</Routes>
        </BrowserRouter>
        <SpeedInsights />
        <Analytics />
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

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

const queryClient = new QueryClient();

const App = () => {
  // الحصول على اللغة المحفوظة أو استخدام العربية كلغة افتراضية
  const savedLanguage = localStorage.getItem("i18nextLng");
  const defaultLanguage =
    savedLanguage === "en" || savedLanguage === "ar" ? savedLanguage : "ar";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteHandler />
          <Routes>
            {/* توجيه المستخدم إلى المسار الصحيح مع اللغة المحفوظة */}
            <Route
              path="/"
              element={<Navigate to={`/${defaultLanguage}`} replace />}
            />

            {/* مسارات اللغة العربية */}
            <Route path="/ar" element={<Index />} />
            <Route path="/ar/*" element={<Index />} />

            {/* مسارات اللغة الإنجليزية */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/*" element={<Index />} />

            {/* مسار غير موجود */}
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

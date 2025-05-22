import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import About from "./pages/About"; // Commented out if not present
// import Contact from "./pages/Contact"; // Commented out if not present
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Chatbot } from "@/components/Chatbot";
import { getCurrentLanguage } from "./lib/language";
import { LanguageLayout } from "./components/LanguageLayout";

const queryClient = new QueryClient();

const App = () => {
  const defaultLanguage = getCurrentLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${defaultLanguage}`} replace />}
            />
            <Route path=":lng" element={<LanguageLayout />}>
              <Route index element={<Index />} />
              {/* Add other pages here, for example: */}
              {/* <Route path="about" element={<About />} /> */}
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
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

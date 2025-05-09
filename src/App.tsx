import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { LanguageHashHandler } from "./components/LanguageHashHandler";
import { Analytics } from "@vercel/analytics/react";
import { Chatbot } from "@/components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageHashHandler />
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

export default App;

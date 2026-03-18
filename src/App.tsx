import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { analytics } from "./lib/analytics";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { ArPage } from "./pages/ArPage";
import { EnPage } from "./pages/EnPage";
import { ArAboutPage } from "./pages/ArAboutPage";
import { ArServicesPage } from "./pages/ArServicesPage";
import { ArContactPage } from "./pages/ArContactPage";
import { EnAboutPage } from "./pages/EnAboutPage";
import { EnServicesPage } from "./pages/EnServicesPage";
import { EnContactPage } from "./pages/EnContactPage";
import { ArBusinessSetupDubaiPage } from "./pages/ArBusinessSetupDubaiPage";
import { ArFreeZoneCompanySetupPage } from "./pages/ArFreeZoneCompanySetupPage";
import { ArTradeLicenseDubaiPage } from "./pages/ArTradeLicenseDubaiPage";
import { ArInvestorVisaUaePage } from "./pages/ArInvestorVisaUaePage";
import { EnBusinessSetupDubaiPage } from "./pages/EnBusinessSetupDubaiPage";
import { EnFreeZoneCompanySetupPage } from "./pages/EnFreeZoneCompanySetupPage";
import { EnTradeLicenseDubaiPage } from "./pages/EnTradeLicenseDubaiPage";
import { EnInvestorVisaUaePage } from "./pages/EnInvestorVisaUaePage";
import NotFound from "./pages/NotFound";

// Blog pages
import { ArBlogPage } from "./pages/ArBlog";
import { EnBlogPage } from "./pages/EnBlog";
import { ArBlogPostPage } from "./pages/ArBlogPost";
import { EnBlogPostPage } from "./pages/EnBlogPost";

// Admin pages
import { AdminLogin } from "./pages/admin/Login";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminSubmissions } from "./pages/admin/Submissions";
import { AdminBlogList } from "./pages/admin/BlogList";
import { AdminBlogEditor } from "./pages/admin/BlogEditor";

// ✅ Enhanced Page tracking component
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view using our analytics utility
    analytics.trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
}

function LeadTracker() {
  const location = useLocation();

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        analytics.trackLead("phone", {
          lead_source: "anchor_click",
          page_path: location.pathname,
          destination: href,
        });
      } else if (href.includes("wa.me") || href.toLowerCase().includes("whatsapp")) {
        analytics.trackLead("whatsapp", {
          lead_source: "anchor_click",
          page_path: location.pathname,
          destination: href,
        });
      } else if (href.startsWith("mailto:")) {
        analytics.trackLead("email", {
          lead_source: "anchor_click",
          page_path: location.pathname,
          destination: href,
        });
      }
    };

    const handleFormSubmit = (event: Event) => {
      const target = event.target as HTMLFormElement | null;
      if (!target) {
        return;
      }

      analytics.trackLead("form", {
        lead_source: "form_submit",
        page_path: location.pathname,
        form_id: target.id || "unknown",
      });
    };

    document.addEventListener("click", handleDocumentClick, true);
    document.addEventListener("submit", handleFormSubmit, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      document.removeEventListener("submit", handleFormSubmit, true);
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <PageTracker />
        <LeadTracker />
        <Routes>
          <Route path="/" element={<Navigate to="/ar" replace />} />

          {/* Arabic routes */}
          <Route path="/ar" element={<ArPage />} />
          <Route path="/ar/about-us" element={<ArAboutPage />} />
          <Route path="/ar/services" element={<ArServicesPage />} />
          <Route path="/ar/contact-us" element={<ArContactPage />} />
          <Route path="/ar/business-setup-dubai" element={<ArBusinessSetupDubaiPage />} />
          <Route path="/ar/free-zone-company-setup" element={<ArFreeZoneCompanySetupPage />} />
          <Route path="/ar/trade-license-dubai" element={<ArTradeLicenseDubaiPage />} />
          <Route path="/ar/investor-visa-uae" element={<ArInvestorVisaUaePage />} />
          <Route path="/ar/blog" element={<ArBlogPage />} />
          <Route path="/ar/blog/:slug" element={<ArBlogPostPage />} />

          {/* English routes */}
          <Route path="/en" element={<EnPage />} />
          <Route path="/en/about-us" element={<EnAboutPage />} />
          <Route path="/en/services" element={<EnServicesPage />} />
          <Route path="/en/contact-us" element={<EnContactPage />} />
          <Route path="/en/business-setup-dubai" element={<EnBusinessSetupDubaiPage />} />
          <Route path="/en/free-zone-company-setup" element={<EnFreeZoneCompanySetupPage />} />
          <Route path="/en/trade-license-dubai" element={<EnTradeLicenseDubaiPage />} />
          <Route path="/en/investor-visa-uae" element={<EnInvestorVisaUaePage />} />
          <Route path="/en/blog" element={<EnBlogPage />} />
          <Route path="/en/blog/:slug" element={<EnBlogPostPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
          />
          <Route
            path="/admin/submissions"
            element={<ProtectedRoute><AdminSubmissions /></ProtectedRoute>}
          />
          <Route
            path="/admin/blog"
            element={<ProtectedRoute><AdminBlogList /></ProtectedRoute>}
          />
          <Route
            path="/admin/blog/new"
            element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>}
          />
          <Route
            path="/admin/blog/:id"
            element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

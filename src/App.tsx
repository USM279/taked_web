import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { analytics } from "./lib/analytics";

import { ArPage } from "./pages/ArPage";
import { EnPage } from "./pages/EnPage";
import { ArAboutPage } from "./pages/ArAboutPage";
import { ArServicesPage } from "./pages/ArServicesPage";
import { ArContactPage } from "./pages/ArContactPage";
import { EnAboutPage } from "./pages/EnAboutPage";
import { EnServicesPage } from "./pages/EnServicesPage";
import { EnContactPage } from "./pages/EnContactPage";
import NotFound from "./pages/NotFound";

// ✅ Enhanced Page tracking component
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view using our analytics utility
    analytics.trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTracker /> {/* ✅ Page view tracking */}
      <Routes>
        <Route path="/" element={<Navigate to="/ar" replace />} />

        {/* Arabic routes */}
        <Route path="/ar" element={<ArPage />} />
        <Route path="/ar/about-us" element={<ArAboutPage />} />
        <Route path="/ar/services" element={<ArServicesPage />} />
        <Route path="/ar/contact-us" element={<ArContactPage />} />

        {/* English routes */}
        <Route path="/en" element={<EnPage />} />
        <Route path="/en/about-us" element={<EnAboutPage />} />
        <Route path="/en/services" element={<EnServicesPage />} />
        <Route path="/en/contact-us" element={<EnContactPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

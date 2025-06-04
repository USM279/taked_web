import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ArPage } from "./pages/ArPage";
import { EnPage } from "./pages/EnPage";
import { ArAboutPage } from "./pages/ArAboutPage";
import { ArServicesPage } from "./pages/ArServicesPage";
import { ArContactPage } from "./pages/ArContactPage";
import { EnAboutPage } from "./pages/EnAboutPage";
import { EnServicesPage } from "./pages/EnServicesPage";
import { EnContactPage } from "./pages/EnContactPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to Arabic by default */}
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

        {/* 404 for any other route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

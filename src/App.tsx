import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ArPage } from "@/pages/ArPage";
import { EnPage } from "@/pages/EnPage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to Arabic by default */}
        <Route path="/" element={<Navigate to="/ar" replace />} />

        {/* Arabic page */}
        <Route path="/ar" element={<ArPage />} />

        {/* English page */}
        <Route path="/en" element={<EnPage />} />

        {/* 404 for any other route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

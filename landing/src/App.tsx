import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { cn } from "./lib/utils";
import { About } from "./pages/About";
import { Index } from "./pages/Index";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Roadmap } from "./pages/Roadmap";
import { TermsOfService } from "./pages/TermsOfService";

const DARK_PAGES = ["/roadmap", "/about", "/privacy-policy", "/terms-of-service"];

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDark = DARK_PAGES.includes(location.pathname);

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col justify-between font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200",
        isDark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
      )}
    >
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Unified Global Header with isDark prop */}
      <Header
        isDark={isDark}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* MAIN CONTENT LANDMARK */}
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Unified Global Footer with isDark prop */}
      <Footer isDark={isDark} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

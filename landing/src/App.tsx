import { useCallback, useEffect, useRef, useState } from "react";
import { AISpend } from "./components/AISpend";
import { AppPreview } from "./components/AppPreview";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { PricingSection } from "./components/PricingSection";
import { ValueProps } from "./components/ValueProps";

const twWords = ["Ship fast", "Build fast", "Vibe fast"].map((w) => `${w}.`);

function App() {
  const [openFaq, setOpenFaq] = useState<number>(-1);
  const [typedText, setTypedText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const twWordIndex = useRef(0);
  const twDeleting = useRef(false);

  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? -1 : i));
  }, []);

  useEffect(() => {
    const word = twWords[twWordIndex.current % twWords.length];

    let delay = 70;

    if (!twDeleting.current) {
      if (typedText.length < word.length) {
        delay = 70;
      } else {
        delay = 1500;
      }
    } else {
      if (typedText.length > 0) {
        delay = 40;
      } else {
        delay = 300;
      }
    }

    const timer = setTimeout(() => {
      if (!twDeleting.current) {
        if (typedText.length < word.length) {
          setTypedText(word.slice(0, typedText.length + 1));
        } else {
          twDeleting.current = true;
          setTypedText(word.slice(0, word.length - 1));
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          twDeleting.current = false;
          twWordIndex.current = (twWordIndex.current + 1) % twWords.length;
          const nextWord = twWords[twWordIndex.current % twWords.length];
          setTypedText(nextWord.slice(0, 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typedText]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* HEADER */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* MAIN CONTENT LANDMARK */}
      <main id="main-content">
        {/* HERO SECTION */}
        <Hero typedText={typedText} />

        {/* APP INTERACTIVE MOCKUP PREVIEW SECTION */}
        <AppPreview />

        {/* AI SPEND TELEMETRY & PIP SHOWCASE SECTION */}
        <AISpend />

        {/* VALUE PROPOSITIONS SECTION */}
        <ValueProps />

        {/* HOW IT WORKS SECTION */}
        <HowItWorks />

        {/* FAQ SECTION */}
        <FaqSection openFaq={openFaq} onToggleFaq={toggleFaq} />
      </main>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

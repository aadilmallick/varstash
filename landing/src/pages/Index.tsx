import { useCallback, useEffect, useRef, useState } from "react";
import { AISpend } from "../components/AISpend";
import { AppPreview } from "../components/AppPreview";
import { FaqSection } from "../components/FaqSection";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { PricingSection } from "../components/PricingSection";
import { ValueProps } from "../components/ValueProps";

const twWords = ["Ship fast", "Build fast", "Vibe fast"].map((w) => `${w}.`);

export function Index() {
  const [openFaq, setOpenFaq] = useState<number>(-1);
  const [typedText, setTypedText] = useState("");
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
    <>
      {/* HERO SECTION */}
      <Hero typedText={typedText} />

      {/* APP INTERACTIVE MOCKUP PREVIEW SECTION */}
      <AppPreview />

      {/* VALUE PROPOSITIONS SECTION */}
      <ValueProps />

      {/* AI SPEND TELEMETRY & PIP SHOWCASE SECTION */}
      <AISpend />

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* FAQ SECTION */}
      <FaqSection openFaq={openFaq} onToggleFaq={toggleFaq} />

      {/* PRICING SECTION */}
      <PricingSection />
    </>
  );
}

export default Index;

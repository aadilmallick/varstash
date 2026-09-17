import { memo } from "react";
import { constants } from "../constants";
import { showScrollPeek } from "../data";
import { HeroMockup } from "./HeroMockup";

interface HeroProps {
  typedText: string;
}

export const Hero = memo(function Hero({ typedText }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex flex-col items-center justify-start text-center pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-emerald-200/80 shadow-xs">
        <span>🔒</span> 100% Local-First &amp; Client-Side Encrypted
      </div>

      <h1 className="max-w-4xl text-2xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.14] tracking-tight mb-6 max-h-12 sm:max-h-36 overflow-y-visible capitalize">
        Never lose your <span className="text-orange-500">API keys</span> again.
        <br />
        Manage <span className="text-emerald-500">AI Spend</span> Like a pro.
        <br />
        <span className="text-blue-600 inline-block min-w-[2ch]">
          {typedText || "\u00A0"}
        </span>
        <span className="text-blue-500 animate-pulse font-mono relative bottom-2">
          |
        </span>
      </h1>

      <p className="max-w-2xl pt-12 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 mx-auto">
        Organize, share, and track live API spend across OpenAI, Fal.AI,
        Anthropic, and OpenRouter. Zero CLI required. Free forever for local
        storage.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
        <a
          href="#pricing"
          className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all transform active:scale-95 text-center cursor-pointer"
        >
          Start Managing Secrets for Free
        </a>
        <a
          href={constants.getVideoUrl()}
          className="w-full sm:w-auto bg-blue-50 text-blue-600 hover:bg-blue-100 px-6 py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2.5 transition-colors text-center cursor-pointer"
        >
          <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs">
            <span className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-blue-600 ml-0.5" />
          </span>
          Watch 60s Demo
        </a>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span>No credit card needed</span>
        <span className="hidden sm:inline">•</span>
        <span>Client-side E2E Encryption</span>
        <span className="hidden sm:inline">•</span>
        <span>No server data access</span>
      </p>

      {/* HERO MOCKUP / PEEK GRAPHIC */}
      {showScrollPeek && <HeroMockup />}
    </section>
  );
});

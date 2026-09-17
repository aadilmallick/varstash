import { memo } from "react";
import { Anthropic, Fal, OpenAI, OpenRouter } from "@lobehub/icons";
import { cn } from "../lib/utils";
import { AISpendCycleAnimation } from "./AIIcons";

export interface AIProvider {
  name: string;
  status: "supported" | "coming_soon";
  badgeText: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  bgLight: string;
  borderAccent: string;
  models: string[];
}

export const aiProviders: AIProvider[] = [
  {
    name: "OpenAI",
    status: "supported",
    badgeText: "Supported",
    description:
      "Direct balance telemetry and threshold limits across all GPT-4o, o1, and o3-mini workloads.",
    Icon: OpenAI,
    accentColor: "text-emerald-600",
    bgLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    borderAccent: "hover:border-emerald-300",
    models: ["gpt-4o", "o1-preview", "gpt-4o-mini"],
  },
  {
    name: "OpenRouter",
    status: "supported",
    badgeText: "Supported",
    description:
      "Unified credit balance telemetry and aggregate daily run-rate across 200+ multi-provider LLMs.",
    Icon: OpenRouter,
    accentColor: "text-indigo-600",
    bgLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
    borderAccent: "hover:border-indigo-300",
    models: ["deepseek-r1", "llama-3.3", "mistral-large"],
  },
  {
    name: "Fal.AI",
    status: "supported",
    badgeText: "Supported",
    description:
      "Realtime inference compute spend tracking for lightning-fast generative media & diffusion pipelines.",
    Icon: Fal,
    accentColor: "text-purple-600",
    bgLight: "bg-purple-50 text-purple-700 border-purple-200",
    borderAccent: "hover:border-purple-300",
    models: ["flux-pro", "fast-sdxl", "whisper"],
  },
  {
    name: "Anthropic",
    status: "coming_soon",
    badgeText: "Coming Soon",
    description:
      "Workspace credit tracking and automated warning limits for Claude 3.5 Sonnet & Haiku endpoints.",
    Icon: Anthropic,
    accentColor: "text-amber-600",
    bgLight: "bg-amber-50 text-amber-700 border-amber-200",
    borderAccent: "hover:border-amber-300",
    models: ["claude-3-5-sonnet", "claude-3-5-haiku"],
  },
];

export const AISpend = memo(function AISpend() {
  return (
    <section
      id="ai-spend"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/90 text-emerald-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 border border-slate-700/80 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Provider Telemetry
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Realtime AI Spend &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Budget Observability
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Stop checking five different billing tabs. VarStash connects via
            read-only balance adapters to stream your usage metrics live,
            complete with an always-on floating Picture-in-Picture (PIP) gauge.
          </p>
        </div>

        {/* Feature Spotlight: Orbit Animation + PIP Window Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column: AISpendCycleAnimation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-800/40 rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl relative">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Multi-Provider Telemetry Cycle
            </div>
            <AISpendCycleAnimation />
            <p className="text-xs text-slate-400 text-center max-w-xs mt-2">
              Client-side read-only adapters poll your active balance metrics
              directly from provider endpoints with zero server intermediaries.
            </p>
          </div>

          {/* Right Column: Picture-in-Picture (PIP) Floating Window Feature */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-gradient-to-br from-slate-800/90 to-slate-850 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20 w-fit mb-4">
              <span>🖥️</span> PIP FLOATING WINDOW
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Always-On Desktop Picture-in-Picture
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Pop out a compact, persistent floating window that stays on top
              of your workspace while coding in Cursor, VS Code, or terminal.
              Maintain continuous realtime observability over your API burn
              rate without ever breaking flow.
            </p>

            {/* PIP Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl p-3.5 flex items-start gap-3">
                <span className="text-emerald-400 text-lg">⚡</span>
                <div>
                  <div className="text-xs font-bold text-white">
                    Auto-Refreshes Every Minute
                  </div>
                  <div className="text-[11px] text-slate-400">
                    60-second telemetry polling ensures data is always current.
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl p-3.5 flex items-start gap-3">
                <span className="text-orange-400 text-lg">🛡️</span>
                <div>
                  <div className="text-xs font-bold text-white">
                    Spending Cap Alarms
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Get visual &amp; audio alerts when limits exceed thresholds.
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated PIP Window Mockup */}
            <div className="bg-slate-950 border border-slate-700/90 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-slate-200">
                    VarStash Mini PIP
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    Refreshes: 60s
                  </span>
                  <span className="text-xs text-slate-500">↗</span>
                </div>
              </div>

              <div className="p-4 space-y-3 font-sans">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      OpenAI (GPT-4o)
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">
                      $142.50 / $200
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[71%] h-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      OpenRouter Credit
                    </span>
                    <span className="font-mono text-indigo-400 font-bold">
                      $58.00 / $150
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[39%] h-full bg-gradient-to-r from-indigo-500 to-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic AI Providers Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Supported Providers &amp; Telemetry Coverage
            </h3>
            <span className="text-xs font-mono text-slate-400">
              4 Model Suites • Zero-Configuration Handshakes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiProviders.map((provider) => (
              <div
                key={provider.name}
                className={cn(
                  "bg-slate-800/70 border border-slate-700/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
                  provider.borderAccent
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center p-2 shadow-inner">
                      <provider.Icon size={24} className={provider.accentColor} />
                    </div>
                    <span
                      className={cn(
                        "text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border",
                        provider.bgLight
                      )}
                    >
                      {provider.badgeText}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {provider.name}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {provider.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Sample Endpoints
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {provider.models.map((m) => (
                      <span
                        key={m}
                        className="text-[10.5px] font-mono bg-slate-900/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

import { memo } from "react";

export const HeroMockup = memo(function HeroMockup() {
  return (
    <div className="mt-10 sm:mt-12 w-full max-w-4xl mx-auto p-2">
      <div className="relative w-[580px] sm:w-[640px] h-[360px] sm:h-[420px] mx-auto flex-none transition-transform origin-top scale-75 md:scale-100">
        {/* Decorative Tilt Cards */}
        <div className="absolute -top-4 -right-4 w-64 h-72 rounded-3xl bg-gradient-to-br from-orange-100 to-blue-100 rotate-6 shadow-xl border border-white/60 pointer-events-none" />
        <div className="absolute bottom-4 -left-2 w-52 h-60 rounded-2xl bg-emerald-100 -rotate-6 shadow-lg border border-emerald-200/50 pointer-events-none" />

        {/* Main Card Mockup */}
        <div className="absolute top-10 left-8 sm:left-14 w-[480px] sm:w-[520px] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-left">
          <div className="h-9 bg-slate-50 border-b border-slate-200 flex items-center gap-2 px-4">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex h-44">
            <div className="w-36 sm:w-40 bg-slate-50 border-r border-slate-200 p-3 sm:p-4 text-xs">
              <div className="font-bold text-slate-900 mb-3 truncate">
                Future YC company
              </div>
              <div className="bg-blue-50 text-blue-600 font-semibold px-2.5 py-1 rounded-md mb-1.5">
                AI keys
              </div>
              <div className="text-slate-500 px-2.5 py-1">frontend</div>
              <div className="text-slate-500 px-2.5 py-1">backend</div>
            </div>
            <div className="flex-1 p-3.5 flex flex-col gap-2.5">
              <div className="bg-white border border-slate-200 rounded-lg p-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 truncate">
                    GEMINI_API_KEY
                  </span>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    google
                  </span>
                </div>
                <div className="font-mono text-[11px] text-slate-400 mt-1">
                  AI••••••••••3fA2
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                  <span>OpenAI Spend</span>
                  <span className="font-bold text-slate-900">
                    $142.50 / $200
                  </span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[71%] h-full bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Banner */}
        <div className="absolute -top-1 left-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/25 -rotate-2 whitespace-nowrap z-10">
          <span className="flex items-center gap-0.5">
            <span className="w-0.5 h-2.5 bg-white/90 rounded-xs" />
            <span className="w-0.5 h-4 bg-white/90 rounded-xs" />
            <span className="w-0.5 h-2 bg-white/90 rounded-xs" />
          </span>
          Local, Free, Easy, Forever.
        </div>
      </div>
    </div>
  );
});

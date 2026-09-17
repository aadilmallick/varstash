import { memo, useEffect, useState } from "react";
import { steps } from "../data";
import { cn } from "../lib/utils";
import { AISpendCycleAnimation } from "./AIIcons";

export const HowItWorks = memo(function HowItWorks() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0: Step 1 reached (pause 2s, ping on step 1)
    // 1: Bar 1 creep from Step 1 to Step 2 (3s)
    // 2: Step 2 reached (pause 2s, ping on step 2)
    // 3: Bar 2 creep from Step 2 to Step 3 (3s)
    // 4: Step 3 reached (pause 2s, ping on step 3)
    // 5: Complete pause delay before repeating loop (5s)
    const durations = [2000, 3000, 2000, 3000, 2000, 5000];

    const timer = setTimeout(() => {
      setPhase((prev) => (prev + 1) % durations.length);
    }, durations[phase]);

    return () => clearTimeout(timer);
  }, [phase]);

  // Step active states
  const isStep1Active = phase >= 0;
  const isStep2Active = phase >= 2;
  const isStep3Active = phase >= 4;

  // Temporary animate-ping states for circle reached
  const isPinging1 = phase === 0;
  const isPinging2 = phase === 2;
  const isPinging3 = phase === 4;

  // Bar progress states (3s creep each, instant reset on loop)
  const bar1Filled = phase >= 1;
  const bar1Animating = phase === 1;
  const bar2Filled = phase >= 3;
  const bar2Animating = phase === 3;

  const stepConfigs = [
    {
      isActive: isStep1Active,
      isPinging: isPinging1,
      activeTextColor: "text-blue-500",
      activeCircleBg:
        "bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-4 ring-blue-500/20",
      pingBg: "bg-blue-500",
    },
    {
      isActive: isStep2Active,
      isPinging: isPinging2,
      activeTextColor: "text-emerald-500",
      activeCircleBg:
        "bg-emerald-600 text-white shadow-md shadow-emerald-500/30 ring-4 ring-emerald-500/20",
      pingBg: "bg-emerald-500",
    },
    {
      isActive: isStep3Active,
      isPinging: isPinging3,
      activeTextColor: "text-orange-500",
      activeCircleBg:
        "bg-orange-500 text-white shadow-md shadow-orange-500/30 ring-4 ring-orange-500/20",
      pingBg: "bg-orange-500",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center mb-14 tracking-tight">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto relative">
        {/* Background Track */}
        <div className="hidden md:block absolute top-5 left-[16.666%] right-[16.666%] h-0.5 bg-slate-200 z-0" />

        {/* Timeline Bar 1: Step 1 -> Step 2 (Blue fill creep over 3s) */}
        <div className="hidden md:block absolute top-5 left-[16.666%] w-[33.333%] h-0.5 overflow-hidden z-0">
          <div
            className={cn(
              "h-full bg-blue-500 transition-all ease-linear",
              bar1Filled ? "w-full" : "w-0",
            )}
            style={{
              transitionDuration: bar1Animating ? "3000ms" : "0ms",
            }}
          />
        </div>

        {/* Timeline Bar 2: Step 2 -> Step 3 (Green/Emerald fill creep over 3s) */}
        <div className="hidden md:block absolute top-5 left-[50%] w-[33.333%] h-0.5 overflow-hidden z-0">
          <div
            className={cn(
              "h-full bg-emerald-500 transition-all ease-linear",
              bar2Filled ? "w-full" : "w-0",
            )}
            style={{
              transitionDuration: bar2Animating ? "3000ms" : "0ms",
            }}
          />
        </div>

        {/* Steps List */}
        {steps.map((step, idx) => {
          const config = stepConfigs[idx];

          return (
            <div
              key={idx}
              className="text-center relative z-10 flex flex-col items-center"
            >
              {/* Step Circle with temporary animate-ping */}
              <div className="relative mb-5">
                {config?.isPinging && (
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full animate-ping opacity-75 pointer-events-none",
                      config.pingBg,
                    )}
                  />
                )}
                <div
                  className={cn(
                    "relative w-10 h-10 rounded-full font-bold text-base flex items-center justify-center shadow-sm transition-all duration-500",
                    config?.isActive
                      ? config.activeCircleBg
                      : "bg-slate-900 text-white",
                  )}
                >
                  {step.num}
                </div>
              </div>

              {/* Step Title */}
              <h3
                className={cn(
                  "text-lg font-bold mb-2 transition-colors duration-500",
                  config?.isActive ? config.activeTextColor : "text-slate-900",
                )}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                {step.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

import { memo } from "react";
import { steps } from "../data";

export const HowItWorks = memo(function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center mb-14 tracking-tight">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto relative">
        <div className="hidden md:block absolute top-5 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0" />
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="text-center relative z-10 flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-base flex items-center justify-center mb-5 shadow-sm">
              {step.num}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              {step.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

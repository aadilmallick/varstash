import { memo } from "react";
import { faqData } from "../data";

interface FaqSectionProps {
  openFaq: number;
  onToggleFaq: (index: number) => void;
}

export const FaqSection = memo(function FaqSection({
  openFaq,
  onToggleFaq,
}: FaqSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqData.map((item, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs"
            >
              <button
                type="button"
                id={`faq-btn-${idx}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => onToggleFaq(idx)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-900 hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-base sm:text-lg">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`text-xl text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⌄
                </span>
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                >
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});

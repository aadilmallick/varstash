import { memo, Suspense, useState } from "react";
import { ClerkProvider, PricingTable } from "../clerk/ClerkComponents";
import { constants } from "../constants";
import { freeFeatures, paymentConfig, proFeatures } from "../data";
import { cn } from "../lib/utils";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const CustomPricingTable = memo(function CustomPricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = paymentConfig.proMonthlyCost;
  const yearlyMonthlyEquivalent = (paymentConfig.proYearlyCost / 12).toFixed(2);

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[550px] h-[320px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[280px] bg-gradient-to-t from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/90 text-orange-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 border border-slate-700/80 shadow-inner">
            <span>💎</span> Transparent &amp; Flexible
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">
              Honest
            </span>{" "}
            Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Manage unlimited secrets locally for free. Upgrade to Pro when you
            need live multi-provider spend telemetry, budget caps, and secure
            handoffs.
          </p>

          {/* Billing Interval Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/80 shadow-lg">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                !isYearly
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer",
                isYearly
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white",
              )}
            >
              <span>Annual</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                SAVE 30%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Free Tier */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/70 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-extrabold text-white">
                  Free Forever
                </span>
                <span className="text-xs font-mono font-bold bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full border border-slate-600/50">
                  Local-First
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  $0
                </span>
                <span className="text-sm font-medium text-slate-400">
                  /forever
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Full visual management and IndexedDB encryption on your machine.
                Zero server tracking.
              </p>

              <div className="space-y-3.5 mb-8">
                {freeFeatures.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-500/30">
                      ✓
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={constants.getUrl()}
              className="w-full text-center border border-slate-600 hover:border-slate-400 bg-slate-800/80 hover:bg-slate-800 text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm block cursor-pointer"
            >
              Start Free Forever
            </a>
          </div>

          {/* Pro Tier (Featured) */}
          <div className="relative bg-gradient-to-b from-slate-800/95 via-slate-800/90 to-slate-850 border-2 border-orange-500/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-orange-500/15 hover:border-orange-400 transition-all duration-300 group">
            {/* Ambient Card Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none" />

            {/* Floating Popular Badge */}
            <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <span>🔥</span> MOST POPULAR
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-xl font-extrabold text-white">
                  Pro Telemetry
                </span>
                <span className="text-xs font-mono font-bold bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full border border-orange-500/40">
                  Full Suite
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  ${isYearly ? yearlyMonthlyEquivalent : monthlyPrice}
                </span>
                <span className="text-sm font-medium text-slate-400">/mo</span>
              </div>

              <div className="text-[11px] font-mono text-emerald-400 mb-4">
                {isYearly
                  ? `Billed annually ($${paymentConfig.proYearlyCost}/yr)`
                  : "Billed monthly, cancel anytime"}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Designed for active AI engineers needing live multi-provider
                spend dashboards and budget alarms.
              </p>

              <div className="space-y-3.5 mb-8">
                {proFeatures.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-100 font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold shrink-0 border border-orange-500/30">
                      ✓
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={constants.getUrl()}
              className="w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 rounded-xl text-sm font-extrabold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all block cursor-pointer"
            >
              Start 14-Day Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export function ClerkPricingTable() {
  if (!clerkPublishableKey) {
    return null;
  }

  return (
    <section
      id="clerk-pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 text-white border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100/90 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-slate-300">
            <span>⚡</span> Clerk Self-Service Portal
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Manage Subscription &amp; Billing
          </h2>
        </div>

        <div className="p-1 clerk-pricing-snazzy">
          <Suspense
            fallback={
              <div className="text-center py-12 text-slate-400 font-mono text-sm flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                Loading checkout tiers...
              </div>
            }
          >
            <ClerkProvider publishableKey={clerkPublishableKey}>
              <PricingTable
                newSubscriptionRedirectUrl={constants.getUrl()}
              />
            </ClerkProvider>
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <>
      <CustomPricingTable />
      <ClerkPricingTable />
    </>
  );
}

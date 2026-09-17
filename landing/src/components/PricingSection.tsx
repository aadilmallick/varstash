import { memo, Suspense } from "react";
import { ClerkProvider, PricingTable } from "../clerk/ClerkComponents";
import { constants } from "../constants";
import {
  featuredPlan,
  freeFeatures,
  paymentConfig,
  proFeatures,
} from "../data";

const isProFeatured = featuredPlan === "pro";
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const CustomPricingTable = memo(function CustomPricingTable() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center mb-14 tracking-tight">
        Simple, <span className="text-emerald-600">Honest</span> Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Free Tier */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
          <div>
            <div className="text-xl font-bold text-slate-900 mb-2">Free</div>
            <div className="text-4xl font-extrabold text-slate-900 mb-6">
              $0
              <span className="text-base font-normal text-slate-400">/mo</span>
            </div>
            <div className="space-y-3 mb-8">
              {freeFeatures.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tier */}
        <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-lg relative">
          {isProFeatured && (
            <div className="absolute -top-3.5 left-8 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-orange-200">
              MOST POPULAR
            </div>
          )}
          <div>
            <div className="text-xl font-bold text-slate-900 mb-2">Pro</div>
            <div className="text-4xl font-extrabold text-slate-900 mb-6">
              ${paymentConfig.proMonthlyCost}
              <span className="text-base font-normal text-slate-400">/mo</span>
            </div>
            <div className="space-y-3 mb-8">
              {proFeatures.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export const ClerkPricingTable = memo(function ClerkPricingTable() {
  if (!clerkPublishableKey) {
    return null;
  }

  return (
    <section
      id="clerk-pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center mb-14 tracking-tight">
        <span className="text-orange-500">Start Now</span>
      </h2>
      <div className="max-w-4xl mx-auto p-1">
        <Suspense
          fallback={
            <div className="text-center py-8 text-slate-500 font-medium">
              Loading pricing plans...
            </div>
          }
        >
          <ClerkProvider publishableKey={clerkPublishableKey}>
            <PricingTable
              appearance={{
                elements: {
                  pricingTableCard: {
                    borderWidth: 2,
                    borderRadius: "1.5rem",
                    borderColor: "#e5e7eb",
                  },
                  pricingTableCardFeatured: {
                    borderColor: "#f97316",
                  },
                },
                variables: {
                  colorPrimary: "#ff9900",
                  colorBackground: "#ffffff",
                  colorBorder: "#e5e7eb",
                },
              }}
              newSubscriptionRedirectUrl={constants.getUrl()}
            />
          </ClerkProvider>
        </Suspense>
      </div>
    </section>
  );
});

export const PricingSection = memo(function PricingSection() {
  return (
    <>
      <CustomPricingTable />
      <ClerkPricingTable />
    </>
  );
});

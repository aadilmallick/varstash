import { memo } from "react";
import { Link } from "react-router-dom";
import { constants } from "../constants";

export const TermsOfService = memo(function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: September 16, 2026 • Effective Date: September 16, 2026
          </p>
        </div>

        {/* Highlight box */}
        <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 mb-10">
          <h2 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">
            Key Takeaway for Developers
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {constants.appName} is an encrypted, local-first developer productivity application. Because we operate on a <strong>zero-knowledge architecture</strong>, we cannot decrypt, recover, or reset lost local master passwords or lost browser storage. You retain complete ownership and responsibility for your credentials.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using {constants.appName}, our hosted web applications, APIs, or related software tools (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Open Source License & Intellectual Property</h2>
            <p>
              The client-side source code of {constants.appName} is made available under the <strong>MIT License</strong>. You are free to inspect, fork, modify, and self-host the open-source repository according to the terms of that license.
            </p>
            <p>
              All trademarks, logos, brand names, and hosted infrastructure services remain the exclusive intellectual property of {constants.appName}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. User Responsibilities & Zero-Knowledge Architecture</h2>
            <p>When using {constants.appName}, you acknowledge and agree that:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>Password Responsibility:</strong> If you secure your vault with a local password or passphrase, we have no mechanism to recover it. Losing your encryption secret means your local data cannot be restored.</li>
              <li><strong>Device Security:</strong> You are responsible for maintaining the physical security of your workstations, browsers, and operating system credentials.</li>
              <li><strong>Lawful Use:</strong> You agree not to use the Service to store malicious code, distribute stolen credentials, or violate terms of third-party API providers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Third-Party Spend Monitoring & API Telemetry</h2>
            <p>
              {constants.appName} provides spend telemetry widgets that interact with third-party service providers (including but not limited to OpenAI, Anthropic, and OpenRouter).
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>Spend queries reflect data reported directly by provider billing APIs and may be subject to vendor reporting latencies or estimation differences.</li>
              <li>{constants.appName} is not responsible for any billing discrepancies, overages, rate limits, or charges incurred on your third-party provider accounts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Subscriptions, Payments & Cancellations</h2>
            <p>
              Certain advanced capabilities (such as multi-device sync and automated magic-link handoffs) may require a paid Pro subscription.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>Billing Cycle:</strong> Subscriptions are billed in advance on a recurring monthly or annual basis via Stripe / Clerk.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account portal. Cancellation takes effect at the conclusion of your current billing period.</li>
              <li><strong>Refunds:</strong> Unless required by applicable law, payments are non-refundable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Disclaimer of Warranties</h2>
            <p className="uppercase text-xs sm:text-sm text-slate-400 bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 leading-relaxed">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR IMMUNE TO DATA LOSS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL {constants.appName.toUpperCase()} OR ITS CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, SECRETS, OR CLOUD SERVICE OVERAGE EXPENSES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Modifications to Terms</h2>
            <p>
              We reserve the right to revise or update these Terms at any time. Changes will be reflected with an updated &quot;Last Updated&quot; timestamp at the top of this page. Continued use of the Service constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Contact Information</h2>
            <p>
              If you have questions regarding these Terms of Service, please reach out through our{" "}
              <a
                href={constants.getGithubUrl()}
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 underline hover:text-orange-300"
              >
                GitHub Community
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>© 2026 {constants.appName}. All rights reserved.</span>
          <Link to="/privacy-policy" className="text-orange-400 hover:underline">
            ← Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
});

export default TermsOfService;

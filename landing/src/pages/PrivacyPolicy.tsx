import { memo } from "react";
import { Link } from "react-router-dom";
import { constants } from "../constants";

export const PrivacyPolicy = memo(function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: September 16, 2026 • Effective Date: September 16, 2026
          </p>
        </div>

        {/* Highlights banner */}
        <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 mb-10">
          <div className="flex items-center gap-3 mb-2 text-emerald-400 font-bold text-base">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Our Zero-Knowledge Privacy Guarantee
          </div>
          <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
            {constants.appName} is engineered from the ground up as a <strong>local-first</strong> secret management application. Your API keys, tokens, and environment secrets are encrypted in your browser before storage. We do not transmit, read, sell, or log your secrets.
          </p>
        </div>

        {/* Body Content */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to {constants.appName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data and sensitive cryptographic keys. This Privacy Policy explains our data collection, handling, and protection practices when you access our web application, website, and related services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Secret Storage & Cryptography</h2>
            <p>
              All secrets, tokens, API keys, and environment variables entered into {constants.appName} are encrypted client-side within your browser using the standard Web Crypto API (SubtleCrypto) with AES-GCM 256-bit encryption.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>IndexedDB Storage:</strong> Encrypted ciphertexts are stored locally in your browser&apos;s IndexedDB database.</li>
              <li><strong>Zero Knowledge:</strong> We do not hold decryption keys. Even if our cloud servers were compromised, your local secrets remain inaccessible.</li>
              <li><strong>Local Destruction:</strong> Clearing your browser data or deleting secrets in the app permanently wipes them from local memory.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Information We Collect</h2>
            <p>We collect only the minimal data required to provide our application:</p>
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="font-semibold text-white mb-1">A. Account & Profile Information</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  When you sign up for an optional synced account or Pro subscription, authentication is processed by Clerk. We may store your email address, user identifier, and subscription status.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="font-semibold text-white mb-1">B. Billing & Payment Details</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  All payment transactions are handled through Stripe / Clerk. We never process, store, or receive your full credit card number or bank credentials.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="font-semibold text-white mb-1">C. AI Spend Telemetry Queries</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  When you connect spend monitoring (e.g. OpenAI, Anthropic, OpenRouter), balance requests are dispatched directly from your browser to the respective provider&apos;s read-only usage endpoints. We do not log, retain, or store these balance queries on our servers.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. How We Use Your Data</h2>
            <p>We use collected data solely to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
              <li>Authenticate your account and sync encrypted vaults across your authorized devices.</li>
              <li>Process subscription payments and manage billing tiers.</li>
              <li>Send critical security notifications, invoices, and service updates.</li>
              <li>Maintain the security, integrity, and operational health of our services.</li>
            </ul>
            <p className="font-semibold text-orange-400">
              We never sell, rent, monetize, or trade your personal data or secrets to advertisers or third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Cookies & Tracking</h2>
            <p>
              We do not employ cross-site tracking cookies or third-party ad pixels. We use standard browser local storage and essential session cookies strictly necessary to maintain authentication state and retain your UI theme preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Your Rights & Data Deletion</h2>
            <p>
              Under applicable regulations (including GDPR and CCPA), you have the right to request access to, export, or complete deletion of your account and any synced metadata. To exercise these rights, you may trigger account deletion in the settings or reach out directly to our support team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Contact Us</h2>
            <p>
              If you have any questions or security concerns regarding this Privacy Policy, please open an issue or discussion on our{" "}
              <a
                href={constants.getGithubUrl()}
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 underline hover:text-orange-300"
              >
                GitHub Repository
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>© 2026 {constants.appName}. All rights reserved.</span>
          <Link to="/terms-of-service" className="text-orange-400 hover:underline">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
});

export default PrivacyPolicy;

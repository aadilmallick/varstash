import { memo } from "react";
import { Link } from "react-router-dom";
import { constants } from "../constants";

export const About = memo(function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative ambient backdrop */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 -z-10 w-96 h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/70 text-xs font-semibold text-orange-400 mb-5 shadow-xs">
            Our Mission & Philosophy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            We built the secret manager we{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              wished existed
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            {constants.appName} was created to liberate developers from terminal bloat, unencrypted Slack paste leaks, and surprise $1,000 LLM bills.
          </p>
        </div>

        {/* The Origin Story */}
        <div className="rounded-3xl bg-slate-800/50 border border-slate-700/80 p-8 sm:p-12 mb-16 shadow-2xl backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Problem: Enterprise Bloat vs. Plaintext Chaos
          </h2>
          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              Developers building modern AI applications juggle dozens of high-privilege keys daily: OpenAI, Anthropic, OpenRouter, Pinecone, Supabase, Stripe, and AWS.
            </p>
            <p>
              Existing solutions force you into one of two extremes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                <div className="text-rose-400 font-bold text-base mb-2">❌ The Plaintext Habit</div>
                <p className="text-xs text-rose-200/80 leading-relaxed">
                  Pasting raw secrets into Notes.app, sharing prod keys in Slack DMs, or checking a forgotten <code className="text-white bg-rose-900/40 px-1 py-0.5 rounded">.env</code> file into a public repository.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/20">
                <div className="text-amber-400 font-bold text-base mb-2">❌ Enterprise Over-engineering</div>
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  Doppler, HashiCorp Vault, and Infisical. Built for 500-person DevOps departments with mandatory CLI daemons, team RBACs, and paid seat taxes that slow solo hackers and agile teams down.
                </p>
              </div>
            </div>
            <p>
              We wanted a third way: a fast, gorgeous visual tool that works in your browser instantly, encrypts everything locally with zero cloud trust requirements, and alerts you before your AI balance hits zero or burns through your card.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Our Four Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-lg hover:border-slate-600 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-lg mb-4 border border-orange-500/20">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local-First & Zero-Knowledge</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your keys belong on your workstation. Everything is encrypted client-side using Web Crypto AES-GCM 256-bit keys before touching browser storage. We cannot read your keys even if subpoenaed.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-lg hover:border-slate-600 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-500/20">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Cost & Spend Telemetry</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                In the era of agentic AI workflows, secrets aren&apos;t just authentication strings—they are direct meters tied to your bank account. Real-time spend tracking and limit thresholds are first-class citizens.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-lg hover:border-slate-600 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg mb-4 border border-blue-500/20">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero-Friction Workflow</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No CLI daemon requirement. Drag and drop a <code className="text-orange-400 bg-slate-900 px-1 py-0.5 rounded font-mono text-xs">.env</code> file, click copy, toggle masked values, and float a Picture-in-Picture window while coding.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-lg hover:border-slate-600 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-lg mb-4 border border-purple-500/20">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Open Source & Auditable</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Security software must be transparent. The core engine is open-source under the MIT license, allowing you to inspect every cryptographic routine or self-host completely air-gapped with Docker.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border border-slate-700 p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Ready to secure your development workflow?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
            Experience the peace of mind that comes with local-first encrypted vaults and real-time AI cost telemetry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={constants.getUrl()}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/20 transition-all"
            >
              Launch App Free
            </a>
            <Link
              to="/roadmap"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;

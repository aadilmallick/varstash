import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { constants } from "../constants";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: string;
  tag: string;
  tagColor: string;
  votes?: number;
}

interface RoadmapStage {
  status: "shipped" | "in-progress" | "planned" | "exploring";
  title: string;
  badge: string;
  badgeClass: string;
  barColor: string;
  items: RoadmapItem[];
}

const roadmapStages: RoadmapStage[] = [
  {
    status: "shipped",
    title: "Shipped & Live",
    badge: "Available Now",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    barColor: "bg-emerald-500",
    items: [
      {
        id: "s1",
        title: "Client-Side Zero-Knowledge Encryption",
        description: "AES-GCM 256-bit cryptography stored exclusively in your browser's IndexedDB. We never see your raw keys.",
        quarter: "Q1 2026",
        tag: "Security",
        tagColor: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
      },
      {
        id: "s2",
        title: "Live Spend Telemetry for OpenAI & OpenRouter",
        description: "Direct client-side quota & cost polling with threshold warnings. No middleman proxies.",
        quarter: "Q1 2026",
        tag: "AI Telemetry",
        tagColor: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300",
      },
      {
        id: "s3",
        title: "Picture-in-Picture (PiP) Floating Widget",
        description: "Compact document PiP window pinned over your IDE with live credit tallies updated every 60s.",
        quarter: "Q1 2026",
        tag: "Workflow",
        tagColor: "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300",
      },
      {
        id: "s4",
        title: "Frictionless Drag & Drop .env Importer",
        description: "Parse messy multi-line .env or .env.local files instantly with duplicate detection and folder sorting.",
        quarter: "Q1 2026",
        tag: "DX",
        tagColor: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
      },
    ],
  },
  {
    status: "in-progress",
    title: "In Active Development",
    badge: "Q2 2026",
    badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    barColor: "bg-blue-500",
    items: [
      {
        id: "p1",
        title: "Anthropic Claude Spend & Balance Adapter",
        description: "Direct consumption polling for Claude 3.5 Sonnet & Haiku API tokens and team rate-limits.",
        quarter: "Q2 2026",
        tag: "AI Telemetry",
        tagColor: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300",
      },
      {
        id: "p2",
        title: "TouchID & FaceID WebAuthn Vault Lock",
        description: "Hardware security enclave biometrics lock. Walk away from your desk knowing your screen is locked.",
        quarter: "Q2 2026",
        tag: "Hardware Auth",
        tagColor: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
      },
      {
        id: "p3",
        title: "One-Time Magic-Link Encrypted Handoffs",
        description: "Send .env bundles to contractors with burn-after-reading timers and email verification pin codes.",
        quarter: "Q2 2026",
        tag: "Sharing",
        tagColor: "bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300",
      },
      {
        id: "p4",
        title: "Secret Expiration & Health Watchdog",
        description: "Visual warning badges for expiring certificates, tokens, and test keys approaching credit limits.",
        quarter: "Q2 2026",
        tag: "Monitoring",
        tagColor: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
      },
    ],
  },
  {
    status: "planned",
    title: "Planned Next",
    badge: "Q3 2026",
    badgeClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    barColor: "bg-orange-500",
    items: [
      {
        id: "pl1",
        title: "Native Menu-Bar Companion (macOS & Windows)",
        description: "Quick-copy keys with a global hotkey (⌘+Shift+K) directly into your active terminal or Cursor.",
        quarter: "Q3 2026",
        tag: "Native App",
        tagColor: "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300",
      },
      {
        id: "pl2",
        title: "Zero-Setup Terminal CLI Tool",
        description: "Run `npx varstash run -- npm run dev` to automatically inject encrypted variables without writing to disk.",
        quarter: "Q3 2026",
        tag: "CLI",
        tagColor: "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
      },
      {
        id: "pl3",
        title: "Groq, Together AI, & Mistral Telemetry",
        description: "Broadening live spend telemetry across low-latency inference providers and open-weight clouds.",
        quarter: "Q3 2026",
        tag: "AI Telemetry",
        tagColor: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300",
      },
      {
        id: "pl4",
        title: "1-Click Doppler & 1Password Migrator",
        description: "Seamlessly import entire workspaces from Doppler, Infisical, or 1Password CSV exports in seconds.",
        quarter: "Q3 2026",
        tag: "Migration",
        tagColor: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
      },
    ],
  },
  {
    status: "exploring",
    title: "Future Exploration",
    badge: "Under Review",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    barColor: "bg-purple-500",
    items: [
      {
        id: "ex1",
        title: "E2E Encrypted Team Vaults",
        description: "Multi-seat zero-knowledge vaults with asymmetric public/private key derivation for dev agency teams.",
        quarter: "Future",
        tag: "Enterprise",
        tagColor: "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300",
      },
      {
        id: "ex2",
        title: "Pre-Commit Git Secret Blocker",
        description: "Husky & Git hook extensions to block accidental git commits containing active VarStash secrets.",
        quarter: "Future",
        tag: "Git Security",
        tagColor: "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300",
      },
      {
        id: "ex3",
        title: "Budget Webhook Notifications",
        description: "Instant push alerts to Slack or Telegram when daily AI token burn crosses 80% of budget.",
        quarter: "Future",
        tag: "Webhooks",
        tagColor: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
      },
    ],
  },
];

export const Roadmap = memo(function Roadmap() {
  const [filter, setFilter] = useState<string>("all");

  const filteredStages = roadmapStages.map((stage) => {
    if (filter === "all") return stage;
    return {
      ...stage,
      items: stage.items.filter(
        (item) => item.tag.toLowerCase() === filter.toLowerCase()
      ),
    };
  }).filter((stage) => stage.items.length > 0);

  const tags = ["all", "Security", "AI Telemetry", "Workflow", "DX", "Hardware Auth", "Sharing", "CLI"];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative ambient gradients */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-80 bg-gradient-to-tr from-orange-500/10 via-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-orange-400 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Public Product Roadmap
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Building the Future of <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Local-First Secret Management
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            See what we&apos;ve shipped, what we&apos;re actively coding, and where {constants.appName} is heading. We build transparently in public.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                filter === tag
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/50"
              }`}
            >
              {tag === "all" ? "All Features" : tag}
            </button>
          ))}
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredStages.map((stage) => (
            <div
              key={stage.status}
              className="flex flex-col rounded-2xl bg-slate-800/50 border border-slate-700/70 p-5 shadow-xl backdrop-blur-sm"
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700/60">
                <div>
                  <h2 className="font-bold text-base text-white">{stage.title}</h2>
                  <span className="text-xs text-slate-400">{stage.items.length} items</span>
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${stage.badgeClass}`}>
                  {stage.badge}
                </span>
              </div>

              {/* Items List */}
              <div className="flex-1 flex flex-col gap-3.5">
                {stage.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all hover:translate-y-[-2px] flex flex-col gap-2 group shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.tagColor}`}>
                        {item.tag}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.quarter}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-slate-100 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Suggest a Feature CTA */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/80 p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl font-bold text-white mb-2">Have a feature in mind?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We prioritize features based directly on developer feedback. Tell us what LLM provider, CLI workflow, or integration would supercharge your development stack.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={constants.getGithubUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-md transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Open GitHub Issue
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors"
            >
              Back to VarStash Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Roadmap;

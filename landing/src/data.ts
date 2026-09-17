import { constants } from "./constants";

export interface NavLink {
  label: string;
  href: string;
}

export interface ValueCard {
  tag: string;
  tagBgClass: string;
  title: string;
  copy: string;
}

export interface Step {
  num: number;
  title: string;
  copy: string;
}

export interface FaqItemData {
  q: string;
  a: string;
}

export const showScrollPeek = true;
export const featuredPlan = "pro";

export const paymentConfig = {
  proMonthlyCost: 5,
  proYearlyCost: 41.88,
};

export const navLinks: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
];

export const valueCards: ValueCard[] = [
  {
    tag: "COST",
    tagBgClass: "bg-orange-100 text-orange-800",
    title: "Live API Spend Dashboard",
    copy:
      "Stop living in fear of $1,000 surprise bills. Monitor live spend and spending caps across OpenAI, Anthropic, and OpenRouter in one unified view.",
  },
  {
    tag: "SECURITY",
    tagBgClass: "bg-emerald-100 text-emerald-800",
    title: "Zero Slack & Apple Notes Leaks",
    copy:
      "Stop pasting API keys in plain text. Share encrypted .env bundles with co-founders or non-technical clients via one-time magic links.",
  },
  {
    tag: "SIMPLICITY",
    tagBgClass: "bg-blue-100 text-blue-800",
    title: "No Terminal CLIs or RBAC Nightmares",
    copy:
      "Doppler and Infisical are overengineered for solo builders. Get instant drag-and-drop organization with local-first speed.",
  },
];

export const steps: Step[] = [
  {
    num: 1,
    title: "Store Locally",
    copy: "Paste keys into IndexedDB encrypted at rest in your browser memory.",
  },
  {
    num: 2,
    title: "Monitor Spend",
    copy:
      "Connect read-only spend adapters to track live costs and limit thresholds.",
  },
  {
    num: 3,
    title: "Handoff Safely",
    copy:
      "Export encrypted .env files with automated magic-link email verification.",
  },
];

export const freeFeatures: string[] = [
  "Unlimited key storage",
  "Local IndexedDB encryption",
  "Manual E2E encrypted handoffs",
  "TouchID passkey vault lock (Coming Soon)",
];

export const proFeatures: string[] = [
  "Everything in Free",
  "Real-time API spend monitoring (OpenAI, Anthropic, OpenRouter)",
  "Automated magic-link email handoffs",
  "Spending cap alerts",
];

export const faqData: FaqItemData[] = [
  {
    q: `How is ${constants.appName} different from Doppler or Infisical?`,
    a: `Doppler and Infisical are enterprise-grade secret managers engineered for DevOps teams with complex infrastructure, centralized RBAC policies, and terminal CLIs. ${constants.appName} is designed specifically for solo builders, AI engineers, and lean product teams who want an intuitive visual UI, local-first client-side encryption, and instant copy/paste without configuring cloud daemons or managing seat licenses.`,
  },
  {
    q: `Can ${constants.appName} read, log, or store my API keys on your servers?`,
    a: `Never. All secrets and environment variables are encrypted client-side in your browser using the standard Web Crypto API (AES-GCM 256-bit encryption) before being persisted to your browser's IndexedDB. Our servers operate on a zero-knowledge architecture—we never possess your decryption keys and have no ability to read your secrets.`,
  },
  {
    q: `How does live API spend tracking work without leaking my keys?`,
    a: `${constants.appName} securely polls provider billing and usage endpoints (such as OpenAI, Anthropic, and OpenRouter) directly from your client using authenticated read-only balance requests. Your API keys are kept in your local browser sandbox and never relayed through third-party proxy servers.`,
  },
  {
    q: `What export and import formats are supported?`,
    a: `You can import existing secrets by pasting raw key-value pairs or dragging and dropping your .env, .env.local, or JSON configuration files. Exporting is just as simple: generate ready-to-use .env files, formatted JSON payloads, or single-line shell export commands for your terminal with one click.`,
  },
  {
    q: `What is included in the Free plan versus the Pro plan?`,
    a: `The Free tier is free forever and includes unlimited local key storage, visual project profiles, folder categorization, and manual .env exports. The Pro tier (${paymentConfig.proMonthlyCost}/month) is designed for active AI developers needing live multi-provider spend dashboards, spending cap threshold notifications, TouchID / WebAuthn passkey vault protection, and automated magic-link email handoffs.`,
  },
  {
    q: `How does the TouchID / WebAuthn vault lock protect my workstation?`,
    a: `When enabled, ${constants.appName} interfaces with your operating system's hardware security enclave via standard WebAuthn. This requires biometric verification (Touch ID, Face ID, or Windows Hello) before decrypting your credentials, ensuring unauthorized individuals cannot inspect your keys even if your laptop is left unattended.`,
  },
  {
    q: `How can I safely hand off secrets to contractors or teammates?`,
    a: `Instead of pasting sensitive production keys into Slack, Discord, or plaintext email threads, ${constants.appName} enables secure handoffs. You can generate encrypted magic-link bundles protected with ephemeral verification tokens, ensuring only intended recipients can decrypt the environment payload.`,
  },
  {
    q: `Is ${constants.appName} open source and self-hostable?`,
    a: `Yes. The core application is open-source under the MIT license and can be inspected on GitHub. You can run it entirely offline as a local web application, or deploy it into your private cloud using Docker and our lightweight Express backend.`,
  },
];

import { role } from "@/lib/data";

export const positioningV4 = {
  eyebrow: `Data & AI Decision Systems · ${role}`,
  headline: "Turn messy data and AI into better growth decisions.",
  subhead:
    "I help Series A/B consumer businesses use data and AI to improve retention, customer intelligence and growth decisions.",
  operatorLine: "Strategy that gets built. Systems that get used.",
  primaryCta: "Book a fit call",
  secondaryCta: "See proof",
};

export const diagnosticV4 = {
  sectionLabel: "Sound familiar?",
  heading: "Six questions that expose the gap.",
  items: [
    "Which number is right?",
    "Who is about to lapse?",
    "Which AI idea should ship?",
    "Will anyone use what we build?",
    "Why does this answer take days?",
    "Who owns data and AI?",
  ],
};

export const decisionSystemsV4 = {
  sectionLabel: "My core expertise",
  heading: "I build decision systems, not dashboards.",
  subhead: "Signals become actions the business can repeat.",
  examples: [
    {
      label: "Retention",
      signal: "Lapse risk",
      action: "Right intervention",
    },
    {
      label: "Replenishment",
      signal: "Run out timing",
      action: "Useful nudge",
    },
    {
      label: "Personalization",
      signal: "Customer affinity",
      action: "Next experience",
    },
    {
      label: "AI priority",
      signal: "Value + readiness",
      action: "Build, wait or stop",
    },
  ],
  close: "Data explains what happened. Decision systems shape what happens next.",
};

export const proofV4 = {
  sectionLabel: "Selected proof",
  heading: "Built in production. Measured in outcomes.",
  cards: [
    {
      tag: "Retention",
      title: "Customer Retention Score",
      metric: "~60%",
      metricLabel: "test conversion lift",
      flowFrom: "Lapse risk",
      flowTo: "Daily retention action",
      href: "/case-studies/customer-retention-probability",
    },
    {
      tag: "Player intelligence",
      title: "Batters & Bowlers Tag",
      metric: "10M+",
      metricLabel: "players reached",
      flowFrom: "Player data",
      flowTo: "Identity product",
      href: "/case-studies/batters-bowlers-tag",
    },
    {
      tag: "Decision engine",
      title: "Adaptive Nudge Engine",
      metric: "1 action",
      metricLabel: "per customer per cycle",
      flowFrom: "Campaign overlap",
      flowTo: "Best next action",
      href: "/case-studies/adaptive-nudge-decision-engine",
    },
  ],
};

export const operatingModelV4 = {
  sectionLabel: "How I work",
  steps: [
    { n: "01", title: "Diagnose", short: "Find what matters" },
    { n: "02", title: "Prioritize", short: "Choose what comes first" },
    { n: "03", title: "Build", short: "Put the system live" },
    { n: "04", title: "Transfer", short: "Make the team owner" },
  ],
};

export const servicesV4 = {
  sectionLabel: "Ways to work together",
  heading: "Start small. Go deeper only when it earns it.",
  cards: [
    {
      step: "01 · Diagnose",
      title: "Data & AI Opportunity Audit",
      bestFor: "When the first move is unclear",
      outcome: "A ranked plan",
      meta: "2 to 4 weeks · fixed scope",
      pageHref: "/services/opportunity-audit",
      cta: "See the audit",
    },
    {
      step: "02 · Build",
      title: "Decision System Build",
      bestFor: "When the business decision is clear",
      outcome: "One live system",
      meta: "Fixed outcome · scope based timeline",
      pageHref: "/services/decision-system-build",
      cta: "See the build model",
    },
    {
      step: "03 · Operate",
      title: role,
      bestFor: "When senior ownership is missing",
      outcome: "Roadmap, systems and team transition",
      meta: "About 10 hrs per week · 3 month minimum",
      pageHref: "/services/fractional-head",
      cta: "See fractional leadership",
    },
  ],
};

export const aboutV4 = {
  sectionLabel: "Why me",
  heading: "From data work to decision ownership.",
  summary:
    "For 10+ years I have moved closer to the decisions that matter, from mission critical systems at ISRO to consumer data products at CricHeroes and retention systems at Supertails.",
  principle: "Build it. Transfer it. Leave the team stronger.",
};

// Add only attributable, approved quotes here. The homepage intentionally does
// not render invented social proof. Once real quotes are available, this is the
// insertion point for a testimonial section between proof and services.
export const testimonialsV4: Array<{
  quote: string;
  name: string;
  role: string;
  company: string;
}> = [];

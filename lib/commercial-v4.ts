import { role } from "@/lib/data";

export const positioningV4 = {
  eyebrow: `Data & AI Decision Systems · ${role}`,
  headline: "Turn messy data and AI into better growth decisions.",
  subhead:
    "I help Series A/B consumer, commerce, and marketplace startups build the decision systems behind retention, customer intelligence, and practical AI — from diagnosis to production.",
  operatorLine: "Senior enough to own the roadmap. Hands-on enough to build it.",
  primaryCta: "Book a fit call",
  secondaryCta: "See proof",
  fitSignals: [
    "Series A/B",
    "Consumer · commerce · marketplace",
    "Retention & growth",
    "No full-time Data/AI head yet",
  ],
};

export const decisionSystemsV4 = {
  sectionLabel: "My core expertise",
  heading: "I build decision systems, not more dashboards.",
  definition:
    "A decision system combines data, business rules, and AI/ML to repeatedly answer an important business question and trigger the next action.",
  examples: [
    {
      question: "Who is likely to lapse?",
      answer: "Score risk daily → choose the right retention action.",
    },
    {
      question: "When will a customer need to reorder?",
      answer: "Predict run-out timing → nudge when the message is useful.",
    },
    {
      question: "What does this customer care about?",
      answer: "Read behavioral affinity → personalize the next experience.",
    },
    {
      question: "Which AI idea deserves engineering time?",
      answer: "Rank value and readiness → build, wait, or kill the idea early.",
    },
  ],
  close:
    "The model is only one part. The value comes from connecting the signal to a decision the business can actually repeat.",
};

export const servicesV4 = {
  sectionLabel: "Ways to work together",
  heading: "Start with the smallest useful commitment.",
  lede:
    "Diagnose → Build → Operate. You do not need to know the engagement model before we speak; the problem should determine the scope.",
  cards: [
    {
      step: "01 · Diagnose",
      title: "Data & AI Opportunity Audit",
      bestFor: "You know data or AI is getting expensive and messy, but the first move is unclear.",
      outcome: "A ranked plan for what to fix, build, automate, or ignore.",
      meta: "2–4 weeks · fixed scope",
      pageHref: "/services/opportunity-audit",
      cta: "See the audit",
    },
    {
      step: "02 · Build",
      title: "Decision System Build",
      bestFor: "You already know the business decision that needs a better system behind it.",
      outcome: "One high-impact system designed, shipped, and handed over to your team.",
      meta: "Fixed outcome · timeline shaped to scope",
      pageHref: "/services/decision-system-build",
      cta: "See the build model",
    },
    {
      step: "03 · Operate",
      title: role,
      bestFor: "Data and AI now need senior ownership, but a full-time head is still too early.",
      outcome: "Executive ownership of the roadmap, systems, and team transition from inside the business.",
      meta: "~10 hrs/week · 3 months minimum",
      pageHref: "/services/fractional-head",
      cta: "See fractional leadership",
    },
  ],
};

export const aboutV4 = {
  sectionLabel: "Why me",
  heading: "I work between the business question and the system that answers it.",
  paragraphs: [
    "I started in mission-critical data operations at ISRO, moved through analytics consulting, and then spent years inside consumer startups building data and ML products tied to real operating decisions.",
    "At CricHeroes and Supertails, the work kept moving upstream: from models and dashboards to retention, customer intelligence, AI prioritization, roadmaps, and cross-team ownership.",
    "That is why I do not start with ‘Which model should we use?’ I start with ‘Which repeated decision is expensive, slow, or weak — and what would make it materially better?’",
  ],
  principle: "The goal is not to make your company dependent on me. It is to leave behind a system and a team that can run without me.",
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

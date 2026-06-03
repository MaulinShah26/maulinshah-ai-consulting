// All site content lives here so you can edit copy without touching components.

export const meta = {
  siteUrl: "https://maulinshah.vercel.app",
  siteName: "Maulin Shah, Fractional AI Lead",
  defaultTitle: "Maulin Shah · Fractional AI Lead",
  defaultDescription:
    "Fractional AI Lead for founder-led startups. I help you turn “we’ll figure out the data later” into something the team can act on, defend, and explain. The senior AI person you don’t have yet.",
  author: "Maulin Shah",
  location: "Ahmedabad, India",
};

export const social = {
  emailUser: "maulinshah1992",
  emailDomain: "gmail.com",
  linkedin: "https://www.linkedin.com/in/maulinshah92",
  calendly: "https://calendly.com/maulinshah1992/30min",
};

export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Fractional AI Lead",
  headlinePrefix: "For founders who’ve outgrown",
  headlineQuote: "“we’ll figure out the data later.”",
  subhead:
    "I help turn messy data and unclear AI priorities into decision systems your team can act on, defend, and measure.",
  primaryCta: { label: "Start a conversation", href: "#contact" },
  secondaryCta: { label: "See how I work", href: "#approach" },
};

export const experience = {
  label: "Built data & AI at",
  firms: [
    {
      name: "CricHeroes",
      url: "https://cricheroes.com",
      logo: "/logos/cricheroes.png",
    },
    {
      name: "Supertails",
      url: "https://supertails.com",
      logo: "/logos/supertails.jpg",
    },
  ],
  metrics: [
    { kind: "count" as const, value: 10, suffix: "+", label: "years across data and AI" },
    { kind: "count" as const, value: 5, suffix: "",  label: "industries worked across" },
    { kind: "arrow" as const, from: "0", to: "1", label: "data & AI functions built and managed at multiple startups" },
    { kind: "count" as const, value: 5, suffix: "+", label: "production systems shipped" },
  ],
};

export const situation = {
  sectionNumber: "01",
  sectionLabel: "The situation I see most",
  intro:
    "Most funded startups look similar from the outside. What actually decides who wins is one layer deeper.",

  surface: {
    title: "On the surface",
    subtitle: "what every founder is chasing",
    chips: [
      "Grow faster",
      "New markets",
      "New products",
      "Use AI well",
      "Steady growth",
      "The next raise",
    ],
  },

  depth: {
    title: "Underneath",
    subtitle: "the questions that actually decide it",
    chips: [
      "What is actually driving growth?",
      "Where is money leaking?",
      "Which decisions need better logic?",
      "What should AI take over?",
      "Which numbers can we trust?",
      "Do we know our customers well enough to grow?",
      "What was agreed to build but never got built?",
      "Will our current approach scale?",
    ],
  },

  splitCaption: "Same questions. Two very different outcomes.",

  outcomes: {
    missed: {
      badge: "If they get missed",
      chips: [
        "Dashboards",
        "AI demos",
        "Random experiments",
        "Disconnected teams",
        "Hiring that doesn’t help",
        "Growth no one can explain",
      ],
      punch: "Lots of work, not much progress.",
    },
    solved: {
      badge: "If they get solved",
      chips: [
        "Clear priorities",
        "Decisions you can repeat",
        "AI doing real work",
        "Money spent well",
        "Growth you can measure",
        "A clearer head",
      ],
      punch: "Real progress, real results.",
    },
  },

  // Core line is split into three parts so the middle phrase can be wrapped
  // in the accent highlight without HTML in the data file.
  coreBefore: "Funded startups don’t lack ambition. They lack the",
  coreHighlight: "operating logic",
  coreAfter: "that turns ambition into repeatable growth.",

};

export const approach = {
  sectionNumber: "02",
  sectionLabel: "How I work",
  steps: [
    {
      num: "01",
      title: "Diagnose",
      body: "Sit with you and your leadership. Understand the data, the team, what’s trusted. Surface the gaps between what you think the data is telling you and what it actually is.",
    },
    {
      num: "02",
      title: "Roadmap",
      body: "Define scope together. Write down what to fix, what to build, what to use AI for, what isn’t worth touching yet, what isn’t possible yet.",
    },
    {
      num: "03",
      title: "Operate",
      body: "Own the work end-to-end. Build the systems that actually deliver. Join the key calls. The team learns alongside and owns more of it over time.",
    },
  ],
};

export const engagements = {
  sectionNumber: "03",
  sectionLabel: "Engagement options",
  cards: [
    {
      quote: "I need a senior data and AI person on my team, but I can’t hire one yet.",
      title: "Fractional AI Lead",
      meta: "~10 hrs/week - 3 months minimum - Monthly Retainer",
      tagline: "A senior data and AI lead on your team, running the roadmap from inside.",
      walkaway: "a clear roadmap, working systems live, and a team that runs more of it on their own over time.",
    },
    {
      quote: "I want to know where my data and AI actually stand before going deeper.",
      title: "Strategic Audit",
      meta: "~10-12 hrs/week - 2-3 weeks - Fixed scope",
      tagline: "An honest check on your data and AI, with a written report at the end.",
      walkaway: "a written report on the 2–3 most useful things to do next, plus one 90-minute call with leadership.",
    },
    {
      quote: "I know what to build. I need someone senior to own the design and the build.",
      title: "Scoped Build",
      meta: "~15-25 hrs/week - Timeline shaped to scope",
      tagline: "I own one specific build from start to finish, until it’s live.",
      walkaway: "what you wanted, built and live. Or a full system, with your team trained to run it.",
    },
  ],
};

export const outcomes = {
  sectionNumber: "04",
  sectionLabel: "What changes for you",
  states: [
    {
      num: "01",
      title: "Diagnosis is honest",
      body: "You have a roadmap. The team knows what to fix first.",
    },
    {
      num: "02",
      title: "Decisions run on one set of numbers",
      body: "Leadership runs on a single source of truth.",
    },
    {
      num: "03",
      title: "Systems actually deliver",
      body: "Hours saved each week. You start asking better questions.",
    },
    {
      num: "04",
      title: "The team owns it now",
      body: "“We’ll figure it out later” isn’t said anymore.",
    },
    {
      num: "05",
      title: "You don’t need me anymore",
      body: "You can run this on your own. That’s the goal.",
    },
  ],
  condition:
    "How fast you reach each one depends on the data you start with, what your team can absorb, and how seriously you act on what we find. Six weeks for some companies. Six months for others. Both are normal.",
};

export type Metric = { value: string; label: string };

export type CorporateCard = {
  tag: string;
  title: string;
  meta: string;
  summary: string;
  metrics: Metric[];
  href: string;
};

export type PersonalCard = {
  tag: string;
  title: string;
  meta: string;
  situation: string;
  approach: string;
  outcome: string;
  href: string;
  ctaLabel?: string;
};

type CorporateTab = {
  label: string;
  cards: CorporateCard[];
};

type PersonalTab = {
  label: string;
  cards: PersonalCard[];
};

export const work: {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  intro: string;
  tabs: {
    corporate: CorporateTab;
    personal: PersonalTab;
  };
} = {
  sectionNumber: "05",
  sectionLabel: "Selected work",
  heading: "What I’ve built, what I’m building",
  intro:
    "Corporate work is where ideas get tested against real business pressure. Personal projects are where I try the tools I want to bring into client work. Both make each other better.",
  tabs: {
    corporate: {
      label: "Corporate work",
      cards: [
        {
          tag: "Retention ML · Production model",
          title: "Customer Retention Probability Score",
          meta: "Supertails · 2025 · Live in production",
          summary:
            "A hybrid ML system that scores every Supertails customer’s 30-day repurchase probability, refreshed daily, and routes the right intervention to the right channel.",
          metrics: [
            { value: "~60%", label: "Lift on test conversion" },
            { value: "25+", label: "Features engineered" },
          ],
          href: "/case-studies/customer-retention-probability",
        },
        {
          tag: "Clustering ML · Product-as-ML",
          title: "Batters & Bowlers Tag",
          meta: "CricHeroes · Launched 2022 · Live",
          summary:
            "Classified grassroots cricketers into nine archetypes. Adopted across the platform, became the community’s vocabulary for talking about cricket, and grew into a branded merchandise line.",
          metrics: [
            { value: "10M+", label: "Players adopted" },
            { value: "Brand", label: "Now the community language" },
          ],
          href: "/case-studies/batters-bowlers-tag",
        },
        {
          tag: "Retention ML · Decision Systems",
          title: "Food Replenishment Strategic Framework",
          meta: "Supertails · 2024–25",
          summary:
            "Three-phase decisioning framework predicting when pet parents would run out of food. Combined repeat-buyer history, breed / pack guidelines for first-timers, and real-time browsing intent into one nudge per customer per category.",
          metrics: [
            { value: "~60%", label: "Precision · Dry food" },
            { value: "~75%", label: "Precision · Wet food" },
            { value: "±7 days", label: "Prediction window" },
          ],
          href: "/case-studies/food-replenishment",
        },
        {
          tag: "Personalization · Behavioral scoring",
          title: "Customer Affinity Modelling",
          meta: "Supertails · 2025 · Live in production",
          summary:
            "Multi-level scoring system quantifying what every Supertails customer cares about across pet types, categories, sub-categories, and brands. Time-decayed, intent-weighted, normalized at every level.",
          metrics: [
            { value: "Multi-team", label: "Personalization & cross-sell insights unlocked" },
          ],
          href: "/case-studies/customer-affinity-modelling",
        },
        {
          tag: "Decision Systems · Platform architecture",
          title: "Adaptive Nudge Decision Engine",
          meta: "Supertails · 2025 · In rollout",
          summary:
            "Replaced overlapping campaign workflows with one decisioning system. Picks the best next action per customer per cycle. Designed to reduce WhatsApp cost wastage and lift 30/60-day repeat rates.",
          metrics: [
            { value: "In rollout", label: "Real metrics arrive after the first 90 days of full operation" },
          ],
          href: "/case-studies/adaptive-nudge-decision-engine",
        },
        {
          tag: "GenAI Evaluation · Cost-benefit",
          title: "AI Commentary at CricHeroes",
          meta: "CricHeroes · 2024 · Pilot",
          summary:
            "Evaluated three GenAI pilots for cricket commentary — pre-match show, live ball-by-ball, post-match wrap-up. Made the cost-benefit call on what ships, what waits, and what dies.",
          metrics: [
            { value: "+15%", label: "Engagement on live commentary" },
          ],
          href: "/case-studies/ai-cricket-commentary",
        },
      ],
    },
    personal: {
      label: "Personal projects",
      cards: [
        {
          tag: "Cricket Analytics",
          title: "NerdyCricket",
          meta: "Personal project · Live · IPL 2026 season",
          situation:
            "Broadcasters talk about pressure, momentum, and rivalry during every match. Fans never get those numbers to study.",
          approach:
            "Took 18 years of cricket data and turned it into clear signals. Five daily puzzle games, all scored into one Cricket IQ.",
          outcome:
            "Live at nerdycricket.com, running through the IPL 2026 season.",
          href: "https://nerdycricket.com",
          ctaLabel: "See it live",
        },
        {
          tag: "Healthcare",
          title: "Medicine Helper",
          meta: "Personal project · Live in GPT marketplace",
          situation:
            "Indian homes have a lot of medicines lying around. Most people don’t know what each one is for, or what to use instead.",
          approach:
            "A mobile app. Point your camera at the label. You get a safety score, side effects, and a list of alternatives.",
          outcome:
            "Live as a custom GPT inside ChatGPT right now. A full mobile app is being built next, headed to the Play Store.",
          href: "https://chatgpt.com/g/g-6752c12adeb88191825f918d2ed306f1-medicine-helper",
          ctaLabel: "Use it now",
        },
        {
          tag: "Healthcare",
          title: "Packaged Food Label Analyzer",
          meta: "Personal project · Live in GPT marketplace",
          situation:
            "Most people can’t read packaged food labels. Generic nutrition advice ignores your age, your body, your diet, your conditions.",
          approach:
            "A custom GPT that reads any label and gives you a personal health read. What’s in it, how much to eat, what to switch to.",
          outcome:
            "Live in OpenAI’s GPT marketplace. Became the proof that led to Medicine Helper.",
          href: "https://chatgpt.com/g/g-67517ea5a680819191527c1065b1d2f5-packaged-food-label-analyzer",
          ctaLabel: "Use it now",
        },
        {
          tag: "Markets",
          title: "AI Trading Copilot",
          meta: "Personal project · Limited access",
          situation:
            "Most retail traders lose money over the long run. Professional help sits behind ₹50 lakh+ minimums.",
          approach:
            "You give three inputs: budget, timeline, risk appetite. Eight AI agents handle the rest, from scanning the market to managing risk.",
          outcome:
            "Running in paper trading mode for now. Demos on request.",
          href: "/case-studies/ai-trading-copilot",
        },
        {
          tag: "Career Strategy",
          title: "AI Job Impact Assessor",
          meta: "Personal project · In closed beta",
          situation:
            "Every headline says AI will replace jobs. None tell you which parts of your specific role are actually affected.",
          approach:
            "You tell it your job. It breaks the role into tasks. Each task gets scored against where AI is going in 2026.",
          outcome:
            "In closed beta. You walk away with what to stop doing, what to invest in, and what to become over the next 18 months.",
          href: "/case-studies/ai-job-impact-assessor",
        },
      ],
    },
  },
};

// About section uses a journey timeline with tags-only cards.
// Desktop: horizontal alternating timeline. Mobile: vertical stacked timeline.
// Each entry: year range, title (company), subtitle (role), tags (5 short concepts).
export const about = {
  sectionNumber: "06",
  sectionLabel: "About",
  heading: "",
  journey: [
    {
      years: "2014–2016",
      title: "SAC-ISRO",
      subtitle: "FMS Engineer",
      body: "Started here. Satellite data ops at ISRO. Linux, mission-critical systems, large data sets.",
    },
    {
      years: "2016–2018",
      title: "Lericon Informatics",
      subtitle: "Analytics Consultant",
      body: "Analytics consulting across industries. Predictive models, forecasting, BI dashboards.",
    },
    {
      years: "2019–2024",
      title: "CricHeroes",
      subtitle: "Senior Data Scientist",
      body: "Built the data and AI function from scratch. ML at consumer scale, GenAI evaluation, the roadmap, the team.",
    },
    {
      years: "2025–2026",
      title: "Supertails",
      subtitle: "EIR, Data & AI Initiatives",
      body: "Retention modeling, replenishment frameworks, the cross-channel decision engine.",
    },
    {
      years: "2026 →",
      title: "Fractional AI Lead",
      subtitle: "Independent practice",
      body: "Senior data and AI operator embedded with founder-led startups that don't have one yet.",
    },
  ],
  metrics: [
    { value: "10+ yrs", label: "Across data and AI roles", icon: "CalendarRange" },
    {
      value: "5 industries",
      label: "Sports-tech, pet-tech, oil & gas, space-tech, consulting",
      icon: "Factory",
    },
    { value: "3 products", label: "Live and in active development", icon: "Package" },
  ],
};

export const contact = {
  sectionNumber: "07",
  sectionLabel: "Get in touch",
  heading: "Let’s see if there’s a fit",
  body: "A first call is about your situation. What you’re trying to figure out, what data you actually have, what’s been getting in the way. If we’re not a fit, I’ll tell you who is.",
  bookingLabel: "Book a meeting",
  emailLabel: "Copy email",
  emailCopiedLabel: "✓ Copied! Paste anywhere",
  linkedinLabel: "Connect on LinkedIn",
};

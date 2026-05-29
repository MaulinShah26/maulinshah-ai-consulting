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
  headlinePrefix: "For startup founders who’ve outgrown",
  headlineQuote: "“we’ll figure out the data later.”",
  subhead:
    "I help you turn that into something the team can act on, defend, and explain. The senior AI person you don’t have on the team yet.",
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
    { kind: "arrow" as const, from: "0", to: "1", label: "data & AI built from scratch at multiple startups" },
    { kind: "count" as const, value: 5, suffix: "+", label: "production systems shipped" },
  ],
};

export const situation = {
  sectionNumber: "01",
  sectionLabel: "The situation I see most",
  intro:
    "Most funded startups look the same on top. What decides the outcome sits one layer below.",

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
      "What’s actually working?",
      "Where should the money go?",
      "What should AI do?",
      "What data can we trust?",
      "Who owns the decisions?",
      "How do we know it worked?",
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
      punch: "Now the work actually adds up.",
    },
  },

  // Core line is split into three parts so the middle phrase can be wrapped
  // in the accent highlight without HTML in the data file.
  coreBefore: "Funded startups don’t lack ambition. They lack the",
  coreHighlight: "operating logic",
  coreAfter: "that turns ambition into repeatable growth.",

  // Detail prose uses _underscore_ markdown for the emphasized closing lines.
  detailParagraphs: [
    "Right after funding, the goals are obvious. Grow faster, open new markets, launch new products, improve margins, actually use AI, make growth steady instead of lucky, build the team, get ready for the next raise. Everyone can see this part.",
    "The hard part sits underneath. What’s actually working? Where should the money go next? Which good decisions should we be able to repeat on purpose? Which numbers can we trust? What should AI handle, and what should stay with people? Who connects the big plan to the day-to-day work? And how do we even know if any of it worked? Usually, no one owns these questions.",
    "Skip them, and the company just gets busier, not better. More dashboards, more meetings, more half-finished experiments, more AI demos, more hiring, more tools that don’t talk to each other. Everyone moves fast, but not in the same direction. _Lots of work, not much progress._",
    "Answer them, and things start to click. Priorities get clear. People make better calls. AI plugs into real work instead of living in a demo. Data leads to action, not just another report. What works once can be done again on purpose. Money goes where it actually counts. _The work finally starts to add up._",
  ],
};

export const approach = {
  sectionNumber: "02",
  sectionLabel: "How I work",
  heading: "What the work looks like",
  sub: "Every engagement is different. The approach stays similar.",
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
      body: "Own the work end-to-end. Build the dashboards and ML systems that earn their keep. Sit in on the calls that matter. The team learns alongside and owns more of it over time.",
    },
  ],
};

export const engagements = {
  sectionNumber: "03",
  sectionLabel: "Engagement options",
  heading: "Three ways to work together",
  intro: "",
  cards: [
    {
      title: "Fractional AI Lead",
      icon: "Handshake",
      bestFor:
        "You need a senior data and AI person on the team but can’t hire one yet. The work can’t wait. You need someone owning the roadmap from inside, not advising from outside.",
      whatItCovers:
        "I run the data and AI work end-to-end. Roadmap, decision systems, ML and automation builds, dashboards. I work with your team day-to-day and sit in on the calls that matter. The team gets better at this while I’m there, so they own more of it after.",
    },
    {
      title: "Strategic audit",
      icon: "ScanSearch",
      bestFor:
        "You want an honest read on where your data and AI stand before committing to a longer engagement. The team isn’t sure yet what’s broken, what to fix first, or what’s even possible with the data you have.",
      whatItCovers:
        "A focused diagnostic of the data, the tooling, the team, and the current roadmap. The deliverable is a written assessment. Honest about where you are now and the 2-3 most useful things to fix or build next. Sometimes this leads into a Fractional engagement. Sometimes it’s the right place to stop.",
    },
    {
      title: "Scoped build",
      icon: "Wrench",
      bestFor:
        "You know what you want built. The problem is defined, the outcome is clear. What’s missing is senior ownership of the architecture and the build itself, without taking over the team or stretching the timeline.",
      whatItCovers:
        "I own one specific build, end-to-end. System design, the technical heavy lifting, integration with your team, deployment, documentation. The deliverable is the thing working in production.",
    },
  ],
  closingLine:
    "The Fractional engagement is a monthly retainer with a 3-month minimum. The Strategic Audit and Scoped Build are fixed-price projects with defined deliverables and timelines. I share pricing on the first call once we’ve scoped the work.",
  workingSetupLine:
    "I work remotely by default. Hybrid if you need it. Will travel for kickoffs, key reviews, or anything else that needs to happen in person.",
  ctaLabel: "Start a conversation",
  ctaHref: "#contact",
};

export const outcomes = {
  sectionNumber: "04",
  sectionLabel: "What changes for you",
  intro:
    "When the work is doing its job, here’s the sequence you reach. Time to get there varies.",
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
      title: "Systems earn their keep",
      body: "Hours saved each week. Better questions get asked.",
    },
    {
      num: "04",
      title: "The team is fluent",
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

type WorkCard = {
  title: string;
  description: string;
  icon: string;
  tags: Array<{ label: string; variant?: string }>;
  status: string;
  cta?: string;
  href?: string;
};

type WorkTab = {
  label: string;
  cards: WorkCard[];
};

export const work: {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  intro: string;
  tabs: {
    corporate: WorkTab;
    personal: WorkTab;
  };
} = {
  sectionNumber: "05",
  sectionLabel: "Selected work",
  heading: "What I’ve built, what I’m building",
  intro:
    "Corporate work is where the thinking gets pressure-tested by real business stakes. Personal projects are where I try the tools I want to bring into client work. Both make each other better.",
  tabs: {
    corporate: {
      label: "Corporate work",
      cards: [
        {
          title: "Food Replenishment Strategic Framework",
          description:
            "A three-phase decisioning framework at Supertails that predicted when pet parents would run out of food, and timed the right nudge to land before they did.",
          icon: "Layers",
          tags: [
            { label: "Retention ML" },
            { label: "Decision systems" },
            { label: "Pet-tech" },
          ],
          status: "Supertails · 2024 to 2025",
          cta: "Read the case study",
          href: "/case-studies/food-replenishment",
        },
        {
          title: "Adaptive Nudge Decision Engine (ANDE)",
          description:
            "A unified, six-layer decision system at Supertails. Moves the company from use-case campaigns to system-driven decisioning, with one nudge per customer per cycle.",
          icon: "Brain",
          tags: [
            { label: "Decision systems" },
            { label: "Platform architecture" },
            { label: "Pet-tech" },
          ],
          status: "Supertails · 2025 · In operationalization",
          cta: "Read the case study",
          href: "/case-studies/adaptive-nudge-decision-engine",
        },
        {
          title: "Customer Retention Probability Score",
          description:
            "A hybrid ML model scoring every Supertails customer’s 30-day repurchase probability. Two-stage architecture (CatBoost precision + MLP recall), 25+ engineered features, refreshed daily to production. ROC AUC 98.6%, ~60% lift on test conversion.",
          icon: "Target",
          tags: [
            { label: "Retention ML" },
            { label: "Production model" },
            { label: "Pet-tech" },
          ],
          status: "Supertails · 2025 · Live in production",
          cta: "Read the case study",
          href: "/case-studies/customer-retention-probability",
        },
        {
          title: "Customer Affinity Modelling",
          description:
            "A multi-level scoring system at Supertails that quantifies what every customer cares about, across pet types, categories, sub-categories, and brands. Weights all behavioral signals by intent, decays old behavior, normalizes scores at each level. Live in BigQuery feeding personalization, segmentation, and cross-sell.",
          icon: "Compass",
          tags: [
            { label: "Behavioral scoring" },
            { label: "Personalization layer" },
            { label: "Pet-tech" },
          ],
          status: "Supertails · 2025 · Live in production",
          cta: "Read the case study",
          href: "/case-studies/customer-affinity-modelling",
        },
        {
          title: "Batters & Bowlers Tag",
          description:
            "An ML clustering system at CricHeroes that classified grassroots cricketers into five batting archetypes (Steady, Classicist, Accumulator, Hard Hitter, Destroyer). Rolled out to millions of players. Became the language a community uses to talk about itself, and the basis for a personalized merchandise line. Still one of the platform’s most impactful features.",
          icon: "Trophy",
          tags: [
            { label: "Clustering ML" },
            { label: "Player profiling" },
            { label: "Sports-tech" },
          ],
          status: "CricHeroes · Launched 2022 · Live in production",
          cta: "Read the case study",
          href: "/case-studies/batters-bowlers-tag",
        },
        {
          title: "AI Commentary at CricHeroes",
          description:
            "A unified GenAI vision to bring the international cricket experience (pre-match, live ball-by-ball, and post-match) to grassroots cricketers. Three pilots evaluated in 2024 across OpenAI + ElevenLabs. Live commentary delivered 15% engagement uplift but surfaced LLM repetition limits. Pre/post voice shows were killed on cost economics (~₹50–60 lakh/month projected). The case study is about evaluating GenAI bets across cost, quality, and value.",
          icon: "Headphones",
          tags: [
            { label: "GenAI evaluation" },
            { label: "Cost-benefit analysis" },
            { label: "Sports-tech" },
          ],
          status: "CricHeroes · 2024 · Three pilots evaluated",
          cta: "Read the case study",
          href: "/case-studies/ai-cricket-commentary",
        },
      ],
    },
    personal: {
      label: "Personal projects",
      cards: [
        {
          title: "NerdyCricket",
          description:
            "A data-driven IPL analytics and engagement platform built solo. Bloomberg-for-cricket dressed up as Wordle-for-cricket. Proprietary analytical signals across 18 years of ball-by-ball data, delivered through five daily puzzle games scored into a single Cricket IQ. Live at nerdycricket.com.",
          icon: "Activity",
          tags: [
            { label: "Solo build", variant: "blue" },
            { label: "AI agents", variant: "blue" },
            { label: "Live in production", variant: "blue" },
          ],
          status: "Live at nerdycricket.com · IPL 2026 season",
          cta: "Read the case study",
          href: "/case-studies/nerdycricket",
        },
        {
          title: "Medicine Helper",
          description:
            "A medicine label scanner built as a native mobile app. Camera-first scanning, curated knowledge base grounding the LLM, safety scoring, side effects, and alternatives. Built solo. In active development with Play Store prep in progress.",
          icon: "Pill",
          tags: [
            { label: "Camera-First OCR", variant: "teal" },
            { label: "Mobile-Native", variant: "teal" },
            { label: "Healthcare", variant: "teal" },
          ],
          status: "In active development · Play Store prep",
          cta: "Read the case study",
          href: "/case-studies/medicine-helper",
        },
        {
          title: "Packaged Food Label Analyzer",
          description:
            "A Custom GPT that decodes packaged food labels into a clear health read, calibrated to age, BMI, dietary preferences, and health conditions. Personalized scoring, ingredient decoding, portion recommendations, and healthier alternatives. Live in OpenAI's GPT marketplace.",
          icon: "Apple",
          tags: [
            { label: "Custom GPT", variant: "teal" },
            { label: "Personalized Nutrition", variant: "teal" },
            { label: "Healthcare", variant: "teal" },
          ],
          status: "Live · OpenAI GPT marketplace",
          cta: "Read the case study",
          href: "/case-studies/packaged-food-label-analyzer",
        },
        {
          title: "AI Trading Copilot",
          description:
            "A personal AI trading desk for retail investors on Indian equities. The investor sets three things (budget, timeline, risk appetite). An eight-agent pipeline handles market scanning, signal analysis, strategy selection, risk management, and execution. Built solo. Currently in paper-trading mode with demos available on request.",
          icon: "Bot",
          tags: [
            { label: "Multi-Agent Pipeline", variant: "teal" },
            { label: "Decision Engine", variant: "teal" },
            { label: "Markets", variant: "teal" },
          ],
          status: "In active development · Limited access",
          cta: "Read the case study",
          href: "/case-studies/ai-trading-copilot",
        },
        {
          title: "AI Job Impact Assessor",
          description:
            "A career clarity tool for the AI era. Built solo, calibrated against a 15-role expert benchmark. Decomposes your role into tasks, scores each against 2026 AI capability movement, and The output: what to stop doing, what to invest in, and what to become over the next 18 months. In closed beta.",
          icon: "Briefcase",
          tags: [
            { label: "Career strategy", variant: "purple" },
            { label: "AI literacy", variant: "purple" },
            { label: "Calibrated diagnostic", variant: "purple" },
          ],
          status: "In closed beta · Limited access",
          cta: "Read the case study",
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
  body: "A first call is about your situation. What you’re trying to crack, what data you’re sitting on, what’s been getting in the way. If we’re not a fit, I’ll tell you who is.",
  bookingLabel: "Book a meeting",
  emailLabel: "Copy email",
  emailCopiedLabel: "✓ Copied! Paste anywhere",
  linkedinLabel: "Connect on LinkedIn",
};

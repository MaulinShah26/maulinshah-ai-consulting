// All site content lives here so you can edit copy without touching components.

export const meta = {
  siteUrl: "https://maulinshah.vercel.app",
  siteName: "Maulin Shah, Fractional AI Lead",
  defaultTitle: "Maulin Shah · Fractional AI Lead",
  defaultDescription:
    "I help startups turn 'we’ll figure out the data later' into something they can act on, defend, and explain. The senior AI person they don’t have on their team yet.",
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
    "I help startups turn that instinct into something they can act on, defend, and explain. The senior AI person you don’t have on your team yet.",
  primaryCta: { label: "Start a conversation", href: "#contact" },
  secondaryCta: { label: "See how I work", href: "#approach" },
};

export const situation = {
  sectionNumber: "01",
  sectionLabel: "The situation I see most",
  paragraphs: [
    "Most funded startup founders I meet are in the same spot. The business is growing 2x, 3x. Data is piling up across teams. They’ve decided AI should be doing more for them. They want to build the next thing, hit the next growth lever, present clearer numbers to the board.",
    "But the how isn’t clear: how the data holds up, what AI gets built where, how they’ll know it’s working. They don’t have answers. The team doesn’t have someone who can deal with it. Even when something gets built, no one in the room is confident enough to say it’s correct.",
    "So the plan stays in _“we’ll figure it out when we get to it”_ mode, and the next phase of growth keeps getting deferred.",
  ],
};

export const approach = {
  sectionNumber: "02",
  sectionLabel: "How I work",
  heading: "Partnership, not handover",
  intro: [
    "Every engagement is different in scope, depth, and what we’re trying to crack. The shape of how I work tends to be similar regardless. This is the general arc, adjusted in intensity, emphasis, and timeline based on what the work needs.",
    "I sit with you and your leadership first, to understand the business objective, where data lives today, how it’s collected, and what your team actually trusts. From there I surface the gap between what you think the data is telling you and what it actually is. That’s usually where the first uncomfortable truths show up, and where the work earns its keep.",
    "Once the picture is honest, we define scope together and produce a written data and AI roadmap: what to fix, what to build, what to use AI for, what isn’t worth touching yet, and what isn’t possible yet given your data. Then I move into operator mode. I own the roadmap, build the dashboards, automation, and ML systems that earn their keep, sit in on the calls that matter, and lift your team’s capability so they carry more of it themselves over time.",
  ],
};

export const engagements = {
  sectionNumber: "03",
  sectionLabel: "Engagement options",
  heading: "Three shapes of work",
  intro: "",
  cards: [
    {
      title: "Fractional AI Lead",
      icon: "Handshake",
      bestFor:
        "Founders who need a senior data and AI operator embedded on the team for a meaningful stretch of work — typically when there’s no head of data or VP of AI yet, the work can’t wait for the hire, and the team needs someone owning the roadmap from the inside.",
      whatItCovers:
        "End-to-end ownership of the AI and data agenda. Roadmap definition, decision-system design, ML and automation builds, dashboards, working alongside your team day-to-day, sitting in on the calls that matter, and building the team’s capability so they carry more over time.",
    },
    {
      title: "Strategic audit",
      icon: "ScanSearch",
      bestFor:
        "Founders who want a clear-eyed read on the state of their data and AI before committing to a longer engagement. The right starting point when the team isn’t yet sure what’s broken, what’s worth investing in, or what’s actually possible given the data they have.",
      whatItCovers:
        "A focused diagnostic of the data, the tooling, the team, and the current roadmap. The deliverable is a written assessment that’s honest about where you actually are and what the next two to three highest-leverage bets look like. Often this leads into a Fractional engagement. Sometimes it’s the right place to stop.",
    },
    {
      title: "Scoped build",
      icon: "Wrench",
      bestFor:
        "Founders who know what they want built. The problem is defined, the outcome is clear, and what’s needed is senior ownership of the architecture and the build itself — without taking over the team or stretching the timeline.",
      whatItCovers:
        "End-to-end ownership of one specific build. System design, the technical heavy lifting, integration with your team, deployment, and documentation. The deliverable is the thing working in production.",
    },
  ],
  closingLine:
    "The Fractional engagement is a monthly retainer with a 3-month minimum. The Strategic Audit and Scoped Build are fixed-price projects with defined deliverables and timelines. Pricing is shared on the first call once we've scoped the work.",
  workingSetupLine:
    "I work remotely by default, with a hybrid setup for clients who need it. Happy to travel for kickoffs, key reviews, or any conversation that needs to happen in person.",
  ctaLabel: "Start a conversation",
  ctaHref: "#contact",
};

export const outcomes = {
  sectionNumber: "04",
  sectionLabel: "What changes for you",
  milestones: [
    { month: "Month 3", label: "Board-ready" },
    { month: "Month 6", label: "Systems running" },
    { month: "Month 9", label: "Team fluent" },
    { month: "Month 12", label: "You take it from here" },
  ],
  rows: [
    {
      month: "Month 3",
      icon: "Presentation",
      text: "You walk into board meetings with a single source of truth, can answer investor questions on the spot without scrambling, and have a written roadmap that tells the team what’s worth building and what isn’t.",
    },
    {
      month: "Month 6",
      icon: "Zap",
      text: "AI and automation systems are earning measurable hours back per week. Leadership makes decisions from the same set of numbers. The conversation shifts from _“is the data right?”_ to _“what should we do about it?”_",
    },
    {
      month: "Month 9",
      icon: "Users",
      text: "The team operates from data confidently enough that _“we’ll figure it out later”_ has stopped being something anyone says.",
    },
    {
      month: "Month 12",
      icon: "Target",
      text: "You have the clarity to keep going with or without me in the seat. That’s the goal.",
    },
  ],
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
    "Corporate work is where the thinking gets pressure-tested by real business stakes. Personal projects are where I experiment with the tools I want to bring into client work. Both lines feed each other.",
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
            "A multi-level scoring system at Supertails that quantifies what every customer cares about — across pet types, categories, sub-categories, and brands. Weights all behavioral signals by intent, decays old behavior, normalizes scores at each level. Live in BigQuery feeding personalization, segmentation, and cross-sell.",
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
            "An ML clustering system at CricHeroes that classified grassroots cricketers into five batting archetypes (Steady, Classicist, Accumulator, Hard Hitter, Destroyer). Rolled out to millions of players. Became the language a community uses to talk about itself — and the basis for a personalized merchandise line. Still one of the platform’s most impactful features.",
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
            "A unified GenAI vision to bring the international cricket experience — pre-match, live ball-by-ball, and post-match — to grassroots cricketers. Three pilots evaluated in 2024 across OpenAI + ElevenLabs. Live commentary delivered 15% engagement uplift but surfaced LLM repetition limits. Pre/post voice shows were killed on cost economics (~₹50–60 lakh/month projected). The case study is about evaluating GenAI bets across cost, quality, and value.",
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
            "A data-driven IPL analytics and engagement platform built solo. Bloomberg-for-cricket dressed up as Wordle-for-cricket — proprietary analytical signals across 18 years of ball-by-ball data, delivered through five daily puzzle games scored into a single Cricket IQ. Live at nerdycricket.com.",
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
            "A career clarity tool for the AI era. Built solo, calibrated against a 15-role expert benchmark. Decomposes your role into tasks, scores each against 2026 AI capability movement, and tells you what to stop, what to invest in, and what kind of professional to become. In closed beta.",
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
  sectionLabel: "My Journey",
  heading: "A short version",
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
  body: "A first conversation is structured around your actual situation: what you’re trying to crack, what data you’re sitting on, what’s been getting in the way. If we’re not a fit, I’ll tell you who is.",
  bookingLabel: "Book a meeting",
  emailLabel: "Copy email",
  emailCopiedLabel: "✓ Copied! Paste anywhere",
  linkedinLabel: "Connect on LinkedIn",
};

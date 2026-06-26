// All site content lives here so you can edit copy without touching components.

// Single source for the headline title. Bump to "Fractional Chief Data & AI
// Officer" later for larger growth-stage clients without touching every section.
export const role = "Fractional Head of Data & AI";

export const meta = {
  siteUrl: "https://maulinshah.vercel.app",
  siteName: `Maulin Shah, ${role}`,
  defaultTitle: `Maulin Shah · ${role}`,
  defaultDescription:
    "Fractional Head of Data & AI for founder-led startups. I join your leadership team to build and run your data and AI function, until your team can run it without me.",
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
  { label: "Problems", href: "/#problems" },
  { label: "Operating model", href: "/#operating-model" },
  { label: "Work", href: "/#work" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book a call", href: "/#contact" },
];

export const hero = {
  eyebrow: role,
  headlinePrefix: "For founders who’ve outgrown",
  headlineQuote: "“we’ll figure out the data later.”",
  subhead:
    "I join your leadership team to build and run your data and AI function, until your team can run it without me.",
  primaryCta: { label: "Book a call", href: "#contact" },
  secondaryCta: { label: "See selected work", href: "#work" },
};

export const problems: {
  sectionLabel: string;
  heading: string;
  lede: string;
  cards: { body: string; bridge?: boolean }[];
} = {
  sectionLabel: "Sound familiar?",
  heading: "The week that made you look for someone like me.",
  lede:
    "If three or more of these are true, the cost of deciding things informally has started to outrun the speed it used to buy you.",
  cards: [
    { body: "Spend keeps going up, but no one can say cleanly what’s working." },
    { body: "Retention matters, but repeat purchase still happens by reaction, not by plan." },
    { body: "You have dashboards. Leadership still argues about whose number is right." },
    { body: "Everyone has an AI idea. No one can say which one is worth engineering time." },
    { body: "Every real decision still waits on someone pulling numbers by hand." },
    {
      body: "You need a senior data and AI person owning this. A full-time hire is too early, or too slow.",
      bridge: true,
    },
  ],
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
      title: role,
      meta: "~10 hrs/week - 3 months minimum - Monthly Retainer",
      tagline: "A senior data and AI lead on your team, running the roadmap from inside.",
      walkaway: "a clear roadmap, working systems live, and a team that runs more of it on their own over time.",
    },
    {
      quote: "I want to know where my data and AI actually stand before going deeper.",
      title: "Data & AI Opportunity Audit",
      meta: "~10-12 hrs/week - 2-3 weeks - Fixed scope",
      tagline: "An honest check on your data and AI, with a written report at the end.",
      walkaway: "a written report on the 2–3 most useful things to do next, plus one 90-minute call with leadership.",
    },
    {
      quote: "I know what to build. I need someone senior to own the design and the build.",
      title: "Decision System Build",
      meta: "~15-25 hrs/week - Timeline shaped to scope",
      tagline: "I own one specific build from start to finish, until it’s live.",
      walkaway: "what you wanted, built and live. Or a full system, with your team trained to run it.",
    },
  ],
};

export const faq = {
  sectionLabel: "Before you book",
  heading: "The questions founders usually ask first.",
  items: [
    {
      question: "When should we work together?",
      answer:
        "When data, retention, or AI decisions have gotten important enough that making them informally is starting to cost you. If it’s still early and cheap to wing it, you don’t need me yet.",
    },
    {
      question: "What if our data is a mess?",
      answer:
        "That’s normal, and it’s usually the first thing I sort out. We figure out what you can trust, what you can’t, and which decisions can still get better with what you already have.",
    },
    {
      question: "Do you only advise, or do you build?",
      answer:
        "I own the work. The point isn’t a report. It’s the systems, models, and decision habits your team keeps using after I leave.",
    },
    {
      question: "How is this different from hiring a data scientist?",
      answer:
        "A data scientist executes the tasks you hand them. I own the function: what to prioritize, what to build, what not to build, and how it ties back to growth. Closer to a head of function than a pair of hands.",
    },
    {
      question: "Do you only work with consumer startups?",
      answer:
        "That’s the strongest fit, because retention and customer behavior are home turf for me. The same decision problems show up in marketplaces and other models, and those can fit too.",
    },
    {
      question: "What happens after the first call?",
      answer:
        "We decide together whether the right next step is a short audit, a scoped build, an embedded engagement, or nothing at all. If it’s nothing, I’ll say so.",
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
  problem: string;
  summary: string;
  takeaway: string;
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
    "Corporate work is the production systems I built and owned. Labs are where I test the tools I want to bring into client work. Both make each other better.",
  tabs: {
    corporate: {
      label: "Corporate work",
      cards: [
        {
          tag: "Retention ML · Production model",
          title: "Customer Retention Probability Score",
          meta: "Supertails · 2025 · Live in production",
          problem:
            "Supertails was spending on retention without knowing which customers were actually about to lapse.",
          summary:
            "I built a hybrid ML system that scores every customer’s 30-day repurchase probability daily, then routes the right intervention to the right channel.",
          takeaway:
            "A churn score does nothing on its own. The value is in routing it to an action the team will actually take.",
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
          problem:
            "CricHeroes had years of grassroots performance data, but no way for players to see themselves in it.",
          summary:
            "I classified every cricketer into nine playing archetypes that the community adopted as its own language, and that grew into a branded merchandise line.",
          takeaway:
            "The strongest data product is one users adopt as their own language. That comes from giving people an identity, not just a stat.",
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
          problem:
            "Supertails couldn’t tell when a pet parent was about to run out of food, so reorder nudges were guesswork.",
          summary:
            "I built a three-phase framework that predicts run-out timing from buyer history, breed and pack guidelines, and live browsing intent, into one nudge per customer per category.",
          takeaway:
            "Timing is the product. A reorder nudge on the wrong day is noise. On the right day it feels like a service.",
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
          problem:
            "Teams across Supertails were personalizing blind, with no shared read on what each customer actually cared about.",
          summary:
            "I built a multi-level affinity layer scoring preference across pet type, category, sub-category, and brand, time-decayed and intent-weighted.",
          takeaway:
            "Personalization is a problem of understanding the customer before it is a model problem. Get the customer read right and every team downstream benefits.",
          metrics: [
            { value: "Multi-team", label: "Personalization & cross-sell insights unlocked" },
          ],
          href: "/case-studies/customer-affinity-modelling",
        },
        {
          tag: "Decision Systems · Platform architecture",
          title: "Adaptive Nudge Decision Engine",
          meta: "Supertails · 2025 · In rollout",
          problem:
            "Overlapping CRM campaigns were nudging the same customer repeatedly and burning WhatsApp spend.",
          summary:
            "I replaced the campaign workflows with one decisioning system that picks the best next action per customer per cycle.",
          takeaway:
            "More nudges is not more retention. The win was deciding when not to message someone, which cut waste and protected the relationship.",
          metrics: [
            { value: "In rollout", label: "Real metrics arrive after the first 90 days of full operation" },
          ],
          href: "/case-studies/adaptive-nudge-decision-engine",
        },
        {
          tag: "GenAI Evaluation · Cost-benefit",
          title: "AI Commentary at CricHeroes",
          meta: "CricHeroes · 2024 · Pilot",
          problem:
            "CricHeroes had three tempting GenAI commentary ideas and no way to tell which was worth the engineering bill.",
          summary:
            "I evaluated all three, pre-match show, live ball-by-ball, and post-match wrap-up, and made the cost-benefit call on what ships, what waits, and what dies.",
          takeaway:
            "The senior call on AI is often what not to build. Killing two pilots early was worth more than shipping all three.",
          metrics: [
            { value: "+15%", label: "Engagement on live commentary" },
          ],
          href: "/case-studies/ai-cricket-commentary",
        },
      ],
    },
    personal: {
      label: "Labs",
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
      title: role,
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


/* ----------------------------- V3 Lighthouse ----------------------------- */

export const diagnostic = {
  sectionLabel: "Sound familiar?",
  lede:
    "A few questions. If you hesitate on any of them, that hesitation is the cost of deciding informally.",
  cards: [
    {
      q: "Do your leadership meetings still turn into debates about which numbers are right?",
      label: "If yes",
      implication: "Your team is deciding from numbers no one fully trusts.",
    },
    {
      q: "Do you know which customers are about to stop buying, before they do?",
      label: "If not",
      implication: "Retention is a reaction, not a plan.",
    },
    {
      q: "How many AI ideas are sitting in Notion but not in production?",
      label: "The real problem",
      implication:
        "Ideas are cheap. Knowing which one earns engineering time is the hard part.",
    },
    {
      q: "Have you shipped something with AI that no one ended up using?",
      label: "The real cost",
      implication:
        "The expensive mistake now isn’t building. It’s building the wrong thing with confidence.",
    },
    {
      q: "When a decision needs data from three teams, how long does it actually take?",
      label: "The hidden tax",
      implication: "Slow cross-team answers are slow decisions, and they compound.",
    },
    {
      q: "Do you need senior data and AI ownership before you’re ready to hire full-time?",
      label: "The gap",
      implication:
        "A full-time hire is often too early, or too slow. This is the in-between.",
    },
  ],
};

export const chaosMap = {
  sectionLabel: "Why this happens",
  heading: "Every team owns its piece. No one owns how they connect.",
  lede:
    "Marketing, product, engineering, and finance each have their own data and their own targets. The decisions that need all of it together, retention, growth, which AI to build, have no single owner.",
  teams: [
    { name: "Marketing", signal: "CAC · campaigns", problem: "spends on channels it can’t fully attribute" },
    { name: "Product", signal: "events · funnels", problem: "ships features without knowing what moved retention" },
    { name: "Engineering", signal: "pipelines · warehouse", problem: "owns the pipelines, not what the numbers mean" },
    { name: "Finance", signal: "revenue · margin", problem: "sees the cost, not the cause" },
    { name: "AI ideas", signal: "LLM pilots", problem: "pile up faster than anyone can evaluate them" },
  ],
  chaosLine: "different numbers · no shared owner · slow decisions",
  core: { title: role, sub: "one owner for the data and decisions that cross teams" },
  outcomes: ["Growth", "Retention", "Efficiency", "Practical AI"],
};

export const notebook = {
  sectionLabel: "Founder notebook · 01",
  insight:
    "The companies that scale aren’t the ones with the most dashboards. They’re the ones that consistently make better decisions.",
};

export const operatingModel = {
  sectionLabel: "How I work inside the business",
  steps: [
    { n: "01", title: "Diagnose", body: "Find what’s moving growth, and what’s quietly leaking." },
    { n: "02", title: "Prioritize", body: "Decide which bets and which AI earn the work, in what order." },
    { n: "03", title: "Build", body: "Ship the systems and decision logic the team runs on." },
    { n: "04", title: "Transfer", body: "Hand it over so the team runs it without me." },
  ],
};

export const services = {
  sectionLabel: "Three ways to work together",
  cards: [
    {
      title: role,
      bestFor: "For Series A/B founders who need senior ownership before a full-time hire.",
      outcome: "Monthly executive ownership of your data and AI function.",
      commitment: "~10 hrs/week · 3 months minimum · monthly retainer",
      whatThisIs: "A senior data and AI lead on your team, running the roadmap from inside.",
      walkAway: "A clear roadmap, working systems live, and a team that runs more of it on their own over time.",
      href: "#contact",
    },
    {
      title: "Data & AI Opportunity Audit",
      bestFor: "For founders who want to know where they actually stand first.",
      outcome: "Two weeks to know what to fix, build, automate, or ignore.",
      commitment: "~10-12 hrs/week · 2-3 weeks · fixed scope",
      whatThisIs: "An honest check on your data and AI, with a written report at the end.",
      walkAway: "A written report on the 2-3 most useful things to do next, plus one 90-minute call with leadership.",
      href: "#contact",
    },
    {
      title: "Decision System Build",
      bestFor: "For founders who know the bet and want it shipped right.",
      outcome: "One high-impact system designed, built, and handed over.",
      commitment: "~15-25 hrs/week · timeline shaped to scope",
      whatThisIs: "I own one specific build from start to finish, until it’s live.",
      walkAway: "What you wanted, built and live. Or a full system, with your team trained to run it.",
      href: "#contact",
    },
  ],
};

export const proof = {
  sectionLabel: "Selected systems I’ve built",
  cards: [
    {
      tag: "Retention",
      title: "Customer Retention Score",
      problem: "Spending on retention without knowing who was about to lapse.",
      system: "A daily repurchase-probability score wired to intervention logic.",
      outcome: "~60% lift on test conversion.",
      href: "/case-studies/customer-retention-probability",
    },
    {
      tag: "Player intelligence",
      title: "Batters & Bowlers Tag",
      problem: "Years of player data, no way for players to see themselves in it.",
      system: "Clustering into nine archetypes adopted platform-wide.",
      outcome: "10M+ players, a community language, a merch line.",
      href: "/case-studies/batters-bowlers-tag",
    },
    {
      tag: "Decision engine",
      title: "Adaptive Nudge Engine",
      problem: "Overlapping campaigns nudging the same customer, burning spend.",
      system: "One engine picking the best next action per cycle.",
      outcome: "In rollout, built to cut waste and lift repeat rates.",
      href: "/case-studies/adaptive-nudge-decision-engine",
    },
  ],
};

// All site content lives here so you can edit copy without touching components.

// Single source for the market-facing role used across the site.
export const role = "Fractional Data & AI Lead";

export const meta = {
  siteUrl: "https://maulinshah.vercel.app",
  siteName: `Maulin Shah, ${role}`,
  defaultTitle: `Maulin Shah · ${role}`,
  defaultDescription:
    "I help growing companies identify decisions that are slow, inconsistent or poorly informed, then build the data and AI systems that improve them.",
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
      title: "Decision Systems Diagnostic",
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
        "We decide together whether the right next step is a short diagnostic, a scoped build, an embedded engagement, or nothing at all. If it’s nothing, I’ll say so.",
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
  insight:
    "Most companies have plenty of dashboards. Far fewer have someone making sure they lead to better decisions.",
};

export const operatingModel = {
  sectionLabel: "How I turn a problem into an operating capability",
  steps: [
    {
      n: "01",
      title: "Diagnose",
      body: "Define the decision, workflow, economics, data quality, constraints and failure modes.",
    },
    {
      n: "02",
      title: "Roadmap",
      body: "Choose the right mix of rules, software, data, ML, AI, automation and human judgement.",
    },
    {
      n: "03",
      title: "Operate",
      body: "Build, measure decision quality, learn from exceptions and transfer ownership to the team.",
    },
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
      pageHref: "/services/fractional-head",
      href: "#contact",
    },
    {
      title: "Decision Systems Diagnostic",
      bestFor: "For founders who need to know which decisions are holding the business back.",
      outcome: "Two to four weeks to know what to fix now, build next, experiment with, wait on, or not build.",
      commitment: "~10-12 hrs/week · 2-4 weeks · fixed scope",
      whatThisIs: "A decision-first review of the workflow, data, economics and operating constraints behind the problem.",
      walkAway: "A ranked decision roadmap, explicit build/no-build choices, and one 90-minute leadership working session.",
      pageHref: "/services/opportunity-audit",
      href: "#contact",
    },
    {
      title: "Decision System Build",
      bestFor: "For founders who know the bet and want it shipped right.",
      outcome: "One high-impact system designed, built, and handed over.",
      commitment: "~15-25 hrs/week · timeline shaped to scope",
      whatThisIs: "I own one specific build from start to finish, until it’s live.",
      walkAway: "What you wanted, built and live. Or a full system, with your team trained to run it.",
      pageHref: "/services/decision-system-build",
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


export const servicePages = [
  {
    slug: "opportunity-audit",
    eyebrow: "Decision Systems Diagnostic",
    heroTitle:
      "Find the decisions slowing the business down—and what to do about them.",
    heroSub:
      "A two-to-four-week review of one important decision area: how the decision works today, where it breaks, what it costs, and which combination of workflow, data, software, AI or human judgement should improve it.",
    meta: ["~10-12 hrs/week", "2-4 weeks", "Fixed scope"],
    problem:
      "An important decision is taking too long, producing inconsistent answers or depending on one person’s judgement. Dashboards may exist and AI ideas may be plentiful, but the workflow, ownership, economics and failure modes have never been defined together. The business does not need another tool yet. It needs a clear diagnosis of the decision itself.",
    visual: "audit" as const,
    whatLabel: "What I do in those weeks",
    whatIDo: [
      "Define the decision, who makes it, how often it occurs and what a better outcome is worth.",
      "Trace the real workflow, including handoffs, delays, data quality, exceptions and key-person dependencies.",
      "Test solution options across rules, workflow, software, data, ML, AI, automation and human judgement.",
      "Assess readiness, operating risk and economics before recommending any build.",
    ],
    walkAway: [
      "A decision map showing where the current process breaks and why.",
      "A ranked roadmap labelled: Fix now, Build next, Experiment, Wait or Do not build.",
      "Explicit AI operating boundaries: acts, recommends, requires human review or is not allowed.",
      "One 90-minute leadership session to agree on ownership and the next move.",
    ],
    notThis: [
      "Not a dashboard build or a tooling project.",
      "Not a fifty-page deck you’ll never reread.",
      "Not an AI recommendation in search of a business problem.",
    ],
    useCases: [
      "This decision still waits for one person to interpret everything.",
      "We have dashboards, but teams still disagree on what action to take.",
      "The AI prototype worked, but we do not know if it can operate reliably.",
    ],
    ctaLabel: "Request a diagnostic",
    ctaTitle: "Have an important decision that is not scaling?",
    ctaSub:
      "A 30-minute call to see if a diagnostic is the right first step. If the right answer is to wait or not build, I’ll say so.",
  },
  {
    slug: "fractional-head",
    eyebrow: role,
    heroTitle:
      "A senior data and AI lead on your team, before you’re ready to hire one full-time.",
    heroSub:
      "For founders whose critical decisions increasingly depend on data and AI but do not yet justify a full-time executive. I join the leadership team, own the roadmap and operating systems, and transfer capability as the team matures.",
    meta: ["~10 hrs/week", "3 months minimum", "Monthly retainer"],
    problem:
      "Your data and AI are now too important to leave to whoever has time, but a full-time head is too early or too expensive. So decisions slip, the roadmap drifts, and good people work on the wrong things. You need someone senior owning this now, not a job posting that takes six months to fill.",
    visual: "rail" as const,
    whatLabel: "What I do inside the business",
    whatIDo: [
      "Own the cross-functional decisions that need stronger data, systems or applied AI.",
      "Set the roadmap: what to fix now, build next, experiment with, wait on or not build.",
      "Turn prototypes into reliable operating systems with clear boundaries and ownership.",
      "Set up the rituals and coach or hire the people who take the capability over.",
    ],
    walkAway: [
      "A clear roadmap your team actually follows.",
      "Working systems live in production, not slideware.",
      "A team that runs more of it on their own each month.",
      "A function that’s ready for a full-time head when you are.",
    ],
    notThis: [
      "Not a part-time pair of hands taking tickets.",
      "Not a strategy deck with no one to execute it.",
      "Not a permanent dependency. The goal is to leave.",
    ],
    useCases: [
      "We have data people but no one owning the direction.",
      "We know AI matters but keep starting and stopping.",
      "We’re a year from a full-time hire and can’t wait that long.",
    ],
    ctaLabel: "Discuss fractional leadership",
    ctaTitle: "Need this on your team?",
    ctaSub:
      "A 30-minute call to see if a fractional engagement fits where you are. No pitch.",
  },
  {
    slug: "decision-system-build",
    eyebrow: "Decision System Build",
    heroTitle: "One high-impact system, designed, built, and handed over.",
    heroSub:
      "For founders who know which decision needs to improve and want one senior owner from framing through operation. The build may use rules, data, software, ML or AI—the decision and its business outcome determine the architecture.",
    meta: ["~15-25 hrs/week", "Timeline shaped to scope", "Fixed outcome"],
    problem:
      "You know the decision that needs to improve, but a prototype or isolated model is not an operating capability. It needs reliable data, exception handling, human override, workflow integration, ownership, monitoring, viable economics and a feedback loop. You need one owner from decision design to live operation and transfer.",
    visual: "timeline" as const,
    whatLabel: "What I do",
    whatIDo: [
      "Pin down the decision the system has to make, and who acts on it.",
      "Design the data, logic, and outputs around that one decision.",
      "Build it, test it against real cases, and put it in front of users.",
      "Document it and train your team to own and extend it.",
    ],
    walkAway: [
      "The system you wanted, built and live.",
      "Decision logic your team understands, not a black box.",
      "Clear boundaries for what the system acts on, recommends, escalates or refuses.",
      "Your people trained to run and extend it.",
    ],
    notThis: [
      "Not a proof of concept that dies in a notebook.",
      "Not an outsourced build you can’t maintain.",
      "Not a dashboard. This makes a call, not just a chart.",
    ],
    useCases: [
      "We need a retention score wired into our CRM.",
      "We want a replenishment engine for repeat orders.",
      "We have the model idea but no one to ship it right.",
    ],
    phases: [
      { label: "Frame", body: "Pin the decision, outcome, economics, constraints and owner." },
      { label: "Design", body: "Shape the workflow, logic, boundaries, exceptions and feedback loop." },
      { label: "Operate", body: "Build into the real workflow, monitor and test against live cases." },
      { label: "Transfer", body: "Document, train and hand ownership to the team." },
    ],
    ctaLabel: "Explore a build",
    ctaTitle: "Have a system in mind?",
    ctaSub:
      "A 30-minute call to scope what you want built and whether I’m the right person to own it.",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}


export const caseNarratives: Record<string, {
  company: string; year: string; status: string;
  heroTitle: string; heroLead: string; tags: string[];
  context: string; problem: string; constraints: string[];
  insight: string; system: string;
  impact: { v: string; k: string }[]; playbook: string;
}> = {
  "customer-retention-probability": {
    company: "Supertails", year: "2025", status: "Live in production",
    heroTitle: "Catching customers before they lapse, not after.",
    heroLead: "A daily score that flags who’s about to stop buying, wired straight into the team’s retention actions. Roughly 60% more conversions in the test group.",
    tags: ["Retention", "Subscription pet care", "Daily scoring"],
    context: "Supertails sells pet food and medicine on repeat. The model leans on customers coming back, so a customer who quietly stops ordering costs far more than it looks. Growth depends less on new sign-ups than on keeping the ones already here.",
    problem: "Plenty of customers placed a first order and never came back. By the time it showed up in the numbers they were already gone, and winning a lapsed customer back costs far more than keeping one who’s wavering.",
    constraints: [
      "No clean churned label to learn from. Churn here is silent, not a cancel button.",
      "The output had to be explainable to a non-technical retention team.",
      "It had to run every day, per customer, not as a one-off analysis.",
      "Built on messy, real-world event data across orders and app activity.",
    ],
    insight: "Retention is a prediction problem before it’s a campaign problem. The win isn’t a better win-back email. It’s knowing who’s about to slip while you can still do something about it.",
    system: "A daily repurchase-probability score for every customer, turned straight into an action the retention team could take.",
    impact: [
      { v: "~60%", k: "more conversions in the test group" },
      { v: "Daily", k: "scored per customer, in production" },
      { v: "Holdout", k: "measured against a control, not a guess" },
    ],
    playbook: "If your business runs on repeat purchase, treat retention as a prediction problem first. Score who’s about to lapse, act while you still can, and always measure against a holdout so the lift is real.",
  },
  "batters-bowlers-tag": {
    company: "CricHeroes", year: "2023", status: "Adopted platform-wide",
    heroTitle: "Giving millions of players a name for how they play.",
    heroLead: "Clustering turned a mountain of match data into nine playing styles the whole community adopted, five batting, four bowling.",
    tags: ["Player intelligence", "Clustering", "Community"],
    context: "CricHeroes is where millions of amateur cricketers record their matches. Players don’t just want stats. They want to be seen, to know what kind of cricketer they are.",
    problem: "There was a mountain of player data and no way for a player to find themselves in it. Numbers without a story don’t build identity, and identity is what keeps a community coming back.",
    constraints: [
      "No labels. Nobody had ever defined the types the model had to find.",
      "It had to feel obvious to players who aren’t analysts.",
      "It had to hold up across millions of players and stay true over time.",
      "The output had to be a name a player would proudly claim.",
    ],
    insight: "People don’t want a stat line. They want an identity. The win was handing every player a name for how they actually play.",
    system: "Clustering grouped players into nine playing styles, five batting and four bowling, that the community adopted as its own language.",
    impact: [
      { v: "Millions", k: "players tagged from a 30M+ base" },
      { v: "9 styles", k: "the language a community adopted" },
      { v: "Merch", k: "tags became products players bought" },
    ],
    playbook: "A data product wins when it hands the user an identity, not a dashboard. Find the few types your users already half-feel, and name them.",
  },
  "food-replenishment": {
    company: "Supertails", year: "2024", status: "Framework",
    heroTitle: "Reaching customers the moment before they run out.",
    heroLead: "A replenishment model that times each customer’s next order instead of nagging everyone on the same schedule.",
    tags: ["Replenishment", "Timing", "Subscription pet care"],
    context: "Pet food gets consumed on a clock. A bag lasts a fairly predictable number of days, which means there’s a right moment to remind a customer to reorder, and a wrong one.",
    problem: "Reminders were generic and mistimed. Customers ran out and bought elsewhere, or got nudged too early and tuned out. The reorder moment was being guessed, not modeled.",
    constraints: [
      "Two very different customers: repeat buyers with history, and first-timers with none.",
      "Consumption varies by pet, pack size, and household.",
      "It had to predict per customer and keep running, not score once.",
      "Getting the timing wrong in either direction loses trust.",
    ],
    insight: "Replenishment is a timing problem, not a discount problem. The job is to reach each customer just before they run low, every cycle.",
    system: "Predict each customer’s reorder window, nudge just before it, then learn from what they do and tighten the next prediction.",
    impact: [
      { v: "~75%", k: "precision on wet-food reorders" },
      { v: "~60%", k: "precision on dry-food reorders" },
      { v: "±7 days", k: "most predictions land within a week" },
    ],
    playbook: "For any business selling consumables, model the consumption clock, not just the purchase. The money is in the timing of the next order.",
  },
  "customer-affinity-modelling": {
    company: "Supertails", year: "2025", status: "Live in production",
    heroTitle: "Knowing what each customer actually cares about.",
    heroLead: "A scoring system that turns raw behaviour into a normalized affinity for every customer, across pet type, category, sub-category, and brand.",
    tags: ["Affinity scoring", "Personalization", "Subscription pet care"],
    context: "Supertails carries thousands of products across pet types, categories, and brands. Every customer cares about a different slice of it. Marketing, product, and CRM were all guessing at the same question: what does this specific customer actually care about?",
    problem: "The behaviour was all there: views, wishlists, add-to-carts, purchases. But it was fragmented and unweighted. A wishlist is not a purchase, and a view from 90 days ago is not one from yesterday. There was behaviour everywhere and preference signal nowhere.",
    constraints: [
      "Signals had to be weighted by intent, not counted equally.",
      "Affinity had to work at four levels: pet type, category, sub-category, brand.",
      "It had to feed many downstream systems, not sit in a report.",
      "It had to stay fresh as behaviour and the catalog changed.",
    ],
    insight: "Behaviour is not preference. The win was turning raw events into a weighted, normalized score for what each customer actually cares about, at every level of the catalog.",
    system: "Weight each event by intent, from a view up to a purchase, and roll it into normalized affinity scores per customer across pet type, category, sub-category, and brand.",
    impact: [
      { v: "4 levels", k: "pet type, category, sub-category, brand" },
      { v: "Weighted", k: "by intent, from a view to a purchase" },
      { v: "Live", k: "feeding recommendations in production" },
    ],
    playbook: "Before you personalize, score preference properly. Weight signals by intent, normalize them, and compute affinity at the granularity your downstream systems actually need.",
  },
  "adaptive-nudge-decision-engine": {
    company: "Supertails", year: "2025", status: "In rollout",
    heroTitle: "One decision per customer, instead of five campaigns.",
    heroLead: "A decision engine that picks the single best next action for each customer each cycle, sends it, and measures it.",
    tags: ["Decision engine", "Cross-channel", "Subscription pet care"],
    context: "Supertails could reach a customer many ways: email, WhatsApp, a discount, or nothing at all. Each channel and team ran its own campaigns, often nudging the same customer at once.",
    problem: "Overlapping campaigns meant the same customer got hit from several directions, spending budget and burning goodwill. No one owned the single question: what’s the one best thing to do for this customer right now?",
    constraints: [
      "Many teams, many channels, no shared decision layer.",
      "The best action changes per customer and per cycle.",
      "It had to be measurable, not just sent.",
      "It had to learn, not stay static.",
    ],
    insight: "The problem wasn’t more channels. It was the lack of one owner for the next action. Turn it from many campaigns into one decision, made per customer, per cycle.",
    system: "One engine takes every candidate action, picks the single best next action for each customer, sends it, measures against a holdout, and re-ranks each cycle.",
    impact: [
      { v: "One nudge", k: "per customer, per batch" },
      { v: "Explainable", k: "every decision answerable, or not shipped" },
      { v: "Learns", k: "every outcome feeds the next batch" },
    ],
    playbook: "When channels multiply, the fix isn’t another campaign. It’s a decision layer that owns the single next action and measures it. That is ANDE, the Adaptive Nudge Decision Engine.",
  },
  "ai-cricket-commentary": {
    company: "CricHeroes", year: "2024", status: "Three pilots evaluated",
    heroTitle: "Three GenAI commentary bets, judged on their own terms.",
    heroLead: "Bringing the pro-cricket experience, pre-match, live, and post-match, to grassroots players with GenAI. Three pilots, three different lessons about where it pays off.",
    tags: ["GenAI", "Evaluation", "Community"],
    context: "CricHeroes records millions of community matches. The vision was to bring the feel of international cricket, pre-match analysis, live ball-by-ball commentary, and a post-match wrap-up, to grassroots players using GenAI.",
    problem: "The question was never whether GenAI could write commentary. It was whether each of the three bets held up on quality and on cost once it ran at real volume.",
    constraints: [
      "It had to stay true to the real match events, no invented drama.",
      "It had to sound human, not like a template.",
      "It had to survive cost-at-scale, not just a demo.",
      "Quality had to be judged, not assumed.",
    ],
    insight: "Judge each GenAI bet on its own terms. The honest buckets are not GenAI worked or it did not. Cost-at-scale and quality are separate killers, and each pilot passed or failed for its own reason.",
    system: "Match events become structured context, the model writes grounded commentary, and each pilot is evaluated on engagement and on its cost at full volume before it ships.",
    impact: [
      { v: "+15%", k: "engagement on the live-commentary pilot, per match" },
      { v: "3 bets", k: "evaluated independently, not bucketed together" },
      { v: "Cost-at-scale", k: "what paused the pre and post-match shows" },
    ],
    playbook: "Before scaling a GenAI feature, price it at real volume and judge quality on its own terms. A demo that costs five rupees a match can become fifty lakh a month.",
  },
};

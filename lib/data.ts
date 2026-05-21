// All site content lives here so you can edit copy without touching components.

export const meta = {
  siteUrl: "https://maulinshah.vercel.app",
  siteName: "Maulin Shah, Fractional AI Lead",
  defaultTitle: "Maulin Shah \u00b7 Fractional AI Lead",
  defaultDescription:
    "I help founder-led startups turn 'we\u2019ll figure out the data later' into something they can act on, defend, and explain, embedded as the senior data and AI person they don\u2019t yet have.",
  author: "Maulin Shah",
  location: "Ahmedabad, India",
};

// Email is split into user and domain to avoid having a literal email string
// in the source code. Some browser extensions and network filters scan for
// email patterns and replace them with "[email protected]" placeholders.
// Storing as parts means the email pattern only exists at runtime, briefly.
export const social = {
  emailUser: "maulinshah1992",
  emailDomain: "gmail.com",
  linkedin: "https://www.linkedin.com/in/maulinshah92",
  calendly: "https://calendly.com/maulinshah1992/30min",
};

export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Fractional AI Lead",
  headline:
    'For startup founders who\u2019ve outgrown \u201Cwe\u2019ll figure out the data later.\u201D',
  subhead:
    "I help you turn that instinct into something you can act on, defend, and explain. The senior data and AI person you don\u2019t yet have on the team.",
  primaryCta: { label: "Start a conversation", href: "#contact" },
  secondaryCta: { label: "See how I work", href: "#approach" },
};

export const situation = {
  sectionNumber: "01",
  sectionLabel: "The situation I see most",
  paragraphs: [
    "Most funded startup founders I meet are in the same spot. The business is growing 2x, 3x. Data is piling up across teams. They\u2019ve decided AI should be doing more for them. They want to build the next thing, hit the next growth lever, present clearer numbers to the board.",
    "But the how isn\u2019t clear: how the data holds up, what AI gets built where, how they\u2019ll know it\u2019s working. They don\u2019t have answers. The team doesn\u2019t have someone who can deal with it. Even when something gets built, no one in the room is confident enough to say it\u2019s correct.",
    "So the plan stays in _\u201Cwe\u2019ll figure it out when we get to it\u201D_ mode, and the next phase of growth keeps getting deferred.",
  ],
};

export const approach = {
  sectionNumber: "02",
  sectionLabel: "How I work",
  heading: "Partnership, not handover",
  intro: [
    "We pick one high-value AI or business problem, define the outcome together, and I come in as the senior data and AI brain on your team. I lead the roadmap, define the data and decision logic, work alongside your team on execution, and keep the work tied to business impact.",
    "Engagements are structured for embedded ownership. Two to three concurrent clients, defined hour bands per month, three-month minimum.",
  ],
  phases: [
    {
      when: "Days 0 to 7",
      title: "Listen and audit",
      icon: "Headphones",
      text: "I sit with you and your leadership to understand the business objective, where data lives today, how it\u2019s collected, and what your team actually trusts.",
    },
    {
      when: "Days 8 to 15",
      title: "Reality check",
      icon: "ScanSearch",
      text: "I surface the gap between what you think the data is telling you and what it actually is. This is usually where the first uncomfortable truths show up, and where the work earns its keep.",
    },
    {
      when: "Days 16 to 30",
      title: "Roadmap",
      icon: "Route",
      text: "We define scope together and produce a written data and AI roadmap: what to fix, what to build, what to use AI for, what isn\u2019t worth touching yet, and what isn\u2019t possible yet given your data.",
    },
    {
      when: "Day 31 onwards",
      title: "Embedded operator",
      icon: "Wrench",
      text: "I\u2019m the senior data and AI brain on your team. That means owning the roadmap, building dashboards, automation, and ML systems that earn their keep, sitting in on the calls that matter, and lifting your team\u2019s capability so they carry more of it themselves over time.",
    },
  ],
};

export const outcomes = {
  sectionNumber: "03",
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
      text: "You walk into board meetings with a single source of truth, can answer investor questions on the spot without scrambling, and have a written roadmap that tells the team what\u2019s worth building and what isn\u2019t.",
    },
    {
      month: "Month 6",
      icon: "Zap",
      text: "AI and automation systems are earning measurable hours back per week. Leadership makes decisions from the same set of numbers. The conversation shifts from _\u201Cis the data right?\u201D_ to _\u201Cwhat should we do about it?\u201D_",
    },
    {
      month: "Month 9",
      icon: "Users",
      text: "The team operates from data confidently enough that _\u201Cwe\u2019ll figure it out later\u201D_ has stopped being something anyone says.",
    },
    {
      month: "Month 12",
      icon: "Target",
      text: "You have the clarity to keep going with or without me in the seat. That\u2019s the goal.",
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
  sectionNumber: "04",
  sectionLabel: "Selected work",
  heading: "What I\u2019ve built, what I\u2019m building",
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
          status: "Supertails \u00b7 2024 to 2025",
          cta: "Read the case study",
          href: "/case-studies/food-replenishment",
        },
      ],
    },
    personal: {
      label: "Personal projects",
      cards: [
        {
          title: "Nerdy Cricket",
          description:
            "A web app for the geeky cricket fan. The layer of insight Cricbuzz, ESPNcricinfo, and Fancode don\u2019t go to. Built solo with AI agents.",
          icon: "Activity",
          tags: [
            { label: "Sports analytics", variant: "blue" },
            { label: "Live data", variant: "blue" },
          ],
          status: "Live",
          cta: "Visit",
          href: "https://nerdycricket.com",
        },
        {
          title: "AI-Trading-Copilot",
          description:
            "A multi-agent system that scans, screens, and surfaces daily trading and investing opportunities in one click. Built as a personal tool. Demos available on request given the live market signals involved.",
          icon: "Bot",
          tags: [
            { label: "Agent orchestration", variant: "teal" },
            { label: "Markets", variant: "teal" },
          ],
          status: "In active development",
        },
        {
          title: "AI-JobImpact Assessment",
          description:
            "A diagnostic tool being built for professionals to understand how AI is likely to reshape their specific role. Designed for clarity, not fear-mongering.",
          icon: "Briefcase",
          tags: [
            { label: "Career strategy", variant: "purple" },
            { label: "AI literacy", variant: "purple" },
          ],
          status: "In design",
        },
      ],
    },
  },
};

export const about = {
  sectionNumber: "05",
  sectionLabel: "About",
  heading: "A short version",
  paragraphs: [
    "I\u2019ve spent the last decade as the only person in the room who could see the full shape of the data problem. System administrator at SAC-ISRO. Analytics consulting on forecasting and predictive maintenance for an oil and gas major in Malaysia. Senior data scientist at a sports-tech startup for five years, building the data infrastructure from scratch, then product features and ML models on top of it. EIR in pet-tech at Supertails, where I built a replenishment framework and a cross-channel personalization system across on-app and off-app touchpoints.",
    "I left full-time roles to do this work as a partner to founders, on my own terms. Based in Ahmedabad. Working with founders across India remotely. Happy to travel when the work calls for it.",
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
  quote:
    "My work isn\u2019t done when the model ships. It\u2019s done when you can stand in front of your board and explain it as if you built it yourself.",
  languagesLabel: "Working languages",
  languages:
    "English, Hindi, and Gujarati for client work. Working Marathi for informal conversation. Some Spanish.",
};

export const contact = {
  sectionNumber: "06",
  sectionLabel: "Get in touch",
  heading: "Let\u2019s see if there\u2019s a fit",
  body: "A first conversation is structured around your actual situation: what you\u2019re trying to crack, what data you\u2019re sitting on, what\u2019s been getting in the way. If we\u2019re not a fit, I\u2019ll tell you who is.",
  bookingLabel: "Book a meeting",
  emailLabel: "Copy email",
  emailCopiedLabel: "\u2713 Copied! Paste anywhere",
  linkedinLabel: "Connect on LinkedIn",
};

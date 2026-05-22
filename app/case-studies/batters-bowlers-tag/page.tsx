import Link from "next/link";
import {
  ArrowLeft,
  Trophy,
  Users,
  ShoppingBag,
  MessageCircle,
  Activity,
  Sparkles,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Batters & Bowlers Tag · Maulin Shah",
  description:
    "An ML clustering system at CricHeroes that classified grassroots cricketers into five batting archetypes. Rolled out to millions of players. Became the language a community uses to talk about itself, and the basis for a personalized merchandise line.",
};

const archetypes = [
  {
    number: "01",
    name: "Steady Batter",
    description:
      "Cautious. Builds the innings slowly. The bedrock of a chase.",
  },
  {
    number: "02",
    name: "Classicist",
    description:
      "Higher strike rate. Believes in singles and doubles. Keeps the score moving.",
  },
  {
    number: "03",
    name: "Accumulator",
    description:
      "Decent strike rate. Plays the situation. Adjusts to what the game needs.",
  },
  {
    number: "04",
    name: "Hard Hitter",
    description:
      "Powerful striker. Boundaries or dot balls. The risk and the reward.",
  },
  {
    number: "05",
    name: "Destroyer",
    description:
      "Power hitter who can change the course of a game in a short burst.",
  },
];

const impactBlocks = [
  {
    icon: <Activity size={16} aria-hidden />,
    title: "Adoption inside the first month",
    body: "The feature was rolled out to a few million players who met the eligibility cutoff — the rest of the 30M+ player base needed more historical data to qualify. Within the first month, adoption was visible across the platform. Players talked about their tags, compared with teammates, debated placements.",
  },
  {
    icon: <MessageCircle size={16} aria-hidden />,
    title: "Inquiries from day one",
    body: "The strongest engagement signal arrived immediately. Why am I tagged as an Accumulator? Why isn’t my friend a Destroyer? What does it take to become a Hard Hitter? Players didn’t just see the tag — they questioned it, engaged with it, and started thinking about how to change it.",
  },
  {
    icon: <Users size={16} aria-hidden />,
    title: "A new vocabulary for self-improvement",
    body: "Players began using the tags to set development goals. ‘I want to be a Classicist this season.’ ‘I need to add power to move from Steady to Hard Hitter.’ Grassroots cricketers had stats before; what they didn’t have was a language for who they were and who they wanted to become. The tags gave them one.",
  },
  {
    icon: <Trophy size={16} aria-hidden />,
    title: "The community started speaking the language",
    body: "Within months, the tags became how the CricHeroes community talked about cricket. Captains started referencing them in team selection. Players compared archetypes alongside averages and strike rates. It moved from a feature on a profile screen to a vocabulary for the platform.",
  },
  {
    icon: <ShoppingBag size={16} aria-hidden />,
    title: "A merchandise line built on the tags",
    body: "The tags moved beyond the app. CricHeroes launched a personalized merchandise line built around them — t-shirts, caps, and pads branded with each archetype. A clustering model had spawned a revenue line. Not a side effect of the project — a direct consequence of the cultural traction the tags earned.",
  },
  {
    icon: <Sparkles size={16} aria-hidden />,
    title: "Still one of the most distinctive features today",
    body: "Years after launch, the Batters & Bowlers Tag remains one of the most distinctive and impactful features on the platform. Most ML features get tuned, then replaced, then forgotten. This one became part of the product’s identity.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function BattersBowlersTagPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      {/* Back link */}
      <div className="max-w-content mx-auto px-6 pt-8 pb-2">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to selected work
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-content mx-auto px-6 pt-6 pb-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent font-medium mb-4">
          CricHeroes · Launched 2022 · Live in production
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          Batters & Bowlers Tag
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          An ML clustering system that classified grassroots cricketers into
          five batting archetypes. Rolled out to millions of players on
          CricHeroes. Became the language a community uses to talk about
          itself — and the basis for a personalized merchandise line.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Clustering ML
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Player profiling
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Product-as-ML
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Sports-tech
          </span>
        </div>
      </header>

      <hr className="border-ink-200" />

      {/* 01 The situation */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="The situation" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Thirty million cricketers with stats, but no identity
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            CricHeroes is one of the largest cricket platforms in the world
            for grassroots players. By 2022, over 30 million cricketers were
            scoring matches and tracking their stats on the app.
          </p>
          <p>
            Every player saw their runs, averages, strike rates. What no one
            saw was{" "}
            <em>who they were as a cricketer</em>. Were they aggressive or
            steady? Boundary-hitters or single-takers? Match-changers or
            match-builders? The information existed in every score they
            recorded. The identity didn’t.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 The bet */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="The bet" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Cluster players into archetypes that mean something
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Use unsupervised ML to cluster grassroots cricketers based on
            their performance patterns. Surface each player’s cluster as a
            tag on their profile. Make the tag mean something — not “Cluster
            3” but a name with character that a player could read, recognize,
            and share with teammates.
          </p>
          <p>
            The approach was inspired by Karthik S’s{" "}
            <em>Balanced Lineups</em> analysis of 2019 World Cup batters,
            which used K-means clustering to identify playing styles among
            professional players. The CricHeroes team adapted the same
            approach for grassroots — but at the scale of millions of players,
            not a few dozen.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 Five archetypes */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="The five archetypes" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          From cautious to explosive — the five kinds of batters
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The model surfaced five distinct clusters when K-means was set at
            k=5 (validated via the Elbow Method). Each cluster captured a
            recognizable playing style — ordered here from the most cautious
            to the most aggressive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {archetypes.map((a, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
                {a.number}
              </div>
              <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-2">
                {a.name}
              </div>
              <div className="text-[12px] text-ink-600 leading-[1.55]">
                {a.description}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-ink-500 leading-[1.65] mt-6">
          The same methodology was extended to bowlers, classifying them into
          archetypes by line, length, economy, and wicket-taking patterns.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 04 What happened after launch */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="What happened after launch" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          From feature to community language to revenue line
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Most ML features ship, move a metric a few points, and live the
            rest of their lives in a dashboard. This one moved through the
            product, into the community, and out into the merchandise aisle.
          </p>
        </div>

        <div className="space-y-3">
          {impactBlocks.map((b, i) => (
            <ImpactBlock key={i} {...b} />
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 05 Reflections */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="05" label="Reflections" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-8">
          What made it work, what it taught me
        </h2>

        <div className="space-y-8">
          <ReflectionBlock
            title="What made it work"
            icon={<CheckCircle2 size={16} aria-hidden />}
            items={[
              "Translating ML output into product language. Players understood ‘Destroyer’ instantly. They wouldn’t have engaged with ‘Cluster 5.’ The naming wasn’t cosmetic — it was the product.",
              "Eligibility cutoff. Not every player qualified for a tag. The model needed enough match history to cluster confidently, and players without enough history were held back rather than mislabeled. That discipline protected trust.",
              "Letting the community make the feature their own. Once players started comparing tags, debating placements, and building team selection around them, the platform stopped pushing the feature — the community pulled it forward.",
            ]}
          />
          <ReflectionBlock
            title="What it taught me"
            icon={<Sparkles size={16} aria-hidden />}
            items={[
              "Naming matters as much as architecture. A perfectly tuned clustering with anonymous labels is a footnote. A simply tuned clustering with names that carry character is a product.",
              "Engagement signal precedes revenue signal. The day-one inquiries told us the merchandise idea would work months before we tested it. Curiosity is the best leading indicator.",
              "Some ML features ARE the product. The Batters & Bowlers Tag wasn’t an enhancement to the scoring app — it became one of its anchors. Worth remembering when scoping any ML build: is this a feature, or is it a product surface?",
            ]}
          />
        </div>
      </section>

      {/* Technical detail (collapsible) */}
      <section className="max-w-content mx-auto px-6 pb-12">
        <details className="group bg-surface border-[0.5px] border-ink-200 rounded-md">
          <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between hover:bg-ink-50 transition-colors">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-0.5">
                For depth
              </div>
              <div className="font-serif text-[16px] font-medium text-ink">
                Technical detail
              </div>
            </div>
            <ChevronDown
              size={18}
              className="text-ink-500 group-open:rotate-180 transition-transform"
              aria-hidden
            />
          </summary>

          <div className="px-5 pb-5 pt-3 space-y-6 border-t border-ink-100">
            <TechBlock title="Methodology">
              <p>
                Unsupervised clustering of player performance data using
                K-means. Features were extracted from full historical
                performance — runs, balls faced, strike rates, boundary
                percentages, dot-ball percentages, dismissal patterns, scoring
                tempo across phases, and consistency measures across matches.
              </p>
              <p>
                The Elbow Method was used for cluster validation. Within-cluster
                variance was plotted against k, and the inflection point at
                k=5 produced the cleanest separation between playing styles.
                Both higher and lower k values either over-fragmented similar
                styles or merged genuinely distinct ones.
              </p>
            </TechBlock>

            <TechBlock title="Inspiration & intellectual lineage">
              <p>
                The approach was inspired by Karthik S’s{" "}
                <em>Balanced Lineups</em> article, written ahead of the 2019
                ICC World Cup. That analysis applied K-means clustering to
                identify playing styles among professional ODI batters and
                used the results to assess team lineup balance.
              </p>
              <p>
                The CricHeroes adaptation kept the core methodology but moved
                from dozens of professional players to millions of grassroots
                cricketers — requiring more careful feature engineering to
                handle the wider variance in match volume and quality at the
                grassroots level.
              </p>
              <p>
                <a
                  href="https://medium.com/cricheroes/5-kinds-of-batters-5e8ed5977d6d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:no-underline"
                >
                  CricHeroes Medium article: How do we tag batters?
                </a>
              </p>
            </TechBlock>

            <TechBlock title="Format coverage">
              <p>
                The tagging logic was designed to work across the multiple
                match formats CricHeroes supports — Limited Over Matches, Test
                Matches, Pair Cricket, and The Hundred. Features were
                normalized within each format so that, for instance, a Hard
                Hitter in T20 cricket and a Hard Hitter in a 50-over format
                were both correctly identified despite different absolute
                scoring patterns.
              </p>
            </TechBlock>

            <TechBlock title="Deployment & monitoring">
              <p>
                The clustering pipeline ran on production player data and
                surfaced the tag directly on each eligible player’s profile.
                The model was monitored continuously after launch — both for
                drift in cluster characteristics and for shifts in player
                distribution across clusters as the platform’s user base
                evolved.
              </p>
              <p>
                Tools: Python (Scikit-Learn for clustering and validation),
                AWS RDS and S3 for source data and model artifacts, BigQuery
                for aggregated performance metrics feeding the feature store.
              </p>
            </TechBlock>
          </div>
        </details>
      </section>

      <hr className="border-ink-200" />

      {/* Footer */}
      <footer className="max-w-content mx-auto px-6 py-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to selected work
        </Link>
      </footer>
    </main>
  );
}

/* ---------- Sub-components ---------- */

function ImpactBlock({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-md p-5 flex gap-4 items-start">
      <div className="w-8 h-8 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-serif text-[17px] font-medium text-ink leading-tight mb-2">
          {title}
        </div>
        <p className="text-[14px] text-ink-700 leading-[1.65]">{body}</p>
      </div>
    </div>
  );
}

function ReflectionBlock({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="border-l-2 border-l-accent bg-accent-soft/40 pl-5 py-2">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 rounded flex items-center justify-center bg-accent-soft text-accent">
          {icon}
        </span>
        <h3 className="font-serif text-[18px] font-medium text-ink leading-tight">
          {title}
        </h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[14px] text-ink-700 leading-[1.65] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {title}
      </div>
      <div className="space-y-2 text-[13px] text-ink-700 leading-[1.65]">
        {children}
      </div>
    </div>
  );
}

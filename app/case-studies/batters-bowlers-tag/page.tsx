import { Nav } from "@/components/Nav";
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
    "An ML clustering system at CricHeroes that classified grassroots cricketers into five batting and four bowling archetypes. Rolled out to millions of players. Became the language a community uses to talk about itself, and the basis for a personalized merchandise line.",
};

const batterArchetypes = [
  {
    number: "01",
    name: "Steady Batter",
    description: "Cautious. Builds the innings slowly. The bedrock of a chase.",
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

const bowlerArchetypes = [
  {
    number: "01",
    name: "Aspirant",
    description:
      "Carries the potential and the skills. Still earning the game time to show it.",
  },
  {
    number: "02",
    name: "Wildcard",
    description:
      "Trades runs for wickets, fearlessly. The captain’s gamble that often pays off.",
  },
  {
    number: "03",
    name: "Economist",
    description:
      "Delivers tight spells and seizes wickets at regular intervals. The pressure-builder.",
  },
  {
    number: "04",
    name: "Spearhead",
    description:
      "Highest chance of taking a wicket while keeping the runs under control. The match-winner.",
  },
];

const tacticalUses = [
  {
    scenario: "Chasing a steep target",
    body: "Send an Accumulator and a Hard Hitter at the top. The Accumulator paces the chase; the Hard Hitter punishes loose deliveries. If a wicket falls early, send a Classicist to hold one end so you don’t lose another.",
  },
  {
    scenario: "Defending a low total",
    body: "Lean on the Economist for early pressure: dot balls, tight lines, no boundary balls. Save the Spearhead overs for when wickets matter most.",
  },
  {
    scenario: "Reading your own team",
    body: "Too many Steady Batters and Classicists? Your lineup isn’t built for chasing big totals. Too many Economists in the bowling unit? Consider batting first. Your strength is defending, not breaking through.",
  },
];

const impactBlocks = [
  {
    icon: <Activity size={16} aria-hidden />,
    title: "Adoption inside the first month",
    body: "The feature was rolled out to a few million eligible players from a base of 30M+. The rest of the platform needed more historical data or format consistency to qualify. Within the first month, adoption was visible across the platform. Players talked about their tags, compared with teammates, debated placements.",
  },
  {
    icon: <MessageCircle size={16} aria-hidden />,
    title: "Inquiries from day one",
    body: "The strongest engagement signal arrived immediately. Why am I tagged as an Accumulator? Why isn’t my friend a Destroyer? What does it take to become a Hard Hitter or a Spearhead? Players didn’t just see the tag. They questioned it, engaged with it, and started thinking about how to change it.",
  },
  {
    icon: <Users size={16} aria-hidden />,
    title: "A new vocabulary for self-improvement",
    body: "Players began using the tags to set development goals. ‘I want to be a Classicist this season.’ ‘I need to add power to move from Steady to Hard Hitter.’ ‘I want to bowl tighter and become an Economist.’ Grassroots cricketers had stats before; what they didn’t have was a language for who they were and who they wanted to become. The tags gave them one.",
  },
  {
    icon: <Trophy size={16} aria-hidden />,
    title: "The community started speaking the language",
    body: "Within months, the tags became how the CricHeroes community talked about cricket. Captains referenced them in team selection. Players compared archetypes alongside averages and strike rates. The vocabulary moved from a feature on a profile screen to the lingua franca of the platform.",
  },
  {
    icon: <ShoppingBag size={16} aria-hidden />,
    title: "A merchandise line built on the tags",
    body: "The tags moved beyond the app. CricHeroes launched a personalized merchandise line built around them: t-shirts, caps, and pads branded with each archetype. A clustering model had spawned a revenue line. Not a side effect of the project, but a direct consequence of the cultural traction the tags earned.",
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
      <Nav />
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
          An ML clustering system that classified grassroots cricketers into{" "}
          <strong>five batting</strong> and <strong>four bowling</strong>{" "}
          archetypes. Rolled out to millions of players on CricHeroes. Became
          the language a community uses to talk about itself, and the basis
          for a personalized merchandise line.
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
            Every player saw their runs, averages, strike rates. Every bowler
            saw their wickets, economy, dot-ball percentage. What no one saw
            was{" "}
            <em>who they were as a cricketer</em>. Were they aggressive or
            steady? Were they wicket-takers or run-stoppers? Match-changers or
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
            their performance patterns. Build two parallel systems: one for
            batters, one for bowlers. Surface each player’s cluster as a tag
            on their profile. Make the tag mean something: not “Cluster 3”
            but a name with character that a player could read, recognize,
            and share with teammates.
          </p>
          <p>
            The approach was inspired by Karthik S’s{" "}
            <em>Balanced Lineups</em> analysis of 2019 World Cup batters,
            which used K-means clustering to identify playing styles among
            professional players. The CricHeroes team adapted the same
            approach for grassroots, but at the scale of millions of
            players, not a few dozen, and extended the framework to bowlers as
            well.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 The archetypes */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="The archetypes" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Five kinds of batters, four kinds of bowlers
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The model produced two separate sets of tags. The framework was
            consistent: cluster on performance patterns, validate with the
            Elbow Method, surface as a tag, but the number of natural
            clusters was different. Five for batters. Four for bowlers. That’s
            what the data said, and that’s what shipped.
          </p>
        </div>

        {/* Batter archetypes */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4 mt-10">
          Five kinds of batters
        </h3>
        <p className="text-[13.5px] text-ink-600 leading-[1.65] mb-5">
          Ordered from the most cautious to the most aggressive.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
          {batterArchetypes.map((a, i) => (
            <ArchetypeCard key={`b-${i}`} {...a} />
          ))}
        </div>

        {/* Bowler archetypes */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          Four kinds of bowlers
        </h3>
        <p className="text-[13.5px] text-ink-600 leading-[1.65] mb-5">
          Ordered from developing potential to proven match-winner.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {bowlerArchetypes.map((a, i) => (
            <ArchetypeCard key={`bw-${i}`} {...a} />
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 04 How captains use them */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="How captains use them" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          The tags aren’t labels. They’re a playbook for team selection.
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The real value of the tags shows up when captains read them
            together. A balanced batting lineup needs a mix, not all
            Destroyers, not all Steady Batters. A balanced bowling unit needs
            both pressure-builders and wicket-takers. The tags made that
            balance visible at a glance.
          </p>
        </div>

        <div className="space-y-3">
          {tacticalUses.map((t, i) => (
            <TacticalCard key={i} {...t} />
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 05 What happened after launch */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="05" label="What happened after launch" />
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

      {/* 06 Reflections */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="06" label="Reflections" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-8">
          What made it work, what it taught me
        </h2>

        <div className="space-y-8">
          <ReflectionBlock
            title="What made it work"
            icon={<CheckCircle2 size={16} aria-hidden />}
            items={[
              "Translating ML output into product language. Players understood ‘Destroyer’ and ‘Spearhead’ instantly. They wouldn’t have engaged with ‘Cluster 5’ or ‘Cluster 3.’ The naming wasn’t cosmetic. It was the product.",
              "Letting the data choose the number of clusters. The Elbow Method pointed at five for batters and four for bowlers. Not five and five for symmetry. The asymmetry was honest. Bowlers cluster differently than batters do, and forcing parallel structure would have meant worse tags.",
              "Eligibility cutoffs. Not every player qualified. The model needed enough match history in a single format to cluster confidently. Players without that history were held back rather than mislabeled. That discipline protected trust.",
              "Letting the community make the feature their own. Once players started comparing tags, debating placements, and building team selection around them, the platform stopped pushing the feature. The community pulled it forward.",
            ]}
          />
          <ReflectionBlock
            title="What it taught me"
            icon={<Sparkles size={16} aria-hidden />}
            items={[
              "Naming matters as much as architecture. A perfectly tuned clustering with anonymous labels is a footnote. A simply tuned clustering with names that carry character is a product.",
              "Engagement signal precedes revenue signal. The day-one inquiries told us the merchandise idea would work months before we tested it. Curiosity is the best leading indicator.",
              "Some ML features are the product. The Batters & Bowlers Tag wasn’t an enhancement to the scoring app. It became one of its anchors. Worth remembering when scoping any ML build: is this a feature, or is it a product surface?",
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
                K-means, validated with the Elbow Method. Two separate models
                , one for batters, one for bowlers, each producing its own
                cluster set.
              </p>
              <p>
                For batters, within-cluster variance dropped most sharply
                until k=5; for bowlers, the inflection landed at k=4. Forcing
                higher k values over-fragmented similar playing styles;
                forcing lower values merged genuinely distinct ones.
              </p>
            </TechBlock>

            <TechBlock title="Batter features">
              <p>
                Drawn from full historical performance: runs, balls faced,
                strike rates, boundary percentages, dot-ball percentages,
                dismissal patterns, scoring tempo across phases, consistency
                measures across matches.
              </p>
            </TechBlock>

            <TechBlock title="Bowler features">
              <p>
                A tighter feature set than batters, focused on the metrics
                that distinguish bowling styles: number of wickets, economy,
                bowling average, bowling strike rate, dot-ball percentage.
              </p>
            </TechBlock>

            <TechBlock title="Eligibility">
              <p>
                Tags were never assigned to players without sufficient
                history. The eligibility rules existed to protect trust. A
                wrong tag is worse than no tag.
              </p>
              <p>
                <strong>For batters</strong>: verified user, at least 10
                genuine matches in a single format, tagged in the format
                played most.
              </p>
              <p>
                <strong>For bowlers</strong>: verified user, played the
                limited-overs format, at least 8 matches with sufficient overs
                bowled, at least 10 wickets taken.
              </p>
            </TechBlock>

            <TechBlock title="Format coverage">
              <p>
                Limited-overs cricket was grouped into three bands by overs
                per innings:
              </p>
              <p>
                <span className="font-mono text-[12px] bg-ink-50 px-1.5 py-0.5 rounded border-[0.5px] border-ink-100">6–12 overs → T10</span>,{" "}
                <span className="font-mono text-[12px] bg-ink-50 px-1.5 py-0.5 rounded border-[0.5px] border-ink-100">13–20 overs → T20</span>,{" "}
                <span className="font-mono text-[12px] bg-ink-50 px-1.5 py-0.5 rounded border-[0.5px] border-ink-100">21–99 overs → Others</span>.
              </p>
              <p>
                Box (Indoor) Cricket, The Hundred, and Test matches were
                outside scope at launch. Players were tagged in the format
                where they had played the most matches, not across all
                formats: a Hard Hitter in T20 might be a Steady Batter at the
                T10 cadence, and the tag was honest about which game it
                described.
              </p>
            </TechBlock>

            <TechBlock title="Where the tags appeared">
              <p>
                The tag was surfaced on the player’s mini profile, full
                profile, and team lineup view. Three surfaces with three
                different audiences: the player themselves, anyone viewing
                them, and the captain selecting a side.
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
                cricketers, requiring more careful feature engineering to
                handle the wider variance in match volume and quality at the
                grassroots level, and extended the framework to bowlers, who
                weren’t in the original analysis.
              </p>
              <p>
                <a
                  href="https://medium.com/cricheroes/5-kinds-of-batters-5e8ed5977d6d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:no-underline"
                >
                  Read the full feature walkthrough on CricHeroes Medium →
                </a>
                <span className="text-ink-500"> Written by Abhishek Desai, founder of CricHeroes.</span>
              </p>
            </TechBlock>

            <TechBlock title="Deployment & monitoring">
              <p>
                The clustering pipelines ran on production player data and
                surfaced the tag directly on each eligible player’s profile.
                Both models were monitored continuously after launch, for
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

      {/* Founder takeaway */}
      <section className="max-w-content mx-auto px-6 pb-4">
        <div className="bg-accent-soft/40 border-l-2 border-accent rounded-md px-5 py-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent font-medium mb-2">
            Founder takeaway
          </div>
          <p className="text-[15px] text-ink-800 leading-[1.6]">
            The strongest data product is one users adopt as their own language. That comes from giving people an identity, not just a stat.
          </p>
        </div>
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

function ArchetypeCard({
  number,
  name,
  description,
}: {
  number: string;
  name: string;
  description: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex flex-col">
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {number}
      </div>
      <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-2">
        {name}
      </div>
      <div className="text-[12px] text-ink-600 leading-[1.55]">
        {description}
      </div>
    </div>
  );
}

function TacticalCard({
  scenario,
  body,
}: {
  scenario: string;
  body: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-md p-5">
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {scenario}
      </div>
      <p className="text-[14px] text-ink-700 leading-[1.65]">{body}</p>
    </div>
  );
}

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

import { Nav } from "@/components/Nav";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Activity,
  Brain,
  Trophy,
  TrendingUp,
  Swords,
  Gauge,
  Users,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "NerdyCricket · Maulin Shah",
  description:
    "A platform built by a cricket nerd, for the cricket fan fraternity. The things commentators say about pressure, momentum, and rivalry, turned into numbers you can study and share. Live at nerdycricket.com.",
};

const features = [
  {
    icon: <Gauge size={18} aria-hidden />,
    title: "Pressure made visible",
    body: "Match Pressure Series. Ball-by-ball pressure scoring across every match in the database. When the commentator says the pressure is building, this is the chart that shows you how much it built, when, and over which delivery.",
  },
  {
    icon: <Activity size={18} aria-hidden />,
    title: "Momentum shifts quantified",
    body: "Momentum Map. A 17-event engine that detects shifts in match control and names them in cricket language. 12,146 momentum events across 1,217 matches, with 3 to 5 annotated turning points per match showing where control actually changed hands.",
  },
  {
    icon: <Swords size={18} aria-hidden />,
    title: "Who owns the head-to-head",
    body: "Rivalry Index. 29,525 batter-vs-bowler career matchups labelled with dominance (Dominant / Neutral / Struggles), intensity (Fierce / Developing / Emerging), and confidence tier. When fans argue about who has the upper hand, the database has an answer.",
  },
  {
    icon: <Users size={18} aria-hidden />,
    title: "What kind of player you really are",
    body: "Player profiles with phase depth. 93 career stats and 106 derived indices per player. Powerplay / Middle / Death phase breakdowns applied uniformly. Ball-by-ball scoring patterns vs Pace and vs Spin. Stats sliced by venue, sliced by opposition. The depth that mainstream platforms summarize away.",
  },
  {
    icon: <Trophy size={18} aria-hidden />,
    title: "The story behind every record",
    body: "Records Room and Hall of Fame. 92 all-time IPL leaderboards. 5,249 leaderboard entries with 134 sub-leaderboards sliced by batting position, wicket number, and venue. The Hall of Fame adds live D:H:M:S tenure timers counting how long the current holder has held the record, plus the full lineage of every prior holder with dates, days held, and links to the matches where the record changed hands. The record becomes a story, not a number.",
  },
  {
    icon: <TrendingUp size={18} aria-hidden />,
    title: "An honest forecast",
    body: "Cap Race Simulator. Probabilistic forecasting of the Orange and Purple Caps using quantile regression plus Monte Carlo over 10,000 simulated seasons. 90% top-3 accuracy by match 50. The model calibrates honestly: when it says a player has over 50% chance, the player wins 100% of the time. Reports probability bands, not confident guesses.",
  },
  {
    icon: <Brain size={18} aria-hidden />,
    title: "Test your Cricket IQ",
    body: "Five daily puzzles built on 18 years of IPL data. Guess the Player, Guess the Match, Guess the Team, Mystery Stat, and Trivia. Each contributes to a single composite Cricket IQ that becomes your shareable identity. With 1,226 matches and 788 players behind it, the puzzle inventory is effectively infinite.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function NerdyCricketPage() {
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
          Personal project · Live at nerdycricket.com · IPL 2026 season
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          NerdyCricket
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A platform for cricket fans who want more than commentary.
          NerdyCricket turns the qualitative things commentators say (pressure,
          momentum, rivalry) into numbers you can study, argue about, and
          share.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Match Pressure
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Momentum Mapping
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Probabilistic Forecasting
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Rivalry Index
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Cricket IQ
          </span>
        </div>
        <a
          href="https://nerdycricket.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-page font-medium text-[14px] px-5 py-3 rounded hover:bg-accent transition-colors"
        >
          Visit nerdycricket.com
          <ExternalLink size={14} aria-hidden />
        </a>
      </header>

      <hr className="border-ink-200" />

      {/* 01 Why I built this */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="Why I built this" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Built by a cricket nerd, for the cricket fan fraternity
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            I&apos;ve been following and playing cricket since I was five.
            I&apos;ve played the game, watched it, and worked in the cricket
            world.
          </p>
          <p>
            There are mainstream platforms that do live score updates,
            commentary, and a few analytical charts very well. Cricbuzz,
            ESPNcricinfo, Fancode are doing great at attracting and engaging
            the mass cricket audience.
          </p>
          <p>
            But being a cricket nerd, I have always felt like there&apos;s so
            much more that can be done. I couldn&apos;t understand why
            mainstream platforms don&apos;t bring that depth to the mass
            audience.
          </p>
          <p>
            So much in cricket is left to the fan&apos;s own interpretation.
            So many things just stay as words. In a match we often hear
            commentators say things like &ldquo;the pressure is building on
            the batting team now&rdquo; or &ldquo;this over has shifted the
            entire momentum of the match.&rdquo; But nobody actually shows
            you how much of a momentum shift happened. Nobody shows you how
            much pressure got added.
          </p>
          <p>
            These are terms that can be converted from qualitative to
            quantitative analysis, if you understand the game well enough and
            have the data expertise and pattern recognition skills to find
            the patterns underneath.
          </p>
          <p>
            That&apos;s where I sit. Cricket knowledge plus data expertise
            plus pattern recognition, developed over years. NerdyCricket is
            what comes out of that intersection. Built by a cricket nerd, for
            the cricket fan fraternity, to enjoy and understand cricket a
            little more deeply than what other platforms offer. Knowledge and
            going one step deeper is the core philosophy.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 Where the words become numbers */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="Where the words become numbers" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Seven things mainstream cricket apps don&apos;t show you
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-8">
          Here is what the platform actually quantifies, and what each feature
          was built to answer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex gap-3 items-start"
            >
              <div className="w-9 h-9 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                {f.icon}
              </div>
              <div>
                <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-1.5">
                  {f.title}
                </div>
                <p className="text-[12.5px] text-ink-600 leading-[1.55]">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 How it's being built */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="How it's being built" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          One founder, three AI agents, strict operating discipline
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Built solo with three parallel Claude chats acting as Backend,
            Frontend, and Strategy collaborators. The chats don&apos;t share
            context automatically. I bridge them manually with structured
            handover briefs. Each chat stays focused on its surface area, and
            I act as the integrator. Sequential, validated, one thing at a
            time. The same operating discipline I bring into a Fractional
            engagement.
          </p>
          <p>
            The stack: <strong>FastAPI + React 19</strong> on{" "}
            <strong>GCP Cloud Run</strong>.{" "}
            <strong>BigQuery</strong> as the single source of truth for
            cricket data. <strong>MongoDB Atlas</strong> for user state. An{" "}
            <strong>n8n daily pipeline</strong> refreshes the analytics layer
            every night at 3 AM IST.{" "}
            <strong>Cricsheet</strong> as the raw ball-by-ball data source.{" "}
            <strong>Anthropic API</strong> for match anecdote generation.
          </p>
          <p>
            The operating model is itself a demonstration. One person,
            sophisticated infrastructure, daily ML refresh, bot-prerendered
            SEO across 2,000+ URLs, all at a burn rate structurally lower than
            any funded competitor in the space.
          </p>
        </div>
      </section>

      {/* Technical detail (collapsible) — high-level only */}
      <section className="max-w-content mx-auto px-6 py-12">
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
            <TechBlock title="Production stack">
              <p>
                <strong>Frontend</strong>: React 19.{" "}
                <strong>Backend</strong>: FastAPI on GCP Cloud Run
                (asia-south1).{" "}
                <strong>Cricket data</strong>: BigQuery as single source of
                truth.{" "}
                <strong>User state</strong>: MongoDB Atlas.{" "}
                <strong>Static assets</strong>: GCS bucket.{" "}
                <strong>CI/CD</strong>: GitHub Actions, push-to-main deploys
                to Cloud Run.{" "}
                <strong>Edge</strong>: Cloudflare proxy in front of a GCP
                Global Load Balancer with a static IP.
              </p>
            </TechBlock>

            <TechBlock title="Data workflow">
              <p>
                Raw ball-by-ball IPL data is sourced daily from Cricsheet and
                lands in BigQuery, the single source of truth for everything
                cricket-related on the platform. Player metadata is
                refreshed seasonally from Cricbuzz RapidAPI.
              </p>
              <p>
                Every night at 3 AM IST, an n8n workflow on a GCP VM triggers
                a Docker container that runs a sequential daily pipeline.
                The pipeline rebuilds master tables, refreshes derived
                analytics, regenerates puzzle clue banks, recomputes the
                rivalry and momentum signals, and re-runs the Cap Simulator
                so fresh forecasts are ready before users wake up.
              </p>
              <p>
                User-facing data is served by FastAPI directly from BigQuery
                and MongoDB at request time. The MongoDB layer handles auth,
                Cricket IQ scoring, streaks, and leaderboards.
              </p>
            </TechBlock>

            <TechBlock title="SEO architecture">
              <p>
                Organic search is the primary distribution strategy. Every
                player, match, and record gets its own URL with genuinely
                unique content. The sitemap currently carries 2,000+ URLs
                and grows automatically as IPL itself grows.
              </p>
              <p>
                Bot pre-rendering is handled inline in the FastAPI server.
                Googlebot receives full HTML with appropriate structured data
                across all URL patterns, while users get the React SPA. No
                separate prerender proxy in front of the application.
              </p>
            </TechBlock>

            <TechBlock title="Solo + AI operating model">
              <p>
                The platform is built and operated by a single founder with
                three parallel Claude chats acting as Backend, Frontend, and
                Strategy collaborators. The chats don&apos;t share context
                automatically; I bridge them with structured handover briefs
                that have become durable documentation in themselves.
              </p>
              <p>
                Each chat stays focused on its own surface area, which
                prevents any one chat from sprawling. I act as the
                integrator. Code lands via ZIP file or inline patch, and I
                run everything manually on the VM. Sequential
                fully-validated delivery, with pre-deploy gates mandatory on
                every push.
              </p>
              <p>
                One person, sophisticated infrastructure, daily ML refresh,
                and bot-prerendered SEO across thousands of URLs. The
                operating model is the demonstration.
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

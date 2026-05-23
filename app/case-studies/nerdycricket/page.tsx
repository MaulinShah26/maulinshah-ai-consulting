import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Activity,
  Sparkles,
  Database,
  Cpu,
  Layers,
  Trophy,
  Brain,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "NerdyCricket · Maulin Shah",
  description:
    "A data-driven IPL analytics and engagement platform built solo. Proprietary signals over 18 years of ball-by-ball data, delivered as a daily ritual. Live at nerdycricket.com.",
};

const stats = [
  { value: "1,226", label: "IPL matches" },
  { value: "788", label: "Player profiles" },
  { value: "92", label: "All-time leaderboards" },
  { value: "29,500+", label: "Batter-bowler rivalry pairs" },
];

const features = [
  {
    icon: <Brain size={18} aria-hidden />,
    title: "Five daily puzzles, one Cricket IQ",
    body: "Guess the Player, Guess the Match, Guess the Team, Mystery Stat, and Trivia. All five contribute to a single composite Cricket IQ — Wordle-for-cricket as a daily ritual.",
  },
  {
    icon: <Activity size={18} aria-hidden />,
    title: "Ball-by-ball Momentum Map",
    body: "A 17-event momentum engine narrating how match control changed delivery by delivery across 1,217 matches. Not a black-box win probability — cricket-language explanations.",
  },
  {
    icon: <Trophy size={18} aria-hidden />,
    title: "Records Room and Hall of Fame",
    body: "92 all-time IPL leaderboards across 20 categories. Hall of Fame with live D:H:M:S tenure timers on 10 marquee records, plus the full lineage of every previous holder.",
  },
  {
    icon: <TrendingUp size={18} aria-hidden />,
    title: "Cap Race Simulator",
    body: "Probabilistic forecasting of the Orange and Purple Caps using quantile regression and Monte Carlo over 10,000 simulated seasons. 90% top-3 accuracy by match 50. Reports honest uncertainty, not confident guesses.",
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
          A data-driven IPL analytics and engagement platform built solo.
          Bloomberg-for-cricket dressed up as Wordle-for-cricket — proprietary
          analytical signals delivered through a daily-ritual product.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Solo build
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            AI agents
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Daily ritual
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Sports analytics
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Live in production
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

      {/* 01 What it is */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="What it is" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          The platform for the thinking cricket fan
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            India has 500M+ cricket fans. The existing fan stack is binary:
            read scores (Cricbuzz, ESPNcricinfo) or gamble on outcomes
            (Dream11, MPL). The middle space — where cricket{" "}
            <em>knowledge</em> is the currency, not money — has no dedicated
            home.
          </p>
          <p>NerdyCricket occupies that space. It sits on two layers:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                <Database size={16} aria-hidden />
              </span>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium">
                Layer 01
              </div>
            </div>
            <div className="font-serif text-[16px] font-medium text-ink leading-tight mb-2">
              A proprietary analytics layer
            </div>
            <p className="text-[13px] text-ink-600 leading-[1.6]">
              18 years of IPL ball-by-ball data converted into derived
              signals: a rivalry index across 29,500+ batter-bowler pairs,
              ball-by-ball match pressure, a 17-event momentum engine, and a
              probabilistic cap-race forecasting model.
            </p>
          </div>

          <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} aria-hidden />
              </span>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium">
                Layer 02
              </div>
            </div>
            <div className="font-serif text-[16px] font-medium text-ink leading-tight mb-2">
              A daily engagement loop
            </div>
            <p className="text-[13px] text-ink-600 leading-[1.6]">
              Five distinct puzzle games — Guess the Player, Guess the Match,
              Guess the Team, Mystery Stat, Trivia — scored into a single
              Cricket IQ. Wordle-for-cricket as a daily ritual.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 Why now */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="Why now" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Three things converged in 2025
        </h2>

        <div className="space-y-4">
          <ReasonBlock
            number="01"
            title="The RMG window is closing in India"
            body="Real-money fantasy is increasingly regulated, taxed at 28% GST on entry fees, and brand-incompatible. Knowledge-play occupies the same audience without the regulatory or PR exposure — open to under-18s too, which is half the IPL audience."
          />
          <ReasonBlock
            number="02"
            title="AI agents finally make solo builds at this complexity feasible"
            body="Three years ago, building a platform with daily ML refresh, ball-by-ball pressure modeling, and bot-prerendered SEO for 2,000+ URLs needed a team. With AI agents acting as backend, frontend, and strategy collaborators, the same surface area is now solo-shippable."
          />
          <ReasonBlock
            number="03"
            title="IPL is structurally getting bigger every year"
            body="Every season adds matches, players, records, rivalries to the database. The SEO surface area grows with the sport itself — no CAC reset. The asset compounds with time, not against it."
          />
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
            Frontend, and Strategy collaborators. The chats don't share
            context automatically — I manually bridge them with structured
            handover briefs. Each chat stays focused on its surface area, and
            I act as the integrator. Sequential, validated, one-thing-at-a-time
            delivery — the same operating discipline I bring into a
            Fractional engagement.
          </p>
          <p>
            The stack: <strong>FastAPI + React 19</strong> on{" "}
            <strong>GCP Cloud Run</strong>.{" "}
            <strong>BigQuery</strong> as the single source of truth for
            cricket data. <strong>MongoDB Atlas</strong> for user state. An{" "}
            <strong>n8n daily pipeline</strong> runs ~21 sequential steps,
            refreshing the analytics layer every night at 3 AM IST.{" "}
            <strong>Cricsheet</strong> as the raw ball-by-ball data source.{" "}
            <strong>Anthropic API</strong> for match anecdote generation.
          </p>
          <p>
            The operating model is itself a demonstration: one person,
            sophisticated infrastructure, daily ML refresh, bot-prerendered
            SEO across 2,000+ URLs — at a burn rate structurally lower than
            any funded competitor in the space.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 04 See it live */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="See it live" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Currently shipping
        </h2>

        {/* Headline stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 text-center"
            >
              <div className="font-serif text-[24px] md:text-[26px] font-medium text-ink leading-tight mb-1">
                {s.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          What's there to play with
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
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

        {/* Big CTA */}
        <div className="bg-accent-soft border-[0.5px] border-accent rounded-md p-6 text-center">
          <p className="text-[15px] text-ink-800 leading-[1.6] mb-4">
            The product is live and shipping daily. Go play.
          </p>
          <a
            href="https://nerdycricket.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-page font-medium text-[14px] px-6 py-3 rounded hover:bg-accent hover:text-page transition-colors"
          >
            Visit nerdycricket.com
            <ExternalLink size={14} aria-hidden />
          </a>
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
            <TechBlock title="Production stack">
              <p>
                <strong>Frontend</strong>: React 19 with react-helmet-async
                for meta tag management. <strong>Backend</strong>: FastAPI
                running on GCP Cloud Run (asia-south1, min-instances=1).{" "}
                <strong>Cricket data</strong>: BigQuery as single source of
                truth.{" "}
                <strong>User state</strong>: MongoDB Atlas.{" "}
                <strong>Static assets</strong>: GCS bucket.{" "}
                <strong>CI/CD</strong>: GitHub Actions, push-to-main triggers
                an ~8-minute build and Cloud Run deploy.{" "}
                <strong>Edge</strong>: Cloudflare proxy in front of a GCP
                Global Load Balancer with a static IP.
              </p>
              <p>
                Bot pre-rendering for SEO is handled inline in the FastAPI
                server. Googlebot receives full HTML with JSON-LD across all
                player, match, record, and simulator URLs.
              </p>
            </TechBlock>

            <TechBlock title="The data intelligence layer">
              <p>
                Everything user-facing sits on top of derived analytics.
                The raw Cricsheet ball-by-ball data is the foundation; the
                value is the computed signals built on top of it.
              </p>
              <p>
                <strong>Rivalry Index</strong>: 29,500+ batter-vs-bowler
                career matchups, labelled with dominance (Dominant / Neutral
                / Struggles), intensity (Fierce / Developing / Emerging),
                and confidence tier.
              </p>
              <p>
                <strong>Match Pressure Series</strong>: ball-by-ball
                pressure scoring across every match in the database.
              </p>
              <p>
                <strong>Momentum Engine</strong>: 17 distinct event types
                (WICKET_SWING, BOUNDARY_RELEASE, COLLAPSE_TRIGGER, CHASE_FLIP,
                DEATH_OVERS_SURGE, KEY_PLAYER_MOMENT, FALSE_MOMENTUM, etc.)
                across 12,146 momentum events in the corpus. Per-match
                player role classifier (Finisher / Key Bowler / Death
                Specialist / Part-time Bowler) so context modifiers fire
                correctly.
              </p>
              <p>
                <strong>Cap Race Simulator</strong>: quantile regression
                with linear inductive bias (LightGBM tested and rejected for
                overfitting historical priors), plus Monte Carlo over 10,000
                simulated seasons. Variance-aware sampling using each
                player's coefficient_of_variation. Hit rates measured as
                top-3, not top-1, by design.
              </p>
            </TechBlock>

            <TechBlock title="Daily pipeline">
              <p>
                n8n workflow on a GCP VM, cron 0 3 * * * (3 AM IST daily).
                Triggers a Docker container running ~21 sequential pipeline
                steps with total runtime ~2-3 hours.
              </p>
              <p>
                The pipeline rebuilds the IPL master tables, refreshes the
                93-field player stats and 106 advanced indices, regenerates
                clue banks for the puzzle games, recomputes the rivalry
                index, rebuilds the match pressure series, recomputes
                momentum events, and re-runs the Cap Simulator to write
                fresh forecasts to GCS.
              </p>
              <p>
                <strong>Notifications</strong>: pipeline completion
                notifications via Resend. <strong>Sources</strong>:
                Cricsheet (free, daily download), Cricbuzz RapidAPI (player
                metadata, seasonal refresh), Anthropic API (match anecdote
                generation, daily per new match).
              </p>
            </TechBlock>

            <TechBlock title="SEO and distribution">
              <p>
                Organic search is the primary distribution strategy.{" "}
                <strong>2,151+ URLs</strong> in the sitemap (788 players +
                1,193+ matches + 134 records + 12 static + Simulator). Every
                player, match, record, and sub-leaderboard is its own URL
                with genuinely unique content — Bot pre-rendering across all
                URL patterns ensures Googlebot receives full HTML with
                appropriate JSON-LD (Person, SportsEvent, ItemList,
                BreadcrumbList, WebApplication).
              </p>
              <p>
                The SEO surface area grows automatically as IPL itself
                grows. Every new match, new player, new record adds new
                indexed URLs.
              </p>
            </TechBlock>

            <TechBlock title="Solo + AI operating model">
              <p>
                Three parallel Claude chats act as Backend, Frontend, and
                Strategy collaborators. They don't share context
                automatically; I manually bridge them with structured
                handover briefs that have become durable documentation in
                themselves.
              </p>
              <p>
                Working principles: sequential fully-validated delivery (one
                thing at a time, spot-checked, then committed); explicit
                stopping recommendations from agents (never assume next
                step); no direct VM access from chats (code lands via ZIP
                file or inline python3 patch, I run it); pre-deploy gates
                mandatory for every push touching JSX (fragment balance
                check, lucide-react import check).
              </p>
              <p>
                The 3-chat structure enforces context boundaries that
                prevent any one chat from sprawling. Each chat stays
                focused. Handover briefs become durable documentation. The
                founder is the integrator, which is also the constraint —
                but a constraint with explicit operating discipline around
                it.
              </p>
            </TechBlock>

            <TechBlock title="What's deliberately out of scope">
              <p>
                <strong>Real-money gaming features</strong> — Indian RMG
                regulation makes this commercially unattractive and
                brand-incompatible.
              </p>
              <p>
                <strong>Fantasy affiliate revenue</strong> — same RMG
                constraint.
              </p>
              <p>
                <strong>International cricket, WPL, domestic T20 in the
                data pipeline</strong> — IPL focus is the wedge.
              </p>
              <p>
                <strong>Paid subscription tiers</strong> — the platform's
                positioning is open access; subscriptions would conflict
                with the daily-ritual mechanic.
              </p>
              <p>
                <strong>Live in-match momentum updates</strong> — post-match
                only by design in v1.
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

function ReasonBlock({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-md p-5">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium">
          {number}
        </span>
        <h3 className="font-serif text-[16px] font-medium text-ink leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-[14px] text-ink-700 leading-[1.65] pl-7">{body}</p>
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

import Link from "next/link";
import {
  ArrowLeft,
  Sliders,
  Workflow,
  Calculator,
  Shield,
  GitBranch,
  Lock,
  Repeat,
  Cpu,
  Newspaper,
  Eye,
  Bell,
  Activity,
  Clock,
  FileText,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "AI Trading Copilot · Maulin Shah",
  description:
    "A personal AI trading desk for retail investors on Indian equities. The investor sets budget, timeline, and risk appetite. An eight-agent pipeline handles market scanning, signal analysis, strategy selection, risk management, and execution. Built solo. Currently in paper-trading mode with limited access.",
};

const features = [
  {
    icon: <Sliders size={18} aria-hidden />,
    title: "Three inputs, full trading desk",
    body: "The investor gives the system three things and only three things. Budget. Timeline (3, 6, or 12 months). Risk appetite (Conservative, Balanced, or High Risk). Everything that institutions do (market regime classification, sector rotation, signal ranking, position sizing, risk management, execution) gets derived from those three inputs and handled invisibly.",
  },
  {
    icon: <Workflow size={18} aria-hidden />,
    title: "Eight-agent pipeline",
    body: "Market Intelligence, Technical Analysis, Fundamental Analysis, Strategy Selection, Trade Ranking, Risk Management, Execution, and Review. Eight specialist agents operate in sequence every morning before market open. Each consumes structured outputs from upstream agents. Approximately 144 stocks evaluated in around 2.5 minutes. Top 3 to 5 picks surfaced for the day.",
  },
  {
    icon: <Calculator size={18} aria-hidden />,
    title: "Unified Decision Value",
    body: "Every trade reduces to one auditable number. UDV combines conditional expected value, reliability weight, portfolio contribution, execution risk, and overlap penalty. Each term is computed from real conditional statistics organized by setup type, market regime, sentiment context, and sector. No black-box decisions. Every recommendation shows its working.",
  },
  {
    icon: <Shield size={18} aria-hidden />,
    title: "Four mandatory gates",
    body: "A high decision score alone doesn't get a trade through. Every candidate must clear four gates. Positive conditional EV after all costs. Sufficient reliability sample (at least 10 similar historical trades for the configured risk profile). Sector diversification cap. Regime-appropriate allocation ceiling. Mathematical rules, not gut feel.",
  },
  {
    icon: <GitBranch size={18} aria-hidden />,
    title: "Risk-profile-driven configuration",
    body: "Conservative, Balanced, High Risk. Each profile is a complete configuration bundle that rewires the entire system. Capital deployment cap. Per-trade risk. Drawdown tolerance. Sector concentration limit. Intraday eligibility. Approval workflow. Auto-execution allowance. One choice changes everything downstream.",
  },
  {
    icon: <Lock size={18} aria-hidden />,
    title: "Paper-before-live, kill switch always armed",
    body: "Paper trading is the default. Live trading requires a 30-day paper prerequisite plus explicit opt-in. Every meaningful trade above threshold requires manual approval. The kill switch persists across system restarts. Auto-execution is opt-in, never default. Human holds the last lever by construction.",
  },
  {
    icon: <Repeat size={18} aria-hidden />,
    title: "The system grades itself",
    body: "A Self-Diagnosis Agent runs every Sunday, comparing predicted win probability against actual outcomes by setup type. Calibration drift gets flagged. Scoring weights get recalibrated monthly using the latest 30 to 60 days of outcomes. An Adversarial Bear agent interrogates every long pick for the strongest opposing argument, logged for post-trade review. The system isn't static. It updates itself based on what worked and what didn't.",
  },
];

const workflow = [
  {
    icon: <Cpu size={16} aria-hidden />,
    time: "08:30 IST",
    title: "Morning pipeline runs",
    body: "The eight-agent pipeline kicks off before market open. Approximately 144 stocks scanned. Sentiment, regime, signals, strategy fit, risk gates, all in around 2.5 minutes. Output is a ranked list of trade candidates with full decision cards attached.",
  },
  {
    icon: <Newspaper size={16} aria-hidden />,
    time: "08:45 IST",
    title: "Sentiment briefing delivered",
    body: "A 14-field structured summary of market mood, sector strength, and key risks lands in-app and via push notification. Designed for a 60-second read before the day starts.",
  },
  {
    icon: <Eye size={16} aria-hidden />,
    time: "09:00 to 09:05 IST",
    title: "Picks surface for review",
    body: "Top 3 to 5 trade candidates arrive. Each one carries entry price, stop, three target levels, position size, expected value, win probability with confidence intervals, and a narrative explaining why this stock, this strategy, now. Investor reviews and approves.",
  },
  {
    icon: <Bell size={16} aria-hidden />,
    time: "09:15 IST",
    title: "Markets open, intraday scanner activates",
    body: "For Balanced and High-Risk profiles, the intraday scanner cycles every 15 minutes. Conservative profile stays out of intraday entirely by design.",
  },
  {
    icon: <Activity size={16} aria-hidden />,
    time: "09:15 to 15:30 IST",
    title: "Live position monitoring",
    body: "All open positions continuously evaluated against targets and stops. Laddered exits (T1, T2, T3) fire automatically when each target is hit, with stop-loss ratcheting as the position moves in favor. The kill switch is always one action away.",
  },
  {
    icon: <Clock size={16} aria-hidden />,
    time: "15:20 IST",
    title: "Intraday positions force-close",
    body: "Intraday positions close regardless of P&L if neither target nor stop has been hit. Swing positions hold overnight to fight another day.",
  },
  {
    icon: <FileText size={16} aria-hidden />,
    time: "19:30 IST",
    title: "End-of-day report",
    body: "Positions opened. Positions closed. P&L by trade. Calibration deltas measuring predicted win probability against actual outcomes. Lessons logged into the learning system for next day's recalibration.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function AITradingCopilotPage() {
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
          Personal project · In active development · Limited access
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          AI Trading Copilot
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A personal AI trading desk for retail investors on Indian equities.
          The investor sets three things (budget, timeline, risk appetite). An
          eight-agent pipeline handles market scanning, signal analysis,
          strategy selection, risk management, and execution. Built solo.
          Currently in paper-trading mode with demos available on request.
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Multi-Agent Pipeline
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Unified Decision Value
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Risk Profile Engine
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Paper-Before-Live
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Calibration Loop
          </span>
        </div>
      </header>

      <hr className="border-ink-200" />

      {/* 01 Why I built this */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="Why I built this" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Retail investors are playing a structurally unfair game
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            The professional on the other side of every trade has real-time
            data feeds, dedicated analysts, formal risk frameworks, and the
            discipline of being paid not to be emotional. The retail trader
            has a phone, a brokerage app, and the time between meetings.
          </p>
          <p>
            The result is well documented. 70 to 80 percent of active retail
            traders lose money over a multi-year horizon, across multiple
            SEBI and global regulator studies. Decisions get made on emotion.
            Tools are fragmented (charts in one app, news in another,
            financials on a brokerage site, screeners on a third platform).
            Position sizing is intuitive rather than mathematical. And there
            is no measurable feedback loop, so investors cannot tell whether
            their strategy is actually working or whether they got lucky.
          </p>
          <p>
            The institutional answer to all of this (Portfolio Management
            Services, advisory firms, proper risk frameworks) is closed to
            most retail. Typical minimums sit at ₹50 lakh and up. Telegram
            tip groups solve none of it and frequently make things worse.
            Stock screeners give you a list and walk away. Robo-advisors
            limit themselves to long-only mutual fund stacks.
          </p>
          <p>
            What retail actually needs is the institutional decision desk
            (market scanning, signal analysis, formal risk framework, audit
            trail) at retail capital levels. That gap is what GenAI and
            multi-agent systems suddenly make solvable by a single solo
            builder. AI Trading Copilot is built for that gap.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 What's underneath the three inputs */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="What's underneath the three inputs" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Radical simplification at the surface, mathematical honesty
          underneath
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-8">
          The investor sees a simple three-question setup. Underneath, the
          system runs an eight-agent pipeline that an institutional desk
          would recognise. These are the seven pieces that make the simple
          surface possible.
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

      {/* 03 Daily workflow */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="Daily workflow" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          From 08:30 to 19:30 IST, every trading day
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-10">
          The system has a fixed daily rhythm. The investor&apos;s share of
          it is roughly 5 to 10 minutes of review and approval; the rest
          runs in the background. Here is what happens between market open
          and market close on a normal day.
        </p>

        <div className="space-y-0">
          {workflow.map((step, i) => (
            <WorkflowStep
              key={i}
              icon={step.icon}
              time={step.time}
              title={step.title}
              body={step.body}
              isLast={i === workflow.length - 1}
            />
          ))}
        </div>

        {/* Weekly note */}
        <div className="mt-8 bg-surface border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-md p-5">
          <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
            Every Sunday · 18:00 IST
          </div>
          <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-2">
            Weekly self-diagnosis
          </div>
          <p className="text-[13px] text-ink-600 leading-[1.6]">
            Setup-type performance compared against predicted win
            probability. Calibration drift alerts. Recommended parameter
            changes for the week ahead. The system audits itself before
            anyone else has to.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 04 How it's being built */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="How it's being built" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Built solo, with AI agents as collaborators and strict operating
          discipline
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Built solo with parallel Claude chats acting as Backend, Frontend,
            and Strategy collaborators. The same operating discipline I bring
            into a Fractional engagement. Sequential, validated, one thing at
            a time.
          </p>
          <p>
            The stack: <strong>Python multi-agent pipeline</strong>{" "}
            orchestrated via <strong>n8n</strong> on a{" "}
            <strong>GCP VM</strong> (Mumbai region).{" "}
            <strong>PostgreSQL 15</strong> for trade history, portfolio
            state, agent outputs, audit logs, and learning state.{" "}
            <strong>Redis 7</strong> for market data cache, kill-switch
            state (persistent across restarts), and inter-agent messaging.{" "}
            <strong>React + Vite + Tailwind</strong> frontend, mobile-first.{" "}
            <strong>Claude Sonnet</strong> for reasoning and sentiment
            analysis (never for scoring). <strong>AngelOne SmartAPI</strong>{" "}
            for broker integration.
          </p>
          <p>
            The project is currently in active paper-trading with limited
            access. Live demos available on request given the live market
            signals involved.
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
                <strong>Infrastructure</strong>: Google Cloud VM (Debian 12)
                in asia-south1, running a Docker Compose stack with
                auto-start on boot.{" "}
                <strong>Orchestration</strong>: n8n workflow engine for
                scheduling, retry, and end-to-end pipeline coordination, with
                a Python orchestrator handling in-pipeline agent sequencing.{" "}
                <strong>Core logic</strong>: Python services using Pandas,
                NumPy, and custom indicator libraries.{" "}
                <strong>Data storage</strong>: PostgreSQL 15 for all
                persisted state.{" "}
                <strong>Cache and queue</strong>: Redis 7 for low-latency
                inter-agent messaging and persistent kill-switch state.{" "}
                <strong>AI layer</strong>: Claude Sonnet API for sentiment
                analysis and quality review, used for reasoning and narrative
                only, never for scoring.{" "}
                <strong>Frontend</strong>: Custom React app (Vite + React +
                TanStack Query + Tailwind), mobile-first.
              </p>
            </TechBlock>

            <TechBlock title="Data sources and broker integration">
              <p>
                Primary live data from AngelOne SmartAPI. Fallback from Yahoo
                Finance via yfinance for redundancy. NSE equity master from
                official archives. Sentiment context pulled via Claude web
                search.
              </p>
              <p>
                Live order execution uses LIMIT and Stop-Loss-Market order
                types via AngelOne SmartAPI, with retry and confirmation
                logic. Laddered exits (T1, T2, T3) are supported so positions
                close in tranches rather than as single binary events. The
                system can route every approved trade to paper mode or live
                mode; paper mode marks positions against real prices but
                consumes no capital.
              </p>
            </TechBlock>

            <TechBlock title="Security">
              <p>
                Broker credentials are encrypted at rest and never logged or
                transmitted in plain text. SSH access to the VM is via
                Identity-Aware Proxy only. The authenticated frontend is the
                only public surface; the agent pipeline, queues, and database
                are not internet-reachable. Persistent kill switch ensures no
                orphaned auto-execution can occur even across system
                restarts.
              </p>
            </TechBlock>

            <TechBlock title="Solo + AI operating model">
              <p>
                Built solo with three parallel Claude chats acting as
                Backend, Frontend, and Strategy collaborators. The chats
                don&apos;t share context automatically; I bridge them with
                structured handover briefs that have become durable
                documentation in themselves.
              </p>
              <p>
                Each chat stays focused on its surface area, which prevents
                any one chat from sprawling. I act as the integrator. Code
                lands via ZIP file or inline patch, run manually on the VM.
                Sequential fully-validated delivery, with pre-deploy gates
                mandatory on every push. The operating model itself is the
                discipline that makes a multi-agent trading desk
                solo-buildable.
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

function WorkflowStep({
  icon,
  time,
  title,
  body,
  isLast,
}: {
  icon: React.ReactNode;
  time: string;
  title: string;
  body: string;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-accent-soft text-accent flex items-center justify-center border-[0.5px] border-accent/30">
          {icon}
        </div>
        {!isLast && <div className="w-px flex-1 bg-ink-200 mt-2 mb-1" />}
      </div>
      <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
        <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-1">
          {time}
        </div>
        <h3 className="font-serif text-[16px] font-medium text-ink leading-tight mb-2">
          {title}
        </h3>
        <p className="text-[13.5px] text-ink-600 leading-[1.6]">{body}</p>
      </div>
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

import { Nav } from "@/components/Nav";
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
  Sparkles,
  AlertCircle,
  Check,
  X,
  Edit,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Brain,
  Mail,
  TrendingUp,
  Signal,
  Wifi,
  Battery,
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

/* ---------- Mockup data ---------- */

const decisionCard = {
  symbol: "TATAMOTORS",
  company: "Tata Motors Ltd · Auto · NSE",
  tags: ["Swing · Pullback", "5 to 10 day hold", "Setup: 32 hits last 12 mo"],
  udv: "0.143",
  udvRank: "Rank 2 of 4 today",
  levels: [
    { label: "Stop", value: "₹698", delta: "−2.4%", tone: "loss" as const },
    { label: "Entry", value: "₹715", delta: "market", tone: "muted" as const },
    { label: "Target 1", value: "₹742", delta: "+3.8%", tone: "profit" as const },
    { label: "Target 2", value: "₹760", delta: "+6.3%", tone: "profit" as const },
    { label: "Target 3", value: "₹780", delta: "+9.1%", tone: "profit" as const },
  ],
  stats: [
    { label: "Position size", value: "94 shares", note: "₹67,210 deployed" },
    { label: "Risk amount", value: "₹1,598", note: "1.0% of portfolio" },
    { label: "Reward : Risk", value: "1 : 3.8", note: "at T3" },
    { label: "Expected value", value: "+₹2,460", note: "after costs", tone: "profit" as const },
  ],
  probability: { value: 64, bandLow: 58, bandHigh: 69, samples: 84 },
  udvBreakdown: [
    { label: "Conditional EV (after costs)", value: "+0.182", tone: "profit" as const },
    { label: "× Reliability weight", value: "0.85" },
    { label: "+ Portfolio contribution", value: "+0.024", tone: "profit" as const },
    { label: "− Execution risk", value: "−0.034", tone: "loss" as const },
    { label: "− Overlap penalty", value: "−0.002", tone: "loss" as const },
  ],
  reasoning:
    "Tata Motors is in a clean uptrend on the daily chart and has pulled back to the 21-EMA with healthy volume on the bounce. Auto sector is in the top 3 by relative strength today, and the regime is trending up. The setup has 32 historical hits in the last 12 months with a 64% win rate. EV is positive after all costs, and the trade fits the swing timeframe budget for today.",
  warning:
    "JLR earnings are scheduled in 6 trading days. If you are not comfortable holding through that event, consider tightening to a swing-intraday horizon with T1 exit only.",
};

const queuePicks = [
  {
    symbol: "TATAMOTORS",
    company: "Tata Motors · Auto",
    tf: "Swing",
    pwin: "64%",
    ev: "+₹2,460",
    rr: "1 : 3.8",
    range: "₹715 → ₹780",
    udv: "0.143",
  },
  {
    symbol: "PERSISTENT",
    company: "Persistent Systems · IT",
    tf: "Medium",
    pwin: "68%",
    ev: "+₹3,180",
    rr: "1 : 2.9",
    range: "₹4,890 → ₹5,420",
    udv: "0.187",
  },
  {
    symbol: "NAVINFLUOR",
    company: "Navin Fluorine · Chemicals",
    tf: "Swing",
    pwin: "57%",
    ev: "+₹1,820",
    rr: "1 : 2.4",
    range: "₹3,650 → ₹3,920",
    udv: "0.108",
  },
  {
    symbol: "ITC",
    company: "ITC Ltd · FMCG",
    tf: "Long",
    pwin: "71%",
    ev: "+₹4,600",
    rr: "1 : 3.1",
    range: "₹462 → ₹510",
    udv: "0.221",
  },
];

const eodClosedTrades = [
  { symbol: "NAVINFLUOR", entry: "₹3,650", exit: "₹3,920", pnl: "+₹5,400 (+7.4%)", outcome: "T2 hit", hold: "4 days", tone: "profit" as const },
  { symbol: "PERSISTENT", entry: "₹4,890", exit: "₹5,016", pnl: "+₹4,520 (+2.6%)", outcome: "T1 hit", hold: "2 days", tone: "profit" as const },
  { symbol: "IKIO", entry: "₹398", exit: "₹386", pnl: "−₹1,500 (−3.0%)", outcome: "Stop hit", hold: "3 days", tone: "loss" as const },
];

const eodOpenPositions = [
  { symbol: "TATAMOTORS", entry: "₹715", last: "₹724", unreal: "+₹846 (+1.3%)", next: "T1 @ ₹742", stop: "3.6%", tone: "profit" as const },
  { symbol: "ITC", entry: "₹462", last: "₹468", unreal: "+₹720 (+1.3%)", next: "T1 @ ₹482", stop: "4.1%", tone: "profit" as const },
  { symbol: "RELIANCE", entry: "₹1,378", last: "₹1,394", unreal: "+₹1,280 (+1.2%)", next: "T1 @ ₹1,420", stop: "2.8%", tone: "profit" as const },
  { symbol: "HDFCBANK", entry: "₹1,612", last: "₹1,598", unreal: "−₹420 (−0.9%)", next: "T1 @ ₹1,660", stop: "1.4%", tone: "loss" as const },
  { symbol: "INFY", entry: "₹1,520", last: "₹1,525", unreal: "+₹125 (+0.3%)", next: "T1 @ ₹1,580", stop: "3.2%", tone: "profit" as const },
];

const eodLessons = [
  {
    title: "IKIO stop hit",
    body: "Setup was a swing-pullback in chemicals. Sector relative strength had quietly dropped to rank 8 by entry. The signal was correct in isolation but lost the regime alignment check.",
  },
  {
    title: "NAVINFLUOR T2 hit on day 4",
    body: "Faster move than the 7-day median for similar setups. Adversarial bear case (China oversupply) didn't materialize.",
  },
  {
    title: "Approval timing",
    body: "You approved TATAMOTORS in 32 seconds (normal: 4 minutes). Post-loss recovery may have biased the speed.",
  },
];

const diagCalibration = [
  { setup: "Trend continuation", predicted: "63%", realized: "67%", delta: "+4%", status: "On track", tone: "ok" as const },
  { setup: "Pullback", predicted: "61%", realized: "62%", delta: "+1%", status: "On track", tone: "ok" as const },
  { setup: "Breakout", predicted: "65%", realized: "48%", delta: "−17%", status: "Drift", tone: "drift" as const },
  { setup: "Reversal", predicted: "54%", realized: "50%", delta: "−4%", status: "On track", tone: "ok" as const },
  { setup: "Range", predicted: "57%", realized: "60%", delta: "+3%", status: "On track", tone: "ok" as const },
];

const diagDriftAlerts = [
  {
    title: "Breakout setup under-performing in trending-up regime",
    body: "Predicted 65% win rate over the last 14 attempts. Realized 48%. The breakouts are firing on weak volume confirmation. Cell auto-downweighted to 0.7× until 5 more trades complete.",
    recommendation: "Tighten volume confirmation gate to 1.5× average.",
  },
  {
    title: "IT sector swing setups slightly conservative",
    body: "IT swing picks have realized 71% win rate against a 62% prediction. Underconfidence detected.",
    recommendation: "Add 30 trades before recalibrating. Currently 18 in window.",
  },
];

const diagRecommendations = [
  {
    title: "Increase volume-confirmation weight for breakouts",
    body: "Currently 25%, suggested 35%. Reduce price-momentum weight from 30% to 20% in compensation. Expected to lift breakout calibration by 8 to 10%.",
  },
  {
    title: "Adversarial bear hit rate worth tracking",
    body: "14 of 19 long picks had bear cases logged. 3 of those cases materialized this week (16%). Pattern: macro-driven bear cases hit more than micro-driven ones.",
  },
];

const diagBehavior = [
  { label: "Approval speed", value: "2m 14s avg", note: "Slowest day Wed (5m), fastest Fri (32s)." },
  { label: "Post-loss approval rate", value: "23%", note: "Down from 67% baseline. Possible loss-aversion tilt. Worth observing.", flag: true },
  { label: "Rejection rate", value: "12%", note: "Within normal range (10 to 20%). Two rejections were medium-term IT picks." },
  { label: "Modification rate", value: "8%", note: "Most edits tighten stop-loss (not loosen). Aligned with risk discipline." },
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

        {/* Timeline */}
        <div className="space-y-0 mb-10">
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
        <div className="mb-16 bg-surface border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-md p-5">
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

        {/* Sub-heading for product surface mockups */}
        <div className="border-t border-ink-200 pt-12 mb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
            What you see on your phone, in your inbox, on the dashboard
          </div>
          <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-ink leading-tight mb-3">
            The product surface across a trading week
          </h3>
          <p className="text-[14.5px] text-ink-700 leading-[1.7]">
            Four screens that show how the decisioning underneath surfaces
            to the investor. One pick on a decision card. The morning
            approval queue. The evening report after the close. The weekly
            self-diagnosis dashboard the system runs on itself.
          </p>
        </div>

        {/* Mockup 1: Decision card */}
        <MockupBlock
          eyebrow="09:00 IST · One pick"
          title="Decision card, what arrives in your inbox"
          description="One pick. Every number behind it. The decision card is the unit of communication between the system and the investor."
        >
          <DecisionCard />
        </MockupBlock>

        {/* Mockup 2: Mobile approval queue */}
        <MockupBlock
          eyebrow="09:05 IST · The phone"
          title="Approval queue on mobile"
          description="What the investor sees on their phone first thing in the morning. Today's picks at a glance. Approve all in one tap, or drill into individual cards."
        >
          <ApprovalQueueMobile />
        </MockupBlock>

        {/* Mockup 3: EOD report */}
        <MockupBlock
          eyebrow="19:30 IST · After the close"
          title="End-of-day report"
          description="What lands in the investor's inbox once the market closes. Today's P&L, position-by-position attribution, calibration delta, and the lessons logged for the learning loop."
        >
          <EODReport />
        </MockupBlock>

        {/* Mockup 4: Weekly self-diagnosis */}
        <MockupBlock
          eyebrow="Sunday 18:00 IST · The system grades itself"
          title="Weekly self-diagnosis dashboard"
          description="Calibration matrix by setup type. Drift alerts where predictions diverge from reality. Scoring weight recommendations. Behavioural insights from how the investor has been approving and rejecting picks."
        >
          <WeeklyDiagnosis />
        </MockupBlock>
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

      {/* Technical detail (collapsible) */}
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

function MockupBlock({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-14 last:mb-0">
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {eyebrow}
      </div>
      <h4 className="font-serif text-[18px] font-medium text-ink leading-tight mb-2">
        {title}
      </h4>
      <p className="text-[13.5px] text-ink-600 leading-[1.65] mb-5">
        {description}
      </p>
      {children}
    </div>
  );
}

/* ---------- Mockup 1: Decision Card ---------- */

function DecisionCard() {
  const d = decisionCard;
  return (
    <div className="bg-white border-[0.5px] border-ink-200 rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-5 border-b border-ink-100 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="font-mono text-[18px] font-semibold text-ink mb-0.5 tracking-tight">
            {d.symbol}
          </div>
          <div className="text-[12px] text-ink-600 mb-2.5">{d.company}</div>
          <div className="flex flex-wrap gap-1.5">
            {d.tags.map((t, i) => (
              <span
                key={i}
                className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                  i === 0
                    ? "bg-accent-soft text-accent border-[0.5px] border-accent/30 font-medium"
                    : "bg-ink-50 text-ink-700 border-[0.5px] border-ink-200"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 mb-0.5">
            UDV
          </div>
          <div className="font-serif text-[28px] font-medium text-accent leading-none mb-1">
            {d.udv}
          </div>
          <div className="font-mono text-[10px] text-ink-500">{d.udvRank}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-5">
        {/* Price levels */}
        <div className="grid grid-cols-5 gap-2">
          {d.levels.map((lv, i) => (
            <div
              key={i}
              className={`rounded p-2 text-center border-[0.5px] ${
                lv.tone === "loss"
                  ? "border-red-300/60 bg-red-50/50"
                  : lv.tone === "profit"
                  ? "border-green-300/60 bg-green-50/50"
                  : "border-ink-200 bg-ink-50/50"
              }`}
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 mb-0.5">
                {lv.label}
              </div>
              <div className="font-mono text-[14px] font-semibold text-ink leading-tight">
                {lv.value}
              </div>
              <div
                className={`font-mono text-[10px] mt-0.5 ${
                  lv.tone === "loss"
                    ? "text-red-700"
                    : lv.tone === "profit"
                    ? "text-green-700"
                    : "text-ink-500"
                }`}
              >
                {lv.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
          {d.stats.map((s, i) => (
            <div key={i}>
              <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-1">
                {s.label}
              </div>
              <div
                className={`font-serif text-[16px] font-medium leading-tight mb-0.5 ${
                  s.tone === "profit" ? "text-green-700" : "text-ink"
                }`}
              >
                {s.value}
              </div>
              <div className="font-mono text-[10px] text-ink-500">{s.note}</div>
            </div>
          ))}
        </div>

        {/* Probability */}
        <div className="bg-ink-50/60 border-[0.5px] border-ink-200 rounded p-3">
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium">
                Probability of win
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-green-700 font-mono">
                <ShieldCheck size={11} aria-hidden />
                High reliability · {d.probability.samples} samples
              </span>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-serif text-[20px] font-medium text-accent">
                {d.probability.value}%
              </span>
              <span className="block font-mono text-[10px] text-ink-500">
                Wilson band {d.probability.bandLow}% to {d.probability.bandHigh}%
              </span>
            </div>
          </div>
          <div className="relative h-2 rounded-full bg-ink-100 overflow-hidden">
            <div
              className="absolute h-full bg-accent/30"
              style={{
                left: `${d.probability.bandLow}%`,
                width: `${d.probability.bandHigh - d.probability.bandLow}%`,
              }}
            />
            <div
              className="absolute h-full bg-accent rounded-full"
              style={{ width: `${d.probability.value}%` }}
            />
            <div className="absolute h-full w-px bg-ink-400" style={{ left: "50%" }} />
          </div>
          <div className="flex justify-between mt-1.5 font-mono text-[9px] text-ink-500">
            <span>0%</span>
            <span>50% coin-flip line</span>
            <span>100%</span>
          </div>
        </div>

        {/* UDV breakdown */}
        <div className="bg-ink-50/60 border-[0.5px] border-ink-200 rounded p-3">
          <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-2">
            UDV breakdown
          </div>
          <div className="space-y-1.5">
            {d.udvBreakdown.map((r, i) => (
              <div key={i} className="flex justify-between text-[12px]">
                <span className="text-ink-700">{r.label}</span>
                <span
                  className={`font-mono ${
                    r.tone === "profit"
                      ? "text-green-700"
                      : r.tone === "loss"
                      ? "text-red-700"
                      : "text-ink"
                  }`}
                >
                  {r.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between text-[13px] pt-2 mt-1 border-t border-ink-200 font-semibold">
              <span className="text-ink">UDV</span>
              <span className="font-mono text-accent">{d.udv}</span>
            </div>
          </div>
        </div>

        {/* Reasoning */}
        <div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
            <Sparkles size={12} aria-hidden />
            Why this trade
          </div>
          <p className="text-[13px] text-ink-700 leading-[1.65]">{d.reasoning}</p>
        </div>

        {/* Warning */}
        <div className="bg-amber-50/70 border-[0.5px] border-amber-300/60 rounded p-3 flex gap-2 items-start">
          <AlertCircle size={14} className="text-amber-700 flex-shrink-0 mt-0.5" aria-hidden />
          <p className="text-[12.5px] text-ink-700 leading-[1.6]">
            <span className="font-medium text-amber-900">Risk note: </span>
            {d.warning}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 p-4 bg-ink-50/40 border-t border-ink-100">
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded font-mono text-[11px] uppercase tracking-wider font-medium border-[0.5px] border-red-300 bg-white text-red-700 hover:bg-red-50 transition-colors">
          <X size={12} aria-hidden />
          Reject
        </button>
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded font-mono text-[11px] uppercase tracking-wider font-medium border-[0.5px] border-ink-300 bg-white text-ink-700 hover:bg-ink-50 transition-colors">
          <Edit size={12} aria-hidden />
          Modify
        </button>
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded font-mono text-[11px] uppercase tracking-wider font-medium bg-accent text-white hover:bg-accent/90 transition-colors">
          <Check size={12} aria-hidden />
          Approve
        </button>
      </div>
    </div>
  );
}

/* ---------- Mockup 2: Mobile Approval Queue ---------- */

function ApprovalQueueMobile() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[360px] bg-white border-[0.5px] border-ink-300 rounded-[2rem] overflow-hidden shadow-lg">
        {/* Status bar */}
        <div className="bg-ink-50/60 border-b border-ink-100 flex items-center justify-between px-6 py-2.5">
          <span className="font-mono text-[11px] font-semibold text-ink">09:07</span>
          <span className="flex items-center gap-1.5 text-ink-600">
            <Signal size={11} aria-hidden />
            <Wifi size={11} aria-hidden />
            <Battery size={12} aria-hidden />
          </span>
        </div>

        <div className="p-4 space-y-3">
          {/* App header */}
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-[18px] font-medium text-ink leading-tight">
              Today&apos;s picks
            </h3>
            <span className="font-mono text-[10px] text-ink-500">Fri 23 May</span>
          </div>

          {/* Regime strip */}
          <div className="bg-accent-soft border-[0.5px] border-accent/30 rounded p-3 flex items-center justify-between gap-3">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-accent font-medium mb-0.5">
                Market regime
              </div>
              <div className="font-serif text-[14px] font-medium text-ink">Trending up</div>
            </div>
            <span className="font-mono text-[10px] bg-white text-accent px-2 py-0.5 rounded border-[0.5px] border-accent/30">
              Bullish · 67/100
            </span>
          </div>

          {/* Queue stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "4", label: "Picks" },
              { value: "₹3.2L", label: "Deploy" },
              { value: "2.8%", label: "Total risk" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-ink-50/60 border-[0.5px] border-ink-200 rounded p-2.5 text-center"
              >
                <div className="font-serif text-[16px] font-medium text-ink leading-tight">
                  {s.value}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Pick cards */}
          <div className="space-y-2 pt-1">
            {queuePicks.map((p, i) => (
              <PickCard key={i} p={p} />
            ))}
          </div>

          {/* Bulk action */}
          <div className="pt-2 space-y-1.5">
            <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded bg-accent text-white font-medium text-[13px]">
              <Check size={14} aria-hidden />
              Approve all 4 picks
            </button>
            <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded border-[0.5px] border-ink-300 bg-white text-ink-700 font-medium text-[12px]">
              Review one by one
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PickCard({ p }: { p: typeof queuePicks[number] }) {
  const tfClasses =
    p.tf === "Swing"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : p.tf === "Medium"
      ? "bg-purple-50 text-purple-700 border-purple-200"
      : "bg-emerald-50 text-emerald-700 border-emerald-200";
  return (
    <div className="bg-white border-[0.5px] border-ink-200 rounded p-3">
      <div className="flex items-center justify-between mb-0.5">
        <span className="font-mono text-[12px] font-semibold text-ink tracking-tight">
          {p.symbol}
        </span>
        <span
          className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border-[0.5px] ${tfClasses}`}
        >
          {p.tf}
        </span>
      </div>
      <div className="text-[10.5px] text-ink-500 mb-2.5">{p.company}</div>
      <div className="grid grid-cols-3 gap-1 mb-2">
        <Metric value={p.pwin} label="P(Win)" />
        <Metric value={p.ev} label="EV" tone="profit" />
        <Metric value={p.rr} label="R:R" />
      </div>
      <div className="flex items-center justify-between text-[10.5px] font-mono pt-2 border-t border-ink-100">
        <span className="text-ink-600">{p.range}</span>
        <span className="text-ink-500">
          UDV <span className="text-accent font-semibold">{p.udv}</span>
        </span>
      </div>
    </div>
  );
}

function Metric({ value, label, tone }: { value: string; label: string; tone?: "profit" }) {
  return (
    <div className="bg-ink-50/40 rounded px-1 py-1 text-center">
      <div className={`font-mono text-[11px] font-semibold leading-tight ${tone === "profit" ? "text-green-700" : "text-ink"}`}>
        {value}
      </div>
      <div className="font-mono text-[8px] uppercase tracking-wider text-ink-500 mt-0.5">
        {label}
      </div>
    </div>
  );
}

/* ---------- Mockup 3: End-of-Day Report ---------- */

function EODReport() {
  return (
    <div className="bg-white border-[0.5px] border-ink-200 rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-ink-50/40 border-b border-ink-100 p-5">
        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium mb-1">
          Friday · 23 May 2026 · NSE day complete
        </div>
        <h4 className="font-serif text-[22px] font-medium text-ink leading-tight mb-4 flex items-center gap-2">
          <Mail size={18} className="text-accent" aria-hidden />
          End-of-day report
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <HeroStat label="Day P&L" value="+₹8,420" sub="+0.84% of portfolio" tone="profit" />
          <HeroStat label="Trades closed" value="3" sub="2 wins · 1 loss" />
          <HeroStat label="Open positions" value="5" sub="3 swing · 2 medium" />
          <HeroStat label="Calibration" value="On track" sub="Predicted 60% · realized 62%" tone="profit" />
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Closed today */}
        <div>
          <SubsectionTitle icon={<Check size={14} aria-hidden />}>Closed today</SubsectionTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="text-left border-b border-ink-200">
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Symbol</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Entry</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Exit</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">P&L</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Outcome</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2">Hold</th>
                </tr>
              </thead>
              <tbody>
                {eodClosedTrades.map((t, i) => (
                  <tr key={i} className="border-b border-ink-100 last:border-0">
                    <td className="font-mono py-2.5 pr-3 text-ink font-semibold">{t.symbol}</td>
                    <td className="font-mono py-2.5 pr-3 text-ink-700">{t.entry}</td>
                    <td className="font-mono py-2.5 pr-3 text-ink-700">{t.exit}</td>
                    <td className={`font-mono py-2.5 pr-3 font-medium ${t.tone === "profit" ? "text-green-700" : "text-red-700"}`}>
                      {t.pnl}
                    </td>
                    <td className="py-2.5 pr-3">
                      <OutcomeTag outcome={t.outcome} tone={t.tone} />
                    </td>
                    <td className="font-mono py-2.5 text-ink-600">{t.hold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Open positions */}
        <div>
          <SubsectionTitle icon={<Clock size={14} aria-hidden />}>Open positions</SubsectionTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="text-left border-b border-ink-200">
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Symbol</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Entry</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Last</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Unrealized</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Next target</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2">Stop dist.</th>
                </tr>
              </thead>
              <tbody>
                {eodOpenPositions.map((t, i) => (
                  <tr key={i} className="border-b border-ink-100 last:border-0">
                    <td className="font-mono py-2.5 pr-3 text-ink font-semibold">{t.symbol}</td>
                    <td className="font-mono py-2.5 pr-3 text-ink-700">{t.entry}</td>
                    <td className="font-mono py-2.5 pr-3 text-ink-700">{t.last}</td>
                    <td className={`font-mono py-2.5 pr-3 ${t.tone === "profit" ? "text-green-700" : "text-red-700"}`}>
                      {t.unreal}
                    </td>
                    <td className="font-mono py-2.5 pr-3 text-ink-600">{t.next}</td>
                    <td className="font-mono py-2.5 text-ink-600">{t.stop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Calibration snapshot */}
        <div>
          <SubsectionTitle icon={<TrendingUp size={14} aria-hidden />}>Calibration snapshot</SubsectionTitle>
          <div className="bg-ink-50/60 border-[0.5px] border-ink-200 rounded p-3 space-y-1.5">
            {[
              { label: "Predicted P(Win) for closed trades", value: "60%" },
              { label: "Realized win rate (today)", value: "67%", tone: "profit" },
              { label: "Realized win rate (last 30 days)", value: "62%" },
              { label: "Brier score (30-day)", value: "0.214 · on target" },
            ].map((r, i) => (
              <div key={i} className="flex justify-between text-[12px]">
                <span className="text-ink-700">{r.label}</span>
                <span className={`font-mono font-medium ${r.tone === "profit" ? "text-green-700" : "text-ink"}`}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <div>
          <SubsectionTitle icon={<Brain size={14} aria-hidden />}>Lessons logged for self-diagnosis</SubsectionTitle>
          <div className="space-y-2">
            {eodLessons.map((l, i) => (
              <div key={i} className="bg-ink-50/40 border-l-2 border-l-accent rounded-r p-3 flex gap-2 items-start">
                <ArrowRight size={13} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
                <div className="text-[12.5px] text-ink-700 leading-[1.6]">
                  <span className="font-medium text-ink">{l.title}: </span>
                  {l.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroStat({ label, value, sub, tone }: { label: string; value: string; sub: string; tone?: "profit" }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-1">
        {label}
      </div>
      <div className={`font-serif text-[20px] font-medium leading-tight mb-0.5 ${tone === "profit" ? "text-green-700" : "text-ink"}`}>
        {value}
      </div>
      <div className="font-mono text-[10px] text-ink-500">{sub}</div>
    </div>
  );
}

function SubsectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-3">
      <span className="text-accent">{icon}</span>
      {children}
    </div>
  );
}

function OutcomeTag({ outcome, tone }: { outcome: string; tone: "profit" | "loss" }) {
  const classes =
    tone === "profit"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-red-50 text-red-700 border-red-200";
  return (
    <span className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border-[0.5px] ${classes}`}>
      {outcome}
    </span>
  );
}

/* ---------- Mockup 4: Weekly Self-Diagnosis ---------- */

function WeeklyDiagnosis() {
  return (
    <div className="bg-white border-[0.5px] border-ink-200 rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-ink-50/40 border-b border-ink-100 p-5">
        <h4 className="font-serif text-[22px] font-medium text-ink leading-tight mb-4 flex items-center gap-2">
          <Brain size={18} className="text-accent" aria-hidden />
          Week of 19 to 23 May 2026 · self-diagnosis
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <HeroStat label="Trades closed" value="12" sub="2 intraday · 6 swing · 4 medium" />
          <HeroStat label="Win rate" value="58%" sub="+3% vs prior week" tone="profit" />
          <HeroStat label="Net P&L" value="+₹24,860" sub="+2.5% of portfolio" tone="profit" />
          <HeroStat label="Brier score" value="0.218" sub="target ≤ 0.22" />
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Calibration matrix */}
        <div>
          <SubsectionTitle icon={<TrendingUp size={14} aria-hidden />}>
            Calibration matrix by setup type
          </SubsectionTitle>
          <p className="text-[12px] text-ink-600 leading-[1.6] mb-3 -mt-1">
            Where the system&apos;s predictions match reality, and where they don&apos;t.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="text-left border-b border-ink-200">
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Setup type</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Predicted</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Realized</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2 pr-3">Delta</th>
                  <th className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {diagCalibration.map((r, i) => (
                  <tr key={i} className="border-b border-ink-100 last:border-0">
                    <td className="py-2.5 pr-3 text-ink font-medium">{r.setup}</td>
                    <td className="font-mono py-2.5 pr-3 text-ink-700">{r.predicted}</td>
                    <td className="font-mono py-2.5 pr-3 text-ink-700">{r.realized}</td>
                    <td
                      className={`font-mono py-2.5 pr-3 font-medium ${
                        r.delta.startsWith("+")
                          ? "text-green-700"
                          : r.delta.startsWith("−") && r.tone === "drift"
                          ? "text-red-700"
                          : "text-ink-500"
                      }`}
                    >
                      {r.delta}
                    </td>
                    <td className="py-2.5">
                      <StatusTag status={r.status} tone={r.tone} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drift alerts */}
        <div>
          <SubsectionTitle icon={<AlertTriangle size={14} aria-hidden />}>
            Active drift alerts
          </SubsectionTitle>
          <p className="text-[12px] text-ink-600 leading-[1.6] mb-3 -mt-1">
            Cells where predictions are diverging from reality. Auto-downweighted in UDV until corrected.
          </p>
          <div className="space-y-3">
            {diagDriftAlerts.map((a, i) => (
              <div key={i} className="bg-amber-50/40 border-[0.5px] border-amber-300/50 rounded p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <AlertTriangle size={13} className="text-amber-700" aria-hidden />
                  <span className="font-serif text-[14px] font-medium text-ink">{a.title}</span>
                </div>
                <p className="text-[12px] text-ink-700 leading-[1.6] mb-1.5">{a.body}</p>
                <p className="text-[12px] text-ink-700 leading-[1.6]">
                  <span className="font-medium">Recommendation: </span>
                  {a.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring recommendations */}
        <div>
          <SubsectionTitle icon={<Sliders size={14} aria-hidden />}>
            Scoring weight recommendations
          </SubsectionTitle>
          <p className="text-[12px] text-ink-600 leading-[1.6] mb-3 -mt-1">
            Suggested changes to the composite score weights based on this week&apos;s outcomes.
          </p>
          <div className="space-y-2">
            {diagRecommendations.map((r, i) => (
              <div key={i} className="bg-ink-50/40 border-l-2 border-l-accent rounded-r p-3 flex gap-2 items-start">
                <Sliders size={13} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="font-serif text-[13.5px] font-medium text-ink leading-tight mb-1">{r.title}</div>
                  <p className="text-[12px] text-ink-700 leading-[1.6]">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trader state insights */}
        <div>
          <SubsectionTitle icon={<Eye size={14} aria-hidden />}>Trader-state insights</SubsectionTitle>
          <p className="text-[12px] text-ink-600 leading-[1.6] mb-3 -mt-1">
            Patterns in how the investor has been approving picks this week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {diagBehavior.map((b, i) => (
              <div
                key={i}
                className={`rounded p-3 border-[0.5px] ${
                  b.flag ? "bg-amber-50/40 border-amber-300/50" : "bg-ink-50/40 border-ink-200"
                }`}
              >
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-1">
                  {b.label}
                </div>
                <div className={`font-serif text-[16px] font-medium leading-tight mb-1 ${b.flag ? "text-amber-900" : "text-ink"}`}>
                  {b.value}
                </div>
                <p className="text-[11.5px] text-ink-600 leading-[1.5]">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusTag({ status, tone }: { status: string; tone: "ok" | "drift" }) {
  const classes =
    tone === "ok"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-red-50 text-red-700 border-red-200";
  return (
    <span className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border-[0.5px] ${classes}`}>
      {status}
    </span>
  );
}

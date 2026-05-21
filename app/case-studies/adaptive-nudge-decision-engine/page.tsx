import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Activity,
  Target,
  Brain,
  MessageSquare,
  RefreshCw,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Adaptive Nudge Decision Engine \u00b7 Maulin Shah",
  description:
    "A case study from Supertails (2025): a unified decision layer for customer nudges. Framework designed and now in operationalization \u2014 moving from use-case campaigns to system-driven decisioning.",
};

export default function AndePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-content mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-[12px] text-ink-500 hover:text-ink mb-8 transition-colors"
          >
            <ArrowLeft size={12} aria-hidden />
            Back to portfolio
          </Link>
          <div className="text-[11px] font-mono uppercase tracking-wider text-accent mb-3">
            Case study &middot; Supertails
          </div>
          <h1 className="font-serif text-[28px] md:text-[34px] font-medium text-ink leading-tight mb-4 tracking-tight">
            Adaptive Nudge Decision Engine (ANDE)
          </h1>
          <div className="text-[13px] text-ink-500 mb-6">
            Supertails &middot; 2025 &middot; Framework now in operationalization
          </div>
          <p className="text-[15px] md:text-[16px] text-ink-700 leading-[1.6] max-w-prose">
            A unified decision layer for customer nudges. Designed to move Supertails from use-case campaigns to system-driven decisioning.
          </p>
        </div>
      </section>

      {/* Section: The situation */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">The situation</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-4">
            Every customer objective at Supertails ran as its own campaign. ATC nudges had their list, their copy, their cadence. Replenishment had a different list, different copy, different cadence. Cross-sell, reactivation, checkout recovery, new-to-platform: each one its own workflow, each one rebuilt every time something changed.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-4">
            The result, predictably: bandwidth burning on repetition, the same customer receiving conflicting nudges from different campaigns in the same day, no single source of truth for what the system was actually doing on any given morning.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            The business was growing faster than this campaign-by-campaign model could be maintained. The structural problem wasn&apos;t any one campaign. It was the absence of a layer underneath them.
          </p>
        </div>
      </section>

      {/* Section: The strategic bet */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">The strategic bet</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-4">
            Rather than build more campaigns, hire more people to run them, or buy another tool that promised to orchestrate the chaos, the bet was structural: design a single decision layer underneath every objective.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            One framework that decides, for every customer, every batch run: <em>who</em> to nudge, <em>what</em> to pitch, <em>how</em> to frame it, and <em>when</em> to send it. Replace the fragmentation of campaign-by-campaign with a system whose outputs every channel can plug into. Strong governance on top, learning loops underneath, explainability throughout.
          </p>
        </div>
      </section>

      {/* Section: The architecture (the visual centerpiece) */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">The six-layer architecture</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-7">
            ANDE is structured as six layers, each answering a single question. Customer data and signals flow in at the top. A single nudge per customer per cycle flows out the bottom, with every decision logged and feeding the next batch.
          </p>

          {/* Vertical 6-layer stack */}
          <div className="my-6 max-w-[560px]">
            {/* Layer 1 */}
            <div className="border border-ink-200 rounded-md p-4 bg-surface flex gap-4 items-start">
              <Users size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="text-[13.5px] font-medium text-ink">Customer State Engine</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent flex-shrink-0">WHO</div>
                </div>
                <div className="text-[12px] text-ink-600 leading-[1.6]">
                  Categorizes every customer into a lifecycle state: Awareness, Consideration, Checkout, Retention (Likely / Might / Unlikely), Dormant. State defines what is appropriate to communicate.
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5">
              <ArrowDown size={16} className="text-ink-400" aria-hidden />
            </div>

            {/* Layer 2 */}
            <div className="border border-ink-200 rounded-md p-4 bg-surface flex gap-4 items-start">
              <Activity size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="text-[13.5px] font-medium text-ink">Signals &amp; Scoring</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent flex-shrink-0">WHAT</div>
                </div>
                <div className="text-[12px] text-ink-600 leading-[1.6]">
                  Combines customer-intent signals (browsing, recency, affinity, replenishment eligibility) with business priorities (margin, inventory, brand pushes) into a single pitch relevance score.
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5">
              <ArrowDown size={16} className="text-ink-400" aria-hidden />
            </div>

            {/* Layer 3 */}
            <div className="border border-ink-200 rounded-md p-4 bg-surface flex gap-4 items-start">
              <Target size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="text-[13.5px] font-medium text-ink">Objective &amp; Priority</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent flex-shrink-0">WHY</div>
                </div>
                <div className="text-[12px] text-ink-600 leading-[1.6]">
                  Maps state and signals to the right engagement objective. Resolves conflicts: when multiple objectives apply, a strict priority hierarchy picks one.
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5">
              <ArrowDown size={16} className="text-ink-400" aria-hidden />
            </div>

            {/* Layer 4 — the central decision engine, slightly emphasized */}
            <div className="border-[1.5px] border-accent rounded-md p-4 bg-accent/5 flex gap-4 items-start">
              <Brain size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="text-[13.5px] font-medium text-ink">Decision Engine</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent flex-shrink-0">WHAT + WHEN</div>
                </div>
                <div className="text-[12px] text-ink-600 leading-[1.6]">
                  The brain. Takes every input from the layers above and produces exactly one nudge per customer per batch: objective, pitch, tone, channel, timing window, suppression flags.
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5">
              <ArrowDown size={16} className="text-ink-400" aria-hidden />
            </div>

            {/* Layer 5 */}
            <div className="border border-ink-200 rounded-md p-4 bg-surface flex gap-4 items-start">
              <MessageSquare size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="text-[13.5px] font-medium text-ink">LLM Communication</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent flex-shrink-0">HOW</div>
                </div>
                <div className="text-[12px] text-ink-600 leading-[1.6]">
                  Turns each decision packet into channel-appropriate messages: push titles and bodies, WhatsApp variants, email snippets. Personalised, on-brand, within guardrails.
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5">
              <ArrowDown size={16} className="text-ink-400" aria-hidden />
            </div>

            {/* Layer 6 */}
            <div className="border border-ink-200 rounded-md p-4 bg-surface flex gap-4 items-start">
              <RefreshCw size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="text-[13.5px] font-medium text-ink">Logging &amp; Feedback</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent flex-shrink-0">LEARN</div>
                </div>
                <div className="text-[12px] text-ink-600 leading-[1.6]">
                  Every decision logged, every outcome recorded. Engagement and conversion signals feed the next batch&apos;s scoring. Negative signals trigger suppression. The system learns between cycles, not in real time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Three design decisions */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">Three design decisions that shape the system</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-6">
            Not every choice. The three that mattered most.
          </p>

          <div className="space-y-5">
            {/* Decision 1 */}
            <div className="border-l-2 border-accent pl-4">
              <div className="font-serif text-[16px] font-medium text-ink mb-2">Batch over real-time</div>
              <p className="text-[13.5px] text-ink-700 leading-[1.7] mb-2">
                Real-time decisioning would have been the obvious technical choice. The decision was to go batch-first because batch creates predictability, easier debugging, and a foundation that can evolve to real-time later.
              </p>
              <p className="text-[13.5px] text-ink-700 leading-[1.7] italic">
                The system needed to be calmer than the customer base.
              </p>
            </div>

            {/* Decision 2 */}
            <div className="border-l-2 border-accent pl-4">
              <div className="font-serif text-[16px] font-medium text-ink mb-2">One nudge per customer per cycle</div>
              <p className="text-[13.5px] text-ink-700 leading-[1.7]">
                Hard cap. Even when three valid objectives apply to the same customer, exactly one fires. A strict tie-breaking hierarchy &mdash; Replenishment, then Checkout Recovery, then High-intent ATC, then Cross-sell, then Discount, then Dormant reactivation &mdash; resolves every conflict. This is the system&apos;s central commercial logic, written down once, applied everywhere.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="border-l-2 border-accent pl-4">
              <div className="font-serif text-[16px] font-medium text-ink mb-2">Explainability over optimisation</div>
              <p className="text-[13.5px] text-ink-700 leading-[1.7]">
                Every nudge must be answerable. <em>Why did this customer get this message? Why was this other message suppressed?</em> If a decision can&apos;t be explained through state, objective, score, and suppression reason, it isn&apos;t shipped. ML-driven optimisation can come later; trust has to be earned first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What this is built to do */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">What this is built to do</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-6">
            The framework was designed against specific success measures. These are the projected improvements ANDE is built to deliver &mdash; the measures the system was architected to move, not yet shipped outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {/* Engagement & conversion */}
            <div className="border border-ink-200 rounded-md p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-3">Engagement &amp; conversion</div>
              <ul className="space-y-2">
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>CTR uplift on Push, WhatsApp, and Email nudges</span>
                </li>
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>ATC conversion uplift (consideration to ATC)</span>
                </li>
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>Checkout recovery uplift</span>
                </li>
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>Replenishment adherence rate increase</span>
                </li>
              </ul>
            </div>

            {/* Retention & efficiency */}
            <div className="border border-ink-200 rounded-md p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-3">Retention &amp; efficiency</div>
              <ul className="space-y-2">
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>Increase in 30-day and 60-day repeat rates</span>
                </li>
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>Reduction in churn probability for at-risk cohorts</span>
                </li>
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>Reduction in manual campaigns built per month</span>
                </li>
                <li className="text-[13px] text-ink-700 leading-[1.6] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden />
                  <span>Reduction in WhatsApp cost wastage on irrelevant nudges</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[12.5px] text-ink-500 leading-[1.7] max-w-prose italic">
            These are the measures ANDE is designed to move. Metrics from the live system will be added as the rollout matures.
          </p>
        </div>
      </section>

      {/* Section: Status */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">Status</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-4">
            ANDE has been adopted by Supertails as the operational direction for nudge decisioning. The framework is designed, the architecture is documented, and the rollout is in flight &mdash; moving the company from campaign-by-campaign workflows to system-driven cycles, one layer at a time.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            Real metrics will follow the first 90 days of fully-live operation. This case study will be updated then.
          </p>
        </div>
      </section>

      {/* Section: Reflections */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">Reflections</h2>

          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4">
              <div className="text-[13.5px] font-medium text-ink mb-1.5">The hardest part isn&apos;t the algorithm</div>
              <div className="text-[13px] text-ink-600 leading-[1.7]">
                A six-layer system is just code. Getting Growth, Category, CRM, and Creative to agree on which objective beats which when they collide on the same customer &mdash; that&apos;s the actual work. The decision layer&apos;s job is to make that agreement enforceable.
              </div>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Explainability is a feature, not a luxury</div>
              <div className="text-[13px] text-ink-600 leading-[1.7]">
                Stakeholders trust systems they can interrogate. A black-box decision engine, no matter how accurate, faces constant resistance and constant override. Building explainability in from the start is cheaper than retrofitting it after the political fallout.
              </div>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Batch isn&apos;t a compromise, it&apos;s a stance</div>
              <div className="text-[13px] text-ink-600 leading-[1.7]">
                Real-time carries a halo it doesn&apos;t always deserve. Slower, more predictable, more auditable systems outperform faster ones in contexts where trust matters more than reflex. Real-time is something you earn by getting the batch system right first.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="py-8 px-6">
        <div className="max-w-content mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-500 hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} aria-hidden />
            Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}

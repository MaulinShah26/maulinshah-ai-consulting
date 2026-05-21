import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  History,
  Scale,
  MousePointer2,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Food Replenishment Strategic Framework \u00b7 Maulin Shah",
  description:
    "A case study from Supertails (EIR, 2024 to 2025): predicting when pet parents would run out of food, and timing the right nudge to land before they did.",
};

export default function FoodReplenishmentPage() {
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
            Food Replenishment Strategic Framework
          </h1>
          <div className="text-[13px] text-ink-500 mb-6">
            Supertails &middot; EIR &middot; 2024 to 2025
          </div>
          <p className="text-[15px] md:text-[16px] text-ink-700 leading-[1.6] max-w-prose">
            Predicting when pet parents would run out of food, and timing the right nudge to land before they did.
          </p>
        </div>
      </section>

      {/* Section: The situation */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">The situation</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-4">
            Pet food retention isn&apos;t optional. It&apos;s the entire economics. A pet parent who refills consistently is significantly more valuable over time than one who lapses and comes back. Most consumer brands solve for this with calendar-based reminders. Thirty days, you nudge. That approach breaks the moment you look at the data.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            Dry food lasts longer than wet. Large breeds eat differently than toy breeds. A first-time buyer with one purchase looks nothing like a regular customer with twelve. And some customers signal intent directly through browsing behaviour, long before any calendar would fire. The work was building a system that could read all of those signals and act on the most useful one at the right time, for every customer, every day.
          </p>
        </div>
      </section>

      {/* Section: Shape of the problem */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">The shape of the problem</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-5">
            The temptation when faced with a &ldquo;predict when X happens&rdquo; problem is to chase one perfect model. In practice, that approach fails on the seams. The customer base isn&apos;t one population. It&apos;s three.
          </p>

          {/* Three populations callout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
            <div className="border border-ink-200 rounded-md p-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-ink-500 mb-2">Population A</div>
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Repeat buyers</div>
              <div className="text-[12px] text-ink-600 leading-[1.6]">Have purchase history, the strongest signal available.</div>
            </div>
            <div className="border border-ink-200 rounded-md p-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-ink-500 mb-2">Population B</div>
              <div className="text-[13.5px] font-medium text-ink mb-1.5">First-time buyers</div>
              <div className="text-[12px] text-ink-600 leading-[1.6]">No history. Need a different inference path entirely.</div>
            </div>
            <div className="border border-ink-200 rounded-md p-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-ink-500 mb-2">Population C</div>
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Active browsers</div>
              <div className="text-[12px] text-ink-600 leading-[1.6]">Signalling intent in real time, ahead of any predicted window.</div>
            </div>
          </div>

          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            Each needs a different kind of inference. One model cannot serve all three. The framework had to handle them in parallel.
          </p>
        </div>
      </section>

      {/* Section: Architecture */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">The architecture</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-7">
            Three phases. Each serves one of the populations above. All three feed one unified selector that picks the single most relevant nudge per customer per subcategory.
          </p>

          {/* Architecture diagram */}
          <div className="my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              {/* Phase 1 */}
              <div className="border border-ink-200 rounded-md p-4 bg-surface">
                <div className="flex items-center gap-2 mb-3">
                  <History size={14} className="text-accent" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Phase 1</span>
                </div>
                <div className="text-[13.5px] font-medium text-ink mb-1.5">Hybrid Historical</div>
                <div className="text-[11.5px] text-ink-500 leading-[1.6] mb-3">Serves repeat buyers</div>
                <div className="pt-2 border-t border-ink-200 flex items-start gap-1.5">
                  <ArrowRight size={11} className="mt-0.5 text-ink-500 flex-shrink-0" aria-hidden />
                  <span className="text-[11px] text-ink-600 leading-[1.5]">Predicted date + confidence + SKU</span>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="border border-ink-200 rounded-md p-4 bg-surface">
                <div className="flex items-center gap-2 mb-3">
                  <Scale size={14} className="text-accent" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Phase 2</span>
                </div>
                <div className="text-[13.5px] font-medium text-ink mb-1.5">Guideline-Based</div>
                <div className="text-[11.5px] text-ink-500 leading-[1.6] mb-3">Serves first-time buyers</div>
                <div className="pt-2 border-t border-ink-200 flex items-start gap-1.5">
                  <ArrowRight size={11} className="mt-0.5 text-ink-500 flex-shrink-0" aria-hidden />
                  <span className="text-[11px] text-ink-600 leading-[1.5]">Coverage days from breed &amp; intake</span>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="border border-ink-200 rounded-md p-4 bg-surface">
                <div className="flex items-center gap-2 mb-3">
                  <MousePointer2 size={14} className="text-accent" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Phase 3</span>
                </div>
                <div className="text-[13.5px] font-medium text-ink mb-1.5">Intent-Based</div>
                <div className="text-[11.5px] text-ink-500 leading-[1.6] mb-3">Serves active browsers</div>
                <div className="pt-2 border-t border-ink-200 flex items-start gap-1.5">
                  <ArrowRight size={11} className="mt-0.5 text-ink-500 flex-shrink-0" aria-hidden />
                  <span className="text-[11px] text-ink-600 leading-[1.5]">Real-time intent + product context</span>
                </div>
              </div>
            </div>

            {/* Arrows down */}
            <div className="flex justify-around max-w-[80%] mx-auto my-2">
              <ChevronDown size={18} className="text-ink-400" aria-hidden />
              <ChevronDown size={18} className="text-ink-400" aria-hidden />
              <ChevronDown size={18} className="text-ink-400" aria-hidden />
            </div>

            {/* Unification */}
            <div className="border-[1.5px] border-accent rounded-md p-4 text-center bg-accent/5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-2">Unification</div>
              <div className="text-[14.5px] font-medium text-ink mb-1.5">One nudge per customer, per subcategory</div>
              <div className="text-[11.5px] text-ink-600">Tie-breaking priority: Intent &gt; Historical &gt; Guideline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Phase 1 */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[18px] font-medium text-ink mb-5 flex items-center gap-2">
            <History size={16} className="text-accent" aria-hidden />
            Phase 1: hybrid historical
          </h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-3">
            For repeat buyers, the historical signal is the strongest one available. Phase 1 computes replenishment cycles at two granularities (customer by SKU, customer by subcategory) and merges them into a single hybrid prediction, weighted toward whichever signal is more reliable for that customer.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            The output isn&apos;t just a date. It&apos;s a date plus a confidence score, computed from three components: order depth (more orders, more signal), stability (do their cycles cluster tightly or scatter widely), and recency (are they still active). Confidence flows downstream into nudge timing.
          </p>
        </div>
      </section>

      {/* Section: Phase 2 */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[18px] font-medium text-ink mb-5 flex items-center gap-2">
            <Scale size={16} className="text-accent" aria-hidden />
            Phase 2: guideline-based
          </h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-3">
            First-time buyers have no purchase history. Phase 2 substitutes biology for behaviour. A mapping of breed, life stage, and subcategory to daily food intake gives a coverage-days estimate from any pack size. If a customer buys a 5kg bag of adult Labrador dry food, and the guideline says an adult Lab consumes around 250g per day, the pack covers roughly twenty days.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            The model is honest about its limits. Multipacks, multi-pet households, and breed-mix dogs all degrade accuracy. Coverage lands at roughly 60% within a 20-day window. Less precise than Phase 1, but it reaches a population Phase 1 cannot.
          </p>
        </div>
      </section>

      {/* Section: Phase 3 */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[18px] font-medium text-ink mb-5 flex items-center gap-2">
            <MousePointer2 size={16} className="text-accent" aria-hidden />
            Phase 3: intent-based
          </h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-3">
            The newest layer captures something neither historical patterns nor biological guidelines can: real-time intent. When a customer who bought wet food eighteen days ago suddenly views that same product page, or browses other wet food SKUs, they&apos;re signalling readiness. Often this precedes the predicted reorder window by days.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            Phase 3 fires only fifteen or more days post-purchase, to avoid false positives from immediate browsing. Viewing the same product page wins precedence over general category browsing. The nudge carries the specific product context into the messaging, letting creative speak directly to what the customer was looking at.
          </p>
        </div>
      </section>

      {/* Section: Unification (with before/after visual) */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">Unification: one nudge per customer</h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-6">
            Three independent models without coordination would mean three potential nudges per customer, each promoting something different. The unification layer enforces a clear hierarchy and outputs a single prioritized row per customer per day.
          </p>

          {/* Before / After visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
            {/* Without */}
            <div className="border border-ink-200 rounded-md p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 mb-3">Without unification</div>
              <ul className="space-y-2 mb-4">
                <li className="text-[12px] text-ink-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-1.5 flex-shrink-0" aria-hidden />
                  <span>Phase 1 nudge fires: <em>&ldquo;reorder dry food&rdquo;</em></span>
                </li>
                <li className="text-[12px] text-ink-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-1.5 flex-shrink-0" aria-hidden />
                  <span>Phase 2 nudge fires: <em>&ldquo;try our wet food&rdquo;</em></span>
                </li>
                <li className="text-[12px] text-ink-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-1.5 flex-shrink-0" aria-hidden />
                  <span>Phase 3 nudge fires: <em>&ldquo;the toy you browsed&rdquo;</em></span>
                </li>
              </ul>
              <div className="text-[11.5px] text-ink-500 leading-[1.6] pt-3 border-t border-ink-200">
                Three messages, one customer, one day. Chaos and wasted spend.
              </div>
            </div>

            {/* With */}
            <div className="border-[1.5px] border-accent rounded-md p-4 bg-accent/5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-3">With unification</div>
              <ul className="space-y-2 mb-4">
                <li className="text-[12px] text-ink-700 flex items-start gap-2">
                  <Check size={12} className="text-accent mt-1 flex-shrink-0" aria-hidden />
                  <span>Intent signal detected, highest priority</span>
                </li>
                <li className="text-[12px] text-ink-700 flex items-start gap-2">
                  <Check size={12} className="text-accent mt-1 flex-shrink-0" aria-hidden />
                  <span>Historical and Guideline suppressed</span>
                </li>
                <li className="text-[12px] text-ink-700 flex items-start gap-2">
                  <Check size={12} className="text-accent mt-1 flex-shrink-0" aria-hidden />
                  <span>One nudge: <em>&ldquo;the toy you browsed&rdquo;</em></span>
                </li>
              </ul>
              <div className="text-[11.5px] text-ink-500 leading-[1.6] pt-3 border-t border-ink-200">
                One message, one customer, full context preserved downstream.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Outcomes (with metric strip) */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">Outcomes</h2>

          {/* Metric strip */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="border border-ink-200 rounded-md p-4 text-center">
              <div className="font-serif text-[28px] md:text-[32px] font-medium text-accent leading-none mb-2">~60%</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-ink-500">Precision &middot; Dry food</div>
            </div>
            <div className="border border-ink-200 rounded-md p-4 text-center">
              <div className="font-serif text-[28px] md:text-[32px] font-medium text-accent leading-none mb-2">~75%</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-ink-500">Precision &middot; Wet food</div>
            </div>
            <div className="border border-ink-200 rounded-md p-4 text-center">
              <div className="font-serif text-[28px] md:text-[32px] font-medium text-accent leading-none mb-2">&plusmn;7 days</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-ink-500">Prediction window</div>
            </div>
          </div>

          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-3">
            Phase 1 became the workhorse: high-confidence, high-volume, high-relevance, with most predictions landing within a week of the actual reorder date. Phase 2 covered first-time buyers previously unreachable by personalized logic. Phase 3 added a layer of responsiveness historical models systematically cannot produce.
          </p>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose">
            The internal question shifted from <em>&ldquo;when should we remind everyone?&rdquo;</em> to <em>&ldquo;who has signalled they&apos;re ready, and what&apos;s the most relevant thing to say to them today?&rdquo;</em> That shift, from broadcast cadence to per-customer decisioning, is the part that compounds.
          </p>
        </div>
      </section>

      {/* Section: Reflections */}
      <section className="py-6 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[19px] font-medium text-ink mb-5">Reflections</h2>

          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4">
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Heterogeneous bases need heterogeneous frameworks</div>
              <div className="text-[13px] text-ink-600 leading-[1.7]">
                The instinct to chase one perfect model is the wrong instinct for retention. It forces a single algorithm to handle populations it wasn&apos;t designed for.
              </div>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Confidence matters as much as prediction</div>
              <div className="text-[13px] text-ink-600 leading-[1.7]">
                A model that&apos;s 85% sure should behave differently downstream than one that&apos;s 45% sure. The system&apos;s actions should reflect that uncertainty explicitly.
              </div>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <div className="text-[13.5px] font-medium text-ink mb-1.5">Intent signals are systematically underused</div>
              <div className="text-[13px] text-ink-600 leading-[1.7]">
                Historical purchase data is necessary but insufficient. The customer browsing the SKU they bought last month is telling you something a calendar reminder never could.
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

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Food Replenishment Strategic Framework · Maulin Shah",
  description:
    "A case study from Supertails (EIR, 2024 to 2025): predicting when pet parents would run out of food, and timing the right nudge to land before they did. A three-phase decisioning framework.",
};

export default function FoodReplenishmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-content mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-[12px] text-ink-500 hover:text-ink mb-8 transition-colors"
          >
            <ArrowLeft size={12} aria-hidden />
            Back to portfolio
          </Link>
          <div className="text-[11px] font-mono uppercase tracking-wider text-accent mb-3">
            Case study · Supertails
          </div>
          <h1 className="text-[28px] md:text-[32px] font-medium text-ink leading-tight mb-4">
            Food Replenishment Strategic Framework
          </h1>
          <div className="text-[13px] text-ink-500 mb-6">
            Supertails · EIR · 2024 to 2025
          </div>
          <p className="text-[15px] md:text-[16px] text-ink-700 leading-[1.6] max-w-prose">
            Predicting when pet parents would run out of food, and timing the right nudge to land before they did.
          </p>
        </div>
      </section>

      {/* Section 2: The situation */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">The situation</h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              In a category like pet food, retention isn&apos;t optional. It&apos;s the entire
              economics. A pet parent who refills consistently is significantly more valuable
              over time than one who lapses and comes back. Most consumer brands solve for this
              with calendar-based reminders: <em>&ldquo;It&apos;s been thirty days, time to reorder.&rdquo;</em>{" "}
              But that approach breaks the moment you look at the data.
            </p>
            <p>
              Dry food lasts longer than wet food. Large breeds eat differently than toy breeds.
              A first-time buyer with one purchase looks nothing like a regular customer with
              twelve. And some customers signal intent directly: browsing the product they
              just bought, viewing related items, long before any calendar reminder would
              fire.
            </p>
            <p>
              The work here was building a system that could read all of those signals and act
              on the most useful one at the right time, for every customer, every day.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The shape of the problem */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">The shape of the problem</h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              The temptation when faced with a &ldquo;predict when X happens&rdquo; problem is to chase
              one perfect model. One model that takes in everything we know about a customer
              and outputs a date. In practice, that approach fails on the seams.
            </p>
            <p>
              A model trained on repeat buyers cannot predict for first-time buyers. There&apos;s
              no history to learn from. A model trained on universal feeding guidelines cannot
              capture the customer who buys multipacks for multiple pets. A model trained on
              either of those cannot react when a customer is actively browsing the SKU they
              bought last month.
            </p>
            <p>
              These aren&apos;t edge cases. They&apos;re three meaningfully different populations within
              the same customer base, each requiring a different kind of inference. The
              framework needed to handle all three without forcing one model to do work it
              wasn&apos;t designed for.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The architecture */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">
            The architecture: three phases, one decision
          </h2>
          <p className="text-[14px] text-ink-700 leading-[1.75] max-w-prose mb-8">
            The solution was a three-phase decisioning framework. Each phase serves a distinct
            population and a distinct signal type. All three feed into one unified selector
            that picks the single most relevant nudge per customer per subcategory.
          </p>

          {/* Architecture diagram */}
          <div className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="border border-ink-200 rounded-md p-4">
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent mb-2">
                  Phase 1
                </div>
                <div className="text-[13px] font-medium text-ink mb-1">Hybrid Historical</div>
                <div className="text-[11px] text-ink-600 leading-[1.5]">
                  Repeat buyers with two or more orders. SKU and category cycles, confidence-scored.
                </div>
              </div>
              <div className="border border-ink-200 rounded-md p-4">
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent mb-2">
                  Phase 2
                </div>
                <div className="text-[13px] font-medium text-ink mb-1">Guideline-Based</div>
                <div className="text-[11px] text-ink-600 leading-[1.5]">
                  First-time buyers. Breed, life stage, and subcategory map to daily intake and coverage days.
                </div>
              </div>
              <div className="border border-ink-200 rounded-md p-4">
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent mb-2">
                  Phase 3
                </div>
                <div className="text-[13px] font-medium text-ink mb-1">Intent-Based</div>
                <div className="text-[11px] text-ink-600 leading-[1.5]">
                  Real-time browsing signals. PDP and category views fifteen or more days post-purchase.
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3">
              <ChevronDown size={20} className="text-ink-400" aria-hidden />
            </div>
            <div className="border border-ink-300 bg-ink-50 rounded-md p-4 text-center">
              <div className="text-[10px] font-mono uppercase tracking-wider text-accent mb-2">
                Unification
              </div>
              <div className="text-[14px] font-medium text-ink mb-1">
                One nudge per customer, per subcategory
              </div>
              <div className="text-[12px] text-ink-600">
                Tie-breaking: Intent &gt; Historical &gt; Guideline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Phase 1 */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">
            Phase 1: hybrid historical model
          </h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              For repeat buyers (anyone with two or more orders), the historical signal is the
              strongest one available. Phase 1 computes replenishment cycles at two
              granularities: customer by SKU (most specific) and customer by subcategory (more
              robust when SKU data is sparse). The two are merged into a single hybrid
              prediction, weighted toward whichever signal is more reliable for that customer.
            </p>
            <p>
              The output is more than a date. Each prediction comes with a confidence score,
              computed from three components: order depth (more orders = more signal),
              stability (do their reorder cycles cluster tightly or scatter widely?), and
              recency (are they still active?). Confidence flows downstream into nudge timing.
              High-confidence predictions earn a single late nudge for precision.
              Lower-confidence predictions get an earlier soft touch followed by the precision
              nudge if no order has landed.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Phase 2 */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">
            Phase 2: guideline-based model
          </h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              First-time buyers have no purchase history to learn from. Phase 2 substitutes
              biology for behavior. Using a mapping of breed, life stage, and subcategory to
              daily food intake, the framework calculates how many days a given pack size
              should cover. If a customer buys a 5kg bag of adult Labrador dry food, and the
              guideline says an adult Lab consumes around 250g per day, then the pack covers
              roughly twenty days. The predicted reorder date is order date plus coverage days.
            </p>
            <p>
              The model is honest about its limits. It&apos;s sensitive to the underlying
              guideline assumptions, handles multipacks imperfectly, and breaks down in
              multi-pet households where one bag is feeding three dogs. Coverage accuracy lands
              at roughly 60% within a 20-day window. Much less precise than Phase 1, but it
              covers a population Phase 1 cannot reach at all.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Phase 3 */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">
            Phase 3: intent-based model
          </h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              The newest layer captures something neither historical patterns nor biological
              guidelines can: real-time intent. When a customer who bought wet food eighteen
              days ago suddenly views that same product page, or browses other wet food
              SKUs, they&apos;re signaling readiness. Often this is a re-engagement signal that
              precedes the predicted reorder window by days.
            </p>
            <p>
              Phase 3 fires on two triggers, eligible only fifteen or more days after the last
              purchase to avoid false positives from immediate post-purchase browsing. Viewing
              the same product page wins precedence over general category browsing. The nudge
              fires the next day and carries the specific product context forward into the
              messaging, letting downstream creative speak directly to what the customer was
              looking at.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Unification */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">
            Unification: one nudge per customer
          </h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              Three independent models without coordination would mean three potential nudges
              per customer, each promoting something different. The customer experience would
              be chaotic and the WhatsApp spend would balloon for negligible incremental lift.
            </p>
            <p>
              The unification layer takes all candidate nudges across the three phases and
              selects exactly one per customer, per subcategory, per day, using a clear
              tie-breaking hierarchy: Intent (most current signal) beats Historical (most
              reliable signal) beats Guideline (most coverage-broad signal). The output is a
              single prioritized row in a downstream nudge table, carrying full context: the
              why, the what, and the when, all in one row, for the messaging system to act on.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Outcomes */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">Outcomes</h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-4">
            <p>
              Phase 1 reached approximately 60% precision on Dry food predictions and 75% on
              Wet food, with the majority of predictions landing within a week of the actual
              reorder date. This is the workhorse of the system: high-confidence, high-volume,
              high-relevance.
            </p>
            <p>
              Phase 2 covered the segment of first-time buyers previously unreachable by
              personalized replenishment logic. The accuracy was lower, but the alternative was
              no nudge at all.
            </p>
            <p>
              Phase 3 added a layer of responsiveness that historical models systematically
              cannot produce, capturing intent-driven readiness signals that would otherwise
              fire too late or not at all.
            </p>
            <p>
              The combined system shifted the internal question from{" "}
              <em>&ldquo;when should we remind everyone?&rdquo;</em> to{" "}
              <em>&ldquo;who has signaled they&apos;re ready, and what&apos;s the most relevant thing to
              say to them today?&rdquo;</em> That shift, from broadcast cadence to per-customer
              decisioning, is the part that compounds.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Reflections */}
      <section className="py-10 px-6">
        <div className="max-w-content mx-auto">
          <h2 className="text-[19px] font-medium text-ink mb-5">Reflections</h2>
          <div className="text-[14px] text-ink-700 leading-[1.75] max-w-prose space-y-5">
            <p>
              Customer bases are heterogeneous. Decisioning frameworks should be too. The
              instinct to find one perfect model is the wrong instinct for retention problems.
              It forces a single algorithm to handle populations it wasn&apos;t designed for.
            </p>
            <p>
              Confidence scoring matters as much as the prediction itself. A model that&apos;s 85%
              sure should behave differently downstream than a model that&apos;s 45% sure, and the
              system&apos;s actions should reflect that uncertainty explicitly.
            </p>
            <p>
              Intent signals are systematically underused in retention systems. Historical
              purchase data is necessary but insufficient. The customer who is browsing the
              SKU they bought last month is telling you something a calendar reminder never
              could.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="py-12 px-6">
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

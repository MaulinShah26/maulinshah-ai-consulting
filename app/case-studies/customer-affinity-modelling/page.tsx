import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  Layers,
  Clock,
  Eye,
  Heart,
  ShoppingCart,
  Package,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Target,
  Users,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Customer Affinity Modelling · Maulin Shah",
  description:
    "A multi-level scoring system at Supertails that quantifies what every customer cares about, across pet types, categories, sub-categories, and brands. Live in production.",
};

const eventWeights = [
  {
    event: "Product View",
    weight: "1.0",
    rationale: "Low intent · exploratory",
    icon: <Eye size={14} aria-hidden />,
  },
  {
    event: "Wishlist",
    weight: "2.5",
    rationale: "Medium intent · saved for later",
    icon: <Heart size={14} aria-hidden />,
  },
  {
    event: "Add to Cart",
    weight: "3.0",
    rationale: "High intent · ready to buy",
    icon: <ShoppingCart size={14} aria-hidden />,
  },
  {
    event: "Purchase",
    weight: "5.0",
    rationale: "Highest intent · conversion",
    icon: <Package size={14} aria-hidden />,
  },
];

const applications = [
  {
    title: "Personalized recommendations",
    body: "“Top 3 brands you love” surfaced on homepages, emails, app banners.",
    icon: <Sparkles size={14} aria-hidden />,
  },
  {
    title: "Targeted campaign segmentation",
    body: "Campaign cohorts by category or brand affinity. Example: dog parents with >50% affinity toward Royal Canin Dry Food.",
    icon: <Target size={14} aria-hidden />,
  },
  {
    title: "Retargeting & churn prevention",
    body: "High-affinity customers without recent purchases get personalized nudges, not generic blasts.",
    icon: <Clock size={14} aria-hidden />,
  },
  {
    title: "Persona auto-generation",
    body: "“Dry Food Loyalist: Royal Canin” or “New Brand Explorer: Treats”, feeding journey orchestration with concrete personas.",
    icon: <Users size={14} aria-hidden />,
  },
  {
    title: "Precision cross-sell & upsell",
    body: "Dog parent with high Drools affinity gets high-affinity treats pushed. Mid-tier loyalist gets a premium alternative trial.",
    icon: <BarChart3 size={14} aria-hidden />,
  },
  {
    title: "Brand health tracking",
    body: "Roll up normalized scores across users to track category popularity, brand stickiness, switching behavior.",
    icon: <Layers size={14} aria-hidden />,
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function CustomerAffinityModellingPage() {
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
          Supertails · 2025 · Live in production
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          Customer Affinity Modelling
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A multi-level scoring system that quantifies what every Supertails
          customer actually cares about, across pet types, categories,
          sub-categories, and brands, by weighting behavioral signals and
          decaying old behavior.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Behavioral scoring
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Personalization layer
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            4-level hierarchy
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Pet-tech
          </span>
        </div>
      </header>

      <hr className="border-ink-200" />

      {/* 01 The Situation */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="The situation" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Behavior data everywhere, preference signal nowhere
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Supertails was growing fast: more SKUs, more brands, more
            sub-categories per pet type. Marketing was running campaigns.
            Product was building features. CRM was sending nudges. Everyone
            was guessing at the same underlying question:
          </p>
          <p className="border-l-2 border-accent pl-4 italic text-ink-800">
            What does this specific customer actually care about?
          </p>
          <p>
            The data existed: views, add-to-cart events, wishlist actions,
            purchases. But the signals were fragmented and unweighted. A
            wishlist meant something different than a purchase. A view from
            yesterday meant something different than one from 90 days ago.
            What the team had was behavior; what it didn’t have was
            preference signal at the granularity downstream systems needed.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 The Bet */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="The bet" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          A single scoring system that quantifies preference at four levels
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            Build a unified affinity scoring system. For every customer,
            calculate normalized preference scores at four hierarchical
            levels: Pet Type, Category, Sub-Category, Brand. Use ALL
            behavioral signals. Weight each by intent. Decay older behavior
            so scores reflect what the customer cares about NOW.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <PrincipleCard
            title="Recency over volume"
            body="A purchase from yesterday says more than ten views from 90 days ago. Time decay enforces this."
          />
          <PrincipleCard
            title="Intent over frequency"
            body="A purchase is worth more than a wishlist. A wishlist worth more than a view. Event weighting enforces this."
          />
          <PrincipleCard
            title="Relative over absolute"
            body="“60% of this customer’s Dry Food affinity goes to Royal Canin” is useful. A raw score of 50 isn’t. Normalization enforces this."
          />
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 Architecture */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="Architecture" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Four levels of granularity, each contextualizing the next
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Each level builds on the previous. A customer’s brand affinity is
            contextualized within their sub-category affinity, which sits
            within their category affinity, which sits within their pet type.
            The hierarchy isn’t just organizational. It’s how the
            normalization works.
          </p>
        </div>

        {/* Hierarchical levels diagram */}
        <div className="my-10 space-y-3">
          <LevelBox
            depth={0}
            label="Pet Type"
            example="Dog, Cat, Small Pet"
            description="What kind of pet does this customer have?"
          />
          <LevelBox
            depth={1}
            label="Category"
            example="Food, Non-Food, Grooming"
            description="Within their pet type, what categories matter most?"
          />
          <LevelBox
            depth={2}
            label="Sub-Category"
            example="Dry Food, Wet Food, Treats, Toys"
            description="Within those categories, what sub-types?"
          />
          <LevelBox
            depth={3}
            label="Brand"
            example="Royal Canin, Pedigree, Sheba, Drools"
            description="Within those sub-types, which brands?"
          />
        </div>

        <p className="text-[14px] text-ink-600 leading-[1.65] mt-8">
          Four event streams feed the system: product views, add-to-cart
          events, wishlist actions, and completed purchases. Each signal
          contributes to scores at all four levels, weighted by intent and
          decayed by time.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 04 Scoring framework */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="The scoring framework" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Three components doing the work: event weights, time decay,
          normalization
        </h2>

        {/* Event weights */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4 mt-8">
          Event weights: by intent
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {eventWeights.map((w, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 text-center"
            >
              <div className="w-8 h-8 mx-auto mb-2 rounded bg-accent-soft text-accent flex items-center justify-center">
                {w.icon}
              </div>
              <div className="font-serif text-[22px] font-medium text-ink leading-tight mb-1">
                {w.weight}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
                {w.event}
              </div>
              <div className="text-[11px] text-ink-500 leading-[1.4]">
                {w.rationale}
              </div>
            </div>
          ))}
        </div>

        {/* Time decay */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          Time decay: recency over staleness
        </h3>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            An exponential decay function reduces the contribution of older
            events. A purchase from yesterday counts nearly its full weight; a
            purchase from a year ago barely registers. The result: scores
            track what customers actually care about now, not what they cared
            about a year ago.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          <DecayCard
            days="1 day ago"
            value="≈ 4.95"
            note="Purchase contributes nearly its full 5.0 weight"
          />
          <DecayCard
            days="60 days ago"
            value="≈ 2.74"
            note="Same purchase contributes about half"
          />
          <DecayCard
            days="365 days ago"
            value="≈ 0.13"
            note="Year-old behavior nearly invisible to the score"
          />
        </div>

        {/* Normalization */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          Normalization: making scores comparable
        </h3>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Raw scores are useless across customers. A heavy buyer might have
            a Royal Canin score of 50; a light buyer might have 5. Both could
            still have Royal Canin as their #1 brand. Normalization converts
            raw scores into percentages relative to the customer’s own
            behavior: “60% of this customer’s Dry Food affinity goes to
            Royal Canin” instead of an opaque “50.”
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 05 Business Applications */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="05" label="Business applications" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          What multi-level scoring unlocks downstream
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Flat purchase data answers “what did this customer buy?” Affinity
            scoring answers “what does this customer prefer, and how
            strongly?” The second question is what downstream systems need to
            act intelligently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {applications.map((a, i) => (
            <ApplicationCard key={i} {...a} />
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 06 In production */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="06" label="In production today" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Feeding personalization, segmentation, and cross-sell across teams
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            The affinity scores live as production tables in the data
            warehouse, refreshed regularly and available to teams across
            Supertails. Marketing uses them for segmentation. Product uses
            them for personalization. CRM uses them for retargeting. Each
            consumer pulls the slice of granularity that matches their use
            case: category-level for broad campaigns, brand-level for
            personalized recommendations.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 07 Reflections */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="07" label="Reflections" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-8">
          What this surfaced, and what comes next
        </h2>

        <div className="space-y-8">
          <ReflectionBlock
            title="What worked"
            icon={<CheckCircle2 size={16} aria-hidden />}
            items={[
              "Time-decayed scoring surfaced true recent interests, avoiding bias from outdated behavior. Two customers with identical 12-month histories can have very different ‘today’ affinities. Decay captures that.",
              "High-granularity scoring (brand and sub-category level) opened cross-sell, nudge campaign, and feature personalization use cases that category-level scoring couldn’t.",
              "Single-table output with normalized percentages made scores immediately interpretable for marketing and growth teams. No need to translate raw scores or explain logarithms.",
            ]}
          />
          <ReflectionBlock
            title="What’s next"
            icon={<Sparkles size={16} aria-hidden />}
            items={[
              "ML-learned weights: replace manual event weights (1.0 / 2.5 / 3.0 / 5.0) with model-calibrated weights using uplift modeling. Different categories may benefit from different weight structures.",
              "Score trend analysis: periodic snapshots to identify growing or dropping affinities over time. Catches customer drift early.",
              "Persona auto-generation: turn affinity scores into named personas (“Grooming Explorer: Cat”) that feed journey orchestration directly.",
              "Inventory-aware personalization: combine affinity with stock availability for contextual nudges that respect what’s actually purchasable.",
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
            <TechBlock title="Decay formula">
              <p>
                <code className="font-mono text-[12px] bg-ink-50 px-1.5 py-0.5 rounded border-[0.5px] border-ink-100">
                  decay_factor = EXP(−λ × days_ago)
                </code>{" "}
                with <code className="font-mono text-[12px] bg-ink-50 px-1.5 py-0.5 rounded border-[0.5px] border-ink-100">λ = 0.01</code>.
              </p>
              <p>
                Exponential decay was chosen over linear or step decay
                because customer preference doesn’t shift cliff-like; it
                attenuates gradually. The λ=0.01 setting was calibrated so
                that a typical pet food repurchase cycle (~30–60 days) sits
                comfortably inside the high-weight zone.
              </p>
            </TechBlock>

            <TechBlock title="Score calculation">
              <p>
                For each customer, at each hierarchy level:{" "}
                <code className="font-mono text-[12px] bg-ink-50 px-1.5 py-0.5 rounded border-[0.5px] border-ink-100">
                  affinity_score = SUM(event_weight × decay_factor)
                </code>
              </p>
              <p>
                Aggregations are grouped at each level (pet type, category,
                sub-category, brand) so that each level’s score reflects only
                the events relevant at that granularity.
              </p>
            </TechBlock>

            <TechBlock title="Normalization">
              <p>
                Raw scores are normalized at each level so they sum to 100%
                within their parent context. Category scores normalize across
                all of a customer’s categories. Sub-category scores normalize
                within each category. Brand scores normalize within each
                sub-category. Pet type scores normalize across all pet types
                for the customer.
              </p>
              <p>
                This gives downstream teams percentages they can interpret
                directly: “Royal Canin captures 60% of this customer’s Dry
                Food affinity”, instead of opaque raw scores.
              </p>
            </TechBlock>

            <TechBlock title="Pipeline">
              <p>
                Four behavioral event streams (views, add-to-cart, wishlist,
                purchase) feed a unified BigQuery pipeline. Standardized event
                schemas across all sources reduced transformation overhead
                significantly and was a major early investment that paid off.
              </p>
              <p>
                The output is four production tables, one per level plus a
                unified view, refreshed regularly and available to CRM,
                product, recommendation, and analytics teams via direct
                BigQuery access.
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
            Personalization is a problem of understanding the customer before it is a model problem. Get the customer read right and every team downstream benefits.
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

function PrincipleCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4">
      <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-2">
        {title}
      </div>
      <div className="text-[13px] text-ink-600 leading-[1.55]">{body}</div>
    </div>
  );
}

function LevelBox({
  depth,
  label,
  example,
  description,
}: {
  depth: number;
  label: string;
  example: string;
  description: string;
}) {
  const indent = depth * 24;
  return (
    <div className="flex items-stretch gap-3" style={{ paddingLeft: indent }}>
      <div className="flex-1 bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex items-start gap-3">
        <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium pt-1 min-w-[16px]">
          0{depth + 1}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <div className="font-serif text-[16px] font-medium text-ink leading-tight">
              {label}
            </div>
            <div className="font-mono text-[10.5px] text-ink-500">{example}</div>
          </div>
          <div className="text-[13px] text-ink-600 leading-[1.55]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

function DecayCard({
  days,
  value,
  note,
}: {
  days: string;
  value: string;
  note: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 text-center">
      <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium mb-2">
        {days}
      </div>
      <div className="font-serif text-[20px] font-medium text-accent leading-tight mb-2">
        {value}
      </div>
      <div className="text-[11.5px] text-ink-600 leading-[1.5]">{note}</div>
    </div>
  );
}

function ApplicationCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex gap-3 items-start">
      <div className="w-7 h-7 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-serif text-[14.5px] font-medium text-ink leading-tight mb-1.5">
          {title}
        </div>
        <div className="text-[12.5px] text-ink-600 leading-[1.55]">{body}</div>
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

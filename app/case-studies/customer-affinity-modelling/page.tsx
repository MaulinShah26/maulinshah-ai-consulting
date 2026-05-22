import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  Layers,
  Clock,
  Calculator,
  Eye,
  Heart,
  ShoppingCart,
  Package,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Target,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Customer Affinity Modelling · Maulin Shah",
  description:
    "A multi-level scoring system at Supertails that quantifies what every customer cares about — across pet types, categories, sub-categories, and brands. Behavioral signal weighting, time decay, BigQuery production pipeline.",
};

const eventWeights = [
  {
    event: "Product View",
    weight: "1.0",
    rationale: "Low intent · exploratory browse",
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

const outputTables = [
  { level: "Category", table: "customer_category_preference_score" },
  { level: "Sub-Category", table: "customer_sub_category_preference_score" },
  { level: "Brand", table: "customer_brand_preference_score" },
  { level: "Unified", table: "customer_overall_preference_score" },
];

const applications = [
  {
    title: "Personalized recommendations",
    body: "“Top 3 brands you love” surfaced on homepages, emails, app banners. Brand and sub-category normalized scores drive product surfacing.",
    icon: <Sparkles size={14} aria-hidden />,
  },
  {
    title: "Targeted campaign segmentation",
    body: "Campaign cohorts by category or brand affinity. Example: dog parents with >50% affinity toward Royal Canin Dry Food.",
    icon: <Target size={14} aria-hidden />,
  },
  {
    title: "Retargeting & churn prevention",
    body: "Customers with high affinity but no recent purchase get personalized nudges with relevant discounts or reminders.",
    icon: <Clock size={14} aria-hidden />,
  },
  {
    title: "Product discovery nudges",
    body: "Medium-affinity categories (20–40% scores) feed curated trials. Helps users explore adjacent products while staying relevant.",
    icon: <Compass size={14} aria-hidden />,
  },
  {
    title: "Persona auto-generation",
    body: "“Dry Food Loyalist — Royal Canin” or “New Brand Explorer — Treats”. Feeds journey orchestration tools with concrete personas.",
    icon: <Users size={14} aria-hidden />,
  },
  {
    title: "Precision cross-sell & upsell",
    body: "Dog parent with high Drools affinity gets high-affinity treats pushed. Mid-tier brand loyalist gets a premium alternative trial.",
    icon: <BarChart3 size={14} aria-hidden />,
  },
  {
    title: "Brand health tracking",
    body: "Roll up normalized scores across users to track category popularity, brand stickiness vs. switching behavior. Informs marketing spend and partnerships.",
    icon: <Layers size={14} aria-hidden />,
  },
  {
    title: "Inventory-aware merchandising",
    body: "Roll up sub-category and brand affinity scores to plan homepage slots, navigation order, merchandising priority. (Distant possibility.)",
    icon: <Package size={14} aria-hidden />,
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
          customer actually cares about — across pet types, categories,
          sub-categories, and brands — by weighting behavioral signals and
          decaying old behavior.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            BigQuery pipeline
          </span>
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
            Supertails was growing fast — more SKUs, more brands, more
            sub-categories per pet type. Marketing was running campaigns.
            Product was building features. CRM was sending nudges. But
            everyone was guessing at the same underlying question:
          </p>
          <p className="border-l-2 border-accent pl-4 italic text-ink-800">
            What does this specific customer actually care about?
          </p>
          <p>
            The data existed. Customers viewed products, added to cart,
            wishlisted things, made purchases. But the signals lived in
            different tables with different schemas, telling fragmented
            stories. A wishlist meant something different than a purchase. A
            view from yesterday meant something different than one from 90
            days ago. The team had behavioral data; what they didn’t have was
            preference signal at the granularity downstream systems needed.
          </p>
          <p>
            Without that signal, every downstream surface — recommendations,
            campaigns, cross-sell, churn prevention — was operating in the
            dark.
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
            behavioral signals — not just purchases. Weight each signal by
            its intent. Decay older behavior so the scores reflect what the
            customer cares about NOW.
          </p>
          <p>
            The output: a single set of production tables in BigQuery that
            downstream teams could trust and use without needing to
            understand the math underneath.
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
            contextualized within their sub-category affinity, which is
            contextualized within their category affinity, which is
            contextualized within their pet type. The hierarchy isn’t just
            organizational — it’s how the normalization works.
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

        <h3 className="font-serif text-[18px] font-medium text-ink mb-4 mt-12">
          Data sources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <DataSourceCard
            icon={<Eye size={16} aria-hidden />}
            event="Product View (PDP)"
            table="clean_pdp_view_data_2025"
          />
          <DataSourceCard
            icon={<ShoppingCart size={16} aria-hidden />}
            event="Add to Cart"
            table="clean_customer_atc_data_2025"
          />
          <DataSourceCard
            icon={<Heart size={16} aria-hidden />}
            event="Wishlist"
            table="clean_customer_wishlisted_data_2025"
          />
          <DataSourceCard
            icon={<Package size={16} aria-hidden />}
            event="Purchase"
            table="clean_order_details"
          />
        </div>

        <h3 className="font-serif text-[18px] font-medium text-ink mb-4 mt-10">
          Output tables (in BigQuery)
        </h3>
        <div className="bg-surface border-[0.5px] border-ink-200 rounded-md overflow-hidden">
          {outputTables.map((t, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 ${
                i !== outputTables.length - 1 ? "border-b-[0.5px] border-ink-100" : ""
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-medium">
                {t.level}
              </span>
              <span className="font-mono text-[12px] text-ink-700">
                {t.table}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 04 Scoring framework */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="The scoring framework" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Three components doing the work: event weights, time decay,
          normalization
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The methodology is simple to describe and consistent across all
            four scoring levels. The discipline is in applying it the same
            way everywhere.
          </p>
        </div>

        {/* Event weights */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          Event weights — by intent
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
          Time decay — recency over staleness
        </h3>
        <div className="bg-accent-soft border-l-2 border-accent rounded-r-md p-5 mb-6">
          <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
            Decay formula
          </div>
          <div className="font-mono text-[14px] text-ink font-medium mb-2">
            decay_factor = EXP(−λ × days_ago)
          </div>
          <div className="font-mono text-[12px] text-ink-600">
            λ = 0.01
          </div>
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

        {/* Score calculation */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          Score calculation
        </h3>
        <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5 mb-6">
          <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium mb-2">
            Per customer, at each level
          </div>
          <div className="font-mono text-[14px] text-ink font-medium">
            affinity_score = SUM(event_weight × decay_factor)
          </div>
        </div>
        <div className="text-[14px] text-ink-600 leading-[1.65] mb-10">
          Grouped by customer_id + master_category at the Category level,
          customer_id + master_category + sub_category at Sub-Category, and so
          on down to brand.
        </div>

        {/* Normalization */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          Normalization — making scores comparable
        </h3>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            Raw scores are useless across customers. A heavy buyer might have
            a Royal Canin score of 50; a light buyer might have 5. Both could
            still have Royal Canin as their #1 brand. Normalization converts
            raw scores into percentages relative to the customer’s own
            behavior.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <NormalizationCard
            level="Category"
            formula="category_score / SUM(all category_scores for that customer)"
          />
          <NormalizationCard
            level="Sub-Category"
            formula="sub_category_score / SUM(sub_category_scores per category)"
          />
          <NormalizationCard
            level="Brand"
            formula="brand_score / SUM(brand_scores per sub-category)"
          />
          <NormalizationCard
            level="Pet Type"
            formula="pet_type_score / SUM(pet_type_scores per customer)"
          />
        </div>
        <p className="text-[13px] text-ink-500 leading-[1.65] mt-6">
          Each normalized score is expressed as a percentage in the final
          tables, making it interpretable for marketing and growth teams
          without further translation.
        </p>
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
            strongly?” That second question is what downstream systems need
            to act intelligently.
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
          Four tables, multiple downstream consumers
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            The affinity scoring system lives in BigQuery as four production
            tables, refreshed regularly, available to teams across Supertails.
            Marketing uses it for segmentation. Product uses it for
            personalization. CRM uses it for retargeting. Each consumer
            pulls the slice of granularity that matches their use case.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <IntegrationCard
            system="CRM / CDP"
            usage="Affinity segments drive campaign triggers (CleverTap, SnowPlow/Segment)."
          />
          <IntegrationCard
            system="Recommendation engine"
            usage="Scores feed personalization algorithms on app and web."
          />
          <IntegrationCard
            system="Dashboards (Looker)"
            usage="Visualize affinity distribution by user, cohort, or region for category managers."
          />
          <IntegrationCard
            system="Product analytics"
            usage="Analyze behavior-driven affinity by product and customer lifecycle stage."
          />
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
            tone="success"
            items={[
              "Standardized event pipelines (clean_*_2025 tables) drastically improved score accuracy and reduced transformation overhead. Investing early in data architecture paid off immediately.",
              "Time-decayed scoring surfaced TRUE recent interests, avoiding bias from outdated behavior. Two customers with identical 12-month histories can have very different “today” affinities — decay captures that.",
              "High-granularity scoring (brand and sub-category level) opened cross-sell, nudge campaign, and feature personalization use cases that category-level scoring couldn’t.",
              "Single-table output with normalized percentages made scores immediately interpretable for marketing and growth teams. No need to translate raw scores or explain logarithms.",
            ]}
          />
          <ReflectionBlock
            title="What’s next"
            icon={<Sparkles size={16} aria-hidden />}
            tone="accent"
            items={[
              "ML-learned weights — replace manual event weights (1.0 / 2.5 / 3.0 / 5.0) with model-calibrated weights using uplift modeling. Different categories may benefit from different weight structures.",
              "Score trend analysis — monthly snapshots to identify growing or dropping affinities over time. Catches customer drift early.",
              "Real-time scoring — streaming or daily micro-batch updates for higher responsiveness during high-engagement periods.",
              "Persona auto-generation — turn affinity scores into named personas (“Grooming Explorer — Cat”) that feed journey orchestration directly.",
              "Uplift modeling — combine affinity scores with intervention outcome modeling for precise campaign targeting and causal lift measurement.",
              "Inventory-aware personalization — combine affinity with stock availability for contextual nudges that respect what’s actually purchasable.",
            ]}
          />
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
      <div className="w-px bg-ink-300 hidden md:block" aria-hidden />
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

function DataSourceCard({
  icon,
  event,
  table,
}: {
  icon: React.ReactNode;
  event: string;
  table: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex gap-3 items-start">
      <div className="w-7 h-7 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-serif text-[14px] font-medium text-ink leading-tight mb-1">
          {event}
        </div>
        <div className="font-mono text-[11px] text-ink-500">{table}</div>
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

function NormalizationCard({
  level,
  formula,
}: {
  level: string;
  formula: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {level}
      </div>
      <div className="font-mono text-[11px] text-ink-700 leading-[1.5]">
        {formula}
      </div>
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

function IntegrationCard({
  system,
  usage,
}: {
  system: string;
  usage: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {system}
      </div>
      <div className="text-[13px] text-ink-700 leading-[1.55]">{usage}</div>
    </div>
  );
}

function ReflectionBlock({
  title,
  icon,
  tone,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  tone: "success" | "accent";
  items: string[];
}) {
  const toneClasses =
    tone === "success"
      ? "border-l-accent bg-accent-soft/40"
      : "border-l-accent bg-accent-soft/40";
  return (
    <div className={`border-l-2 ${toneClasses} pl-5 py-2`}>
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

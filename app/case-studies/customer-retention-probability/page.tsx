import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Layers,
  Cpu,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Customer Retention Probability Score \u00b7 Maulin Shah",
  description:
    "A hybrid ML model scoring every Supertails customer\u2019s 30-day repurchase probability. Two-stage architecture, 25+ engineered features, ROC AUC 98.6%, ~60% lift on test conversion. Refreshed daily to production.",
};

const features = [
  {
    group: "Purchase behavior",
    items: ["no_of_orders_placed", "aov", "recency_days", "avg_order_duration"],
  },
  {
    group: "Engagement",
    items: ["weekly_lness", "monthly_lness", "longest_streak"],
  },
  {
    group: "Communication",
    items: ["whatsapp_campaigns", "comms_interaction_rate", "comm_segment"],
  },
  {
    group: "Customer status",
    items: ["customer_value_segment", "RFM_Score"],
  },
  {
    group: "Delivery experience",
    items: ["delivery_experience_label"],
  },
  {
    group: "Engineered momentum signals",
    items: [
      "order_velocity_30_60_ratio",
      "order_velocity_60_90_ratio",
      "is_momentum_up",
      "is_lost_momentum",
      "recency_score",
    ],
  },
];

const metrics = [
  { value: "98.6%", label: "ROC AUC" },
  { value: "84.5%", label: "Precision" },
  { value: "81.1%", label: "Recall" },
  { value: "82.7%", label: "F1 Score" },
  { value: "~60%", label: "Lift on test conversion" },
];

const activation = [
  {
    label: "Likely to purchase",
    condition: "Score \u2265 70 OR (RFM > 431 AND comms_interaction_rate > 60)",
    objective: "Convert with minimal effort",
    primaryChannel: "WhatsApp",
    secondaryChannel: "Push notification, Email",
    cap: "1\u20132x / week",
    tactic:
      "Subtle nudges, loyalty perks. No discount unless affinity tag indicates price sensitivity.",
    tone: "accent" as const,
  },
  {
    label: "Might purchase",
    condition: "Middle band \u2014 neither high nor low",
    objective: "Nudge based on intent",
    primaryChannel: "Email",
    secondaryChannel: "Push notification, In-app",
    cap: "2\u20133x / week",
    tactic:
      "Best offers in preferred categories. Urgency framing. Dynamic personalization.",
    tone: "neutral" as const,
  },
  {
    label: "Unlikely to purchase",
    condition: "Score < 25 OR (RFM < 333 AND comms_interaction_rate < 25)",
    objective: "Re-engage or learn intent",
    primaryChannel: "Push notification, In-app",
    secondaryChannel: "Email (if opted in)",
    cap: "1x / week",
    tactic:
      "Win-back offers. Feedback surveys. Personalized content to recapture attention.",
    tone: "muted" as const,
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} \u00b7 {label}
    </div>
  );
}

export default function CustomerRetentionProbabilityPage() {
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
          Supertails \u00b7 2025 \u00b7 Live in production
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          Customer Retention Probability Score
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A hybrid ML system that scores every customer\u2019s 30-day repurchase
          likelihood, refreshes daily, and routes the right intervention into the
          right channel \u2014 WhatsApp, email, push notifications.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Production ML
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Hybrid model
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Retention activation
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            BigQuery
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            SHAP interpretability
          </span>
        </div>
      </header>

      <hr className="border-ink-200" />

      {/* 01 The Situation */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="The situation" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Volume metrics, no answer to the only question that mattered
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Supertails was growing fast \u2014 more customers, more SKUs, more
            channels per customer journey. The CRM and retention teams were
            running campaigns the way they always had: rule-based segments,
            calendar-driven blasts, the same offers going to everyone in a
            cohort.
          </p>
          <p>
            The result was predictable. High-intent customers were getting
            discounts they didn\u2019t need, eating margin. Lapsed customers were
            getting irrelevant nudges. The team had open rates and click rates
            but no answer to a basic question:
          </p>
          <p className="border-l-2 border-accent pl-4 italic text-ink-800">
            Who is actually likely to come back in the next 30 days, and who
            isn\u2019t?
          </p>
          <p>
            Without that answer, every campaign was spray-and-pray with a margin
            tax.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 The Bet */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="The bet" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          A score and a label per customer, refreshed daily, routed to the right
          channel
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            Build a model that scores every customer on their 30-day repurchase
            probability. Output a number AND a label (Likely / Might / Unlikely
            to Purchase). Refresh it daily. Route it into the activation
            channels so the right customers got the right intervention.
          </p>
          <p>
            The model had four non-negotiable constraints. The combination of
            high recall AND high precision is the hard part \u2014 most models
            optimize one at the expense of the other. The architecture had to
            be designed around that tension.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ConstraintCard
            icon={<Target size={16} />}
            title="High AUC"
            body="The model has to actually work. Predictions need to track reality."
          />
          <ConstraintCard
            icon={<TrendingUp size={16} />}
            title="High recall"
            body="Don\u2019t miss customers who would have converted if engaged."
          />
          <ConstraintCard
            icon={<CheckCircle2 size={16} />}
            title="High precision"
            body="Don\u2019t waste campaign budget on customers who won\u2019t."
          />
          <ConstraintCard
            icon={<Sparkles size={16} />}
            title="Interpretable"
            body="Marketing needs to trust it. CRM needs to actuate it. SHAP for every score."
          />
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 Architecture */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="Architecture" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          A two-stage hybrid: precision on top, recall underneath
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The model is a deliberate hybrid of two classifiers with opposing
            tunings, blended into a single probability score. CatBoost alone was
            too conservative (high precision, low recall). MLP alone was too
            aggressive (high recall, low precision). The weighted blend captures
            the best of both.
          </p>
        </div>

        {/* Pipeline diagram */}
        <div className="my-10">
          {/* Stage 1 + Stage 2 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ModelBox
              stage="Stage 1"
              name="CatBoost Classifier"
              tuning="Precision-tuned"
              weight="65%"
              details="RandomizedSearchCV, 20 iterations, 3-fold CV. Handles structured tabular signals with strong defaults. Catches the clearest \u2018will convert\u2019 customers."
            />
            <ModelBox
              stage="Stage 2"
              name="MLP Classifier"
              tuning="Recall-tuned"
              weight="35%"
              details="2 hidden layers (128, 64). alpha=0.0005, early stopping, max_iter=500. Catches non-linear patterns that CatBoost misses."
            />
          </div>

          {/* Connector down to Hybrid */}
          <div className="flex justify-center my-4" aria-hidden>
            <div className="w-px h-10 bg-ink-300" />
          </div>

          {/* Hybrid score box */}
          <div className="border-2 border-accent rounded-md p-5 text-center bg-accent-soft">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent font-medium mb-2">
              Weighted hybrid
            </div>
            <div className="font-serif text-[20px] font-medium text-ink mb-1">
              retention_probability_30d
            </div>
            <div className="text-[12px] text-ink-600 font-mono">
              0.65 \u00d7 CatBoost score + 0.35 \u00d7 MLP score
            </div>
          </div>

          {/* Connector down to labels */}
          <div className="flex justify-center my-4" aria-hidden>
            <div className="w-px h-10 bg-ink-300" />
          </div>

          {/* Label outputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <LabelTile
              label="Likely to purchase"
              condition="Score \u2265 70"
              tone="accent"
            />
            <LabelTile
              label="Might purchase"
              condition="Middle band"
              tone="neutral"
            />
            <LabelTile
              label="Unlikely to purchase"
              condition="Score < 25"
              tone="muted"
            />
          </div>
        </div>

        <div className="bg-ink-50 border-l-2 border-accent rounded-r-md p-4 mt-8">
          <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
            Design discipline
          </div>
          <p className="text-[14px] text-ink-700 leading-[1.65]">
            SMOTE (synthetic minority oversampling) was applied to training data
            only \u2014 never to the validation hold-out. Synthetic data leaking
            into validation inflates metrics dangerously. The hold-out had to be
            the real distribution. Holding that line was non-negotiable.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 04 Features */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="Features that matter" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          25+ features across five behavioral categories, plus the engineered
          momentum signals that did the work
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Most retention models look at the same surface features: recency,
            frequency, monetary value. Useful, but they conflate two very
            different customers \u2014 the one who lapsed last month
            (recoverable) and the one who lapsed eight months ago (probably
            gone). Both look identical to a basic RFM model.
          </p>
          <p>
            The engineered momentum signals were the unlock. Order velocity
            ratios (30/60 and 60/90 day windows) and trend flags
            (is_momentum_up, is_lost_momentum) separated those two customer
            types decisively. That single feature class probably moved the
            model 5\u201310 points on recall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((g, i) => (
            <div
              key={i}
              className={`bg-surface border-[0.5px] rounded-md p-4 ${
                g.group === "Engineered momentum signals"
                  ? "border-accent"
                  : "border-ink-200"
              }`}
            >
              <div
                className={`font-mono text-[10px] uppercase tracking-wider font-medium mb-2 ${
                  g.group === "Engineered momentum signals"
                    ? "text-accent"
                    : "text-ink-500"
                }`}
              >
                {g.group}
              </div>
              <ul className="space-y-1">
                {g.items.map((item, j) => (
                  <li
                    key={j}
                    className="font-mono text-[11.5px] text-ink-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-ink-500 leading-[1.65] mt-6">
          Features were preprocessed with StandardScaler (numeric) and
          OneHotEncoder (categorical), extracted from BigQuery and assembled
          into a single training table refreshed daily.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 05 Performance */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="05" label="Performance" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          What the hybrid actually delivered (Aug 2025)
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 text-center"
            >
              <div className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-1">
                {m.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            The Hybrid Eval threshold was set at \u2265 65, calibrated through
            a threshold sensitivity analysis: precision, recall, and F1
            computed at every probability cutoff from 0.3 to 0.9. That cutoff
            is tunable by business teams \u2014 raise it to spend less budget
            at higher precision, lower it to extend reach at lower precision.
            The model gives the dial. The business decides where to set it.
          </p>
          <p>
            The ~60% lift on test conversion (Jul 2025) is the number that
            mattered most to leadership. Lift compares the conversion of
            customers the model said would purchase against a baseline
            cohort. It\u2019s the practical answer to: \u201Cif we listen to
            this model, do we make more money?\u201D
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 06 Activation */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="06" label="Activation" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          A score is useless without a decision. Three labels, three different
          campaigns.
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Every customer is mapped to one of three labels. Each label gets a
            different objective, channel, frequency cap, and tactical
            playbook. Channel choice isn\u2019t arbitrary \u2014 it\u2019s part
            of the activation strategy. High-intent customers need less
            friction (WhatsApp = personal), middle customers need rich content
            (Email = explanatory), low-engagement customers need passive
            presence (Push = lightweight).
          </p>
        </div>

        <div className="space-y-4">
          {activation.map((a, i) => (
            <ActivationCard key={i} {...a} />
          ))}
        </div>

        <p className="text-[13px] text-ink-500 leading-[1.65] mt-6">
          Cross-personalization rules layer on top: top_category /
          brand_loyalty drives SKU choice, discount_affinity_tag gates discount
          eligibility, delivery_experience_label suppresses offers to customers
          with bad delivery experience, comms_interaction_rate optimizes
          channel mix per customer.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 07 In production */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="07" label="In production today" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Not a research artifact. A live system feeding decisions every day.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
          <ProductionCard
            icon={<Layers size={16} />}
            title="Daily refresh to BigQuery"
            body="central_analytical_datasets.customer_retention_score_production with WRITE_TRUNCATE strategy for clean daily replacement."
          />
          <ProductionCard
            icon={<Sparkles size={16} />}
            title="SHAP-based interpretability"
            body="Feature importance plots generated per run. Top drivers: recency_score, comms_interaction_rate, avg_order_duration, order_velocity_30_60_ratio, RFM_Score."
          />
          <ProductionCard
            icon={<Cpu size={16} />}
            title="Multi-channel activation"
            body="Scores actuated via WhatsApp, Email, Push Notifications with channel prioritization and frequency caps per segment."
          />
          <ProductionCard
            icon={<Target size={16} />}
            title="Cross-team usage"
            body="CRM uses it for campaign targeting. Product for in-app nudges. Retention for A/B tests on win-back. Data for lift tracking vs baseline cohorts."
          />
        </div>
        <p className="text-[14px] text-ink-600 leading-[1.65] mt-2">
          Each customer\u2019s score is good for 30 days (prediction_valid_till).
          Daily refresh keeps the picture current as behavior changes.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 08 Reflections */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="08" label="Reflections" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-8">
          What worked, what was hard, what\u2019s next
        </h2>

        <div className="space-y-8">
          <ReflectionBlock
            title="What worked"
            icon={<CheckCircle2 size={16} />}
            tone="success"
            items={[
              "The hybrid architecture (CatBoost + MLP) was the architectural win \u2014 pure precision OR pure recall wasn\u2019t enough. The blend was.",
              "Momentum signals separated recoverable customers from gone. That single feature class probably moved the model 5\u201310 points on recall.",
              "Combining the model score with business logic (RFM + comms_interaction_rate) gave stakeholders an explanation they trusted, beyond \u2018the model says so.\u2019",
              "Daily scoring pipeline integrated cleanly into existing CRM. The handoff was smooth because the table contract was simple.",
            ]}
          />
          <ReflectionBlock
            title="What was hard"
            icon={<AlertCircle size={16} />}
            tone="warning"
            items={[
              "Label leakage. Some features (recency_days, customer_status) had to be carefully addressed \u2014 they were predictive because they encoded the answer.",
              "SMOTE discipline. Synthetic oversampling on training boosts metrics. Apply it to validation and you\u2019re fooling yourself.",
              "Communication interaction data was partially sparse \u2014 needed robust imputation and fallback logic.",
              "Stakeholder education. \u2018Model precision\u2019 and \u2018campaign conversion\u2019 aren\u2019t the same thing. Bridging that with interpretability plots and threshold tuning conversations took time.",
            ]}
          />
          <ReflectionBlock
            title="What\u2019s next"
            icon={<Sparkles size={16} />}
            tone="accent"
            items={[
              "Uplift modeling to measure the causal impact of campaigns, not just predicted likelihood.",
              "Real-time scoring for recent behavior (cart abandonment, in-session nudges) layered on top of the daily score.",
              "Channel optimization \u2014 best day/time/channel per user, on top of the likelihood score.",
              "Quarterly threshold recalibration based on observed lift and churn.",
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

function ConstraintCard({
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
        <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-1">
          {title}
        </div>
        <div className="text-[13px] text-ink-600 leading-[1.55]">{body}</div>
      </div>
    </div>
  );
}

function ModelBox({
  stage,
  name,
  tuning,
  weight,
  details,
}: {
  stage: string;
  name: string;
  tuning: string;
  weight: string;
  details: string;
}) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium">
          {stage}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium">
          weight {weight}
        </span>
      </div>
      <div className="font-serif text-[16px] font-medium text-ink leading-tight mb-1">
        {name}
      </div>
      <div className="text-[12px] text-accent font-medium mb-3">{tuning}</div>
      <p className="text-[12.5px] text-ink-600 leading-[1.55]">{details}</p>
    </div>
  );
}

function LabelTile({
  label,
  condition,
  tone,
}: {
  label: string;
  condition: string;
  tone: "accent" | "neutral" | "muted";
}) {
  const toneClasses =
    tone === "accent"
      ? "border-accent bg-accent-soft"
      : tone === "neutral"
      ? "border-ink-300 bg-surface"
      : "border-ink-200 bg-ink-50";
  return (
    <div className={`border-[0.5px] rounded-md p-3 text-center ${toneClasses}`}>
      <div className="font-serif text-[14px] font-medium text-ink leading-tight mb-1">
        {label}
      </div>
      <div className="font-mono text-[10px] text-ink-500">{condition}</div>
    </div>
  );
}

function ActivationCard({
  label,
  condition,
  objective,
  primaryChannel,
  secondaryChannel,
  cap,
  tactic,
  tone,
}: {
  label: string;
  condition: string;
  objective: string;
  primaryChannel: string;
  secondaryChannel: string;
  cap: string;
  tactic: string;
  tone: "accent" | "neutral" | "muted";
}) {
  const borderClass =
    tone === "accent"
      ? "border-l-accent"
      : tone === "neutral"
      ? "border-l-ink-400"
      : "border-l-ink-300";
  return (
    <div
      className={`bg-surface border-[0.5px] border-ink-200 border-l-2 ${borderClass} rounded-r-md p-5`}
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
        <div className="font-serif text-[17px] font-medium text-ink leading-tight">
          {label}
        </div>
        <div className="font-mono text-[10.5px] text-ink-500">{condition}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
        <ActivationField label="Objective" value={objective} />
        <ActivationField label="Primary channel" value={primaryChannel} />
        <ActivationField label="Secondary" value={secondaryChannel} />
        <ActivationField label="Frequency cap" value={cap} />
      </div>
      <div className="pt-3 border-t border-ink-100">
        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium mb-1">
          Tactic
        </div>
        <p className="text-[13px] text-ink-700 leading-[1.55]">{tactic}</p>
      </div>
    </div>
  );
}

function ActivationField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9.5px] uppercase tracking-wider text-ink-500 font-medium mb-0.5">
        {label}
      </div>
      <div className="text-[13px] text-ink-700 leading-tight">{value}</div>
    </div>
  );
}

function ProductionCard({
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
        <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-1">
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
  tone,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  tone: "success" | "warning" | "accent";
  items: string[];
}) {
  const toneClasses =
    tone === "success"
      ? "border-l-accent bg-accent-soft/40"
      : tone === "warning"
      ? "border-l-ink-400 bg-ink-50"
      : "border-l-accent bg-accent-soft/40";
  const iconBg =
    tone === "warning"
      ? "bg-ink-100 text-ink-700"
      : "bg-accent-soft text-accent";
  return (
    <div className={`border-l-2 ${toneClasses} pl-5 py-2`}>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`w-6 h-6 rounded flex items-center justify-center ${iconBg}`}
        >
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
            className="text-[14px] text-ink-700 leading-[1.65] pl-4 relative before:content-['\u2014'] before:absolute before:left-0 before:text-ink-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

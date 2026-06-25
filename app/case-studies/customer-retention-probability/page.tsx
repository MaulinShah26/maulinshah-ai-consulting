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
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Customer Retention Probability Score · Maulin Shah",
  description:
    "A hybrid ML system at Supertails scoring every customer’s 30-day repurchase probability. Two-stage CatBoost + MLP architecture, refreshed daily, ~60% lift on test conversion.",
};

const features = [
  {
    group: "Purchase behavior",
    body: "Order frequency, recency, average order value, average gap between orders.",
  },
  {
    group: "Engagement signals",
    body: "Platform activity windows, longest engagement streaks, session patterns.",
  },
  {
    group: "Communication interaction",
    body: "Campaign exposure, response rates, channel preferences, comms recency.",
  },
  {
    group: "Customer status",
    body: "RFM score, value segment, delivery experience history.",
  },
  {
    group: "Engineered momentum signals",
    body: "Velocity ratios (30/60 and 60/90 day windows), trend flags, weighted recency score.",
    highlight: true,
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
    condition: "Score ≥ 70, or strong recent engagement",
    objective: "Convert with minimal effort",
    primaryChannel: "WhatsApp",
    secondaryChannel: "Push, Email",
    cap: "1–2x / week",
    tactic:
      "Subtle nudges, loyalty perks. No discount unless prior signal indicates price sensitivity.",
    tone: "accent" as const,
  },
  {
    label: "Might purchase",
    condition: "Middle band, neither high nor low",
    objective: "Nudge based on intent",
    primaryChannel: "Email",
    secondaryChannel: "Push, In-app",
    cap: "2–3x / week",
    tactic:
      "Best offers in preferred categories. Urgency framing. Dynamic personalization.",
    tone: "neutral" as const,
  },
  {
    label: "Unlikely to purchase",
    condition: "Score < 25, or weak engagement signals",
    objective: "Re-engage or learn intent",
    primaryChannel: "Push, In-app",
    secondaryChannel: "Email (if opted in)",
    cap: "1x / week",
    tactic: "Win-back offers. Feedback surveys. Content to recapture attention.",
    tone: "muted" as const,
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
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
          Supertails · 2025 · Live in production
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          Customer Retention Probability Score
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A hybrid ML system that scores every customer’s 30-day repurchase
          likelihood, refreshes daily, and routes the right intervention into
          the right channel: WhatsApp, email, or push.
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
            Supertails was running campaigns the way most growing companies do:
            rule-based segments, calendar-driven blasts, the same offers
            going to everyone in a cohort. The result was predictable.
            High-intent customers got discounts they didn’t need (margin loss).
            Lapsed customers got irrelevant nudges (wasted spend).
          </p>
          <p>
            The team had open rates and click rates. What it didn’t have was an
            answer to the question that actually mattered:
          </p>
          <p className="border-l-2 border-accent pl-4 italic text-ink-800">
            Who is actually likely to come back in the next 30 days, and who
            isn’t?
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 The Bet */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="The bet" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          A score and a label per customer, refreshed daily, routed to the
          right channel
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            Build a model that scores every customer on their 30-day
            repurchase probability. Output a number AND a label (Likely /
            Might / Unlikely). Refresh daily. Route into activation channels
            so the right customer gets the right intervention.
          </p>
          <p>
            Four non-negotiable constraints. High recall and high precision
            together is the hard part. Most models optimize one at the expense
            of the other.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ConstraintCard
            icon={<Target size={16} aria-hidden />}
            title="High AUC"
            body="The model has to actually work. Predictions need to track reality."
          />
          <ConstraintCard
            icon={<TrendingUp size={16} aria-hidden />}
            title="High recall"
            body="Don’t miss customers who would have converted if engaged."
          />
          <ConstraintCard
            icon={<CheckCircle2 size={16} aria-hidden />}
            title="High precision"
            body="Don’t waste campaign budget on customers who won’t convert."
          />
          <ConstraintCard
            icon={<Sparkles size={16} aria-hidden />}
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
            A deliberate hybrid of two classifiers with opposing tunings,
            blended into a single probability score. CatBoost alone was too
            conservative. MLP alone was too aggressive. The weighted blend
            captures the best of both.
          </p>
        </div>

        {/* Pipeline diagram */}
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ModelBox
              stage="Stage 1"
              name="CatBoost Classifier"
              tuning="Precision-tuned"
              weight="65%"
              details="Strong tabular learner. Catches the clearest ‘will convert’ customers."
            />
            <ModelBox
              stage="Stage 2"
              name="MLP Classifier"
              tuning="Recall-tuned"
              weight="35%"
              details="Catches the non-linear patterns CatBoost misses. Reaches the harder converts."
            />
          </div>

          <div className="flex justify-center my-4" aria-hidden>
            <div className="w-px h-10 bg-ink-300" />
          </div>

          <div className="border-2 border-accent rounded-md p-5 text-center bg-accent-soft">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent font-medium mb-2">
              Weighted hybrid
            </div>
            <div className="font-serif text-[20px] font-medium text-ink mb-1">
              30-day retention probability
            </div>
            <div className="text-[12px] text-ink-600 font-mono">
              0.65 × CatBoost score + 0.35 × MLP score
            </div>
          </div>

          <div className="flex justify-center my-4" aria-hidden>
            <div className="w-px h-10 bg-ink-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <LabelTile
              label="Likely to purchase"
              condition="Score ≥ 70"
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
      </section>

      <hr className="border-ink-200" />

      {/* 04 Features */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="Features that matter" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Standard RFM, plus the engineered momentum signals that did the work
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Most retention models stop at RFM (recency, frequency, monetary
            value). Useful, but RFM conflates two very different customers: the
            one who lapsed last month (recoverable) and the one who lapsed
            eight months ago (probably gone). Both look identical.
          </p>
          <p>
            The unlock was a set of engineered momentum signals: velocity
            ratios and trend flags that distinguish recoverable customers
            from long-gone ones. That single feature class likely moved the
            model 5–10 points on recall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((g, i) => (
            <div
              key={i}
              className={`bg-surface border-[0.5px] rounded-md p-4 ${
                g.highlight ? "border-accent" : "border-ink-200"
              }`}
            >
              <div
                className={`font-mono text-[10px] uppercase tracking-wider font-medium mb-2 ${
                  g.highlight ? "text-accent" : "text-ink-500"
                }`}
              >
                {g.group}
              </div>
              <p className="text-[13px] text-ink-700 leading-[1.6]">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 05 Performance */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="05" label="Performance" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          What the hybrid delivered
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
            The threshold is tunable by business teams: raise it to spend less
            budget at higher precision, lower it to extend reach at lower
            precision. The model gives the dial. The business decides where to
            set it.
          </p>
          <p>
            The ~60% lift mattered most to leadership. It’s the practical
            answer to: “if we listen to this model, do we make more money?”
            Yes, by about 60%.
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
            Channel choice isn’t arbitrary. High-intent customers need less
            friction (WhatsApp = personal). Middle customers need rich content
            (Email = explanatory). Low-engagement customers need passive
            presence (Push = lightweight).
          </p>
        </div>

        <div className="space-y-4">
          {activation.map((a, i) => (
            <ActivationCard key={i} {...a} />
          ))}
        </div>

        <p className="text-[13px] text-ink-500 leading-[1.65] mt-6">
          Cross-personalization rules layer on top: brand affinity drives SKU
          choice, discount sensitivity gates discount eligibility, delivery
          experience suppresses offers to customers with bad delivery history,
          and engagement rate optimizes channel mix per customer.
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
            icon={<Layers size={16} aria-hidden />}
            title="Daily refresh"
            body="The score refreshes every night and lands in BigQuery as a clean replacement of the prior day’s table. A single, current source of truth."
          />
          <ProductionCard
            icon={<Sparkles size={16} aria-hidden />}
            title="SHAP interpretability"
            body="Feature importance plots generated per run, showing which signals drove each segment’s predictions. Builds stakeholder trust beyond ‘the model says so.’"
          />
          <ProductionCard
            icon={<Cpu size={16} aria-hidden />}
            title="Multi-channel activation"
            body="Scores actuated via WhatsApp, Email, Push with channel prioritization and frequency caps per segment."
          />
          <ProductionCard
            icon={<Target size={16} aria-hidden />}
            title="Cross-team usage"
            body="CRM uses it for campaign targeting. Product for in-app nudges. Retention for A/B tests on win-back. Data for lift tracking vs baseline cohorts."
          />
        </div>
        <p className="text-[14px] text-ink-600 leading-[1.65] mt-2">
          Each customer’s score is valid for 30 days. Daily refresh keeps the
          picture current as behavior changes.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 08 Reflections */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="08" label="Reflections" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-8">
          What worked, what was hard, what’s next
        </h2>

        <div className="space-y-8">
          <ReflectionBlock
            title="What worked"
            icon={<CheckCircle2 size={16} aria-hidden />}
            items={[
              "The hybrid architecture (CatBoost + MLP) was the architectural win. Pure precision or pure recall wasn’t enough. The blend was.",
              "Momentum signals separated recoverable customers from gone ones. That single feature class probably moved the model 5–10 points on recall.",
              "Combining the model score with business logic gave stakeholders an explanation they trusted, beyond ‘the model says so.’",
            ]}
          />
          <ReflectionBlock
            title="What was hard"
            icon={<AlertCircle size={16} aria-hidden />}
            tone="warning"
            items={[
              "Label leakage. A few features were predictive because they encoded the answer in disguise. Catching those took careful audit.",
              "Validation discipline. Synthetic oversampling on training boosts metrics; let it leak into validation and you’re fooling yourself.",
              "Stakeholder education. ‘Model precision’ and ‘campaign conversion’ aren’t the same thing. Bridging that took time.",
            ]}
          />
          <ReflectionBlock
            title="What’s next"
            icon={<Sparkles size={16} aria-hidden />}
            items={[
              "Uplift modeling to measure the causal impact of campaigns, not just predicted likelihood.",
              "Real-time scoring for recent behavior (cart abandonment, in-session nudges) layered on top of daily scoring.",
              "Channel optimization: best day, time, and channel per user, on top of the likelihood score.",
              "Quarterly threshold recalibration based on observed lift and churn.",
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
            <TechBlock title="Model architecture">
              <p>
                <strong>Stage 1 (CatBoost)</strong>: tuned via
                RandomizedSearchCV over 20 iterations with 3-fold
                cross-validation. Hyperparameter search across iteration count,
                learning rate, tree depth, L2 regularization, and border count.
              </p>
              <p>
                <strong>Stage 2 (MLP)</strong>: 2 hidden layers (128, 64).
                alpha=0.0005, early stopping enabled, max_iter=500. Trained on
                SMOTE-resampled training data, validated on the real
                (non-synthetic) hold-out set.
              </p>
              <p>
                <strong>Hybrid blend</strong>: final score = 0.65 × CatBoost
                probability + 0.35 × MLP probability. The 65/35 split was
                calibrated against the validation set.
              </p>
            </TechBlock>

            <TechBlock title="Validation discipline">
              <p>
                SMOTE (synthetic minority oversampling) was applied only to
                training data, never to the validation hold-out. Synthetic
                samples leaking into validation inflate metrics dangerously;
                the hold-out had to be the real distribution.
              </p>
              <p>
                Threshold sensitivity analysis: precision, recall, and F1
                computed at every probability cutoff from 0.3 to 0.9. The ≥65
                threshold for the “Likely” label was selected from this
                analysis based on the business’s budget vs. reach trade-off.
              </p>
            </TechBlock>

            <TechBlock title="Feature engineering">
              <p>
                25+ features extracted from BigQuery. Preprocessing:
                StandardScaler for numeric features, OneHotEncoder for
                categorical features.
              </p>
              <p>
                Engineered momentum signals included velocity ratios across
                30-day, 60-day, and 90-day windows; binary trend flags
                (momentum-up, lost-momentum); and a weighted recency score
                aggregating engagement across multiple timeframes.
              </p>
            </TechBlock>

            <TechBlock title="Deployment">
              <p>
                The scoring pipeline runs nightly and writes to a production
                table in BigQuery using WRITE_TRUNCATE for clean daily
                replacement. The output table includes the hybrid score, the
                customer label, last_model_run_date, and prediction_valid_till
                (30-day horizon).
              </p>
              <p>
                Activation systems (CRM, push notification platforms, email)
                read from this single production table. SHAP-based feature
                importance is generated per run for interpretability.
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
            A churn score does nothing on its own. The value is in routing it to
            an action the team will actually take.
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
  tone = "accent",
  items,
}: {
  title: string;
  icon: React.ReactNode;
  tone?: "accent" | "warning";
  items: string[];
}) {
  const toneClasses =
    tone === "warning"
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

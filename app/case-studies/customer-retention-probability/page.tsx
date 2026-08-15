import { Nav } from "@/components/Nav";
import { CaseNarrative } from "@/components/CaseNarrative";
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
import styles from "./page.module.css";

export const metadata = {
  title: "Customer Retention Probability Score · Maulin Shah",
  description:
    "A hybrid ML system at Supertails scoring every customer’s 30 day repurchase probability. Two stage CatBoost + MLP architecture, refreshed daily, ~60% lift on test conversion.",
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
    body: "Campaign exposure, response rates, channel preferences, communication recency.",
  },
  {
    group: "Customer status",
    body: "RFM score, value segment, delivery experience history.",
  },
  {
    group: "Engineered momentum signals",
    body: "Velocity ratios across 30, 60 and 90 day windows, trend flags, and weighted recency signals that separate recoverable customers from long gone ones.",
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
    cap: "1 to 2 times per week",
    tactic:
      "Subtle nudges and loyalty perks. Avoid a discount unless prior behavior shows clear price sensitivity.",
    tone: "accent" as const,
  },
  {
    label: "Might purchase",
    condition: "Middle probability band",
    objective: "Nudge based on intent",
    primaryChannel: "Email",
    secondaryChannel: "Push, In app",
    cap: "2 to 3 times per week",
    tactic:
      "Preferred category offers, urgency where appropriate, and dynamic personalization based on recent intent.",
    tone: "neutral" as const,
  },
  {
    label: "Unlikely to purchase",
    condition: "Score < 25, or weak engagement signals",
    objective: "Re engage or learn intent",
    primaryChannel: "Push, In app",
    secondaryChannel: "Email if opted in",
    cap: "1 time per week",
    tactic:
      "Win back offers, feedback prompts, and useful content designed to recover attention without over messaging.",
    tone: "muted" as const,
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return <div className={styles.eyebrow}>{number} · {label}</div>;
}

export default function CustomerRetentionProbabilityPage() {
  return (
    <main className={`${styles.page} min-h-screen`}>
      <Nav />
      <CaseNarrative slug="customer-retention-probability" />

      <section className={styles.section}>
        <SectionEyebrow number="01" label="Architecture" />
        <h2>A hybrid model because the business needed precision and recall at the same time.</h2>
        <div className={styles.copy}>
          <p>
            CatBoost was strong at identifying the clearest likely buyers, but it was conservative. The MLP found more of the harder cases, but at the cost of precision. A weighted blend gave the business a better operating balance than either model alone.
          </p>
        </div>

        <div className={styles.constraintGrid}>
          <ConstraintCard
            icon={<Target size={17} aria-hidden />}
            title="Accurate"
            body="The score had to rank real purchase likelihood reliably."
          />
          <ConstraintCard
            icon={<TrendingUp size={17} aria-hidden />}
            title="High recall"
            body="Do not miss customers who can still be recovered."
          />
          <ConstraintCard
            icon={<CheckCircle2 size={17} aria-hidden />}
            title="High precision"
            body="Do not spend retention budget on weak opportunities."
          />
          <ConstraintCard
            icon={<Sparkles size={17} aria-hidden />}
            title="Explainable"
            body="Marketing and CRM teams needed reasons they could trust."
          />
        </div>

        <div className={styles.architecture}>
          <div className={styles.modelGrid}>
            <ModelBox
              stage="Stage 1"
              name="CatBoost Classifier"
              tuning="Precision tuned"
              weight="65%"
              details="Strong tabular learner focused on the clearest purchase signals."
            />
            <ModelBox
              stage="Stage 2"
              name="MLP Classifier"
              tuning="Recall tuned"
              weight="35%"
              details="Captures nonlinear patterns and extends reach into harder to classify customers."
            />
          </div>

          <div className={styles.flowLine} aria-hidden />

          <div className={styles.hybrid}>
            <div className={styles.hybridLabel}>Weighted hybrid</div>
            <div className={styles.hybridTitle}>30 day repurchase probability</div>
            <div className={styles.hybridFormula}>0.65 × CatBoost score + 0.35 × MLP score</div>
          </div>

          <div className={styles.flowLine} aria-hidden />

          <div className={styles.labelGrid}>
            <LabelTile label="Likely to purchase" condition="Score ≥ 70" tone="accent" />
            <LabelTile label="Might purchase" condition="Middle band" tone="neutral" />
            <LabelTile label="Unlikely to purchase" condition="Score < 25" tone="muted" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionEyebrow number="02" label="Signals that mattered" />
        <h2>RFM was useful. Momentum was what separated a recoverable customer from a lost one.</h2>
        <div className={styles.copy}>
          <p>
            Two customers can have the same recency and frequency while being in very different states. Someone who stopped buying last month may still be recoverable. Someone who stopped eight months ago may not be. Static RFM cannot express that difference well enough on its own.
          </p>
          <p>
            The biggest unlock was engineering momentum signals that captured how behavior was changing over time, not just where the customer sat today.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article
              key={feature.group}
              className={`${styles.featureCard} ${feature.highlight ? styles.featureCardHighlight : ""}`}
            >
              <div className={styles.featureLabel}>{feature.group}</div>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionEyebrow number="03" label="Performance" />
        <h2>Model quality mattered. Business lift was the metric leadership cared about.</h2>

        <div className={styles.metricGrid}>
          {metrics.map((metric) => (
            <div className={styles.metricCard} key={metric.label}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.insightGrid}>
          <article className={styles.insightCard}>
            <strong>The threshold is a business dial.</strong>
            <p>
              Raise it when budget is tight and precision matters more. Lower it when the business wants more reach and can tolerate weaker precision. The model provides the tradeoff; the team decides where to operate.
            </p>
          </article>
          <article className={styles.insightCard}>
            <strong>The commercial proof was the holdout.</strong>
            <p>
              The roughly 60% lift answered the question leadership actually cared about: if the business acts on this score, does it convert more customers than the existing approach?
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <SectionEyebrow number="04" label="Activation" />
        <h2>One score becomes three different actions.</h2>
        <div className={styles.copy}>
          <p>
            Prediction was only useful once it changed what the customer experienced. The probability bands drove different objectives, channels, frequencies, and message strategies instead of sending the same campaign to everyone.
          </p>
        </div>

        <div className={styles.activationStack}>
          {activation.map((item) => (
            <ActivationCard key={item.label} {...item} />
          ))}
        </div>

        <div className={`${styles.copy} mt-6`}>
          <p>
            Brand affinity, discount sensitivity, delivery experience, and engagement rate then refine the exact product, offer, and channel used for each customer.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <SectionEyebrow number="05" label="In production" />
        <h2>A live decision input, refreshed every day.</h2>
        <div className={styles.copy}>
          <p>
            The model was designed to live inside the operating workflow, not as a notebook artifact. Each daily run creates one current score that downstream teams can use consistently.
          </p>
        </div>

        <div className={styles.productionGrid}>
          <ProductionCard
            icon={<Layers size={17} aria-hidden />}
            title="Daily refresh"
            body="Nightly scoring writes one current production table in BigQuery so every activation surface reads the same answer."
          />
          <ProductionCard
            icon={<Sparkles size={17} aria-hidden />}
            title="SHAP interpretability"
            body="Feature importance is generated with each run so stakeholders can see which signals are driving the score."
          />
          <ProductionCard
            icon={<Cpu size={17} aria-hidden />}
            title="Multi channel activation"
            body="WhatsApp, email, push, and product surfaces can use the same score with channel and frequency rules layered on top."
          />
          <ProductionCard
            icon={<Target size={17} aria-hidden />}
            title="Cross team usage"
            body="CRM targets campaigns, Product triggers in app nudges, Retention runs win back tests, and Data measures lift against holdouts."
          />
        </div>
      </section>

      <section className={styles.section}>
        <SectionEyebrow number="06" label="What I learned" />
        <h2>The model was only one part of making the system useful.</h2>

        <div className={styles.lessonGrid}>
          <ReflectionBlock
            title="What worked"
            icon={<CheckCircle2 size={17} aria-hidden />}
            items={[
              "The CatBoost and MLP blend created a better operating balance than either model alone.",
              "Momentum signals separated customers who were recoverable from customers who were simply inactive for a long time.",
              "Combining model output with business rules made the system easier for stakeholders to trust and use.",
            ]}
          />
          <ReflectionBlock
            title="What was hard"
            icon={<AlertCircle size={17} aria-hidden />}
            tone="warning"
            items={[
              "Label leakage had to be audited carefully because some apparently useful features encoded the answer in disguise.",
              "SMOTE could only touch training data. Letting synthetic samples into validation would make the metrics look better than reality.",
              "Model precision and campaign conversion are different concepts, and stakeholder education mattered as much as modeling quality.",
            ]}
          />
          <ReflectionBlock
            title="What comes next"
            icon={<Sparkles size={17} aria-hidden />}
            items={[
              "Uplift modeling to estimate causal campaign impact instead of purchase likelihood alone.",
              "Real time scoring for recent events such as cart abandonment layered on top of the daily score.",
              "Channel, timing, and threshold optimization based on observed outcomes.",
            ]}
          />
        </div>
      </section>

      <section className={styles.techSection}>
        <details className="group">
          <summary className="cursor-pointer list-none flex items-center justify-between hover:bg-ink-50 transition-colors">
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-accent font-medium mb-1">
                For technical depth
              </div>
              <div className="font-serif text-[19px] font-medium text-ink">
                Model, validation, features, and deployment details
              </div>
            </div>
            <ChevronDown
              size={19}
              className="text-ink-500 group-open:rotate-180 transition-transform"
              aria-hidden
            />
          </summary>

          <div className="px-6 pb-6 pt-5 space-y-7 border-t border-ink-100">
            <TechBlock title="Model architecture">
              <p>
                <strong>Stage 1, CatBoost:</strong> tuned with randomized search and three fold cross validation across iteration count, learning rate, tree depth, regularization, and border count.
              </p>
              <p>
                <strong>Stage 2, MLP:</strong> two hidden layers with early stopping, trained on SMOTE resampled training data and validated against the real holdout distribution.
              </p>
              <p>
                <strong>Hybrid blend:</strong> final score = 0.65 × CatBoost probability + 0.35 × MLP probability, calibrated on the validation set.
              </p>
            </TechBlock>

            <TechBlock title="Validation discipline">
              <p>
                SMOTE was applied only to training data. The validation holdout stayed untouched so synthetic examples could not inflate precision or recall.
              </p>
              <p>
                Precision, recall, and F1 were checked across probability thresholds so the operating cutoff could reflect the business tradeoff between budget and reach.
              </p>
            </TechBlock>

            <TechBlock title="Feature engineering">
              <p>
                More than 25 features were built from BigQuery, including purchase history, engagement, campaign interaction, customer status, and momentum signals across multiple time windows.
              </p>
            </TechBlock>

            <TechBlock title="Deployment">
              <p>
                The scoring pipeline runs nightly and writes the current hybrid score, customer label, model run date, and prediction validity horizon to a production BigQuery table consumed by activation systems.
              </p>
            </TechBlock>
          </div>
        </details>
      </section>

      <footer className={styles.footer}>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to work
        </Link>
      </footer>
    </main>
  );
}

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
    <article className="bg-surface border border-ink-200 rounded-[16px] p-4 flex gap-3 items-start">
      <div className="w-8 h-8 rounded-full bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-serif text-[17px] font-medium text-ink leading-tight mb-1.5">{title}</div>
        <div className="text-[13px] text-ink-600 leading-[1.5]">{body}</div>
      </div>
    </article>
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
    <article className="border border-ink-200 rounded-[18px] p-5 bg-page/70">
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium">{stage}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium">weight {weight}</span>
      </div>
      <div className="font-serif text-[21px] font-medium text-ink leading-tight mb-1">{name}</div>
      <div className="text-[12px] text-accent font-medium mb-3">{tuning}</div>
      <p className="text-[13.5px] text-ink-600 leading-[1.55]">{details}</p>
    </article>
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
      ? "border-ink-300 bg-page"
      : "border-ink-200 bg-ink-50";

  return (
    <div className={`border rounded-[15px] p-4 text-center ${toneClasses}`}>
      <div className="font-serif text-[16px] font-medium text-ink leading-tight mb-1.5">{label}</div>
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
    <article className={`bg-surface border border-ink-200 border-l-[3px] ${borderClass} rounded-[18px] p-5`}>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
        <div className="font-serif text-[21px] font-medium text-ink leading-tight">{label}</div>
        <div className="font-mono text-[10.5px] text-ink-500">{condition}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <ActivationField label="Objective" value={objective} />
        <ActivationField label="Primary channel" value={primaryChannel} />
        <ActivationField label="Secondary" value={secondaryChannel} />
        <ActivationField label="Frequency cap" value={cap} />
      </div>
      <div className="pt-4 border-t border-ink-100">
        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium mb-1.5">Tactic</div>
        <p className="text-[14px] text-ink-700 leading-[1.55]">{tactic}</p>
      </div>
    </article>
  );
}

function ActivationField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9.5px] uppercase tracking-wider text-ink-500 font-medium mb-1">{label}</div>
      <div className="text-[13.5px] text-ink-700 leading-[1.35]">{value}</div>
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
    <article className="bg-surface border border-ink-200 rounded-[18px] p-5 flex gap-3.5 items-start">
      <div className="w-9 h-9 rounded-full bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">{icon}</div>
      <div>
        <div className="font-serif text-[18px] font-medium text-ink leading-tight mb-1.5">{title}</div>
        <div className="text-[13.5px] text-ink-600 leading-[1.55]">{body}</div>
      </div>
    </article>
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
      ? "border-ink-300 bg-ink-50"
      : "border-accent/30 bg-accent-soft/35";
  const iconBg =
    tone === "warning"
      ? "bg-ink-100 text-ink-700"
      : "bg-accent-soft text-accent";

  return (
    <article className={`border ${toneClasses} rounded-[18px] p-5`}>
      <div className="flex items-center gap-2.5 mb-4">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBg}`}>{icon}</span>
        <h3 className="font-serif text-[20px] font-medium text-ink leading-tight">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="text-[13.5px] text-ink-700 leading-[1.58] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">
            {item}
          </li>
        ))}
      </ul>
    </article>
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
      <div className="font-mono text-[10.5px] uppercase tracking-wider text-accent font-medium mb-2">{title}</div>
      <div className="max-w-[900px] space-y-2.5 text-[14px] text-ink-700 leading-[1.68]">{children}</div>
    </div>
  );
}

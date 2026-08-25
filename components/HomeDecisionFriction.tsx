import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CircleAlert,
  Gauge,
  LayoutDashboard,
  UserRoundCheck,
} from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const founderSymptoms = [
  {
    title: "Key-person dependency",
    text: "Only one person really knows how an important decision gets made.",
  },
  {
    title: "Conflicting numbers",
    text: "Dashboards exist, but teams still disagree on what is true and what to do.",
  },
  {
    title: "Manual judgement",
    text: "Customer and operating data exists, but action still waits for repeated human interpretation.",
  },
  {
    title: "Prototype limbo",
    text: "The AI demo worked. The operating model, ownership and economics did not.",
  },
];

const scaleStages = [
  {
    volume: "20/day",
    model: "Founder or expert judgement",
    state: "Works",
  },
  {
    volume: "200/day",
    model: "Spreadsheets, analysts and informal rules",
    state: "Friction",
  },
  {
    volume: "2,000/day",
    model: "The same decision model",
    state: "Decision Gap",
  },
];

const analyticsFlow = ["Data", "Dashboard", "?", "Action"];
const decisionFlow = ["Data", "Context", "Decision", "Action", "Outcome", "Learning"];

const solutionOptions = [
  "A clear rule",
  "Better data",
  "A redesigned workflow",
  "Purpose-built software",
  "Machine learning",
  "An LLM or agent",
  "Human judgement",
  "No build at all",
];

const readinessChecks = [
  "Reliable data",
  "Exception handling",
  "Human override",
  "Workflow integration",
  "Clear ownership",
  "Monitoring",
  "Viable economics",
  "Feedback and learning",
];

const operatingBoundaries = [
  {
    label: "Acts",
    note: "Low-risk, reversible decisions within clear limits.",
    Icon: Bot,
  },
  {
    label: "Recommends",
    note: "The system surfaces a decision and the evidence behind it.",
    Icon: BrainCircuit,
  },
  {
    label: "Human review",
    note: "Ambiguous, high-impact or exceptional cases stay with people.",
    Icon: UserRoundCheck,
  },
  {
    label: "Not allowed",
    note: "Decisions outside policy, trust or economic boundaries are blocked.",
    Icon: CircleAlert,
  },
];

function Flow({ items, emphasized = false }: { items: string[]; emphasized?: boolean }) {
  return (
    <div className={styles.flow}>
      {items.map((item, index) => (
        <div className={styles.flowStep} key={`${item}-${index}`}>
          <span className={emphasized ? styles.flowPillStrong : styles.flowPill}>{item}</span>
          {index < items.length - 1 ? <ArrowRight size={14} aria-hidden /> : null}
        </div>
      ))}
    </div>
  );
}

export function HomeDecisionFriction() {
  return (
    <section className={styles.section} aria-labelledby="decision-gap-title">
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <span>The problem</span>
          <i aria-hidden />
        </div>

        <div className={styles.intro}>
          <h2 id="decision-gap-title">
            Growth creates a <em>Decision Gap.</em>
          </h2>
          <div className={styles.introCopy}>
            <p>
              Companies often scale faster than their ability to make important decisions consistently.
              What worked through founder instinct, expert judgement and informal coordination starts to
              slow the business down.
            </p>
            <p>
              I identify the decisions caught in that gap, then design the data and AI systems that make
              them repeatable, measurable and scalable.
            </p>
          </div>
        </div>

        <div className={styles.symptomGrid} aria-label="Common signs of the Decision Gap">
          {founderSymptoms.map((symptom, index) => (
            <article className={styles.symptomCard} key={symptom.title}>
              <span>0{index + 1}</span>
              <h3>{symptom.title}</h3>
              <p>{symptom.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.conceptGrid}>
          <article className={styles.scaleCard}>
            <div className={styles.cardHeading}>
              <Gauge size={20} aria-hidden />
              <div>
                <span>Why it appears</span>
                <h3>The decision model did not scale with the business.</h3>
              </div>
            </div>
            <div className={styles.scaleTable}>
              {scaleStages.map((stage) => (
                <div className={styles.scaleRow} key={stage.volume}>
                  <strong>{stage.volume}</strong>
                  <p>{stage.model}</p>
                  <span>{stage.state}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.flowCard}>
            <div className={styles.cardHeading}>
              <LayoutDashboard size={20} aria-hidden />
              <div>
                <span>What changes</span>
                <h3>Analytics describes. A decision system closes the loop.</h3>
              </div>
            </div>

            <div className={styles.flowGroup}>
              <span>Typical analytics</span>
              <Flow items={analyticsFlow} />
            </div>
            <div className={styles.flowGroup}>
              <span>Decision system</span>
              <Flow items={decisionFlow} emphasized />
            </div>
          </article>
        </div>

        <article className={styles.philosophyCard}>
          <div>
            <span className={styles.kicker}>The principle</span>
            <h3>Not every problem needs AI.</h3>
            <p>
              I use the simplest reliable solution that improves the decision. Technical feasibility is
              not the same as business viability—and sometimes the right recommendation is to wait or not
              build at all.
            </p>
          </div>
          <div className={styles.optionCloud} aria-label="Possible solution types">
            {solutionOptions.map((option) => (
              <span key={option}>{option}</span>
            ))}
          </div>
        </article>

        <div className={styles.operationsGrid}>
          <article className={styles.readinessCard}>
            <span className={styles.kicker}>Prototype to operations</span>
            <h3>A working demo is only the beginning.</h3>
            <p>
              A decision system becomes operational only when it can survive real workflows, exceptions,
              ownership and economic scrutiny.
            </p>
            <div className={styles.readinessGrid}>
              {readinessChecks.map((check, index) => (
                <span key={check}>
                  <i>0{index + 1}</i>
                  {check}
                </span>
              ))}
            </div>
          </article>

          <article className={styles.boundaryCard}>
            <span className={styles.kicker}>AI operating boundaries</span>
            <h3>Autonomy should be designed, not assumed.</h3>
            <p>
              Every system needs an explicit boundary for what AI can do—and a clear path for everything
              it cannot.
            </p>
            <div className={styles.boundaryList}>
              {operatingBoundaries.map(({ label, note, Icon }) => (
                <div key={label}>
                  <Icon size={18} strokeWidth={1.7} aria-hidden />
                  <span>
                    <strong>{label}</strong>
                    <small>{note}</small>
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.sectionClose}>
          <p>
            The result is not another dashboard or isolated prototype. It is an operating capability the
            team can understand, own and improve.
          </p>
          <Link href="/services">
            See how I work <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

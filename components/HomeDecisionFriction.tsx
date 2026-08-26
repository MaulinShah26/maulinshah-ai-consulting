import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const scaleStages = [
  {
    volume: "20/day",
    model: "Founder instinct",
    state: "Works",
  },
  {
    volume: "200/day",
    model: "Spreadsheets and handoffs",
    state: "Slows",
  },
  {
    volume: "2,000/day",
    model: "The same way of deciding",
    state: "Breaks",
  },
];

const recognitionSignals = [
  "Every important answer waits for one person",
  "Teams still debate which number is right",
  "Each decision needs another spreadsheet",
  "The AI pilot never reached the real workflow",
];

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
          <p>
            The business scales. The way important decisions get made does not.
          </p>
        </div>

        <article className={styles.scaleVisual} aria-label="How the Decision Gap appears as decision volume grows">
          <div className={styles.visualHeading}>
            <span>What changes with scale</span>
            <p>More customers. More exceptions. More decisions.</p>
          </div>

          <div className={styles.scaleTrack}>
            <div className={styles.trackLine} aria-hidden />
            {scaleStages.map((stage, index) => (
              <div
                className={`${styles.scaleStage} ${index === scaleStages.length - 1 ? styles.scaleStageCritical : ""}`}
                key={stage.volume}
              >
                <span className={styles.stageDot} aria-hidden />
                <strong>{stage.volume}</strong>
                <p>{stage.model}</p>
                <small>{stage.state}</small>
              </div>
            ))}
          </div>

          <p className={styles.visualOutcome}>
            Decisions become <strong>slow</strong>, <strong>inconsistent</strong> and dependent on <strong>key people</strong>.
          </p>
        </article>

        <div className={styles.signalStrip} aria-label="Common signs of the Decision Gap">
          {recognitionSignals.map((signal, index) => (
            <div key={signal}>
              <span>0{index + 1}</span>
              <p>{signal}</p>
            </div>
          ))}
        </div>

        <div className={styles.distinction}>
          <p>
            A dashboard shows what happened. <strong>A decision system makes what happens next repeatable.</strong>
          </p>
          <div>
            <span>Not every problem needs AI.</span>
            <small>Use the simplest reliable answer: a rule, workflow, software, data, AI—or no build at all.</small>
          </div>
        </div>

        <div className={styles.sectionClose}>
          <p>I diagnose the decision first, then design the system around it.</p>
          <Link href="/services">
            See how I work <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

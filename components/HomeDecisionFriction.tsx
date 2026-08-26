import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const scaleStages = [
  {
    volume: "5–10",
    unit: "decisions / week",
    model: "Founder decides directly",
    state: "Manageable",
  },
  {
    volume: "25–50",
    unit: "decisions / week",
    model: "Spreadsheets + handoffs",
    state: "Slowing",
  },
  {
    volume: "100+",
    unit: "decisions / week",
    model: "Informal judgement becomes the bottleneck",
    state: "Decision Gap",
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
            The business scales, but the way important decisions get made does not.
          </p>
        </div>

        <article className={styles.scaleVisual} aria-label="An illustrative example of how repeated weekly decisions become harder to manage as a business scales">
          <div className={styles.visualHeading}>
            <span>Illustrative weekly volume</span>
            <p>As repeated decisions multiply, informal methods stop scaling.</p>
          </div>

          <div className={styles.scaleTrack}>
            {scaleStages.map((stage, index) => (
              <div
                className={`${styles.scaleStage} ${index === scaleStages.length - 1 ? styles.scaleStageCritical : ""}`}
                key={stage.volume}
              >
                <small>{stage.state}</small>
                <div className={styles.stageVolume}>
                  <strong>{stage.volume}</strong>
                  <span>{stage.unit}</span>
                </div>
                <p>{stage.model}</p>
              </div>
            ))}
          </div>

          <p className={styles.visualOutcome}>
            The result: <strong>slow</strong>, <strong>inconsistent</strong> decisions that depend on <strong>key people</strong>.
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

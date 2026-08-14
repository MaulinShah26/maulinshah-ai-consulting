import { operatingModel } from "@/lib/data";
import styles from "./ServicesNarrative.module.css";

export function ServicesProcess() {
  return (
    <section className={styles.processSection} aria-labelledby="process-heading">
      <div className={styles.inner}>
        <div className={styles.processHeader}>
          <span className={styles.sectionKicker}>How I work inside the business</span>
          <h2 id="process-heading">From unclear problem to a system your team can run.</h2>
        </div>

        <div className={styles.processGrid}>
          {operatingModel.steps.map((step) => (
            <article key={step.n} className={styles.processStep}>
              <span className={styles.processNum}>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { operatingModel } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import styles from "./ServicesNarrative.module.css";

export function ServicesProcess() {
  return (
    <section className={styles.processSection} aria-labelledby="process-heading">
      <div className={styles.inner}>
        <div id="process-heading">
          <SectionHeader label={operatingModel.sectionLabel} />
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

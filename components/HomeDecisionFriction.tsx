import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const symptoms = [
  {
    n: "01",
    label: "The numbers disagree",
    body: "Marketing, product and finance can answer the same business question differently.",
  },
  {
    n: "02",
    label: "Important answers wait on people",
    body: "A decision stalls while someone pulls data, reconciles definitions or explains what changed.",
  },
  {
    n: "03",
    label: "AI creates more bets than clarity",
    body: "Ideas multiply faster than the company can decide what is valuable, ready or worth owning.",
  },
];

export function HomeDecisionFriction() {
  return (
    <section className={styles.section} aria-labelledby="decision-friction-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.kicker}>Why this happens</span>
          <h2 id="decision-friction-title">
            The company grows. <em>The decisions start crossing teams.</em>
          </h2>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.symptoms}>
            {symptoms.map((item) => (
              <article key={item.n} className={styles.symptom}>
                <span className={styles.number}>{item.n}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.ownership}>
            <span className={styles.ownershipKicker}>The gap</span>
            <h3>The gap is ownership.</h3>
            <p>
              One senior person connecting data, business context and applied AI to the decisions that matter.
            </p>
            <p className={styles.ownershipNote}>
              Senior enough to set direction. Hands on enough to make the system work. Structured to leave the team stronger.
            </p>
            <Link href="/services" className={styles.servicesLink}>
              See how I work
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

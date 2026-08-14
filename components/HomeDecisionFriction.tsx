import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const teams = [
  { name: "Marketing", signal: "Campaigns · acquisition" },
  { name: "Product", signal: "Events · funnels" },
  { name: "Engineering", signal: "Pipelines · systems" },
  { name: "Finance", signal: "Revenue · margin" },
  { name: "AI", signal: "Experiments · agents" },
];

const decisions = ["Retention", "Growth", "Margin", "AI priorities"];

export function HomeDecisionFriction() {
  return (
    <section className={styles.section} aria-labelledby="decision-friction-title">
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <span className={styles.kicker}>Why this happens</span>
          <h2 id="decision-friction-title">
            Every team owns its piece. <em>No one owns how they connect.</em>
          </h2>
        </div>

        <div className={styles.systemMap}>
          <div className={styles.teamRail} aria-label="Business teams and their signals">
            {teams.map((team) => (
              <div key={team.name} className={styles.team}>
                <strong>{team.name}</strong>
                <span>{team.signal}</span>
              </div>
            ))}
          </div>

          <div className={styles.decisionBridge} aria-hidden>
            <span className={styles.bridgeLine} />
            <div className={styles.decisionCore}>
              <span>Shared decision</span>
              <strong>One question. Many signals.</strong>
            </div>
          </div>

          <div className={styles.decisionRow} aria-label="Examples of decisions that cross teams">
            {decisions.map((decision) => (
              <span key={decision}>{decision}</span>
            ))}
          </div>
        </div>

        <div className={styles.closingRow}>
          <p>
            <strong>Dashboards are not the gap.</strong> The gap is someone connecting the signals to the decision.
          </p>
          <Link href="/services" className={styles.servicesLink}>
            See how I work
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

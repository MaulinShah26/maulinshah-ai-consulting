import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const teams = [
  { name: "Marketing", signal: "campaigns · acquisition" },
  { name: "Product", signal: "events · funnels" },
  { name: "Engineering", signal: "pipelines · systems" },
  { name: "Finance", signal: "revenue · margin" },
  { name: "AI", signal: "experiments · agents" },
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

        <div className={styles.teamRail} aria-label="Business teams and their signals">
          {teams.map((team) => (
            <div key={team.name} className={styles.team}>
              <strong>{team.name}</strong>
              <span>{team.signal}</span>
            </div>
          ))}
        </div>

        <div className={styles.sharedDecision}>
          <span>One decision crosses all of them</span>
        </div>

        <div className={styles.decisionRow} aria-label="Examples of cross team decisions">
          {decisions.map((decision) => (
            <span key={decision}>{decision}</span>
          ))}
        </div>

        <div className={styles.closingRow}>
          <p>
            Most companies have plenty of dashboards. Far fewer have someone making sure they lead to better decisions.
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

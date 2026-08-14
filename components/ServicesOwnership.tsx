import styles from "./ServicesNarrative.module.css";

const teams = [
  { name: "Marketing", signal: "Campaigns · acquisition" },
  { name: "Product", signal: "Events · funnels" },
  { name: "Engineering", signal: "Pipelines · systems" },
  { name: "Finance", signal: "Revenue · margin" },
  { name: "AI initiatives", signal: "Experiments · agents" },
];

const outcomes = ["Growth clarity", "Retention", "Efficiency", "Practical AI"];

const pathsIn = [
  "M90 8 C180 54 390 30 500 112",
  "M295 8 C350 52 430 56 500 112",
  "M500 8 C450 52 590 52 500 112",
  "M705 8 C650 52 570 56 500 112",
  "M910 8 C820 54 610 30 500 112",
];

const pathsOut = [
  "M500 12 C390 62 190 58 105 112",
  "M500 12 C455 60 385 68 365 112",
  "M500 12 C545 60 615 68 635 112",
  "M500 12 C610 62 810 58 895 112",
];

export function ServicesOwnership() {
  return (
    <section className={styles.ownershipSection} aria-labelledby="ownership-heading">
      <div className={styles.inner}>
        <div className={styles.sectionKicker}>Why this happens</div>
        <div className={styles.ownershipIntro}>
          <h2 id="ownership-heading">Every team owns its piece. Few own how the pieces connect.</h2>
          <p>
            As companies grow, important decisions start crossing product, marketing, engineering,
            finance and AI. The data exists. Shared ownership usually does not.
          </p>
        </div>

        <div className={styles.ownershipMap}>
          <div className={styles.teamGrid}>
            {teams.map((team) => (
              <div key={team.name} className={styles.teamCard}>
                <strong>{team.name}</strong>
                <span>{team.signal}</span>
              </div>
            ))}
          </div>

          <svg className={styles.connectionsIn} viewBox="0 0 1000 125" preserveAspectRatio="none" aria-hidden="true">
            {pathsIn.map((path) => (
              <path key={path} d={path} />
            ))}
          </svg>

          <div className={styles.frictionLine}>Different numbers · unclear ownership · slow decisions</div>

          <div className={styles.ownershipCore}>
            <span>Senior Data &amp; AI ownership</span>
            <small>Connect the signals, choose the decision, make someone accountable for the outcome.</small>
          </div>

          <svg className={styles.connectionsOut} viewBox="0 0 1000 125" preserveAspectRatio="none" aria-hidden="true">
            {pathsOut.map((path) => (
              <path key={path} d={path} />
            ))}
          </svg>

          <div className={styles.outcomeGrid}>
            {outcomes.map((outcome) => (
              <span key={outcome}>{outcome}</span>
            ))}
          </div>
        </div>

        <p className={styles.ownershipPunch}>
          Most companies do not need another dashboard. They need the data, systems and decisions to work together.
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const teams = [
  {
    name: "Marketing",
    owns: "Acquisition",
    signals: "CAC · campaigns · leads",
  },
  {
    name: "Product",
    owns: "Experience",
    signals: "Activation · funnels · usage",
  },
  {
    name: "Engineering",
    owns: "Systems",
    signals: "Pipelines · reliability · delivery",
  },
  {
    name: "Finance",
    owns: "Economics",
    signals: "Revenue · margin · payback",
  },
  {
    name: "AI",
    owns: "Automation",
    signals: "Use cases · agents · experiments",
  },
];

const sharedQuestions = [
  "Why did growth move?",
  "Which customers need action?",
  "Where is money leaking?",
  "Which AI bet is worth building?",
];

export function HomeDecisionFriction() {
  return (
    <section className={styles.section} aria-labelledby="decision-friction-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.kicker}>Inside a growing company</span>
          <h2 id="decision-friction-title">
            Each team is doing its job. <em>The important questions do not stay inside one team.</em>
          </h2>
        </div>

        <div className={styles.siloGrid} aria-label="Teams and the parts of the business they own">
          {teams.map((team) => (
            <article key={team.name} className={styles.silo}>
              <span className={styles.siloOwns}>Owns {team.owns}</span>
              <h3>{team.name}</h3>
              <p>{team.signals}</p>
            </article>
          ))}
        </div>

        <div className={styles.crossTeam}>
          <div className={styles.crossTeamLabel}>Questions that cross all of them</div>
          <div className={styles.questionGrid}>
            {sharedQuestions.map((question) => (
              <span key={question}>{question}</span>
            ))}
          </div>
        </div>

        <div className={styles.conclusion}>
          <div>
            <span className={styles.conclusionKicker}>The missing layer</span>
            <h3>Someone has to connect the pieces.</h3>
          </div>
          <div className={styles.conclusionCopy}>
            <p>
              I work across teams to turn separate signals into one decision, one system and one accountable next step.
            </p>
            <Link href="/services" className={styles.servicesLink}>
              See how I work
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

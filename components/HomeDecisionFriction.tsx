import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircleDollarSign,
  Code2,
  DatabaseZap,
  Megaphone,
  PackageCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const teams = [
  {
    name: "Marketing",
    owns: "Demand",
    signals: "Spend · channels · leads · campaigns",
    Icon: Megaphone,
  },
  {
    name: "Product",
    owns: "Behavior",
    signals: "Activation · journeys · adoption · retention",
    Icon: Users,
  },
  {
    name: "Engineering",
    owns: "Delivery",
    signals: "Systems · capacity · reliability · build effort",
    Icon: Code2,
  },
  {
    name: "Finance",
    owns: "Economics",
    signals: "Revenue · margin · payback · cash",
    Icon: CircleDollarSign,
  },
  {
    name: "Operations",
    owns: "Execution",
    signals: "Process · service · support · capacity",
    Icon: PackageCheck,
  },
];

const businessDecisions = [
  {
    label: "Profitable growth",
    question: "What is constraining profitable growth, and where should the next unit of capital go?",
    Icon: TrendingUp,
  },
  {
    label: "Customer value",
    question: "Which customers create the most long term value, and what should we change to win more of them?",
    Icon: Target,
  },
  {
    label: "Capital allocation",
    question: "Which product, growth or operating bet should we fund next, and what should we stop doing?",
    Icon: BriefcaseBusiness,
  },
  {
    label: "AI leverage",
    question: "Where can AI create material business leverage without adding operational risk?",
    Icon: Sparkles,
  },
];

export function HomeDecisionFriction() {
  return (
    <section className={styles.section} aria-labelledby="decision-friction-title">
      <div className={styles.inner} style={{ width: "min(1440px, 100%)" }}>
        <div className={styles.intro}>
          <h2
            id="decision-friction-title"
            style={{
              gridColumn: "1 / -1",
              maxWidth: "none",
              fontSize: "clamp(32px, 3vw, 41px)",
              lineHeight: 1,
              letterSpacing: "-0.035em",
            }}
          >
            The decisions that matter most rarely belong to one team.
          </h2>
        </div>

        <div className={styles.diagram}>
          <div className={styles.diagramGlow} aria-hidden />

          <div className={styles.diagramBody}>
            <div className={styles.teamColumn}>
              <div className={styles.columnLabel}>Teams already in place</div>
              <div className={styles.teamStack}>
                {teams.map(({ name, owns, signals, Icon }) => (
                  <article key={name} className={styles.teamNode}>
                    <span className={styles.teamIcon} aria-hidden>
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <div className={styles.teamCopy}>
                      <div className={styles.teamTopline}>
                        <strong>{name}</strong>
                        <span>{owns}</span>
                      </div>
                      <p>{signals}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.leftRail} aria-hidden />

            <div className={styles.hubColumn}>
              <div className={styles.hubOrbit} aria-hidden>
                <span className={styles.orbitOne} />
                <span className={styles.orbitTwo} />
              </div>
              <div className={styles.hub}>
                <span className={styles.hubIcon} aria-hidden>
                  <DatabaseZap size={25} strokeWidth={1.6} />
                </span>
                <span className={styles.hubKicker}>The connective owner</span>
                <strong>Fractional Head of Data & AI</strong>
                <div className={styles.hubCapabilities}>
                  <span>Shared data</span>
                  <span>Decision logic</span>
                  <span>Applied AI</span>
                </div>
                <p>I connect the functions, challenge assumptions with shared data, and turn CEO level questions into decisions the business can act on.</p>
              </div>
            </div>

            <div className={styles.rightRail} aria-hidden />

            <div className={styles.questionColumn}>
              <div className={styles.columnLabel}>Questions no single team can answer alone</div>
              <div className={styles.questionStack}>
                {businessDecisions.map(({ label, question, Icon }) => (
                  <article key={label} className={styles.questionNode}>
                    <span className={styles.questionIcon} aria-hidden>
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <div>
                      <span>{label}</span>
                      <strong>{question}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.diagramFooter}>
            <p>I become the connective layer between teams, data and the decisions that need one accountable owner.</p>
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

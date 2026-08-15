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
import motion from "./HomeDecisionFrictionMotion.module.css";

const teams = [
  {
    name: "Marketing",
    owns: "Demand",
    signals: "Spend · channels · campaigns",
    Icon: Megaphone,
  },
  {
    name: "Product",
    owns: "Behavior",
    signals: "Activation · journeys · retention",
    Icon: Users,
  },
  {
    name: "Engineering",
    owns: "Delivery",
    signals: "Systems · reliability · effort",
    Icon: Code2,
  },
  {
    name: "Finance",
    owns: "Economics",
    signals: "Revenue · margin · cash",
    Icon: CircleDollarSign,
  },
  {
    name: "Operations",
    owns: "Execution",
    signals: "Process · support · capacity",
    Icon: PackageCheck,
  },
];

const businessDecisions = [
  {
    label: "Profitable growth",
    question: "What is holding back profitable growth, and where should we invest next?",
    Icon: TrendingUp,
  },
  {
    label: "Customer value",
    question: "Which customers are worth the most, and how do we win more like them?",
    Icon: Target,
  },
  {
    label: "Priorities",
    question: "Which bet should we fund next, and what should we stop doing?",
    Icon: BriefcaseBusiness,
  },
  {
    label: "AI",
    question: "Where can AI save time or create value without adding unnecessary risk?",
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
            Important decisions rarely fit inside one team.
          </h2>
        </div>

        <div className={`${styles.diagram} ${motion.motionDiagram}`}>
          <div className={styles.diagramGlow} aria-hidden />

          <div className={styles.diagramBody}>
            <div className={styles.teamColumn}>
              <div className={styles.columnLabel}>Teams</div>
              <div className={styles.teamStack}>
                {teams.map(({ name, owns, signals, Icon }) => (
                  <article key={name} className={styles.teamNode} data-flow-node="team">
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

            <div className={styles.leftRail} data-flow-rail="left" aria-hidden />

            <div className={styles.hubColumn} data-flow-hub-column>
              <div className={styles.hubOrbit} data-flow-orbit aria-hidden>
                <span className={styles.orbitOne} />
                <span className={styles.orbitTwo} />
              </div>
              <div className={styles.hub} data-flow-hub>
                <span className={styles.hubIcon} aria-hidden>
                  <DatabaseZap size={25} strokeWidth={1.6} />
                </span>
                <span className={styles.hubKicker}>Where I step in</span>
                <strong>Fractional Head of Data & AI</strong>
                <div className={styles.hubCapabilities}>
                  <span>Shared facts</span>
                  <span>Clear tradeoffs</span>
                  <span>Applied AI</span>
                </div>
                <p>I connect the data, context and tradeoffs so leadership can make one clear call.</p>
              </div>
            </div>

            <div className={styles.rightRail} data-flow-rail="right" aria-hidden />

            <div className={styles.questionColumn}>
              <div className={styles.columnLabel}>Cross-team questions</div>
              <div className={styles.questionStack}>
                {businessDecisions.map(({ label, question, Icon }) => (
                  <article key={label} className={styles.questionNode} data-flow-node="question">
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
            <Link href="/services" className={styles.servicesLink} style={{ marginLeft: "auto" }}>
              How I work
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

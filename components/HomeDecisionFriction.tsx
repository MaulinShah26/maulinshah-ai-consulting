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
    label: "Acquisition quality",
    question: "Which channels bring customers who retain and pay back?",
    Icon: TrendingUp,
  },
  {
    label: "Retention economics",
    question: "Where are valuable customers being lost, and which intervention is worth the cost?",
    Icon: Target,
  },
  {
    label: "Investment priority",
    question: "Which product or growth bet deserves the next unit of budget and engineering time?",
    Icon: BriefcaseBusiness,
  },
  {
    label: "AI automation",
    question: "Which workflow should we automate now, and which should wait?",
    Icon: Sparkles,
  },
];

export function HomeDecisionFriction() {
  return (
    <section className={styles.section} aria-labelledby="decision-friction-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Cross team decisions</span>
          <h2 id="decision-friction-title">
            Teams own functions. <em>The expensive decisions cut across them.</em>
          </h2>
        </div>

        <div className={styles.diagram}>
          <div className={styles.diagramGlow} aria-hidden />

          <div className={styles.diagramBody}>
            <div className={styles.teamColumn}>
              <div className={styles.columnLabel}>Function signals</div>
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
                <span className={styles.hubKicker}>Decision operating layer</span>
                <strong>Connect. Evaluate. Act.</strong>
                <div className={styles.hubCapabilities}>
                  <span>Shared data</span>
                  <span>Decision logic</span>
                  <span>Applied AI</span>
                </div>
                <p>Turn separate signals into a quantified choice and a clear next action.</p>
              </div>
            </div>

            <div className={styles.rightRail} aria-hidden />

            <div className={styles.questionColumn}>
              <div className={styles.columnLabel}>Business decisions</div>
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
            <p>The value is not another dashboard. It is making the cross team decision repeatable.</p>
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

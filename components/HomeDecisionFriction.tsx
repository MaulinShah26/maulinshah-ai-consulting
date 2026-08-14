import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CircleDollarSign,
  Database,
  DollarSign,
  Megaphone,
  Network,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import styles from "./HomeDecisionFriction.module.css";

const teams = [
  {
    name: "Marketing",
    owns: "Acquisition",
    signals: "CAC · campaigns · leads",
    Icon: Megaphone,
  },
  {
    name: "Product",
    owns: "Experience",
    signals: "Activation · funnels · usage",
    Icon: TrendingUp,
  },
  {
    name: "Engineering",
    owns: "Systems",
    signals: "Pipelines · reliability · delivery",
    Icon: Database,
  },
  {
    name: "Finance",
    owns: "Economics",
    signals: "Revenue · margin · payback",
    Icon: CircleDollarSign,
  },
  {
    name: "AI",
    owns: "Automation",
    signals: "Use cases · agents · experiments",
    Icon: Bot,
  },
];

const leadershipQuestions = [
  {
    label: "Growth",
    question: "Why did growth move?",
    Icon: TrendingUp,
  },
  {
    label: "Customer action",
    question: "Which customers need action?",
    Icon: Users,
  },
  {
    label: "Economics",
    question: "Where is money leaking?",
    Icon: DollarSign,
  },
  {
    label: "AI priority",
    question: "Which AI bet is worth building?",
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
            When the question crosses teams, <em>the system has to connect them.</em>
          </h2>
        </div>

        <div className={styles.diagram}>
          <div className={styles.diagramGlow} aria-hidden />

          <svg
            className={styles.connectorMap}
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M245 82 C360 82 390 212 500 280" />
            <path d="M245 181 C365 181 404 235 500 280" />
            <path d="M245 280 C370 280 420 280 500 280" />
            <path d="M245 379 C365 379 404 325 500 280" />
            <path d="M245 478 C360 478 390 348 500 280" />

            <path d="M500 280 C615 210 650 112 755 112" />
            <path d="M500 280 C625 245 660 222 755 222" />
            <path d="M500 280 C625 315 660 338 755 338" />
            <path d="M500 280 C615 350 650 448 755 448" />
          </svg>

          <div className={styles.teamColumn}>
            <div className={styles.columnLabel}>Team signals</div>
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

          <div className={styles.hubColumn}>
            <div className={styles.hubOrbit} aria-hidden>
              <span className={styles.orbitOne} />
              <span className={styles.orbitTwo} />
              <span className={styles.orbitThree} />
            </div>
            <div className={styles.hub}>
              <span className={styles.hubIcon} aria-hidden>
                <Network size={26} strokeWidth={1.6} />
              </span>
              <span className={styles.hubKicker}>Decision layer</span>
              <strong>Cross team decisions</strong>
              <p>Context · data · applied AI</p>
              <div className={styles.hubOutcome}>One answer · one next step</div>
            </div>
          </div>

          <div className={styles.questionColumn}>
            <div className={styles.columnLabel}>Leadership questions</div>
            <div className={styles.questionStack}>
              {leadershipQuestions.map(({ label, question, Icon }) => (
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

          <div className={styles.diagramFooter}>
            <p>I connect the signals, decision logic and execution across teams.</p>
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

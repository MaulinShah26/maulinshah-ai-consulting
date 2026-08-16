import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { experience, social } from "@/lib/data";
import { HomeDecisionFriction } from "./HomeDecisionFriction";
import { HomeWorkRail } from "./HomeWorkRail";
import { MediumWriting } from "./MediumWriting";
import styles from "./HomeMinimal.module.css";
import problemStyles from "./HomeCapabilitySignals.module.css";
import portalStyles from "./HomePortals.module.css";
import identityStyles from "./HomeIdentity.module.css";
import spacingStyles from "./HomeSpacing.module.css";

const founderProblems = [
  {
    label: "Customers",
    title: "Who is about to leave, buy again or need attention?",
    copy: "See the signal before it becomes lost revenue.",
    href: "/case-studies/customer-retention-probability",
    cardClass: problemStyles.capabilityOne,
  },
  {
    label: "Trusted numbers",
    title: "Can everyone trust the same number?",
    copy: "Agree on the numbers before acting on them.",
    href: "/services/opportunity-audit",
    cardClass: problemStyles.capabilityTwo,
  },
  {
    label: "Next action",
    title: "What should we do next for each customer?",
    copy: "Turn behavior into one clear action.",
    href: "/case-studies/adaptive-nudge-decision-engine",
    cardClass: problemStyles.capabilityThree,
  },
  {
    label: "Growth",
    title: "Growth moved. What actually caused it?",
    copy: "Separate real drivers from noise.",
    href: "/services/opportunity-audit",
    cardClass: problemStyles.capabilityFour,
  },
  {
    label: "AI",
    title: "Where is AI actually worth using?",
    copy: "Prioritize by value, readiness and risk.",
    href: "/services/opportunity-audit",
    cardClass: problemStyles.capabilityFive,
  },
];

const chapters = [
  {
    number: "01",
    label: "See the proof",
    ghost: "Proof",
    eyebrow: "What I have shipped",
    href: "/work",
    statement: "Real business problems, the calls I made, what I built and what changed.",
    tags: ["Case studies", "Outcomes", "Systems"],
    cardClass: portalStyles.portalWork,
  },
  {
    number: "02",
    label: "Work with me",
    ghost: "Work",
    eyebrow: "Ways I can help",
    href: "/services",
    statement: "Start with a short audit, one focused build or ongoing Data and AI leadership.",
    tags: ["Audit", "Build", "Fractional lead"],
    cardClass: portalStyles.portalServices,
  },
  {
    number: "03",
    label: "How I got here",
    ghost: "Path",
    eyebrow: "Experience and approach",
    href: "/about",
    statement: "From infrastructure and analytics to ML products, decision systems and leadership.",
    tags: ["Experience", "Approach", "Principles"],
    cardClass: portalStyles.portalAbout,
  },
];

export function HomeMinimal() {
  return (
    <main>
      <section className={`${styles.stage} ${spacingStyles.stageCompact}`}>
        <div className={styles.inner} style={{ width: "min(1440px, 100%)" }}>
          <div className={styles.heroGrid}>
            <div>
              <div className={`${styles.kicker} ${identityStyles.heroKicker}`}>
                <span className={styles.kickerDot} aria-hidden />
                Fractional Head of Data & AI
              </div>

              <h1 className={styles.headline}>
                Better decisions.
                <br />
                Built on <span className={styles.headlineAccent}>data and AI.</span>
              </h1>

              <p className={styles.subhead}>
                I work with growing companies when important business decisions need stronger data, smarter systems or applied AI.
              </p>

              <div className={styles.actions}>
                <Link href="/work" className={styles.primaryAction}>
                  Explore my work
                  <ArrowUpRight size={14} aria-hidden />
                </Link>
                <a
                  href={social.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  <Calendar size={14} aria-hidden />
                  Book a fit call
                </a>
              </div>

              <div className={`${styles.builtAt} ${identityStyles.credibility}`}>
                <span className={styles.builtAtLabel}>Built data and AI at</span>
                {experience.firms.map((firm) => (
                  <a
                    key={firm.name}
                    href={firm.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.firm}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={firm.logo} alt="" width={25} height={25} />
                    {firm.name}
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`${styles.signalField} ${problemStyles.problemField}`}
              aria-label="Recurring problems growing companies face"
            >
              <div className={styles.orbit} aria-hidden />
              <div className={styles.orbitSmall} aria-hidden />
              <div className={styles.centerMark} aria-hidden>
                where
                <br />
                decisions break
              </div>

              <div className={problemStyles.capabilityLayer}>
                {founderProblems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${problemStyles.capabilityCard} ${item.cardClass}`}
                  >
                    <span className={problemStyles.capabilityLabel}>{item.label}</span>
                    <strong className={problemStyles.capabilityTitle}>{item.title}</strong>
                    <span className={problemStyles.capabilityCopy}>{item.copy}</span>
                    <span className={problemStyles.capabilityArrow} aria-hidden>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeWorkRail />

      <HomeDecisionFriction />

      <MediumWriting />

      <section className={`${portalStyles.exploreSection} ${spacingStyles.portalsCompact}`}>
        <div className={portalStyles.exploreInner} style={{ width: "min(1440px, 100%)" }}>
          <div className={portalStyles.portalGrid}>
            {chapters.map((chapter) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                className={`${portalStyles.portal} ${chapter.cardClass}`}
              >
                <span className={portalStyles.portalGhost} aria-hidden>{chapter.ghost}</span>

                <div className={portalStyles.portalTop}>
                  <span className={portalStyles.portalNum}>{chapter.number}</span>
                  <span className={portalStyles.portalEyebrow}>{chapter.eyebrow}</span>
                  <span className={portalStyles.portalArrow} aria-hidden>
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className={portalStyles.portalMain}>
                  <h3>{chapter.label}</h3>
                  <p>{chapter.statement}</p>
                </div>

                <div className={portalStyles.portalTags} aria-hidden>
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ minHeight: 32, padding: "0 13px", fontSize: 11 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

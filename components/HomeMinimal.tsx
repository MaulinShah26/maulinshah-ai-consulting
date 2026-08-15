import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { experience, social } from "@/lib/data";
import { HomeDecisionFriction } from "./HomeDecisionFriction";
import styles from "./HomeMinimal.module.css";
import problemStyles from "./HomeCapabilitySignals.module.css";
import portalStyles from "./HomePortals.module.css";
import identityStyles from "./HomeIdentity.module.css";
import spacingStyles from "./HomeSpacing.module.css";

const founderProblems = [
  {
    label: "Customer intelligence",
    title: "Who is likely to leave, buy again or need attention next?",
    copy: "Know before the signal becomes lost revenue.",
    href: "/case-studies/customer-retention-probability",
    cardClass: problemStyles.capabilityOne,
  },
  {
    label: "Single source of truth",
    title: "Can leadership trust the same number?",
    copy: "Align definitions before decisions depend on them.",
    href: "/services/opportunity-audit",
    cardClass: problemStyles.capabilityTwo,
  },
  {
    label: "Next best action",
    title: "What should happen next for each customer?",
    copy: "Turn behavior into timely action, not another segment.",
    href: "/case-studies/adaptive-nudge-decision-engine",
    cardClass: problemStyles.capabilityThree,
  },
  {
    label: "Growth intelligence",
    title: "Growth moved. What actually caused it?",
    copy: "Separate real drivers from attribution noise.",
    href: "/services/opportunity-audit",
    cardClass: problemStyles.capabilityFour,
  },
  {
    label: "AI readiness",
    title: "Are your data and workflows ready for AI agents?",
    copy: "Scale use cases with value, readiness and ownership.",
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
    statement: "Business problems, decisions I made, systems I built, and what changed after they went live.",
    tags: ["Case studies", "Production systems", "Outcomes"],
    cardClass: portalStyles.portalWork,
  },
  {
    number: "02",
    label: "Find the right engagement",
    ghost: "Engage",
    eyebrow: "Choose the level of help",
    href: "/services",
    statement: "Start with an audit, bring me in for one build, or add ongoing senior Data and AI ownership.",
    tags: ["Audit", "Build", "Fractional lead"],
    cardClass: portalStyles.portalServices,
  },
  {
    number: "03",
    label: "My path here",
    ghost: "Path",
    eyebrow: "Background and working style",
    href: "/about",
    statement: "I’ve spent 10+ years moving from infrastructure and analytics into Data and AI products, decision systems and leadership.",
    tags: ["Experience", "Principles", "Working style"],
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

      <HomeDecisionFriction />

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

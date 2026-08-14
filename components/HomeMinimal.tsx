import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { experience, social } from "@/lib/data";
import styles from "./HomeMinimal.module.css";
import problemStyles from "./HomeCapabilitySignals.module.css";

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
    label: "Work",
    href: "/work",
    description: "Production systems, case studies and experiments.",
  },
  {
    number: "02",
    label: "Services",
    href: "/services",
    description: "Audit, build and fractional leadership engagements.",
  },
  {
    number: "03",
    label: "About",
    href: "/about",
    description: "The operator behind the systems and how I work.",
  },
  {
    number: "04",
    label: "Contact",
    href: "/contact",
    description: "Bring me the business decision that is getting expensive.",
  },
];

export function HomeMinimal() {
  return (
    <main>
      <section className={styles.stage}>
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.kicker}>
                <span className={styles.kickerDot} aria-hidden />
                Fractional Head of Data & AI
              </div>

              <h1 className={styles.headline}>
                Better decisions.
                <br />
                Built from <span className={styles.headlineAccent}>data and AI.</span>
              </h1>

              <p className={styles.subhead}>
                I help growing companies turn customer intelligence, trusted data and practical AI into better growth decisions.
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

              <div className={styles.builtAt}>
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
                    <img src={firm.logo} alt="" width={20} height={20} />
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

      <section className={styles.chapters}>
        <div className={styles.chapterInner}>
          <div className={styles.chapterIntro}>
            <span>Go deeper</span>
            <span>The homepage is the overview. The evidence lives one click away.</span>
          </div>

          {chapters.map((chapter) => (
            <Link key={chapter.href} href={chapter.href} className={styles.chapterLink}>
              <span className={styles.chapterNum}>{chapter.number}</span>
              <span className={styles.chapterTitle}>{chapter.label}</span>
              <span className={styles.chapterDesc}>{chapter.description}</span>
              <ArrowUpRight size={19} aria-hidden />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

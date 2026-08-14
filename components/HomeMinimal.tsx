import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { experience, social } from "@/lib/data";
import styles from "./HomeMinimal.module.css";
import capStyles from "./HomeCapabilitySignals.module.css";

const proof = [
  {
    label: "Retention",
    value: "~60%",
    copy: "lift on test conversion",
    href: "/case-studies/customer-retention-probability",
    cardClass: styles.cardOne,
  },
  {
    label: "Product scale",
    value: "10M+",
    copy: "players reached",
    href: "/case-studies/batters-bowlers-tag",
    cardClass: styles.cardTwo,
  },
  {
    label: "Systems",
    value: "5+",
    copy: "production systems",
    href: "/work",
    cardClass: styles.cardThree,
  },
  {
    label: "Experience",
    value: "10+",
    copy: "years across data and AI",
    href: "/about",
    cardClass: styles.cardFour,
  },
];

const founderSignals = [
  {
    label: "Retention signal",
    title: "Good customers quietly stop buying.",
    copy: "You find out after the revenue is already gone.",
    href: "/case-studies/customer-retention-probability",
    cardClass: capStyles.capabilityOne,
  },
  {
    label: "Decision signal",
    title: "Leadership debates which number is right.",
    copy: "Different teams bring different versions of the truth.",
    href: "/services/opportunity-audit",
    cardClass: capStyles.capabilityTwo,
  },
  {
    label: "AI signal",
    title: "AI ideas keep growing. Production does not.",
    copy: "Value, readiness and ownership are still unclear.",
    href: "/services/opportunity-audit",
    cardClass: capStyles.capabilityThree,
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
                I help growth stage consumer businesses know who to retain, what to automate and where AI is actually worth building.
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

            <div className={styles.signalField} aria-label="Founder problems and selected proof">
              <div className={styles.orbit} aria-hidden />
              <div className={styles.orbitSmall} aria-hidden />
              <div className={styles.centerMark} aria-hidden>
                signal
                <br />
                to action
              </div>

              {proof.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${styles.signalCard} ${item.cardClass}`}
                >
                  <span className={styles.signalLabel}>{item.label}</span>
                  <strong className={styles.signalValue}>{item.value}</strong>
                  <span className={styles.signalCopy}>
                    {item.copy}
                    <ArrowUpRight size={13} aria-hidden />
                  </span>
                </Link>
              ))}

              <div className={capStyles.capabilityLayer} aria-label="Problems founders may recognize">
                {founderSignals.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${capStyles.capabilityCard} ${item.cardClass}`}
                  >
                    <span className={capStyles.capabilityLabel}>{item.label}</span>
                    <strong className={capStyles.capabilityTitle}>{item.title}</strong>
                    <span className={capStyles.capabilityCopy}>{item.copy}</span>
                    <span className={capStyles.capabilityArrow} aria-hidden>↗</span>
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

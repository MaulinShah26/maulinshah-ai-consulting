import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { caseNarratives } from "@/lib/data";
import styles from "./CaseNarrative.module.css";

export function CaseNarrative({ slug }: { slug: string }) {
  const c = caseNarratives[slug];
  if (!c) return null;

  return (
    <div className={styles.root}>
      <section className={styles.hero}>
        <div className={styles.frame}>
          <Link href="/work" className={styles.back}>
            <ArrowLeft size={14} aria-hidden />
            Back to work
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <div className={styles.meta}>
                <span>{c.company}</span>
                <span>{c.year}</span>
                <span>{c.status}</span>
              </div>

              <h1 className={styles.title}>{c.heroTitle}</h1>
              <p className={styles.lead}>{c.heroLead}</p>

              <div className={styles.tags} aria-label="Case study themes">
                {c.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <aside className={styles.impactPanel} aria-label="Case study impact">
              <span className={styles.panelLabel}>Impact at a glance</span>
              <div className={styles.impactGrid}>
                {c.impact.map((metric, index) => (
                  <div className={styles.impactItem} key={`${metric.k}-${index}`}>
                    <span className={styles.impactValue}>{metric.v}</span>
                    <span className={styles.impactKey}>{metric.k}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronDown } from "lucide-react";
import { faq, operatingModel, services, social } from "@/lib/data";
import styles from "./ServicesPageV4.module.css";

const paths = [
  {
    id: "fractional",
    cue: "I need senior ownership",
    short: "Own the function with us",
    tone: "dark",
  },
  {
    id: "audit",
    cue: "I need clarity first",
    short: "Tell us what deserves attention",
    tone: "light",
  },
  {
    id: "build",
    cue: "I know what needs solving",
    short: "Design it, build it, hand it over",
    tone: "accent",
  },
] as const;

export function ServicesPageV4() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.frame}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Services</span>
              <h1>Senior Data &amp; AI help, shaped to the decision in front of you.</h1>
              <p>
                Sometimes you need clarity. Sometimes you need one important system built. Sometimes you need someone senior to own the function with your team for a while.
              </p>
              <a href="#engagements" className={styles.primaryLink}>
                Find the right engagement
                <ArrowUpRight size={17} aria-hidden />
              </a>
            </div>

            <aside className={styles.chooser} aria-label="Choose by your current need">
              <span className={styles.chooserLabel}>Start with what is true today</span>
              {paths.map((path, index) => (
                <a key={path.id} href={`#${path.id}`} className={styles.choiceRow}>
                  <span className={styles.choiceNum}>0{index + 1}</span>
                  <span>
                    <strong>{path.cue}</strong>
                    <small>{path.short}</small>
                  </span>
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section id="engagements" className={styles.engagements}>
        <div className={styles.frame}>
          <div className={styles.sectionHead}>
            <span>Three ways to work together</span>
            <h2>Choose by the problem, not by the service name.</h2>
          </div>

          <div className={styles.pathStack}>
            {services.cards.map((service, index) => {
              const path = paths[index];
              return (
                <article
                  key={service.title}
                  id={path.id}
                  className={`${styles.path} ${
                    path.tone === "dark"
                      ? styles.pathDark
                      : path.tone === "accent"
                        ? styles.pathAccent
                        : styles.pathLight
                  }`}
                >
                  <div className={styles.pathSignal}>
                    <span className={styles.pathIndex}>0{index + 1}</span>
                    <span className={styles.pathCue}>{path.cue}</span>
                  </div>

                  <div className={styles.pathMain}>
                    <h3>{service.title}</h3>
                    <p className={styles.pathOutcome}>{service.outcome}</p>
                    <p className={styles.pathBestFor}>{service.bestFor}</p>
                  </div>

                  <div className={styles.pathDetails}>
                    <div>
                      <span>Commitment</span>
                      <p>{service.commitment}</p>
                    </div>
                    <div>
                      <span>What I own</span>
                      <p>{service.whatThisIs}</p>
                    </div>
                    <div>
                      <span>You leave with</span>
                      <p>{service.walkAway}</p>
                    </div>
                    <div className={styles.pathActions}>
                      <Link href={service.pageHref}>
                        Full details <ArrowUpRight size={14} aria-hidden />
                      </Link>
                      <a href="#fit-call">Discuss this path</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.frame}>
          <div className={styles.sectionHeadCompact}>
            <span>How the work moves</span>
            <h2>The scope changes. The operating discipline does not.</h2>
          </div>

          <div className={styles.processGrid}>
            {operatingModel.steps.map((step) => (
              <article key={step.n} className={styles.processStep}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.standardStrip}>
            <strong>Across every engagement</strong>
            <span>Business outcome before tooling</span>
            <span>Working systems before slideware</span>
            <span>Your team owns more over time</span>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`${styles.frame} ${styles.faqGrid}`}>
          <div className={styles.faqIntro}>
            <span className={styles.eyebrow}>Before you book</span>
            <h2>The questions that usually decide whether there is a fit.</h2>
          </div>

          <div className={styles.faqList}>
            {faq.items.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.question} className={styles.faqItem}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden
                      className={open ? styles.chevronOpen : ""}
                    />
                  </button>
                  <div className={`${styles.answerWrap} ${open ? styles.answerOpen : ""}`}>
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fit-call" className={styles.fitCall}>
        <div className={`${styles.frame} ${styles.fitCallInner}`}>
          <div>
            <span>Not sure which path fits?</span>
            <h2>You do not need to diagnose the engagement before the first call.</h2>
            <p>
              Bring the business problem. We will work out whether it needs an audit, a build, embedded leadership, or nothing at all.
            </p>
          </div>
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.callButton}
          >
            <Calendar size={17} aria-hidden />
            Book a fit call
          </a>
        </div>
      </section>
    </div>
  );
}

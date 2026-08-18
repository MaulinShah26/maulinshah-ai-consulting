"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, Linkedin, Mail } from "lucide-react";
import { social } from "@/lib/data";
import { track } from "@/lib/analytics";
import styles from "./ContactConversion.module.css";

const problemRows = [
  [
    "Retention leakage",
    "Customer intelligence",
    "Trusted metrics",
    "Product analytics",
    "Growth diagnosis",
    "Forecasting",
    "Personalization",
    "AI adoption",
    "Decision automation",
    "Roadmap priorities",
  ],
  [
    "Replenishment timing",
    "Customer segmentation",
    "Experimentation",
    "Data quality",
    "Recommendations",
    "Marketing efficiency",
    "AI prioritisation",
    "Next best action",
    "Customer lifetime value",
    "Senior ownership",
  ],
];

const needs = [
  {
    key: "clarity",
    title: "I need clarity",
    body: "We are not sure what to fix, prioritise or build first.",
  },
  {
    key: "build",
    title: "I need something built",
    body: "We know the problem and need someone senior to own the build.",
  },
  {
    key: "ownership",
    title: "I need ownership",
    body: "Data and AI need senior direction without a full time hire yet.",
  },
] as const;

type NeedKey = (typeof needs)[number]["key"];

function ProblemGroup({ items, duplicate = false }: { items: string[]; duplicate?: boolean }) {
  return (
    <div className={styles.problemGroup} aria-hidden={duplicate || undefined}>
      {items.map((item) => (
        <span className={styles.problemWord} key={`${duplicate ? "dup-" : ""}${item}`}>
          {item}
          <span className={styles.problemDot} aria-hidden />
        </span>
      ))}
    </div>
  );
}

export function ContactConversion() {
  const email = `${social.emailUser}@${social.emailDomain}`;
  const [selectedNeed, setSelectedNeed] = useState<NeedKey>("clarity");

  return (
    <main className="px-6 pb-5 pt-10 md:pb-7 md:pt-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <span className="h-px flex-1 bg-ink-200" aria-hidden />
        </div>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.16fr)_minmax(390px,0.84fr)] lg:items-stretch">
          <div className="flex min-h-[520px] min-w-0 flex-col justify-center overflow-hidden border-b border-ink-200 py-8 lg:border-b-0 lg:border-r lg:pr-14">
            <h1 className="max-w-[780px] font-serif text-[clamp(42px,5vw,72px)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
              Tell me what you are trying to solve.
            </h1>
            <p className="mt-6 max-w-[680px] text-[15px] leading-[1.7] text-ink-600 md:text-[16px]">
              Start with the business problem. We can work out whether the right next step is an audit, a focused build, ongoing ownership, or no engagement.
            </p>

            <div className={styles.problemCanvas} aria-label="Examples of problems I work on">
              <div className={styles.problemCanvasLabel}>Problems I work on</div>

              <div className={styles.marqueeRow}>
                <div className={styles.problemTrack}>
                  <ProblemGroup items={problemRows[0]} />
                  <ProblemGroup items={problemRows[0]} duplicate />
                </div>
              </div>

              <div className={styles.marqueeRow}>
                <div className={`${styles.problemTrack} ${styles.problemTrackReverse}`}>
                  <ProblemGroup items={problemRows[1]} />
                  <ProblemGroup items={problemRows[1]} duplicate />
                </div>
              </div>
            </div>
          </div>

          <aside className="flex min-h-[520px] flex-col rounded-[28px] bg-ink p-7 text-page md:p-9">
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-page/45">
              What do you need?
            </div>

            <div className="mt-5 grid gap-2.5">
              {needs.map((need) => {
                const active = selectedNeed === need.key;
                return (
                  <button
                    key={need.key}
                    type="button"
                    onClick={() => {
                      setSelectedNeed(need.key);
                      track("contact_need_select", { need: need.key });
                    }}
                    className={`w-full rounded-[18px] border px-5 py-4 text-left transition-colors ${
                      active
                        ? "border-accent bg-page text-ink"
                        : "border-page/15 bg-page/[0.035] text-page hover:border-page/30"
                    }`}
                    aria-pressed={active}
                  >
                    <span className="block font-serif text-[21px] font-medium leading-[1.1]">
                      {need.title}
                    </span>
                    <span
                      className={`mt-2 block text-[12px] leading-[1.55] ${
                        active ? "text-ink-600" : "text-page/55"
                      }`}
                    >
                      {need.body}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-4 max-w-[420px] text-[12px] leading-[1.6] text-page/55">
                No deck needed. Bring the problem and enough context to decide whether a next step makes sense.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={social.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("book_call_click", {
                      placement: "contact_page",
                      need: selectedNeed,
                    })
                  }
                  className="inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-page px-5 text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={15} aria-hidden />
                    Book a 30 minute fit call
                  </span>
                  <ArrowUpRight size={15} aria-hidden />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`mailto:${email}`}
                    onClick={() =>
                      track("contact_click", {
                        channel: "email",
                        placement: "contact_page",
                      })
                    }
                    className="inline-flex min-h-12 items-center justify-between gap-3 rounded-full border border-page/20 px-4 text-[11px] text-page/78 transition-colors hover:border-accent hover:text-page"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail size={13} aria-hidden />
                      Email
                    </span>
                    <ArrowUpRight size={12} aria-hidden />
                  </a>

                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      track("contact_click", {
                        channel: "linkedin",
                        placement: "contact_page",
                      })
                    }
                    className="inline-flex min-h-12 items-center justify-between gap-3 rounded-full border border-page/20 px-4 text-[11px] text-page/78 transition-colors hover:border-accent hover:text-page"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin size={13} aria-hidden />
                      LinkedIn
                    </span>
                    <ArrowUpRight size={12} aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

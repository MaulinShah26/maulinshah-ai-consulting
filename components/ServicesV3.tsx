"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const options = [
  {
    number: "01",
    need: "Need clarity",
    question: "What should we fix or build first?",
    title: "Data & AI Opportunity Audit",
    summary: "A focused review of your data, AI opportunities and priorities.",
    timing: "2 to 4 weeks",
    format: "Fixed scope",
    href: "/services/opportunity-audit",
  },
  {
    number: "02",
    need: "Need a build",
    question: "We know what needs solving.",
    title: "Decision System Build",
    summary: "One business critical system designed, built and handed over.",
    timing: "15 to 25 hrs per week",
    format: "Scope based timeline",
    href: "/services/decision-system-build",
  },
  {
    number: "03",
    need: "Need ownership",
    question: "We need senior Data & AI leadership.",
    title: "Fractional Head of Data & AI",
    summary: "Ongoing senior ownership of the roadmap, systems and team.",
    timing: "About 10 hrs per week",
    format: "3 month minimum",
    href: "/services/fractional-head",
  },
];

export function ServicesV3() {
  return (
    <Reveal id="services" className="px-6 py-6 md:py-8">
      <div className="mx-auto max-w-content">
        <div className="reveal-child">
          <SectionHeader label="Three ways to work together" />
        </div>

        <div className="reveal-child grid gap-3 md:grid-cols-3">
          {options.map((option) => (
            <article
              key={option.title}
              className="flex min-h-[330px] flex-col rounded-2xl border border-ink-200 bg-surface p-6 md:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                  {option.need}
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-ink-400">
                  {option.number}
                </span>
              </div>

              <p className="mt-6 max-w-[330px] font-serif text-[23px] font-medium leading-[1.15] tracking-[-0.02em] text-ink">
                {option.question}
              </p>

              <div className="mt-7 border-t border-ink-200 pt-5">
                <h2 className="font-serif text-[18px] font-semibold leading-tight text-ink">
                  {option.title}
                </h2>
                <p className="mt-2 text-[13px] leading-[1.6] text-ink-600">
                  {option.summary}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9.5px] uppercase tracking-[0.06em] text-ink-400">
                <span>{option.timing}</span>
                <span>{option.format}</span>
              </div>

              <Link
                href={option.href}
                onClick={() =>
                  track("service_details_click", {
                    service: option.title,
                    need: option.need,
                    source: "services_grid",
                  })
                }
                className="mt-auto inline-flex items-center gap-1.5 pt-7 font-mono text-[10px] uppercase tracking-[0.08em] text-accent transition-colors hover:text-ink"
              >
                View details
                <ArrowUpRight size={13} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

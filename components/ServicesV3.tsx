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
    question: "Which decisions are holding the business back?",
    title: "Decision Systems Diagnostic",
    summary: "A focused review of the decisions, workflows, data and economics behind the problem.",
    timing: "2 to 4 weeks",
    format: "Fixed scope",
    href: "/services/opportunity-audit",
  },
  {
    number: "02",
    need: "Need a build",
    question: "We know the decision that needs to improve.",
    title: "Decision System Build",
    summary: "One business-critical capability designed, built, operated and handed over.",
    timing: "15 to 25 hrs per week",
    format: "Scope based timeline",
    href: "/services/decision-system-build",
  },
  {
    number: "03",
    need: "Need ownership",
    question: "We need ongoing senior ownership.",
    title: "Fractional Data & AI Lead",
    summary: "Embedded ownership of the decision roadmap, operating systems and team capability.",
    timing: "About 10 hrs per week",
    format: "3 month minimum",
    href: "/services/fractional-head",
  },
];

const stages = [
  {
    number: "01",
    title: "Diagnose",
    body: "Define the decision, workflow, economics, data quality, constraints and failure modes before choosing a solution.",
  },
  {
    number: "02",
    title: "Roadmap",
    body: "Choose the right mix of rules, software, data, ML, AI, automation and human judgement—and what not to build.",
  },
  {
    number: "03",
    title: "Operate",
    body: "Build into the real workflow, measure decision quality, learn from exceptions and transfer ownership to the team.",
  },
];

const diagnosticOutcomes = ["Fix now", "Build next", "Experiment", "Wait", "Do not build"];

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

        <section className="reveal-child mt-12 border-t border-ink-200 pt-8 md:mt-16 md:pt-10">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                The operating method
              </span>
              <h2 className="mt-3 max-w-[470px] font-serif text-[30px] font-medium leading-[1.08] tracking-[-0.025em] text-ink md:text-[38px]">
                From an unclear problem to an owned capability.
              </h2>
              <p className="mt-4 max-w-[510px] text-[14px] leading-[1.7] text-ink-600">
                The work starts with the decision—not a preferred tool or model. The aim is the simplest reliable system the business can operate and improve.
              </p>
            </div>

            <div className="grid gap-3">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="grid gap-3 rounded-2xl border border-ink-200 bg-surface p-5 sm:grid-cols-[42px_120px_1fr] sm:items-start md:p-6"
                >
                  <span className="font-mono text-[9px] tracking-[0.12em] text-accent">
                    {stage.number}
                  </span>
                  <h3 className="font-serif text-[18px] font-semibold leading-tight text-ink">
                    {stage.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-ink-600">{stage.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="reveal-child mt-3 rounded-2xl border border-accent/20 bg-surface p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                A useful diagnostic ends with choices
              </span>
              <p className="mt-3 max-w-[500px] font-serif text-[22px] font-medium leading-[1.2] text-ink">
                Technical feasibility does not automatically make an idea commercially worth building.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {diagnosticOutcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="rounded-full border border-ink-200 bg-page px-3 py-2 font-mono text-[9px] uppercase tracking-[0.06em] text-ink-600"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Reveal>
  );
}

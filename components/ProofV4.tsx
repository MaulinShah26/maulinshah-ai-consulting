import { ArrowRight } from "lucide-react";
import { proofV4 } from "@/lib/commercial-v4";
import { TrackedLink } from "./TrackedLink";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function ProofV4() {
  return (
    <Reveal id="work" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={proofV4.sectionLabel} />
        </div>

        <h2 className="reveal-child font-serif text-[24px] md:text-[28px] font-medium leading-tight text-ink mb-5">
          {proofV4.heading}
        </h2>

        <div className="reveal-child grid grid-cols-1 md:grid-cols-3 gap-3">
          {proofV4.cards.map((card) => (
            <TrackedLink
              key={card.title}
              href={card.href}
              event="case_study_click"
              params={{ slug: card.href, from: "home_v4" }}
              className="group bg-surface border border-ink-200 rounded-xl p-5 hover:border-accent/45 transition-colors"
            >
              <div className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-accent mb-3">
                {card.tag}
              </div>
              <div className="font-serif text-[30px] font-semibold leading-none text-ink mb-1">
                {card.metric}
              </div>
              <div className="text-[11.5px] text-ink-500 mb-5">
                {card.metricLabel}
              </div>
              <h3 className="font-serif text-[17px] font-semibold leading-tight text-ink mb-4">
                {card.title}
              </h3>
              <div className="flex items-center gap-2 text-[12px] text-ink-600">
                <span>{card.flowFrom}</span>
                <ArrowRight size={13} className="shrink-0 text-accent" aria-hidden />
                <span>{card.flowTo}</span>
              </div>
            </TrackedLink>
          ))}
        </div>

        <div className="reveal-child mt-4">
          <TrackedLink
            href="/work"
            event="view_all_work_click"
            className="text-[11px] font-mono uppercase tracking-wide text-accent"
          >
            See all work
          </TrackedLink>
        </div>
      </div>
    </Reveal>
  );
}

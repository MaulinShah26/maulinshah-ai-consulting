import { ArrowRight } from "lucide-react";
import { servicesV4 } from "@/lib/commercial-v4";
import { TrackedLink } from "./TrackedLink";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function ServicesV4() {
  return (
    <Reveal id="services" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={servicesV4.sectionLabel} />
        </div>

        <h2 className="reveal-child max-w-[650px] font-serif text-[25px] md:text-[30px] font-medium leading-tight text-ink mb-5">
          {servicesV4.heading}
        </h2>

        <div className="reveal-child grid grid-cols-1 md:grid-cols-3 gap-3">
          {servicesV4.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-surface border border-ink-200 rounded-xl p-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent mb-3">
                {card.step}
              </div>
              <h3 className="font-serif text-[18px] font-semibold text-ink leading-tight mb-5">
                {card.title}
              </h3>

              <div className="space-y-3 mb-5">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wide text-ink-400 mb-1">
                    Best when
                  </div>
                  <div className="text-[12.5px] text-ink-600">{card.bestFor}</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wide text-ink-400 mb-1">
                    You get
                  </div>
                  <div className="font-serif text-[17px] font-semibold text-ink">
                    {card.outcome}
                  </div>
                </div>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-wide text-ink-400 mb-5">
                {card.meta}
              </div>

              <TrackedLink
                href={card.pageHref}
                event="service_v4_details_click"
                params={{ service: card.title }}
                className="mt-auto inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wide text-accent"
              >
                {card.cta}
                <ArrowRight size={12} aria-hidden />
              </TrackedLink>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

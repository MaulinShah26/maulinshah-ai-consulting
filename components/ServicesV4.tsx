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

        <div className="reveal-child max-w-[760px] mb-5">
          <h2 className="font-serif text-[25px] md:text-[30px] font-medium leading-tight text-ink mb-3">
            {servicesV4.heading}
          </h2>
          <p className="text-[14px] text-ink-600 leading-[1.7]">{servicesV4.lede}</p>
        </div>

        <div className="reveal-child grid grid-cols-1 md:grid-cols-3 gap-3">
          {servicesV4.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-surface border border-ink-200 rounded-xl p-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent mb-2">
                {card.step}
              </div>
              <h3 className="font-serif text-[18px] font-semibold text-ink leading-tight mb-3">
                {card.title}
              </h3>
              <p className="text-[12.5px] text-ink-500 leading-relaxed mb-3">
                {card.bestFor}
              </p>
              <p className="text-[13px] text-ink-700 leading-relaxed mb-4">
                {card.outcome}
              </p>
              <div className="font-mono text-[10px] uppercase tracking-wide text-ink-400 mb-5">
                {card.meta}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
                <TrackedLink
                  href={card.pageHref}
                  event="service_v4_details_click"
                  params={{ service: card.title }}
                  className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wide text-accent"
                >
                  {card.cta}
                  <ArrowRight size={12} aria-hidden />
                </TrackedLink>
                <TrackedLink
                  href="#contact"
                  event="service_v4_discuss_click"
                  params={{ service: card.title }}
                  className="text-[11px] font-mono uppercase tracking-wide text-ink-500 hover:text-ink transition-colors"
                >
                  Discuss fit
                </TrackedLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

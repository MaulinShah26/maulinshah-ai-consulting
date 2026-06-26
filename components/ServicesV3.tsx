import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function ServicesV3() {
  return (
    <Reveal id="services" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={services.sectionLabel} />
        </div>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-3 gap-3">
          {services.cards.map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="flex flex-col bg-surface border border-ink-200 rounded-xl p-5 hover:border-accent/40 transition-colors"
            >
              <h4 className="font-serif text-[17px] font-semibold text-ink leading-tight mb-2">
                {c.title}
              </h4>
              <div className="text-[12px] text-ink-500 leading-relaxed mb-3.5">
                {c.bestFor}
              </div>
              <div className="text-[13px] text-ink-700 leading-relaxed mb-4">
                {c.outcome}
              </div>
              <span className="mt-auto font-mono text-[10.5px] uppercase tracking-wide text-accent">
                {c.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

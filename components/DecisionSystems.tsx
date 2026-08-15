import { ArrowRight } from "lucide-react";
import { decisionSystemsV4 } from "@/lib/commercial-v4";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function DecisionSystems() {
  return (
    <Reveal id="decision-systems" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={decisionSystemsV4.sectionLabel} />
        </div>

        <div className="reveal-child flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
          <h2 className="max-w-[520px] font-serif text-[25px] md:text-[30px] font-medium leading-tight text-ink">
            {decisionSystemsV4.heading}
          </h2>
          <p className="text-[13px] text-ink-500 md:text-right">
            {decisionSystemsV4.subhead}
          </p>
        </div>

        <div className="reveal-child grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {decisionSystemsV4.examples.map((example) => (
            <div
              key={example.label}
              className="bg-surface border border-ink-200 rounded-xl p-4"
            >
              <div className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-accent mb-5">
                {example.label}
              </div>
              <div className="font-serif text-[16px] font-semibold leading-snug text-ink">
                {example.signal}
              </div>
              <ArrowRight size={15} className="text-accent my-3" aria-hidden />
              <div className="text-[13px] text-ink-600 leading-snug">
                {example.action}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-child mt-4 text-[12.5px] font-medium text-ink-600">
          {decisionSystemsV4.close}
        </p>
      </div>
    </Reveal>
  );
}

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

        <div className="reveal-child grid grid-cols-1 md:grid-cols-[0.9fr_1.35fr] gap-6 md:gap-10 items-start">
          <div>
            <h2 className="font-serif text-[25px] md:text-[30px] font-medium leading-tight text-ink mb-4">
              {decisionSystemsV4.heading}
            </h2>
            <p className="text-[14.5px] text-ink-600 leading-[1.7] mb-4">
              {decisionSystemsV4.definition}
            </p>
            <p className="text-[13px] text-ink-500 leading-[1.65] border-l-2 border-accent pl-4">
              {decisionSystemsV4.close}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {decisionSystemsV4.examples.map((example) => (
              <div
                key={example.question}
                className="bg-surface border border-ink-200 rounded-xl p-4"
              >
                <div className="font-serif text-[16px] font-semibold leading-snug text-ink mb-3">
                  {example.question}
                </div>
                <div className="flex items-start gap-2 text-[12.5px] text-ink-600 leading-relaxed">
                  <ArrowRight size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span>{example.answer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

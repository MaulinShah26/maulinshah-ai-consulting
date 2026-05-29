import { approach } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Approach() {
  return (
    <Reveal id="approach" className="py-2 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child mb-4">
          <SectionHeader
            number={approach.sectionNumber}
            label={approach.sectionLabel}
          />
        </div>

        <div className="reveal-child approach-flow">
          {approach.steps.map((step) => (
            <div key={step.num} className="approach-step">
              <span className="approach-step-num">{step.num}</span>
              <h3 className="approach-step-title font-serif text-[18px] font-semibold text-ink leading-tight tracking-tight mb-2.5">
                {step.title}
              </h3>
              <p className="text-[13.5px] text-ink-600 leading-[1.65]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Reveal>
  );
}

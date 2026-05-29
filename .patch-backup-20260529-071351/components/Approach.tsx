import { approach } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Approach() {
  return (
    <Reveal id="approach" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader
            number={approach.sectionNumber}
            label={approach.sectionLabel}
          />
        </div>

        <h2 className="reveal-child font-serif text-[20px] font-medium text-ink mb-1.5">
          {approach.heading}
        </h2>
        <p className="reveal-child text-[14px] text-ink-600 leading-[1.6] mb-9">
          {approach.sub}
        </p>

        <div className="reveal-child approach-flow">
          <div className="approach-flow-track" aria-hidden="true" />
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

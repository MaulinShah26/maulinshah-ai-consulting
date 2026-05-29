import { outcomes } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Outcomes() {
  return (
    <Reveal id="outcomes" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child mb-8">
          <SectionHeader
            number={outcomes.sectionNumber}
            label={outcomes.sectionLabel}
          />
        </div>

        <div className="reveal-child outcomes-flow">
          {outcomes.states.map((state) => (
            <div key={state.num} className="outcomes-card">
              <span className="outcomes-num">{state.num}</span>
              <h3 className="font-serif text-[14px] font-semibold text-ink leading-tight tracking-tight">
                {state.title}
              </h3>
              <p className="text-[12px] text-ink-600 leading-[1.55] mt-auto">
                {state.body}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal-child outcomes-condition mt-8">
          {outcomes.condition}
        </p>
      </div>
    </Reveal>
  );
}

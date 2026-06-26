import { operatingModel } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function OperatingModel() {
  return (
    <Reveal id="operating-model" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={operatingModel.sectionLabel} />
        </div>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-4 gap-4">
          {operatingModel.steps.map((s) => (
            <div key={s.n}>
              <div className="font-mono text-[11px] text-accent mb-2">{s.n}</div>
              <h4 className="font-serif text-[17px] font-semibold text-ink mb-1.5">
                {s.title}
              </h4>
              <p className="text-[12.5px] text-ink-600 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

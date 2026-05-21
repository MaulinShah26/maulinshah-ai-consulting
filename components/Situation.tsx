import { situation } from "@/lib/data";
import { inlineEm } from "@/lib/inlineEm";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Situation() {
  return (
    <Reveal className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={situation.sectionNumber} label={situation.sectionLabel} />
        </div>
        {situation.paragraphs.map((p, i) => (
          <p
            key={i}
            className="reveal-child text-[14.5px] text-ink-600 leading-[1.75] mb-4 max-w-readable"
          >
            {inlineEm(p)}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

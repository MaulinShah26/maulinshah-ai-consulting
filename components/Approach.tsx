import { approach } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Approach() {
  return (
    <Reveal id="approach" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={approach.sectionNumber} label={approach.sectionLabel} />
        </div>
        <h2 className="reveal-child font-serif text-[20px] font-medium text-ink mb-4">
          {approach.heading}
        </h2>
        {approach.intro.map((p, i) => (
          <p
            key={i}
            className="reveal-child text-[14px] text-ink-600 leading-[1.75] mb-4 max-w-readable last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

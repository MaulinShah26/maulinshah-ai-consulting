import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const milestones = about.journey.filter(
    (j) => j.title !== "Lericon Informatics"
  );

  return (
    <Reveal id="about" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={about.sectionLabel} />
        </div>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-4 gap-5">
          {milestones.map((m) => (
            <div key={m.title}>
              <div className="font-mono text-[10.5px] text-accent mb-2">
                {m.years}
              </div>
              <h4 className="font-serif text-[16px] font-semibold text-ink leading-tight">
                {m.title}
              </h4>
              <div className="text-[11px] text-ink-500 mt-0.5 mb-2">
                {m.subtitle}
              </div>
              <p className="text-[12px] text-ink-600 leading-relaxed">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

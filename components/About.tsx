import { about, role } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const journeyCopy: Record<string, string> = {
  "SAC-ISRO":
    "I started with satellite data operations at ISRO, working with Linux, mission-critical systems and large data sets.",
  CricHeroes:
    "I built the Data and AI function from scratch, from ML at consumer scale to GenAI evaluation, roadmap and team ownership.",
  Supertails:
    "I worked across retention, replenishment, customer intelligence and cross-channel decision systems.",
  [role]:
    "Now I work independently with founder-led companies that need senior Data and AI ownership before a full-time hire makes sense.",
};

export function About() {
  const milestones = about.journey.filter(
    (j) => j.title !== "Lericon Informatics"
  );

  return (
    <Reveal id="about" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label="My path" />
        </div>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {milestones.map((m) => (
            <div key={m.title} className="min-w-0">
              <div className="font-mono text-[10.5px] text-accent mb-2">
                {m.years}
              </div>
              <h4 className="font-serif text-[16px] font-semibold text-ink leading-tight text-balance">
                {m.title}
              </h4>
              <div className="text-[11px] text-ink-500 mt-0.5 mb-2">
                {m.subtitle}
              </div>
              <p className="text-[13px] text-ink-600 leading-[1.65] max-w-[310px]">
                {journeyCopy[m.title] ?? m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

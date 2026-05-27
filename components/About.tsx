import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <Reveal id="about" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={about.sectionNumber} label={about.sectionLabel} />
        </div>

        <div className="reveal-child">
          <p className="text-[15px] text-ink-700 leading-[1.7]">
            Ten years across data and AI roles. Started in satellite operations at ISRO and analytics consulting. Spent five years at CricHeroes as Senior Data Scientist, where I built their data and AI function from scratch, shipped ML at consumer scale, and led the team. Then a year as EIR at Supertails on retention and decision systems before starting this independent practice.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

import { about } from "@/lib/data";
import { aboutV4 } from "@/lib/commercial-v4";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function clean(value: string) {
  return value
    .replace(/(\d+)\s*[–-]\s*(\d+)/g, "$1 to $2")
    .replace(/([A-Za-z0-9])-([A-Za-z0-9])/g, "$1 $2")
    .replace(/[—–]/g, " ");
}

export function AboutV4() {
  return (
    <Reveal id="about" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={aboutV4.sectionLabel} />
        </div>

        <div className="reveal-child grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-7 md:gap-10 items-start">
          <div>
            <h2 className="font-serif text-[25px] md:text-[30px] font-medium leading-tight text-ink mb-4">
              {aboutV4.heading}
            </h2>
            <p className="text-[14px] text-ink-600 leading-[1.7] mb-5">
              {aboutV4.summary}
            </p>
            <p className="text-[13px] font-medium text-accent">
              {aboutV4.principle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {about.journey.map((milestone) => (
              <div key={`${milestone.years}-${milestone.title}`} className="bg-surface border border-ink-200 rounded-xl p-4">
                <div className="font-mono text-[9.5px] text-accent mb-3">
                  {clean(milestone.years)}
                </div>
                <div className="font-serif text-[15px] font-semibold text-ink leading-tight mb-1">
                  {clean(milestone.title)}
                </div>
                <div className="text-[10.5px] text-ink-500 leading-snug">
                  {clean(milestone.subtitle)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

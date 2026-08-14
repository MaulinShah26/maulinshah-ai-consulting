import { about } from "@/lib/data";
import { aboutV4 } from "@/lib/commercial-v4";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function AboutV4() {
  return (
    <Reveal id="about" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={aboutV4.sectionLabel} />
        </div>

        <div className="reveal-child grid grid-cols-1 md:grid-cols-[0.95fr_1.2fr] gap-7 md:gap-10 items-start">
          <div>
            <h2 className="font-serif text-[25px] md:text-[30px] font-medium leading-tight text-ink mb-5">
              {aboutV4.heading}
            </h2>
            <div className="space-y-4">
              {aboutV4.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[14px] text-ink-600 leading-[1.75]">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-5 border-l-2 border-accent pl-4 text-[13px] font-medium text-ink-700 leading-[1.65]">
              {aboutV4.principle}
            </p>
          </div>

          <div className="border-l border-ink-200 pl-5 md:pl-7 space-y-5">
            {about.journey.map((milestone) => (
              <div key={`${milestone.years}-${milestone.title}`} className="relative">
                <span
                  className="absolute -left-[23px] md:-left-[31px] top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-page"
                  aria-hidden
                />
                <div className="font-mono text-[10px] text-accent mb-1">
                  {milestone.years}
                </div>
                <div className="font-serif text-[16px] font-semibold text-ink leading-tight">
                  {milestone.title}
                </div>
                <div className="text-[11px] text-ink-500 mt-0.5 mb-1.5">
                  {milestone.subtitle}
                </div>
                <p className="text-[12px] text-ink-600 leading-relaxed">{milestone.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

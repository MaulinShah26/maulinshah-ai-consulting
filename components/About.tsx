import { about, role } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const principles = [
  {
    number: "01",
    title: "Start with the business problem",
    body: "Technology follows the decision the business needs to make.",
  },
  {
    number: "02",
    title: "Build what gets used",
    body: "A model or system only matters when teams can act on it.",
  },
  {
    number: "03",
    title: "Transfer ownership",
    body: "The team should be able to run the system without me.",
  },
];

const experienceFocus: Record<string, string> = {
  "SAC-ISRO": "Systems, infrastructure and reliable data operations.",
  "Lericon Informatics": "Analytics and forecasting for business decisions.",
  CricHeroes: "Data products, ML and analytics at consumer scale.",
  Supertails: "Retention, customer intelligence and decision systems.",
  [role]: "Senior Data & AI ownership for growing companies.",
};

export function About() {
  return (
    <>
      <Reveal id="approach" className="px-6 py-6 md:py-8">
        <div className="mx-auto max-w-content">
          <div className="reveal-child">
            <SectionHeader label="How I work" />
          </div>

          <div className="reveal-child grid gap-3 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-ink-200 bg-surface p-6"
              >
                <span className="font-mono text-[9px] tracking-[0.12em] text-accent">
                  {principle.number}
                </span>
                <h2 className="mt-5 font-serif text-[19px] font-semibold leading-[1.15] text-ink">
                  {principle.title}
                </h2>
                <p className="mt-3 max-w-[320px] text-[13px] leading-[1.6] text-ink-600">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal id="about" className="px-6 py-8 md:py-10">
        <div className="mx-auto max-w-content">
          <div className="reveal-child">
            <SectionHeader label="Experience" />
          </div>

          <div className="reveal-child grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {about.journey.map((milestone) => (
              <article
                key={milestone.title}
                className="min-h-[180px] rounded-2xl border border-ink-200 p-5"
              >
                <div className="font-mono text-[9.5px] text-accent">
                  {milestone.years}
                </div>
                <h3 className="mt-5 font-serif text-[16px] font-semibold leading-tight text-ink">
                  {milestone.title}
                </h3>
                <div className="mt-1 text-[10.5px] text-ink-500">
                  {milestone.subtitle}
                </div>
                <p className="mt-4 text-[12px] leading-[1.55] text-ink-600">
                  {experienceFocus[milestone.title] ?? milestone.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}

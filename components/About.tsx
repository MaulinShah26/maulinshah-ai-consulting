import { about, role } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const principles = [
  {
    number: "01",
    title: "Business question before technology",
    body: "I start with the decision the business needs to make. Only then do we decide whether the answer needs better data, a model, automation, AI, or none of them.",
  },
  {
    number: "02",
    title: "Evidence before opinion",
    body: "Strong instincts are useful. I try to make them testable, give teams one version of the facts, and make the reasoning behind a decision visible enough to challenge.",
  },
  {
    number: "03",
    title: "Build capability, not dependency",
    body: "The goal is not to make myself indispensable. I build with the team, make the logic understandable, and hand over systems they can keep running without me.",
  },
];

const journeyCopy: Record<string, string> = {
  "SAC-ISRO":
    "I started close to the infrastructure: Linux, operational systems and data where reliability mattered more than presentation.",
  CricHeroes:
    "I moved into consumer data products and helped build the Data and AI function, learning what changes when millions of people actually use what you ship.",
  Supertails:
    "I worked closer to growth, retention and customer decisions, where models only matter when marketing, product and business teams can act on them.",
  [role]:
    "Now I bring those layers together for growing companies that need senior Data and AI judgement without creating another dependency.",
};

export function About() {
  const milestones = about.journey.filter((journey) => journey.title !== "Lericon Informatics");

  return (
    <>
      <Reveal id="approach" className="px-6 py-6 md:py-10">
        <div className="mx-auto max-w-content">
          <div className="reveal-child">
            <SectionHeader label="How I work with teams" />
          </div>

          <p className="reveal-child max-w-[850px] font-serif text-[25px] font-medium leading-[1.2] tracking-[-0.02em] text-ink md:text-[31px]">
            I am most useful when the question is messy, several teams own a piece of it, and the answer has to work in the business — not just in a notebook.
          </p>

          <div className="reveal-child mt-9 grid border-b border-ink-200 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-t border-ink-200 py-6 md:min-h-[230px] md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="font-mono text-[9px] tracking-[0.12em] text-accent">
                  {principle.number}
                </span>
                <h2 className="mt-5 max-w-[280px] font-serif text-[20px] font-semibold leading-[1.15] text-ink">
                  {principle.title}
                </h2>
                <p className="mt-3 max-w-[330px] text-[13px] leading-[1.7] text-ink-600">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal id="about" className="px-6 py-8 md:py-12">
        <div className="mx-auto max-w-content">
          <div className="reveal-child">
            <SectionHeader label="How I got here" />
          </div>

          <div className="reveal-child grid gap-8 lg:grid-cols-[minmax(240px,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
            <div>
              <p className="max-w-[360px] font-serif text-[22px] font-medium leading-[1.22] tracking-[-0.02em] text-ink">
                My career kept moving one layer closer to the decision.
              </p>
              <p className="mt-4 max-w-[360px] text-[13px] leading-[1.7] text-ink-600">
                Infrastructure taught me reliability. Analytics taught me evidence. Product ML taught me adoption. Growth work taught me that none of it matters unless a team can use it to decide what to do next.
              </p>
            </div>

            <div className="border-b border-ink-200">
              {milestones.map((milestone) => (
                <article
                  key={milestone.title}
                  className="grid gap-2 border-t border-ink-200 py-5 sm:grid-cols-[120px_minmax(180px,0.55fr)_minmax(0,1fr)] sm:gap-5"
                >
                  <div className="font-mono text-[10px] text-accent">
                    {milestone.years}
                  </div>
                  <div>
                    <h3 className="font-serif text-[16px] font-semibold leading-tight text-ink">
                      {milestone.title}
                    </h3>
                    <div className="mt-1 text-[10.5px] text-ink-500">
                      {milestone.subtitle}
                    </div>
                  </div>
                  <p className="max-w-[520px] text-[12.5px] leading-[1.65] text-ink-600">
                    {journeyCopy[milestone.title] ?? milestone.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

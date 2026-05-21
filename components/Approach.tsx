import * as Icons from "lucide-react";
import { approach } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type IconName = keyof typeof Icons;

function PhaseIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>>)[name];
  if (!Component) return null;
  return <Component size={16} aria-hidden />;
}

export function Approach() {
  return (
    <Reveal id="approach" className="py-10 px-6 border-b border-ink-200/70">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={approach.sectionNumber} label={approach.sectionLabel} />
        </div>
        <h2 className="reveal-child text-[19px] font-medium text-ink mb-4">{approach.heading}</h2>
        {approach.intro.map((p, i) => (
          <p
            key={i}
            className="reveal-child text-[14.5px] text-ink-600 leading-[1.75] mb-4 max-w-prose"
          >
            {p}
          </p>
        ))}

        <div className="reveal-child relative pt-4 mt-6">
          {/* Vertical rail */}
          <div
            className="absolute left-4 top-9 bottom-6 w-px bg-ink-200"
            aria-hidden="true"
          />
          {approach.phases.map((phase, i) => (
            <div key={i} className="relative flex gap-5 pb-7 last:pb-0">
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-accent-soft text-accent flex items-center justify-center border-2 border-page">
                <PhaseIcon name={phase.icon} />
              </div>
              <div className="pt-0.5">
                <p className="font-mono text-[10.5px] tracking-[0.04em] text-accent uppercase font-medium mb-1.5">
                  {phase.when}
                </p>
                <p className="text-[14.5px] font-medium text-ink mb-1.5">{phase.title}</p>
                <p className="text-[13.5px] text-ink-600 leading-[1.7] max-w-[540px]">
                  {phase.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

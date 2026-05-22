import * as Icons from "lucide-react";
import { Languages } from "lucide-react";
import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function MetricIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>>)[name];
  if (!Component) return null;
  return <Component size={18} aria-hidden />;
}

export function About() {
  return (
    <Reveal id="about" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={about.sectionNumber} label={about.sectionLabel} />
        </div>
        <h2 className="reveal-child text-[19px] font-medium text-ink mb-4">{about.heading}</h2>

        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="reveal-child text-[14px] text-ink-600 leading-[1.75] mb-4"
          >
            {p}
          </p>
        ))}

        <hr className="border-ink-200 my-6" />

        <div className="reveal-child grid grid-cols-1 sm:grid-cols-3 gap-3">
          {about.metrics.map((m, i) => (
            <div
              key={i}
              className="bg-ink-50 rounded-md px-4 py-3.5 flex gap-3 items-start"
            >
              <span className="w-8 h-8 rounded-md bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                <MetricIcon name={m.icon} />
              </span>
              <div>
                <span className="block text-[18px] font-medium text-ink leading-tight">
                  {m.value}
                </span>
                <span className="block text-[12px] text-ink-500 leading-snug mt-1">
                  {m.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="reveal-child mt-8 mb-2 border-l-2 border-accent pl-4 py-1 italic text-[16px] text-ink leading-[1.55]">
          {`\u201C${about.quote}\u201D`}
        </blockquote>

        <hr className="border-ink-200 my-6" />

        <div className="reveal-child">
          <h3 className="text-[14px] font-medium text-ink mb-1.5 flex items-center gap-1.5">
            <Languages size={14} className="text-accent" aria-hidden />
            {about.languagesLabel}
          </h3>
          <p className="text-[14px] text-ink-600 leading-[1.75]">{about.languages}</p>
        </div>
      </div>
    </Reveal>
  );
}

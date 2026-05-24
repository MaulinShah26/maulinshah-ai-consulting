import * as Icons from "lucide-react";
import { Languages } from "lucide-react";
import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function MetricIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<
    string,
    React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>
  >)[name];
  if (!Component) return null;
  return <Component size={18} aria-hidden />;
}

type JourneyEntry = {
  years: string;
  title: string;
  subtitle: string;
  tags: string[];
};

// Single tag pill: monospace font, light cream background, subtle border,
// natural width (doesn't stretch), white-space nowrap so each tag stays on its line.
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-surface text-ink-700 font-mono text-[9.5px] font-medium px-2 py-0.5 rounded border-[0.5px] border-ink-200 leading-[1.3] whitespace-nowrap">
      {children}
    </span>
  );
}

function JourneyCard({ entry }: { entry: JourneyEntry }) {
  return (
    <div className="text-center px-1">
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1.5 font-medium">
        {entry.years}
      </div>
      <div className="font-serif text-[14px] font-medium text-ink leading-tight mb-1">
        {entry.title}
      </div>
      <div className="text-[11px] text-ink-500 mb-2.5 leading-tight">
        {entry.subtitle}
      </div>
      {/* Tags stacked vertically (1 per row), centered as a group */}
      <div className="flex flex-col gap-1 items-center">
        {entry.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const isLastEntry = (i: number) => i === about.journey.length - 1;

  return (
    <Reveal id="about" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={about.sectionNumber} label={about.sectionLabel} />
        </div>

        {/* DESKTOP: horizontal alternating journey timeline */}
        <div className="reveal-child hidden md:block py-6">
          {/* Top cards row (indices 0, 2, 4 — bottom-aligned, close to rail) */}
          <div className="grid grid-cols-5 gap-3 items-end mb-4">
            {about.journey.map((entry, i) => (
              <div key={`top-${i}`}>
                {i % 2 === 0 ? <JourneyCard entry={entry} /> : null}
              </div>
            ))}
          </div>

          {/* Rail with markers */}
          <div className="relative h-3">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-ink-300" />
            <div className="relative grid grid-cols-5 gap-3 h-full">
              {about.journey.map((entry, i) => (
                <div key={`marker-${i}`} className="flex justify-center items-center">
                  <div
                    className={`w-3 h-3 rounded-full relative z-10 ${
                      isLastEntry(i)
                        ? "bg-page border-2 border-accent"
                        : "bg-accent"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom cards row (indices 1, 3 — top-aligned, close to rail) */}
          <div className="grid grid-cols-5 gap-3 items-start mt-4">
            {about.journey.map((entry, i) => (
              <div key={`bot-${i}`}>
                {i % 2 === 1 ? <JourneyCard entry={entry} /> : null}
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE: vertical stacked journey timeline */}
        <div className="reveal-child md:hidden relative pl-7">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-300" />
          {about.journey.map((entry, i) => (
            <div key={`m-${i}`} className="relative pb-6 last:pb-0">
              <div
                className={`absolute -left-[22px] top-1 w-3 h-3 rounded-full z-10 ${
                  isLastEntry(i)
                    ? "bg-page border-2 border-accent"
                    : "bg-accent"
                }`}
                aria-hidden="true"
              />
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1 font-medium">
                {entry.years}
              </div>
              <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-1">
                {entry.title}
              </div>
              <div className="text-[11.5px] text-ink-500 mb-2.5 leading-tight">
                {entry.subtitle}
              </div>
              <div className="flex flex-col gap-1 items-start">
                {entry.tags.map((tag, j) => (
                  <Tag key={j}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-ink-200 my-6" />

        {/* Quote */}
        <blockquote className="reveal-child mt-8 mb-2 border-l-2 border-accent pl-4 py-1 italic text-[16px] text-ink leading-[1.55]">
          {`\u201C${about.quote}\u201D`}
        </blockquote>

        <hr className="border-ink-200 my-6" />

        {/* Working languages */}
        <div className="reveal-child">
          <h3 className="text-[14px] font-medium text-ink mb-1.5 flex items-center gap-1.5">
            <Languages size={14} className="text-accent" aria-hidden />
            {about.languagesLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
        {about.languages.map((lang) => (
          <span
            key={lang}
            className="inline-block bg-surface text-ink-700 font-mono text-[11px] font-medium px-3 py-1.5 rounded border-[0.5px] border-ink-200"
          >
            {lang}
          </span>
        ))}
      </div>
        </div>
      </div>
    </Reveal>
  );
}

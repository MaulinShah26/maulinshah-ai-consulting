import * as Icons from "lucide-react";
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
  body: string;
};

function JourneyCard({
  entry,
  featured = false,
}: {
  entry: JourneyEntry;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "bg-white border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-lg p-5"
          : "bg-white border-[0.5px] border-ink-200 rounded-lg p-4"
      }
    >
      <div className="font-mono text-[10.5px] uppercase tracking-wider text-accent mb-1.5 font-medium">
        {entry.years}
      </div>
      <div
        className={
          featured
            ? "font-serif text-[16px] font-medium text-ink leading-tight mb-0.5"
            : "font-serif text-[15px] font-medium text-ink leading-tight mb-0.5"
        }
      >
        {entry.title}
      </div>
      <div className="text-[11.5px] text-ink-500 mb-2.5 leading-tight">
        {entry.subtitle}
      </div>
      <p
        className={
          featured
            ? "text-[13px] text-ink leading-[1.6]"
            : "text-[12.5px] text-ink-600 leading-[1.55]"
        }
      >
        {entry.body}
      </p>
    </div>
  );
}

export function About() {
  const priorRoles = about.journey.slice(0, 4) as JourneyEntry[];
  const featuredRole = about.journey[about.journey.length - 1] as
    | JourneyEntry
    | undefined;

  return (
    <Reveal id="about" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={about.sectionNumber} label={about.sectionLabel} />
        </div>

        <div className="reveal-child py-6">
          {/* 2x2 grid for the four prior roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {priorRoles.map((entry, i) => (
              <JourneyCard key={i} entry={entry} />
            ))}
          </div>

          {/* Featured Fractional AI Lead card */}
          {featuredRole && <JourneyCard entry={featuredRole} featured />}
        </div>
      </div>
    </Reveal>
  );
}

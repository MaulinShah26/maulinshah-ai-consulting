import * as Icons from "lucide-react";
import { outcomes } from "@/lib/data";
import { inlineEm } from "@/lib/inlineEm";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function OutcomeIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>>)[name];
  if (!Component) return null;
  return <Component size={14} aria-hidden />;
}

export function Outcomes() {
  return (
    <Reveal className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={outcomes.sectionNumber} label={outcomes.sectionLabel} />
        </div>
        <div className="reveal-child mt-4">
          {outcomes.rows.map((row, i) => (
            <div
              key={i}
              className="flex gap-4 items-start py-3.5 border-b border-ink-200 last:border-b-0"
            >
              <span className="w-[28px] h-[28px] rounded-full bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <OutcomeIcon name={row.icon} />
              </span>
              <div className="w-[150px] flex-shrink-0 pt-0.5">
                <p className="text-[13px] font-medium text-ink leading-tight">{row.month}</p>
                <p className="text-[11px] text-ink-500 mt-1 leading-snug">{row.label}</p>
              </div>
              <p className="text-[13.5px] text-ink-600 leading-[1.7] flex-1 pt-0.5">
                {inlineEm(row.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

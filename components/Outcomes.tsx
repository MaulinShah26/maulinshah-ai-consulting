import * as Icons from "lucide-react";
import { outcomes } from "@/lib/data";
import { inlineEm } from "@/lib/inlineEm";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function OutcomeIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>>)[name];
  if (!Component) return null;
  return <Component size={12} aria-hidden />;
}

export function Outcomes() {
  // Position percentages for the four milestones along the rail
  const positions = [0, 33.33, 66.66, 100];

  return (
    <Reveal className="py-10 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={outcomes.sectionNumber} label={outcomes.sectionLabel} />
        </div>

        {/* Progression bar */}
        <div className="reveal-child relative mt-3 mb-7 max-w-[580px] py-7">
          {/* Rail line */}
          <div
            className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-0.5 bg-accent"
            aria-hidden="true"
          />
          {/* Milestone nodes */}
          <div className="relative flex items-center justify-between">
            {outcomes.milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ position: "absolute", left: `${positions[i]}%`, transform: "translateX(-50%)", top: "50%", marginTop: "-9px" }}
              >
                <span className="absolute -top-7 text-[11px] font-medium text-ink whitespace-nowrap">
                  {m.month}
                </span>
                <span
                  className={`w-[18px] h-[18px] rounded-full ${
                    i === outcomes.milestones.length - 1
                      ? "bg-page border-2 border-accent"
                      : "bg-accent"
                  }`}
                  aria-hidden="true"
                />
                <span className="absolute top-7 text-[10px] text-ink-500 whitespace-nowrap">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed rows */}
        <div className="reveal-child mt-12 sm:mt-7">
          {outcomes.rows.map((row, i) => (
            <div
              key={i}
              className="flex gap-4 items-start py-3.5 border-b border-ink-200 last:border-b-0"
            >
              <div className="flex items-center gap-2 w-[88px] flex-shrink-0 pt-0.5">
                <span className="w-[22px] h-[22px] rounded-full bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                  <OutcomeIcon name={row.icon} />
                </span>
                <span className="text-[12px] font-medium text-ink">{row.month}</span>
              </div>
              <p className="text-[13.5px] text-ink-600 leading-[1.7] flex-1">
                {inlineEm(row.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

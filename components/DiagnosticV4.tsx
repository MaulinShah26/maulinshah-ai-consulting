import {
  BarChart3,
  RefreshCcw,
  Bot,
  MousePointerClick,
  Timer,
  UserRoundCheck,
} from "lucide-react";
import { diagnosticV4 } from "@/lib/commercial-v4";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [
  BarChart3,
  RefreshCcw,
  Bot,
  MousePointerClick,
  Timer,
  UserRoundCheck,
];

export function DiagnosticV4() {
  return (
    <Reveal id="problems" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={diagnosticV4.sectionLabel} />
        </div>

        <h2 className="reveal-child font-serif text-[24px] md:text-[28px] font-medium leading-tight text-ink mb-5">
          {diagnosticV4.heading}
        </h2>

        <div className="reveal-child grid grid-cols-2 md:grid-cols-3 gap-3">
          {diagnosticV4.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item}
                className="min-h-[112px] bg-surface border border-ink-200 rounded-xl p-4 flex flex-col justify-between"
              >
                <Icon size={17} className="text-accent" aria-hidden />
                <div className="font-serif text-[16px] md:text-[17px] font-semibold leading-snug text-ink mt-5">
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

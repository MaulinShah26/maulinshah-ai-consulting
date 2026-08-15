import { ArrowRight } from "lucide-react";
import { operatingModelV4 } from "@/lib/commercial-v4";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function OperatingModelV4() {
  return (
    <Reveal id="operating-model" className="py-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={operatingModelV4.sectionLabel} />
        </div>

        <div className="reveal-child grid grid-cols-2 lg:grid-cols-4 gap-3">
          {operatingModelV4.steps.map((step, index) => (
            <div
              key={step.n}
              className="relative bg-surface border border-ink-200 rounded-xl p-4 min-h-[122px]"
            >
              <div className="font-mono text-[9.5px] text-accent mb-4">{step.n}</div>
              <div className="font-serif text-[18px] font-semibold text-ink mb-1">
                {step.title}
              </div>
              <div className="text-[11.5px] text-ink-500">{step.short}</div>
              {index < operatingModelV4.steps.length - 1 && (
                <ArrowRight
                  size={14}
                  className="hidden lg:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-accent z-10"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

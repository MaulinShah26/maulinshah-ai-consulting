import { diagnostic } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Diagnostic() {
  return (
    <Reveal id="problems" className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={diagnostic.sectionLabel} />
        </div>
        <p className="reveal-child text-base text-ink-600 leading-relaxed mb-5">
          {diagnostic.lede}
        </p>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-2 gap-3">
          {diagnostic.cards.map((c, i) => (
            <div
              key={i}
              className="rounded-[10px] border border-ink-200 bg-surface p-[18px]"
            >
              <p className="text-[15px] font-medium text-ink leading-snug mb-3">
                {c.q}
              </p>
              <div className="pt-3 border-t border-dashed border-ink-300">
                <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-accent mb-1">
                  {c.label}
                </span>
                <p className="text-[12.5px] text-ink-500 leading-relaxed">
                  {c.implication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

import { problems } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Problems() {
  return (
    <Reveal id="problems" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={problems.sectionLabel} />
        </div>
        <p className="reveal-child text-base text-ink-600 leading-relaxed mb-5">
          {problems.lede}
        </p>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-2 gap-3">
          {problems.cards.map((card, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 rounded-[10px] border p-4 ${
                card.bridge
                  ? "border-accent-soft bg-accent-soft/30"
                  : "border-ink-200 bg-surface"
              }`}
            >
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <p className="text-[13.5px] leading-[1.55] text-ink-700">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

import { TrackedLink } from "./TrackedLink";
import { proof } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function ProofTriptych() {
  return (
    <Reveal id="work" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={proof.sectionLabel} />
        </div>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-3 gap-3">
          {proof.cards.map((c, i) => (
            <TrackedLink
              key={i}
              href={c.href}
              event="case_study_click"
              params={{ slug: c.href, from: "home" }}
              className="block bg-surface border border-ink-200 rounded-xl p-5 hover:border-accent/40 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-wide text-accent mb-1.5">
                {c.tag}
              </div>
              <h4 className="font-serif text-[16px] font-semibold text-ink leading-tight mb-3">
                {c.title}
              </h4>
              {(
                [
                  ["Problem", c.problem],
                  ["System", c.system],
                  ["Outcome", c.outcome],
                ] as const
              ).map(([l, t]) => (
                <div key={l} className="mb-2.5 last:mb-0">
                  <span className="block font-mono text-[9px] uppercase tracking-wide text-ink-400 mb-0.5">
                    {l}
                  </span>
                  <span className="block text-[12.5px] text-ink-700 leading-snug">
                    {t}
                  </span>
                </div>
              ))}
            </TrackedLink>
          ))}
        </div>
        <div className="reveal-child mt-4">
          <TrackedLink
            href="/work"
            event="view_all_work_click"
            className="font-mono text-[11px] uppercase tracking-wide text-accent"
          >
            See all work &rarr;
          </TrackedLink>
        </div>
      </div>
    </Reveal>
  );
}

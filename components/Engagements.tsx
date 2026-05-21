import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { engagements } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function EngagementIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<
    string,
    React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>
  >)[name];
  if (!Component) return null;
  return <Component size={18} className="text-accent" aria-hidden />;
}

export function Engagements() {
  return (
    <Reveal id="engagements" className="py-6 px-6">
      <div className="max-w-wide mx-auto">
        <div className="reveal-child">
          <SectionHeader
            number={engagements.sectionNumber}
            label={engagements.sectionLabel}
          />
        </div>
        <h2 className="reveal-child font-serif text-[20px] font-medium text-ink mb-4">
          {engagements.heading}
        </h2>
        <p className="reveal-child text-[14px] text-ink-600 leading-[1.75] mb-7 max-w-prose">
          {engagements.intro}
        </p>

        {/* 3-column grid at desktop, single column on mobile */}
        <div className="reveal-child grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
          {engagements.cards.map((card, i) => (
            <div
              key={i}
              className="border border-ink-200 rounded-md p-5 flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-ink-200">
                <EngagementIcon name={card.icon} />
                <h3 className="font-serif text-[16px] font-medium text-ink">
                  {card.title}
                </h3>
              </div>

              <div className="mb-4">
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1.5">
                  Best for
                </div>
                <p className="text-[13px] text-ink-700 leading-[1.7]">
                  {card.bestFor}
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1.5">
                  What it covers
                </div>
                <p className="text-[13px] text-ink-700 leading-[1.7]">
                  {card.whatItCovers}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-child max-w-prose">
          <p className="text-[13.5px] text-ink-600 leading-[1.7] mb-4">
            {engagements.closingLine}
          </p>
          <a
            href={engagements.ctaHref}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-ink transition-colors"
          >
            {engagements.ctaLabel}
            <ArrowRight size={13} aria-hidden />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

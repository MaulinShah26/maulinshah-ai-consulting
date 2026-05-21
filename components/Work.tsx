import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { work } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function WorkIcon({ name }: { name: string }) {
  const Component = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>>)[name];
  if (!Component) return null;
  return <Component size={16} aria-hidden />;
}

const pillVariants: Record<string, string> = {
  blue: "bg-pill-blue-bg text-pill-blue-fg",
  teal: "bg-pill-teal-bg text-pill-teal-fg",
  purple: "bg-pill-purple-bg text-pill-purple-fg",
  default: "bg-ink-100 text-ink-600",
};

export function Work() {
  return (
    <Reveal id="work" className="py-14 px-6 border-b border-ink-200/70">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={work.sectionNumber} label={work.sectionLabel} />
        </div>
        <h2 className="reveal-child text-[19px] font-medium text-ink mb-4">{work.heading}</h2>
        <p className="reveal-child text-[14px] text-ink-600 leading-[1.75] mb-6 max-w-prose">
          {work.intro}
        </p>

        <div className="reveal-child grid grid-cols-1 sm:grid-cols-2 gap-3">
          {work.cards.map((card, i) => {
            const cardInner = (
              <>
                <div className="w-8 h-8 rounded-md bg-ink-100 text-ink flex items-center justify-center mb-3">
                  <WorkIcon name={card.icon} />
                </div>
                <h3 className="text-[15px] font-medium text-ink mb-1.5">{card.title}</h3>
                <p className="text-[13px] text-ink-600 leading-[1.7] mb-2.5">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {card.tags.map((tag, j) => {
                    const variant = "variant" in tag ? tag.variant : "default";
                    return (
                      <span
                        key={j}
                        className={`inline-block text-[11px] px-2.5 py-0.5 rounded-md ${pillVariants[variant ?? "default"]}`}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-ink-400">{card.status}</span>
                  {card.href && card.cta && (
                    <span className="text-accent inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      {card.cta}
                      <ArrowRight size={12} aria-hidden />
                    </span>
                  )}
                </div>
              </>
            );

            return card.href ? (
              <a
                key={i}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-ink-200 rounded-lg p-5 hover:border-ink-400 transition-colors"
              >
                {cardInner}
              </a>
            ) : (
              <div
                key={i}
                className="bg-white border border-ink-200 rounded-lg p-5"
              >
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

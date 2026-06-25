import { faq } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  return (
    <Reveal id="faq" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={faq.sectionLabel} />
        </div>
        <h2 className="reveal-child font-serif text-[22px] font-medium tracking-tight text-ink mb-5">
          {faq.heading}
        </h2>
        <div className="reveal-child grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className="rounded-[10px] border border-ink-200 bg-surface px-[18px] py-4"
            >
              <span className="block font-mono text-[10.5px] font-medium tracking-[0.08em] uppercase text-accent mb-2.5">
                Q
              </span>
              <h3 className="text-[14.5px] font-medium text-ink mb-2 leading-snug">
                {item.question}
              </h3>
              <p className="text-[13px] text-ink-600 leading-[1.65]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

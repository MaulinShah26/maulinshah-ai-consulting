import { faq } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const shortAnswers: Record<string, string> = {
  "When should we work together?":
    "When important data or AI decisions need clearer ownership.",
  "What if our data is a mess?":
    "We first identify what can be trusted, what needs fixing, and what can wait.",
  "Do you only advise, or do you build?":
    "I can diagnose, design and build. The engagement depends on what you need.",
  "How is this different from hiring a data scientist?":
    "I own priorities, tradeoffs and outcomes across the function, not only execution.",
  "Do you only work with consumer startups?":
    "Consumer businesses are my strongest fit, but the same decision problems exist in other growth businesses.",
  "What happens after the first call?":
    "We decide whether the next step is an audit, a build, ongoing ownership, or no engagement.",
};

export function FAQ() {
  return (
    <Reveal id="faq" className="px-6 py-8 md:py-10">
      <div className="mx-auto max-w-content">
        <div className="reveal-child">
          <SectionHeader label={faq.sectionLabel} />
        </div>

        <div className="reveal-child grid gap-3 md:grid-cols-2">
          {faq.items.map((item, index) => (
            <article
              key={item.question}
              className="rounded-2xl border border-ink-200 bg-surface p-5 md:p-6"
            >
              <div className="font-mono text-[9px] tracking-[0.12em] text-accent">
                0{index + 1}
              </div>
              <h2 className="mt-4 font-serif text-[18px] font-semibold leading-[1.2] text-ink md:text-[19px]">
                {item.question}
              </h2>
              <p className="mt-3 max-w-[620px] text-[13px] leading-[1.6] text-ink-600">
                {shortAnswers[item.question] ?? item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

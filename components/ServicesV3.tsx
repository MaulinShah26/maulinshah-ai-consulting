"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const situationByTitle: Record<string, string> = {
  "Data & AI Opportunity Audit": "I’m not sure what to fix, build or automate first.",
  "Decision System Build": "We know the problem. We need someone senior to own the build.",
  "Fractional Head of Data & AI": "We need senior Data & AI ownership, but a full-time hire does not make sense yet.",
};

const priority = (title: string) => {
  if (title.includes("Opportunity Audit")) return 0;
  if (title.includes("Decision System Build")) return 1;
  return 2;
};

export function ServicesV3() {
  const cards = [...services.cards].sort((a, b) => priority(a.title) - priority(b.title));

  return (
    <Reveal id="services" className="px-6 py-6 md:py-8">
      <div className="mx-auto max-w-content">
        <div className="reveal-child">
          <SectionHeader label="Choose based on where you are" />
        </div>

        <div className="reveal-child border-b border-ink-200">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="grid gap-5 border-t border-ink-200 py-7 md:grid-cols-[52px_minmax(250px,0.8fr)_minmax(0,1.2fr)] md:gap-8 md:py-9"
            >
              <div className="font-mono text-[10px] tracking-[0.12em] text-accent">
                0{index + 1}
              </div>

              <div className="min-w-0">
                <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-400">
                  If you’re thinking
                </div>
                <p className="max-w-[390px] font-serif text-[22px] font-medium leading-[1.18] tracking-[-0.02em] text-ink md:text-[25px]">
                  “{situationByTitle[card.title] ?? card.bestFor}”
                </p>
              </div>

              <div className="min-w-0 md:pt-0.5">
                <h2 className="font-serif text-[20px] font-semibold leading-tight text-ink md:text-[22px]">
                  {card.title}
                </h2>
                <p className="mt-2 max-w-[650px] text-[14px] leading-relaxed text-ink-600">
                  {card.outcome}
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-400">
                      Typical shape
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-ink-600">
                      {card.commitment}
                    </p>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-400">
                      You leave with
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-ink-600">
                      {card.walkAway}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <Link
                    href={card.pageHref}
                    onClick={() => track("service_details_click", { service: card.title })}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-accent transition-colors hover:text-ink"
                  >
                    See full details
                    <ArrowUpRight size={13} aria-hidden />
                  </Link>
                  <a
                    href={card.href}
                    onClick={() => track("service_discuss_click", { service: card.title })}
                    className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500 transition-colors hover:text-ink"
                  >
                    Discuss this
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal-child mt-5 max-w-[760px] text-[12.5px] leading-relaxed text-ink-500">
          Not sure which one fits? That is normal. The first call is for figuring that out, not forcing you into an engagement.
        </p>
      </div>
    </Reveal>
  );
}

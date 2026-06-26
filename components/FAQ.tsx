"use client";

import { useState } from "react";
import { faq } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Reveal id="faq" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={faq.sectionLabel} />
        </div>
        <h2 className="reveal-child font-serif text-[22px] font-medium tracking-tight text-ink mb-5">
          {faq.heading}
        </h2>
        <div className="reveal-child border-t border-ink-200">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-ink-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[15px] font-medium text-ink leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-accent text-xl leading-none transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13.5px] text-ink-600 leading-relaxed pb-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

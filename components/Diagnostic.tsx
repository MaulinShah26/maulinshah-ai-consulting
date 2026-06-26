"use client";

import { useState } from "react";
import { diagnostic } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Diagnostic() {
  const [open, setOpen] = useState<number | null>(null);

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
          {diagnostic.cards.map((c, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group text-left rounded-[10px] border border-ink-200 bg-surface p-[18px] hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[15px] font-medium text-ink leading-snug">
                    {c.q}
                  </p>
                  <span
                    className={`shrink-0 mt-0.5 text-accent text-lg leading-none transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "group-hover:rotate-45"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-3 pt-3 border-t border-dashed border-ink-300">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-accent mb-1">
                        {c.label}
                      </span>
                      <p className="text-[12.5px] text-ink-500 leading-relaxed">
                        {c.implication}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

"use client";
import { track } from "@/lib/analytics";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ServicesV3() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Reveal id="services" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-start">
          {services.cards.map((c, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="flex flex-col bg-surface border border-ink-200 rounded-xl p-5 min-w-0"
              >
                <h2 className="font-serif text-[18px] font-semibold text-ink leading-tight mb-2">
                  {c.title}
                </h2>
                <p className="text-[12.5px] text-ink-500 leading-relaxed mb-3">
                  {c.bestFor}
                </p>
                <p className="text-[13.5px] text-ink-700 leading-relaxed mb-4">
                  {c.outcome}
                </p>

                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-ink-200 pt-4 space-y-3">
                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-wide text-ink-400 mb-1">
                          Commitment
                        </span>
                        <span className="block text-[12px] text-ink-600 leading-relaxed">
                          {c.commitment}
                        </span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-wide text-ink-400 mb-1">
                          What this is
                        </span>
                        <span className="block text-[12px] text-ink-600 leading-relaxed">
                          {c.whatThisIs}
                        </span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-wide text-ink-400 mb-1">
                          What you leave with
                        </span>
                        <span className="block text-[12px] text-ink-600 leading-relaxed">
                          {c.walkAway}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {!isOpen && (
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(i);
                        track("service_expand", { service: c.title });
                      }}
                      aria-expanded={isOpen}
                      className="font-mono text-[10.5px] uppercase tracking-wide text-accent"
                    >
                      What&apos;s included
                    </button>
                  )}
                  {isOpen && (
                    <>
                      <Link
                        href={c.pageHref}
                        onClick={() => track("service_details_click", { service: c.title })}
                        className="font-mono text-[10.5px] uppercase tracking-wide text-accent"
                      >
                        Full details
                      </Link>
                      <a
                        href={c.href}
                        onClick={() => track("service_discuss_click", { service: c.title })}
                        className="font-mono text-[10.5px] uppercase tracking-wide text-accent hover:text-ink transition-colors"
                      >
                        Talk to me
                      </a>
                      <button
                        type="button"
                        onClick={() => setOpen(null)}
                        aria-expanded={isOpen}
                        className="font-mono text-[10.5px] uppercase tracking-wide text-ink-400 hover:text-ink transition-colors"
                      >
                        Show less
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

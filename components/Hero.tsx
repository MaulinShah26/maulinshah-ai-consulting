"use client";

import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Hero() {
  return (
    <Reveal id="top" className="pt-14 pb-10 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={hero.eyebrow} />
        </div>
        <h1 className="reveal-child font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.18] tracking-tight text-ink max-w-[640px] mb-5">
          {hero.headlinePrefix}{" "}
          <span className="italic text-accent">{hero.headlineQuote}</span>
        </h1>
        <p className="reveal-child text-base text-ink-600 leading-relaxed max-w-prose mb-7">
          {hero.subhead}
        </p>
        <div className="reveal-child flex flex-wrap gap-2">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-ink text-page rounded-md text-[13px] font-medium hover:bg-ink-800 transition-colors"
          >
            {hero.primaryCta.label}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-ink-300 text-ink rounded-md text-[13px] font-medium hover:border-ink-500 hover:bg-ink-50 transition-colors"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

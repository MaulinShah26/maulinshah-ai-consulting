"use client";

import { hero } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <Reveal id="top" className="pt-8 pb-5 px-6">
      <div className="max-w-content mx-auto">
        <h1 className="reveal-child font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.15] tracking-tight text-ink mb-5">
          {hero.headlinePrefix}{" "}
          <span className="italic text-accent accent-mark">
            {hero.headlineQuote}
          </span>
        </h1>
        <p className="reveal-child text-base text-ink-600 leading-relaxed">
          {hero.subhead}
        </p>
      </div>
    </Reveal>
  );
}

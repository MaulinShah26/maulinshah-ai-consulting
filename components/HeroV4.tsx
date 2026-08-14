"use client";

import { Calendar, ArrowDownRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { social } from "@/lib/data";
import { positioningV4 } from "@/lib/commercial-v4";
import { Reveal } from "./Reveal";

export function HeroV4() {
  return (
    <Reveal id="top" className="pt-8 pb-5 px-6">
      <div className="max-w-content mx-auto">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent mb-4">
          {positioningV4.eyebrow}
        </div>

        <h1 className="reveal-child max-w-[850px] font-serif text-4xl sm:text-5xl md:text-[56px] font-medium leading-[1.05] tracking-tight text-ink mb-5">
          {positioningV4.headline}
        </h1>

        <p className="reveal-child max-w-[760px] text-[16px] md:text-[17px] text-ink-600 leading-[1.6] mb-3">
          {positioningV4.subhead}
        </p>

        <p className="reveal-child text-[13.5px] font-medium text-ink-800 mb-6">
          {positioningV4.operatorLine}
        </p>

        <div className="reveal-child flex flex-wrap items-center gap-2">
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("hero_fit_call_click", { version: "commercial_v4" })}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-ink text-page rounded-md text-[13px] font-medium hover:bg-ink-800 transition-colors"
          >
            <Calendar size={14} aria-hidden />
            {positioningV4.primaryCta}
          </a>
          <a
            href="#work"
            onClick={() => track("hero_proof_click", { version: "commercial_v4" })}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-ink-300 text-ink rounded-md text-[13px] font-medium hover:border-ink-500 hover:bg-ink-50 transition-colors"
          >
            {positioningV4.secondaryCta}
            <ArrowDownRight size={14} aria-hidden />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

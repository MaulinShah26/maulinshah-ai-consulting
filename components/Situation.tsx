"use client";

import { situation } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Situation() {
  return (
    <Reveal id="situation" className="py-2 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader
            number={situation.sectionNumber}
            label={situation.sectionLabel}
          />
        </div>

        <p className="reveal-child text-[15px] text-ink-600 leading-[1.55] mb-3">
          {situation.intro}
        </p>

        <div className="reveal-child">
          <Strata />
        </div>

        <div className="reveal-child flex justify-center my-3">
          <span className="font-serif italic text-[15px] text-ink-500 text-center">
            {situation.splitCaption}
          </span>
        </div>

        <div className="reveal-child">
          <ForkStack />
        </div>

        <p className="reveal-child mt-4 font-serif text-[clamp(20px,2.8vw,28px)] leading-[1.42] text-ink font-medium">
          {situation.coreBefore}{" "}
          <span className="italic accent-mark">{situation.coreHighlight}</span>{" "}
          {situation.coreAfter}
        </p>

      </div>
    </Reveal>
  );
}

/* ============================================================
   Strata: surface chips + underneath chips, both always visible.
   ============================================================ */

function Strata() {
  // Both panels always visible; no toggle.
  return (
    <div className="strata rounded-2xl border border-ink-200 overflow-hidden">
      <div className="bg-surface relative z-[2] px-6 py-5 pb-3.5">
        <StratumHead
          title={situation.surface.title}
          subtitle={situation.surface.subtitle}
          tone="surface"
        />
        <ChipRow chips={situation.surface.chips} tone="surface" />
      </div>

      <div className="stratum-depth relative z-[1] px-6 pt-5 pb-5" id="situation-depth">
        <StratumHead
          title={situation.depth.title}
          subtitle={situation.depth.subtitle}
          tone="depth"
        />
        <ChipRow chips={situation.depth.chips} tone="depth" />
      </div>
    </div>
  );
}

function StratumHead({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: "surface" | "depth";
}) {
  return (
    <div className="flex items-baseline gap-2.5 mb-3.5 flex-wrap">
      <span className="font-serif text-[17px] font-semibold text-ink">
        {title}
      </span>
      <span
        className={`font-mono text-[10px] uppercase tracking-[1.1px] ${
          tone === "surface" ? "text-ink-400" : "text-accent"
        }`}
      >
        {subtitle}
      </span>
    </div>
  );
}

function ChipRow({
  chips,
  tone,
}: {
  chips: readonly string[];
  tone: "surface" | "depth";
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) =>
        tone === "surface" ? (
          <span
            key={chip}
            className="text-[13px] px-3 py-1.5 rounded-full leading-tight border border-ink-200 bg-surface text-ink-700"
          >
            {chip}
          </span>
        ) : (
          <span
            key={chip}
            className="text-[13px] px-3 py-1.5 rounded-full leading-tight border border-accent-soft bg-page text-accent font-medium"
          >
            {chip}
          </span>
        )
      )}
    </div>
  );
}


function ForkStack() {
  return (
    <div className="fork-stack">
      <div className="border-[1.5px] border-dashed border-ink-300 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-500" aria-hidden="true">
            <polyline points="2 12 6 12 9 5 13 19 16 12 22 12" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-ink-500">
            {situation.outcomes.missed.badge}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {situation.outcomes.missed.chips.map((c) => (
            <span key={c} className="text-[13px] px-3 py-1.5 rounded-full leading-tight border border-dashed border-ink-300 text-ink-400">
              {c}
            </span>
          ))}
        </div>
        <p className="font-serif text-[14.5px] leading-snug font-medium text-ink-500 mt-3 pt-3 border-t border-ink-200">
          {situation.outcomes.missed.punch}
        </p>
      </div>
      <div className="border-[1.5px] border-accent-soft bg-surface rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="15 7 21 7 21 13" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-accent">
            {situation.outcomes.solved.badge}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {situation.outcomes.solved.chips.map((c) => (
            <span key={c} className="text-[13px] px-3 py-1.5 rounded-full leading-tight border border-accent-soft bg-page text-ink-700">
              {c}
            </span>
          ))}
        </div>
        <p className="font-serif text-[14.5px] leading-snug font-medium text-ink mt-3 pt-3 border-t border-ink-200">
          {situation.outcomes.solved.punch}
        </p>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { situation } from "@/lib/data";
import { inlineEm } from "@/lib/inlineEm";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Situation() {
  return (
    <Reveal id="situation" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader
            number={situation.sectionNumber}
            label={situation.sectionLabel}
          />
        </div>

        <p className="reveal-child text-[15px] text-ink-600 leading-[1.55] mb-6">
          {situation.intro}
        </p>

        <div className="reveal-child">
          <Strata />
        </div>

        <div className="reveal-child flex justify-center my-5">
          <span className="font-serif italic text-[15px] text-ink-500 text-center">
            {situation.splitCaption}
          </span>
        </div>

        <div className="reveal-child">
          <BeforeAfter />
          <ForkStack />
        </div>

        <p className="reveal-child mt-7 font-serif text-[clamp(20px,2.8vw,28px)] leading-[1.42] text-ink font-medium">
          {situation.coreBefore}{" "}
          <span className="italic accent-mark">{situation.coreHighlight}</span>{" "}
          {situation.coreAfter}
        </p>

        <details className="reveal-child mt-7 border-t border-ink-200 pt-5 group">
          <summary className="cursor-pointer list-none font-mono text-[11px] uppercase tracking-[1.3px] text-ink-500 hover:text-ink inline-flex items-center gap-2">
            Read the full picture
            <ChevronDown
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          {situation.detailParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-[14.5px] text-ink-600 leading-[1.75] mt-3.5"
            >
              {inlineEm(p)}
            </p>
          ))}
        </details>
      </div>
    </Reveal>
  );
}

/* ============================================================
   Strata: visible surface chips + collapsible underneath layer.
   ============================================================ */

function Strata() {
  const reduceMotion = useReducedMotion();
  const [closed, setClosed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const el = containerRef.current;
    if (!el) return;
    let armed = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !armed) {
            armed = true;
            window.setTimeout(() => setClosed(true), 1200);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className={`strata rounded-2xl border border-ink-200 overflow-hidden ${
        closed ? "is-closed" : ""
      }`}
    >
      <div className="bg-surface relative z-[2] px-6 py-5 pb-3.5">
        <StratumHead
          title={situation.surface.title}
          subtitle={situation.surface.subtitle}
          tone="surface"
        />
        <ChipRow chips={situation.surface.chips} tone="surface" />
      </div>

      <button
        type="button"
        onClick={() => setClosed((v) => !v)}
        aria-expanded={!closed}
        aria-controls="situation-depth"
        className="surface-marker w-full flex items-center gap-3 px-6 pb-3 pt-0.5 bg-surface relative z-[2] cursor-pointer border-0"
      >
        <span className="flex-1 h-px bg-ink-200" aria-hidden="true" />
        <span className="strata-pill font-mono text-[9.5px] uppercase tracking-[1.3px] text-accent inline-flex items-center gap-2 whitespace-nowrap pl-3 pr-1.5 py-1 rounded-full bg-surface border border-accent-soft">
          <span>{closed ? "see what\u2019s underneath" : "hide"}</span>
          <span
            className="strata-pill-cap w-[18px] h-[18px] rounded-full bg-accent text-white inline-flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <ChevronDown
              size={11}
              strokeWidth={2.4}
              className="strata-pill-chev transition-transform duration-300"
            />
          </span>
        </span>
        <span className="flex-1 h-px bg-ink-200" aria-hidden="true" />
      </button>

      <div className="strata-collapse" id="situation-depth">
        <div className="overflow-hidden">
          <div className="stratum-depth relative z-[1] px-6 pt-5 pb-5">
            <StratumHead
              title={situation.depth.title}
              subtitle={situation.depth.subtitle}
              tone="depth"
            />
            <ChipRow chips={situation.depth.chips} tone="depth" />
          </div>
        </div>
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

/* ============================================================
   Before/After wipe slider
   ============================================================ */

function BeforeAfter() {
  const reduceMotion = useReducedMotion();
  const baRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setRevealed(true);
      return;
    }
    const el = baRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setRevealed(true), 250);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={baRef}
      className={`ba relative w-full min-h-[340px] rounded-2xl overflow-hidden border border-ink-200 ${
        revealed ? "is-revealed" : ""
      }`}
    >
      {/* SOLVED — left half, blurred until scroll-into-view */}
      <div className="ba-solved px-6 py-7 flex flex-col justify-center items-start gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[1.2px] px-3 py-1.5 rounded-full bg-accent text-white">
          {situation.outcomes.solved.badge}
        </span>
        <div className="flex flex-wrap gap-2">
          {situation.outcomes.solved.chips.map((c) => (
            <span
              key={c}
              className="text-[14px] px-4 py-2 rounded-full leading-tight border border-accent-soft bg-surface/70 text-ink-700"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="font-serif text-[16px] leading-snug font-medium text-ink">
          {situation.outcomes.solved.punch}
        </p>
      </div>

      {/* Static vertical divider */}
      <div className="ba-divider" aria-hidden="true" />

      {/* MISSED — right half, always visible */}
      <div className="ba-missed px-6 py-7 flex flex-col justify-center items-end gap-4 text-right">
        <span className="font-mono text-[11px] uppercase tracking-[1.2px] px-3 py-1.5 rounded-full bg-surface border border-ink-300 text-ink-500">
          {situation.outcomes.missed.badge}
        </span>
        <div className="flex flex-wrap gap-2 justify-end">
          {situation.outcomes.missed.chips.map((c) => (
            <span
              key={c}
              className="text-[14px] px-4 py-2 rounded-full leading-tight border border-dashed border-ink-300 bg-transparent text-ink-400"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="font-serif text-[16px] leading-snug font-medium text-ink-500">
          {situation.outcomes.missed.punch}
        </p>
      </div>
    </div>
  );
}


function ForkStack() {
  return (
    <div className="fork-stack" aria-hidden="true">
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

function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduce;
}

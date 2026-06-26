"use client";

import { useEffect, useRef, useState } from "react";
import { chaosMap } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const TANGLE = [
  "M80,2 C200,30 600,46 400,80",
  "M240,2 C350,48 520,16 400,80",
  "M400,2 C250,42 560,46 400,80",
  "M560,2 C450,30 280,52 400,80",
  "M720,2 C600,48 230,30 400,80",
];

const ORDER = [
  "M400,2 C300,28 160,32 100,62",
  "M400,2 C360,28 320,32 300,62",
  "M400,2 C440,28 480,32 500,62",
  "M400,2 C500,28 640,32 700,62",
];

export function ChaosMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReduce(true);
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setVisible(e.isIntersecting));
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const draw = (i: number) =>
    reduce
      ? undefined
      : {
          strokeDasharray: "1",
          strokeDashoffset: visible ? "0" : "1",
          transition: visible
            ? `stroke-dashoffset 850ms ease-out ${i * 110}ms`
            : "none",
        };

  return (
    <Reveal id="operating-chaos" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader label={chaosMap.sectionLabel} />
        </div>
        <h2 className="reveal-child font-serif text-[22px] font-medium tracking-tight text-ink mb-1.5">
          {chaosMap.heading}
        </h2>
        <p className="reveal-child text-[13.5px] text-ink-500 leading-relaxed mb-5">
          {chaosMap.lede}
        </p>

        <div className="reveal-child" ref={ref}>
          {/* team nodes — hover swaps signal for the typical problem */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {chaosMap.teams.map((t) => (
              <div
                key={t.name}
                className="group text-center bg-surface border border-ink-200 rounded-[9px] px-2.5 py-2.5 hover:border-accent/40 transition-colors"
              >
                <span className="block text-[12.5px] font-medium text-ink leading-tight">
                  {t.name}
                </span>
                <span className="relative block mt-1 min-h-[24px]">
                  <span className="absolute inset-x-0 top-0 font-mono text-[8.5px] uppercase tracking-wide text-ink-400 transition-opacity duration-200 group-hover:opacity-0">
                    {t.signal}
                  </span>
                  <span className="absolute inset-x-0 top-0 text-[9px] leading-tight text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {t.problem}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* tangled signals in */}
          <svg
            viewBox="0 0 800 80"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="block w-full h-[62px]"
          >
            {TANGLE.map((d, i) => (
              <path
                key={i}
                d={d}
                pathLength={1}
                fill="none"
                stroke="#B5C7C0"
                strokeWidth="1.2"
                opacity="0.75"
                style={draw(i)}
              />
            ))}
          </svg>

          <div className="text-center font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500 mb-0.5">
            {chaosMap.chaosLine}
          </div>

          {/* the operating layer */}
          <div className="mx-auto max-w-[430px] text-center bg-accent-soft border-[1.5px] border-accent rounded-xl px-5 py-4 my-0.5">
            <span className="font-serif text-[18px] font-semibold text-ink tracking-tight">
              {chaosMap.core.title}
            </span>
            <span className="block text-[12px] text-ink-600 mt-1">
              {chaosMap.core.sub}
            </span>
          </div>

          {/* ordered outcomes out */}
          <svg
            viewBox="0 0 800 64"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="block w-full h-[54px]"
          >
            {ORDER.map((d, i) => (
              <path
                key={i}
                d={d}
                pathLength={1}
                fill="none"
                stroke="#5B3FBE"
                strokeWidth="1.5"
                opacity="0.85"
                style={draw(i + TANGLE.length)}
              />
            ))}
          </svg>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {chaosMap.outcomes.map((o) => (
              <span
                key={o}
                className="text-center bg-accent/[0.08] border border-accent-soft rounded-full px-3 py-2 font-mono text-[10.5px] font-medium uppercase tracking-wide text-accent"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Experience() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Reveal id="experience" className="pt-2 pb-5 px-6">
      <div className="max-w-content mx-auto">
        <div
          ref={cardRef}
          className="reveal-child bg-surface border border-ink-200 rounded-2xl overflow-hidden"
        >
          {/* Top: label + linked firm logos */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2.5 px-5 py-3 border-b border-ink-200">
            <span className="font-mono text-[10.5px] uppercase tracking-[1.5px] text-ink-400 mr-1">
              {experience.label}
            </span>
            {experience.firms.map((firm, i) => (
              <span key={firm.name} className="flex items-center gap-4">
                <a
                  href={firm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${firm.name}, opens in a new tab`}
                  className="inline-flex items-center gap-2.5 text-ink-700 hover:opacity-85 hover:-translate-y-px transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[3px] rounded-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={firm.logo}
                    alt={firm.name}
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-md object-cover border border-ink-200 flex-shrink-0"
                  />
                  <span className="text-[14.5px] font-medium tracking-[0.2px] whitespace-nowrap">
                    {firm.name}
                  </span>
                </a>
                {i < experience.firms.length - 1 && (
                  <span
                    className="w-1 h-1 rounded-full bg-ink-300"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>

          {/* 4-metric grid (2 on mobile, 4 on md+) */}
          <div className="proof-metrics">
            {experience.metrics.map((m, i) => (
              <div key={i} className="proof-metric">
                <div className="font-serif text-[clamp(25px,3.2vw,33px)] leading-none tracking-tight text-ink font-medium">
                  {m.kind === "arrow" ? (
                    <>
                      {m.from}
                      <span className="text-accent" aria-hidden="true">
                        {"\u2192"}
                      </span>
                      {m.to}
                    </>
                  ) : (
                    <>
                      <CountUp target={m.value} animate={animate} />
                      {m.suffix && (
                        <span className="text-accent">{m.suffix}</span>
                      )}
                    </>
                  )}
                </div>
                <div className="text-[12px] text-ink-500 leading-snug mt-1.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/**
 * Animates from 0 to `target` over ~900ms with a cubic ease-out.
 * Respects prefers-reduced-motion (shows target immediately).
 */
function CountUp({ target, animate }: { target: number; animate: boolean }) {
  const [val, setVal] = useState<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!animate || startedRef.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVal(target);
      return;
    }
    startedRef.current = true;
    const duration = 900;
    const delay = 200;
    let raf: number | undefined;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (startTime === null) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      if (raf !== undefined) cancelAnimationFrame(raf);
    };
  }, [animate, target]);

  return <>{val}</>;
}

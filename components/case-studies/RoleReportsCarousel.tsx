"use client";

import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BAND_BADGE_STYLES: Record<string, string> = {
  amplify: "bg-green-100 text-green-800 border-green-300",
  assist: "bg-blue-100 text-blue-800 border-blue-300",
  commoditize: "bg-orange-100 text-orange-800 border-orange-300",
  transform: "bg-purple-100 text-purple-800 border-purple-300",
  replace: "bg-red-100 text-red-800 border-red-300",
};

type RoleReport = {
  role: string;
  industry: string;
  band: string;
  bandTone: "amplify" | "assist" | "commoditize" | "transform" | "replace";
  overall: number;
  framing: string;
  meaning: string;
  tasks: Array<{
    task: string;
    risk: number;
    tone: "very-high" | "high" | "moderate" | "low";
  }>;
};

const roleReports: RoleReport[] = [
  {
    role: "Accountant",
    industry: "Finance \u00b7 Mid-level corporate",
    band: "Amplify",
    bandTone: "amplify",
    overall: 44,
    framing:
      "AI is taking the easy part of your work. Bookkeeping, reconciliation, and routine reports are being automated. Interpretation, compliance judgment, and advisory work are growing in proportion.",
    meaning: "AI makes you more valuable at what you already do best.",
    tasks: [
      { task: "Bookkeeping & reconciliation", risk: 82, tone: "very-high" },
      { task: "Routine financial reporting", risk: 70, tone: "high" },
      { task: "Tax filing support", risk: 58, tone: "moderate" },
      { task: "Compliance judgment", risk: 32, tone: "low" },
      { task: "Business advisory", risk: 22, tone: "low" },
    ],
  },
  {
    role: "Junior Engineer",
    industry: "Software \u00b7 Mid-IC",
    band: "Assist",
    bandTone: "assist",
    overall: 46,
    framing:
      "AI handles execution. Your judgment in system design is what compounds.",
    meaning: "AI takes over execution; you focus on design and judgment.",
    tasks: [
      { task: "Writing boilerplate code", risk: 78, tone: "very-high" },
      { task: "Routine bug fixing", risk: 62, tone: "high" },
      { task: "Code review", risk: 48, tone: "moderate" },
      { task: "System design", risk: 25, tone: "low" },
      { task: "Architecture decisions", risk: 18, tone: "low" },
    ],
  },
  {
    role: "SEO Writer",
    industry: "Marketing \u00b7 Mid-level",
    band: "Commoditize",
    bandTone: "commoditize",
    overall: 58,
    framing:
      "The work continues. The wage premium collapses. Move into strategy and brand judgment.",
    meaning: "The work continues; the premium for it doesn't.",
    tasks: [
      { task: "Routine content drafting", risk: 78, tone: "very-high" },
      { task: "On-page SEO optimization", risk: 70, tone: "high" },
      { task: "Keyword research", risk: 65, tone: "high" },
      { task: "Content strategy", risk: 45, tone: "moderate" },
      { task: "Brand voice judgment", risk: 30, tone: "low" },
    ],
  },
  {
    role: "Radiologist",
    industry: "Healthcare \u00b7 Senior",
    band: "Transform",
    bandTone: "transform",
    overall: 46,
    framing:
      "Your pattern-matching shifts to AI. Your clinical correlation becomes the role.",
    meaning: "The character of the role is changing shape.",
    tasks: [
      { task: "Pattern detection in scans", risk: 75, tone: "very-high" },
      { task: "Routine image triage", risk: 68, tone: "high" },
      { task: "Multi-modal clinical correlation", risk: 42, tone: "moderate" },
      { task: "Complex case reasoning", risk: 28, tone: "low" },
      { task: "Patient consultation", risk: 18, tone: "low" },
    ],
  },
  {
    role: "Data Entry Specialist",
    industry: "Operations \u00b7 Junior",
    band: "Replace",
    bandTone: "replace",
    overall: 71,
    framing:
      "AI does the work end-to-end. The path forward is exception handling or adjacent skills.",
    meaning: "AI does this work end-to-end; move into supervision or adjacent skills.",
    tasks: [
      { task: "Manual data input", risk: 92, tone: "very-high" },
      { task: "Document scanning & sorting", risk: 88, tone: "very-high" },
      { task: "Routine validation", risk: 80, tone: "very-high" },
      { task: "Exception handling", risk: 55, tone: "moderate" },
      { task: "Quality oversight", risk: 42, tone: "moderate" },
    ],
  },
];

export function RoleReportsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIdx = (idx: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(roleReports.length - 1, idx));
    container.scrollTo({
      left: clamped * container.clientWidth,
      behavior: "smooth",
    });
    setActiveIdx(clamped);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newIdx = Math.round(container.scrollLeft / container.clientWidth);
        setActiveIdx(newIdx);
      }, 80);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const current = roleReports[activeIdx];
  const badgeClasses = BAND_BADGE_STYLES[current.bandTone];

  return (
    <div className="relative">
      {/* Top control bar */}
      <div className="flex items-center justify-between mb-3 gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-500 font-medium">
            Role {activeIdx + 1} of {roleReports.length}
          </span>
          <span
            className={`flex-shrink-0 inline-block font-mono text-[9.5px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border-[0.5px] ${badgeClasses}`}
          >
            {current.band}
          </span>
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => scrollToIdx(activeIdx - 1)}
            disabled={activeIdx === 0}
            aria-label="Previous role"
            className="w-9 h-9 rounded border-[0.5px] border-ink-300 bg-white text-ink-700 hover:bg-ink-50 hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-ink-300 disabled:hover:text-ink-700 transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollToIdx(activeIdx + 1)}
            disabled={activeIdx === roleReports.length - 1}
            aria-label="Next role"
            className="w-9 h-9 rounded border-[0.5px] border-ink-300 bg-white text-ink-700 hover:bg-ink-50 hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-ink-300 disabled:hover:text-ink-700 transition-colors flex items-center justify-center"
          >
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {roleReports.map((r, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0 w-full pr-px"
            >
              <RoleReportCard report={r} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-5">
        {roleReports.map((r, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIdx(i)}
            aria-label={`Go to ${r.role}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIdx ? "w-8 bg-accent" : "w-1.5 bg-ink-300 hover:bg-ink-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function RoleReportCard({ report }: { report: RoleReport }) {
  const badgeClasses = BAND_BADGE_STYLES[report.bandTone];

  return (
    <div className="bg-white border-[0.5px] border-ink-200 rounded-lg overflow-hidden shadow-sm">
      {/* Header strip */}
      <div className="bg-ink-50/40 border-b border-ink-100 px-5 py-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-serif text-[18px] font-medium text-ink leading-tight mb-0.5">
            {report.role}
          </div>
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-ink-500">
            {report.industry}
          </div>
        </div>
        <span
          className={`flex-shrink-0 inline-block font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border-[0.5px] ${badgeClasses}`}
        >
          {report.band}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-5">
        {/* Framing callout */}
        <div className="bg-accent-soft border-[0.5px] border-accent/30 border-l-2 border-l-accent rounded-r p-4">
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
            <Sparkles size={12} aria-hidden />
            The framing
          </div>
          <p className="text-[13.5px] text-ink leading-[1.6] font-serif italic">
            &ldquo;{report.framing}&rdquo;
          </p>
        </div>

        {/* Task breakdown */}
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-3">
            Task breakdown · by AI exposure
          </div>
          <div className="space-y-2">
            {report.tasks.map((t, i) => (
              <TaskRow
                key={i}
                task={t.task}
                risk={t.risk}
                tone={t.tone}
              />
            ))}
          </div>
        </div>

        {/* Overall footer */}
        <div className="bg-ink-50/60 border-[0.5px] border-ink-200 rounded p-4 grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-1">
              Overall AI exposure
            </div>
            <div className="font-serif text-[24px] font-medium text-ink leading-none">
              {report.overall}%
            </div>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-1">
              Outcome band
            </div>
            <span
              className={`inline-block font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border-[0.5px] ${badgeClasses}`}
            >
              {report.band}
            </span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 font-medium mb-1">
              What it means
            </div>
            <p className="text-[12px] text-ink-700 leading-[1.5]">
              {report.meaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskRow({
  task,
  risk,
  tone,
}: {
  task: string;
  risk: number;
  tone: "very-high" | "high" | "moderate" | "low";
}) {
  const toneStyles = {
    "very-high": {
      bar: "bg-red-500",
      text: "text-red-700",
      badge: "bg-red-50 text-red-700 border-red-200",
      label: "Very High",
    },
    high: {
      bar: "bg-orange-500",
      text: "text-orange-700",
      badge: "bg-orange-50 text-orange-700 border-orange-200",
      label: "High",
    },
    moderate: {
      bar: "bg-amber-500",
      text: "text-amber-700",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      label: "Moderate",
    },
    low: {
      bar: "bg-green-500",
      text: "text-green-700",
      badge: "bg-green-50 text-green-700 border-green-200",
      label: "Low",
    },
  };
  const s = toneStyles[tone];

  return (
    <div className="grid grid-cols-12 gap-3 items-center">
      <div className="col-span-5 md:col-span-4 font-serif text-[13px] text-ink font-medium leading-tight">
        {task}
      </div>
      <div className="col-span-4 md:col-span-5">
        <div className="relative h-2 rounded-full bg-ink-100 overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full ${s.bar} rounded-full`}
            style={{ width: `${risk}%` }}
          />
        </div>
      </div>
      <div className={`col-span-1 md:col-span-1 font-mono text-[13px] font-semibold ${s.text} text-right`}>
        {risk}%
      </div>
      <div className="col-span-2 md:col-span-2 text-right">
        <span
          className={`inline-block font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border-[0.5px] ${s.badge}`}
        >
          {s.label}
        </span>
      </div>
    </div>
  );
}

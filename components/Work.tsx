"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Bot,
  Brain,
  Briefcase,
  Layers,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { work } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Bot,
  Brain,
  Briefcase,
  Layers,
};

const TAG_VARIANT_CLASSES: Record<string, string> = {
  blue:
    "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900",
  teal:
    "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-900",
  purple:
    "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900",
};

type CardData = {
  title: string;
  description: string;
  icon: string;
  tags: Array<{ label: string; variant?: string }>;
  status: string;
  cta?: string;
  href?: string;
};

function Card({ card }: { card: CardData }) {
  const Icon = ICONS[card.icon];
  const isInternal = card.href?.startsWith("/");

  const inner = (
    <div className="group border border-ink-200 rounded-md p-5 hover:border-ink-400 transition-colors h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        {Icon && <Icon size={18} className="text-ink-600" aria-hidden />}
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
          {card.status}
        </span>
      </div>
      <h3 className="font-serif text-[17px] font-medium text-ink mb-2 group-hover:text-accent transition-colors">
        {card.title}
      </h3>
      <p className="text-[13px] text-ink-600 leading-[1.65] mb-3 flex-1">
        {card.description}
      </p>
      {card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {card.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-[10px] px-2 py-0.5 rounded-md border ${
                tag.variant
                  ? TAG_VARIANT_CLASSES[tag.variant]
                  : "bg-ink-50 text-ink-600 border-ink-100"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
      {card.cta && card.href && (
        <div className="flex items-center gap-1 text-[12px] font-medium text-ink-700 group-hover:text-accent transition-colors mt-auto">
          {card.cta}
          <ArrowUpRight size={12} aria-hidden />
        </div>
      )}
    </div>
  );

  if (card.href) {
    if (isInternal) {
      return (
        <Link href={card.href} className="block h-full">
          {inner}
        </Link>
      );
    }
    return (
      <a href={card.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return <div className="h-full">{inner}</div>;
}

export function Work() {
  const [activeTab, setActiveTab] = useState<"corporate" | "personal">("corporate");
  const tabKeys: Array<"corporate" | "personal"> = ["corporate", "personal"];

  return (
    <Reveal id="work" className="py-6 px-6">
      <div className="max-w-wide mx-auto">
        <div className="reveal-child">
          <SectionHeader number={work.sectionNumber} label={work.sectionLabel} />
        </div>
        <h2 className="reveal-child font-serif text-[20px] font-medium text-ink mb-4">{work.heading}</h2>
        <p className="reveal-child text-[14px] text-ink-600 leading-[1.75] mb-6 max-w-prose">
          {work.intro}
        </p>

        <div className="reveal-child flex items-center gap-1 mb-6 border-b border-ink-200">
          {tabKeys.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-[13px] font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-accent text-ink"
                  : "border-transparent text-ink-500 hover:text-ink"
              }`}
            >
              {work.tabs[tab].label}
            </button>
          ))}
        </div>

        <div className="reveal-child grid grid-cols-1 md:grid-cols-2 gap-4">
          {work.tabs[activeTab].cards.map((card, i) => (
            <Card key={`${activeTab}-${i}`} card={card} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

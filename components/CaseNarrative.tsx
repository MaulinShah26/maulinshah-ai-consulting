import type { ReactNode } from "react";
import { caseNarratives } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { RevenueLeakFunnel } from "./case-visuals/RevenueLeakFunnel";
import { SignalToActionPipeline } from "./case-visuals/SignalToActionPipeline";
import { PlayerClusterMap } from "./case-visuals/PlayerClusterMap";
import { ReplenishmentCycle } from "./case-visuals/ReplenishmentCycle";
import { AffinityMap } from "./case-visuals/AffinityMap";
import { DecisioningFlywheel } from "./case-visuals/DecisioningFlywheel";

const retentionPipe = [
  { k: "Raw events", v: "Orders, app opens, support" },
  { k: "Features", v: "Recency, frequency, basket" },
  { k: "Score", v: "Daily repurchase probability" },
  { k: "Audience", v: "Who’s about to lapse", act: true },
  { k: "Action", v: "The right nudge, in time", act: true },
  { k: "Outcome", v: "Measured lift vs holdout", act: true },
];

const commentaryPipe = [
  { k: "Match events", v: "Balls, wickets, runs" },
  { k: "Context", v: "Structured match state" },
  { k: "Model", v: "Writes the line", act: true },
  { k: "Evaluate", v: "Checked for truth and tone", act: true },
  { k: "Published", v: "Live commentary", act: true },
];

const VISUALS: Record<string, { problem?: ReactNode; system?: ReactNode }> = {
  "customer-retention-probability": {
    problem: <RevenueLeakFunnel />,
    system: (
      <SignalToActionPipeline
        nodes={retentionPipe}
        caption="Raw signal on the left becomes a decision the team acts on, on the right."
      />
    ),
  },
  "batters-bowlers-tag": { system: <PlayerClusterMap /> },
  "food-replenishment": { system: <ReplenishmentCycle /> },
  "customer-affinity-modelling": { system: <AffinityMap /> },
  "adaptive-nudge-decision-engine": { system: <DecisioningFlywheel /> },
  "ai-cricket-commentary": {
    system: (
      <SignalToActionPipeline
        nodes={commentaryPipe}
        caption="Real match events on the left become a published line on the right, checked before it ships."
      />
    ),
  },
};

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <SectionHeader label={label} />
        {children}
      </div>
    </section>
  );
}

export function CaseNarrative({ slug }: { slug: string }) {
  const c = caseNarratives[slug];
  if (!c) return null;
  const v = VISUALS[slug] ?? {};

  return (
    <div className="bg-page text-ink">
      <section className="pt-6 pb-3 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label={`${c.company} · ${c.year} · ${c.status}`} />
          <h1 className="font-serif font-medium text-[clamp(26px,5vw,36px)] leading-[1.16] tracking-tight mb-3">
            {c.heroTitle}
          </h1>
          <p className="text-[15.5px] text-ink-600 leading-relaxed">{c.heroLead}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {c.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wide text-ink-500 bg-surface border border-ink-200 rounded-full px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Block label="The business">
        <p className="text-[14px] text-ink-700 leading-relaxed">{c.context}</p>
      </Block>

      <Block label="The problem">
        <p className="text-[14px] text-ink-700 leading-relaxed">{c.problem}</p>
        {v.problem && <div className="mt-4">{v.problem}</div>}
      </Block>

      <Block label="Why it was hard">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {c.constraints.map((x, i) => (
            <div
              key={i}
              className="bg-surface border border-ink-200 rounded-[9px] px-3.5 py-3 text-[13px] text-ink-700 leading-snug"
            >
              {x}
            </div>
          ))}
        </div>
      </Block>

      <Block label="The call I made">
        <p className="font-serif text-[clamp(18px,2.6vw,22px)] font-medium leading-[1.4] tracking-tight">
          {c.insight}
        </p>
      </Block>

      <Block label="What I built">
        <p className="text-[14px] text-ink-700 leading-relaxed">{c.system}</p>
        {v.system && <div className="mt-4">{v.system}</div>}
      </Block>

      <Block label="The result">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {c.impact.map((m, i) => (
            <div
              key={i}
              className="bg-surface border border-ink-200 rounded-[10px] p-4 text-center"
            >
              <div className="font-serif text-[24px] font-semibold tracking-tight">
                {m.v}
              </div>
              <div className="text-[11px] text-ink-500 leading-snug mt-1.5">{m.k}</div>
            </div>
          ))}
        </div>
      </Block>

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <div className="bg-accent-soft border border-accent rounded-xl px-5 py-5">
            <div className="font-mono text-[10px] uppercase tracking-[1.2px] text-accent mb-2">
              What a founder can take from this
            </div>
            <p className="text-[14px] text-ink-700 leading-relaxed">{c.playbook}</p>
          </div>
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <div className="bg-subtle border border-dashed border-ink-300 rounded-[10px] px-5 py-3.5 text-center text-[12.5px] text-ink-500">
            The full technical write-up, modeling approach, validation, and deployment, continues below.
          </div>
        </div>
      </section>
    </div>
  );
}

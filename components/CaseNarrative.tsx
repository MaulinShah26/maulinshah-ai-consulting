import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { caseNarratives } from "@/lib/data";
import { RevenueLeakFunnel } from "./case-visuals/RevenueLeakFunnel";
import { SignalToActionPipeline } from "./case-visuals/SignalToActionPipeline";
import { PlayerClusterMap } from "./case-visuals/PlayerClusterMap";
import { ReplenishmentCycle } from "./case-visuals/ReplenishmentCycle";
import { AffinityMap } from "./case-visuals/AffinityMap";
import { DecisioningFlywheel } from "./case-visuals/DecisioningFlywheel";
import styles from "./CaseNarrative.module.css";

const retentionPipe = [
  { k: "Raw events", v: "Orders, app opens, support" },
  { k: "Features", v: "Recency, frequency, basket" },
  { k: "Score", v: "Daily repurchase probability" },
  { k: "Audience", v: "Who is about to lapse", act: true },
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
        caption="Raw signal becomes a decision the team can act on."
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
        caption="Real match events become a published line, checked before it ships."
      />
    ),
  },
};

function SummaryCard({
  label,
  title,
  body,
  decision = false,
}: {
  label: string;
  title: string;
  body: string;
  decision?: boolean;
}) {
  return (
    <article className={`${styles.summaryCard} ${decision ? styles.summaryCardDecision : ""}`}>
      <span className={styles.summaryLabel}>{label}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export function CaseNarrative({ slug }: { slug: string }) {
  const c = caseNarratives[slug];
  if (!c) return null;

  const visual = VISUALS[slug] ?? {};
  const visualCount = Number(Boolean(visual.problem)) + Number(Boolean(visual.system));

  return (
    <div className={styles.root}>
      <section className={styles.hero}>
        <div className={styles.frame}>
          <Link href="/work" className={styles.back}>
            <ArrowLeft size={14} aria-hidden />
            Back to work
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <div className={styles.meta}>
                <span>{c.company}</span>
                <span>{c.year}</span>
                <span>{c.status}</span>
              </div>

              <h1 className={styles.title}>{c.heroTitle}</h1>
              <p className={styles.lead}>{c.heroLead}</p>

              <div className={styles.tags} aria-label="Case study themes">
                {c.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <aside className={styles.impactPanel} aria-label="Case study impact">
              <span className={styles.panelLabel}>Impact at a glance</span>
              <div className={styles.impactGrid}>
                {c.impact.map((metric, index) => (
                  <div className={styles.impactItem} key={`${metric.k}-${index}`}>
                    <span className={styles.impactValue}>{metric.v}</span>
                    <span className={styles.impactKey}>{metric.k}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.summary}>
        <div className={styles.frame}>
          <div className={styles.summaryHeader}>
            <span className={styles.summaryLabel}>Executive summary</span>
            <h2>The business problem, the judgment call, and what changed.</h2>
          </div>

          <div className={styles.summaryGrid}>
            <SummaryCard
              label="Business context"
              title="What the company needed"
              body={c.context}
            />
            <SummaryCard
              label="The problem"
              title="Where the existing approach broke"
              body={c.problem}
            />
            <SummaryCard
              label="The call I made"
              title="The decision behind the build"
              body={c.insight}
              decision
            />
            <SummaryCard
              label="The system"
              title="What I built to make the decision repeatable"
              body={c.system}
            />
          </div>

          {visualCount > 0 && (
            <div
              className={`${styles.visualGrid} ${visualCount === 1 ? styles.visualGridSingle : ""}`}
              aria-label="Case study visual summary"
            >
              {visual.problem && (
                <div className={styles.visualCard}>
                  <span className={styles.summaryLabel}>Problem signal</span>
                  <div>{visual.problem}</div>
                </div>
              )}
              {visual.system && (
                <div className={styles.visualCard}>
                  <span className={styles.summaryLabel}>System view</span>
                  <div>{visual.system}</div>
                </div>
              )}
            </div>
          )}

          <div className={styles.takeaway}>
            <span className={styles.takeawayLabel}>What a founder can take from this</span>
            <p>{c.playbook}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Layers3 } from "lucide-react";
import { caseNarratives, work } from "@/lib/data";
import styles from "./CaseStudyExperience.module.css";

type Mode = "executive" | "deep";

type ExecutiveMetric = {
  value: string;
  label: string;
};

type ExecutiveCase = {
  title: string;
  company: string;
  year: string;
  status: string;
  lead: string;
  tags: string[];
  businessProblem: string;
  whyItMattered: string;
  decision: string;
  change: string;
  metrics: ExecutiveMetric[];
  takeaway: string;
};

const personalCases: Record<string, ExecutiveCase> = {
  nerdycricket: {
    title: "NerdyCricket",
    company: "Independent build",
    year: "2026",
    status: "Live",
    lead:
      "A cricket analytics product that turns pressure, momentum, rivalry and historical context into signals fans can actually explore.",
    tags: ["Cricket analytics", "Decision systems", "Consumer product"],
    businessProblem:
      "Cricket broadcasts constantly talk about pressure, momentum and matchup history, but those ideas usually disappear as commentary rather than becoming reusable data products.",
    whyItMattered:
      "The opportunity was not another scorecard. It was creating a richer analytical layer that makes expert cricket language measurable and useful to fans.",
    decision:
      "I treated narrative cricket concepts as product primitives, then designed explicit scoring logic around them instead of asking an LLM to generate opinions.",
    change:
      "Eighteen years of cricket data now powers analytical views and daily puzzle experiences, with the product running live through the IPL 2026 season.",
    metrics: [
      { value: "18 yrs", label: "Historical cricket data used" },
      { value: "5", label: "Daily puzzle formats" },
      { value: "Live", label: "Running product" },
    ],
    takeaway:
      "A useful AI or analytics product does not begin with a model. It begins by turning a fuzzy expert concept into a repeatable decision or experience.",
  },
  "medicine-helper": {
    title: "Medicine Helper",
    company: "Independent build",
    year: "2026",
    status: "In active development",
    lead:
      "A camera-first medicine label assistant designed to turn an unfamiliar medicine pack into a clearer, safer next step.",
    tags: ["Healthcare", "Vision AI", "Safety by design"],
    businessProblem:
      "People often have medicines at home without a clear understanding of what they are for, their risks, or what information deserves attention before use.",
    whyItMattered:
      "In healthcare, a polished answer is not enough. The product has to reduce uncertainty without pretending to replace a clinician or hide important safety caveats.",
    decision:
      "I designed the experience around camera-first identification, structured medicine facts, explicit safety scoring and constrained guidance rather than an open-ended medical chatbot.",
    change:
      "The concept progressed from a Custom GPT into a native mobile product flow with label scanning, curated medicine information, safety cues and alternatives.",
    metrics: [
      { value: "Camera first", label: "Primary interaction model" },
      { value: "Safety", label: "Designed as a core product constraint" },
      { value: "Mobile", label: "Active product direction" },
    ],
    takeaway:
      "In high-stakes products, the design of uncertainty, guardrails and escalation is part of the product itself, not a disclaimer added at the end.",
  },
  "packaged-food-label-analyzer": {
    title: "Packaged Food Label Analyzer",
    company: "Independent build",
    year: "2025",
    status: "Live in GPT marketplace",
    lead:
      "A personalized food-label interpreter that changes the health read based on the person, not just the product.",
    tags: ["Consumer health", "Personalization", "Custom GPT"],
    businessProblem:
      "Food labels are difficult to interpret, while generic nutrition advice ignores the fact that the same product can mean different things for different people.",
    whyItMattered:
      "The useful decision is not whether a packaged food is universally good or bad. It is whether it fits this person, in this amount, given their goals and health context.",
    decision:
      "I made user context the first-class input, then grounded the analysis in structured nutrition data instead of producing a generic health score from the label alone.",
    change:
      "The product became a live Custom GPT and provided the product-learning foundation for the later Medicine Helper build.",
    metrics: [
      { value: "Personal", label: "Health read changes by user context" },
      { value: "Live", label: "Available in GPT marketplace" },
      { value: "1 → 2", label: "Led to a second healthcare product" },
    ],
    takeaway:
      "Personalization becomes valuable when it materially changes the decision, not when it merely changes the wording of the answer.",
  },
  "ai-trading-copilot": {
    title: "AI Trading Copilot",
    company: "Independent build",
    year: "2026",
    status: "Paper trading · Limited access",
    lead:
      "An agentic trading system that turns a few investor constraints into a governed daily decision pipeline rather than a stream of stock tips.",
    tags: ["Agentic AI", "Decision systems", "Risk governance"],
    businessProblem:
      "Retail investing tools often surface information or predictions without owning the complete decision: suitability, ranking, sizing, risk, execution and review.",
    whyItMattered:
      "A trading recommendation is only useful if the system can explain why it deserves capital, how much risk it adds, and when the system should abstain.",
    decision:
      "I separated the workflow into specialist agents but kept aggregation, risk gates, portfolio constraints and execution controls deterministic and auditable.",
    change:
      "The system now runs as a paper-trading pipeline with market scanning, ranking, portfolio controls, human approval gates and post-trade self-review.",
    metrics: [
      { value: "8", label: "Specialist agents in the pipeline" },
      { value: "~144", label: "Stocks evaluated in a run" },
      { value: "Paper first", label: "Live execution remains gated" },
    ],
    takeaway:
      "Agentic AI becomes credible when autonomy is bounded by explicit decision rights, deterministic risk rules and a clear ability to abstain.",
  },
  "ai-job-impact-assessor": {
    title: "AI Job Impact Assessor",
    company: "Independent build",
    year: "2026",
    status: "Closed beta",
    lead:
      "A career decision tool that evaluates how AI changes the tasks inside a role instead of assigning one dramatic automation percentage to the whole job.",
    tags: ["AI evaluation", "Career strategy", "Decision framework"],
    businessProblem:
      "Most AI-and-jobs tools answer a sensational question: will this job disappear? That is not useful enough for someone deciding what to learn, stop doing or become next.",
    whyItMattered:
      "Jobs are bundles of tasks with different levels of repeatability, judgment, trust, accountability and physical complexity. A role-level percentage hides that structure.",
    decision:
      "I decomposed roles into concrete tasks, score those tasks across explicit dimensions, and keep aggregation and outcome classification outside the language model.",
    change:
      "The product now produces role-specific direction across task exposure, durable human value and next-step career priorities, calibrated against an expert benchmark.",
    metrics: [
      { value: "7", label: "Task-scoring dimensions" },
      { value: "15 roles", label: "Expert calibration benchmark" },
      { value: "5 bands", label: "Outcome framework" },
    ],
    takeaway:
      "The useful question is rarely whether AI affects a role. It is which work is shrinking, which judgment is becoming more valuable, and what decision follows from that.",
  },
};

function corporateCase(slug: string): ExecutiveCase | null {
  const narrative = caseNarratives[slug];
  if (!narrative) return null;

  const workCard = work.tabs.corporate.cards.find((card) =>
    card.href.endsWith(`/${slug}`),
  );

  return {
    title: narrative.heroTitle,
    company: narrative.company,
    year: narrative.year,
    status: narrative.status,
    lead: narrative.heroLead,
    tags: narrative.tags,
    businessProblem: workCard?.problem ?? narrative.problem,
    whyItMattered: narrative.context,
    decision: narrative.insight,
    change: workCard?.summary ?? narrative.system,
    metrics: narrative.impact.map((metric) => ({
      value: metric.v,
      label: metric.k,
    })),
    takeaway: workCard?.takeaway ?? narrative.playbook,
  };
}

function ExecutiveView({
  data,
  onOpenDeep,
}: {
  data: ExecutiveCase;
  onOpenDeep: () => void;
}) {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.frame}>
          <Link href="/work" className={styles.back}>
            <ArrowLeft size={14} aria-hidden />
            Back to work
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <div className={styles.meta}>
                <span>{data.company}</span>
                <span>{data.year}</span>
                <span>{data.status}</span>
              </div>

              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.lead}>{data.lead}</p>

              <div className={styles.tags} aria-label="Case study themes">
                {data.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {data.metrics.length > 0 && (
              <aside className={styles.impact} aria-label="Impact at a glance">
                <div className={styles.impactTitle}>Impact at a glance</div>
                {data.metrics.slice(0, 3).map((metric) => (
                  <div className={styles.impactItem} key={`${metric.value}-${metric.label}`}>
                    <span className={styles.impactValue}>{metric.value}</span>
                    <span className={styles.impactKey}>{metric.label}</span>
                  </div>
                ))}
              </aside>
            )}
          </div>
        </div>
      </header>

      <section className={styles.executiveBody}>
        <div className={styles.frame}>
          <div className={styles.readGrid}>
            <article className={styles.readCard}>
              <span className={styles.cardLabel}>Business problem</span>
              <p>{data.businessProblem}</p>
            </article>

            <article className={`${styles.readCard} ${styles.readCardDecision}`}>
              <span className={styles.cardLabel}>Decision</span>
              <p>{data.decision}</p>
            </article>

            <article className={styles.readCard}>
              <span className={styles.cardLabel}>Business change</span>
              <p>{data.change}</p>
            </article>
          </div>

          <div className={styles.takeaway}>
            <span className={styles.takeawayLabel}>Leadership takeaway</span>
            <p>{data.takeaway}</p>
          </div>

          <div className={styles.deepPrompt}>
            <div>
              <strong>Need the implementation, architecture and technical decisions?</strong>
              <p>The deep dive keeps the full modeling, validation, system design and lessons.</p>
            </div>
            <button type="button" className={styles.deepButton} onClick={onOpenDeep}>
              Open deep dive
              <ArrowRight size={14} aria-hidden />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export function CaseStudyExperience({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mode, setMode] = useState<Mode>("executive");

  const slug = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? "";
  }, [pathname]);

  const executive = useMemo(
    () => corporateCase(slug) ?? personalCases[slug] ?? null,
    [slug],
  );

  if (!executive) {
    return <div className={styles.deepContent}>{children}</div>;
  }

  return (
    <div className={styles.experience}>
      <div className={styles.modeBar}>
        <div className={`${styles.frame} ${styles.modeInner}`}>
          <span className={styles.modeLabel}>Choose your level of detail</span>
          <div className={styles.modeSwitch} role="group" aria-label="Case study view">
            <button
              type="button"
              aria-pressed={mode === "executive"}
              onClick={() => setMode("executive")}
              className={`${styles.modeButton} ${mode === "executive" ? styles.modeButtonActive : ""}`}
            >
              <BriefcaseBusiness size={15} aria-hidden />
              <span>
                <strong>Executive view</strong>
                <span>CEO / functional lead</span>
              </span>
            </button>
            <button
              type="button"
              aria-pressed={mode === "deep"}
              onClick={() => setMode("deep")}
              className={`${styles.modeButton} ${mode === "deep" ? styles.modeButtonActive : ""}`}
            >
              <Layers3 size={15} aria-hidden />
              <span>
                <strong>Deep dive</strong>
                <span>Data / AI / Product</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {mode === "executive" ? (
        <ExecutiveView data={executive} onOpenDeep={() => setMode("deep")} />
      ) : (
        <div className={styles.deepContent}>{children}</div>
      )}
    </div>
  );
}

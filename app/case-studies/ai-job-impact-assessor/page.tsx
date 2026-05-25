import Link from "next/link";
import {
  ArrowLeft,
  ListTree,
  Layers,
  GitFork,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Compass,
  ChevronDown,
} from "lucide-react";

import { RoleReportsCarousel } from "@/components/case-studies/RoleReportsCarousel";

export const metadata = {
  title: "AI Job Impact Assessor · Maulin Shah",
  description:
    "A career clarity tool for the AI era. Built solo, calibrated against a 15-role expert benchmark. Answers the question generic AI-job tools refuse to ask: not whether AI is replacing your job, but how it's changing it, and what to do about it. In closed beta.",
};

const features = [
  {
    icon: <ListTree size={18} aria-hidden />,
    title: "Tasks, not jobs",
    body: "Jobs are not atomic. AI operates at the task level. Every role gets decomposed into 5 to 8 concrete, non-overlapping tasks that cover roughly 80% of the actual work. Generic phrasing like \"communicate with stakeholders\" is banned by design. The decomposition is what makes the rest of the analysis specific instead of generic.",
  },
  {
    icon: <Layers size={18} aria-hidden />,
    title: "Seven-dimension task scoring",
    body: "Each task is scored across seven dimensions: pattern repeatability, data availability, output standardization, context sensitivity, accountability risk, human trust requirement, and physical complexity. The LLM scores individual tasks; aggregation, weighting, and impact classification run as deterministic code outside the model. The math is reproducible, not vibes.",
  },
  {
    icon: <GitFork size={18} aria-hidden />,
    title: "Five outcome bands",
    body: "Every role lands in one of five stories: Replace, Commoditize, Assist, Amplify, Transform. Each band carries a different prescription. Misclassifying Assist as Transform sends a junior engineer into existential territory when they should be in skill-shift territory. The bands have clear thresholds and documented behaviors.",
  },
  {
    icon: <BarChart3 size={18} aria-hidden />,
    title: "The score is evidence, not the headline",
    body: "Most AI-job tools lead with a scary percentage and stop. This one leads with framing: \"AI is taking the easy part of your work.\" The percentage and the task-level evidence sit beneath the framing. The number is there to be audited, not just felt.",
  },
  {
    icon: <ShieldCheck size={18} aria-hidden />,
    title: "Expert-validated calibration",
    body: "Every prompt change runs against a 15-role expert-validated benchmark before it ships. When the system disagrees with the calibration data, the calibration data is canonical. The gold standard is not tuned to match the chain's output. Drift is measured, not hidden.",
  },
  {
    icon: <AlertTriangle size={18} aria-hidden />,
    title: "Failure modes disclosed",
    body: "Known boundary cases, run-to-run variance, and roles where the system disagrees with the underlying reasoning are measured and reported. The v1 will ship with a documented rule-mismatch rate. Honest imperfection over confident overclaiming.",
  },
  {
    icon: <Compass size={18} aria-hidden />,
    title: "Direction, not doom",
    body: "Every result tells you what to stop doing, what to invest in, and what kind of professional you should be becoming over the next 18 months. Specific to your work, not generic advice. Plus the language to advocate for yourself in your next 1:1, review, or interview, before your manager has to figure it out themselves.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function AIJobImpactAssessorPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      {/* Back link */}
      <div className="max-w-content mx-auto px-6 pt-8 pb-2">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to selected work
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-content mx-auto px-6 pt-6 pb-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent font-medium mb-4">
          Personal project · In closed beta · Limited access
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          AI Job Impact Assessor
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A career clarity tool for the AI era. Built solo, calibrated
          against a 15-role expert benchmark. Answers the question generic
          AI-job tools refuse to ask: not whether AI is replacing your
          job, but how it&apos;s changing it, and what to do about it.
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Task-Level Decomposition
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Seven-Dimension Scoring
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Five Outcome Bands
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Calibration Harness
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Career Direction
          </span>
        </div>
      </header>

      <hr className="border-ink-200" />

      {/* 01 Why I built this */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="Why I built this" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Generic advice for non-generic people is the gap
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Every knowledge worker has read the headlines. &ldquo;AI will
            replace 300 million jobs.&rdquo; &ldquo;Your career is
            over.&rdquo; &ldquo;Just learn to prompt.&rdquo; The internet
            has produced an industrial volume of generic advice about AI
            and work. And yet, when a working accountant, a junior
            engineer, a nurse, or a corporate lawyer sits down with the
            only questions that actually matter (which parts of my job are
            affected, which parts are becoming more valuable, what should
            I actually do next), the answers they get back are headlines,
            fear, and platitudes.
          </p>
          <p>
            The real problem isn&apos;t AI replacing jobs. The real
            problem is people not understanding how work itself is
            changing. No one&apos;s job is generic. Every role is a
            specific bundle of tasks with specific judgment requirements,
            specific accountability, specific things that AI absorbs and
            specific things it can&apos;t touch.
          </p>
          <p>
            The AI Job Impact Assessor closes that gap. Not by predicting
            the labor market. Not by issuing a scary percentage. By
            breaking your specific role into its actual tasks, scoring
            each one against AI capability movement in 2026, and producing
            a direction grounded in what&apos;s shrinking, what&apos;s
            growing, and what to do next.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 What's in the product */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="What's in the product" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Seven pieces that make this more than a doom-percentage tool
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-8">
          Most AI-job tools ask &ldquo;Will AI replace your job?&rdquo; and
          produce a number designed to land emotionally. This one asks
          &ldquo;How is AI changing your job?&rdquo; and produces an
          analysis designed to land usefully. These are the seven pieces
          that make that work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex gap-3 items-start"
            >
              <div className="w-9 h-9 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                {f.icon}
              </div>
              <div>
                <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-1.5">
                  {f.title}
                </div>
                <p className="text-[12.5px] text-ink-600 leading-[1.55]">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 What an actual report looks like */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="What an actual report looks like" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Five sample reports across five outcome bands
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-8">
          One report per outcome band. The framing comes first. The task
          breakdown shows where the analysis comes from. The band at the
          bottom tells you where the role is heading. The product&apos;s
          value is the consistency of the framework across roles, not the
          specific numbers for any one role. Swipe or use the arrows to
          step through.
        </p>

        <RoleReportsCarousel />
      </section>

      <hr className="border-ink-200" />

      {/* 04 How it's being built */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="How it's being built" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Built solo, with AI agents as collaborators
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Built solo with parallel Claude chats acting as Product,
            Prompt Engineering, and Calibration collaborators. The same
            operating discipline I bring into a Fractional engagement.
            Sequential, validated, one thing at a time.
          </p>
          <p>
            The architecture is a four-stage prompt chain orchestrated
            outside the language model.{" "}
            <strong>Stage 1 (Normalize)</strong> maps free-text role input
            to a canonical role with industry, seniority, and labelled
            assumptions. <strong>Stage 2 (Decompose)</strong> breaks the
            role into 5 to 8 concrete, non-overlapping tasks. The system
            actively fights generic phrasing.{" "}
            <strong>Stage 3 (Score)</strong> scores each task across seven
            dimensions; the LLM scores individual tasks while deterministic
            code handles aggregation, weighting, and band classification.{" "}
            <strong>Stage 4 (Synthesize)</strong> turns scores plus tasks
            into a role-specific narrative.
          </p>
          <p>
            Foundation, prompt chain, two full calibration sweeps, and the
            mobile-responsive result page are done. Prompt refinement and
            SME expert review are in flight. Closed beta launches in weeks
            across 25+ role categories. Share & Compare (LinkedIn-ready
            result cards) and Career Pathways (adjacent-role mapping
            grounded in your judgment-side strengths) are on the immediate
            pipeline after beta.
          </p>
        </div>
      </section>

      {/* Technical detail (collapsible) */}
      <section className="max-w-content mx-auto px-6 py-12">
        <details className="group bg-surface border-[0.5px] border-ink-200 rounded-md">
          <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between hover:bg-ink-50 transition-colors">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-0.5">
                For depth
              </div>
              <div className="font-serif text-[16px] font-medium text-ink">
                Technical detail
              </div>
            </div>
            <ChevronDown
              size={18}
              className="text-ink-500 group-open:rotate-180 transition-transform"
              aria-hidden
            />
          </summary>

          <div className="px-5 pb-5 pt-3 space-y-6 border-t border-ink-100">
            <TechBlock title="Production stack">
              <p>
                <strong>Language model layer</strong>: Claude Sonnet for
                reasoning and task scoring; deterministic code for all
                aggregation and classification, never the model.{" "}
                <strong>Orchestration</strong>: Python service running the
                four-stage chain with independent stage validation.{" "}
                <strong>Calibration harness</strong>: versioned 15-role
                benchmark with automated regression on every prompt
                change.{" "}
                <strong>Frontend</strong>: web app with a mobile-responsive
                result page. Score subordinate to insight by design.
              </p>
            </TechBlock>

            <TechBlock title="Four-stage chain architecture">
              <p>
                The chain is deliberately separated so each stage can be
                validated independently and reasoned about, rather than
                trusted as a black box. Stage 1 normalizes free-text role
                input. Stage 2 decomposes into tasks. Stage 3 scores tasks
                on seven dimensions. Stage 4 synthesizes the narrative.
              </p>
              <p>
                Calibration data flows backward as evidence, not forward
                as direction. The expected outcome for a role is justified
                first by capability-grounded reasoning, then validated
                against the chain&apos;s output. The system is never
                allowed to reverse-engineer its reasoning from its
                outputs.
              </p>
            </TechBlock>

            <TechBlock title="Calibration approach">
              <p>
                A 15-role expert-validated benchmark covers the major work
                archetypes (knowledge work, healthcare, skilled trades,
                creative, operational). Every prompt change is regressed
                against the benchmark before shipping. Disagreements
                between system output and the calibration data are
                investigated, with the calibration data treated as
                canonical and the system treated as the proxy.
              </p>
              <p>
                Run-to-run variance is measured and reported. Known
                boundary cases are documented. The v1 ships with a
                published rule-mismatch rate. The honest baseline is the
                product&apos;s differentiator.
              </p>
            </TechBlock>

            <TechBlock title="Scoring methodology">
              <p>
                Each task is scored across seven dimensions:{" "}
                <strong>pattern repeatability</strong>,{" "}
                <strong>data availability</strong>,{" "}
                <strong>output standardization</strong>,{" "}
                <strong>context sensitivity</strong>,{" "}
                <strong>accountability risk</strong>,{" "}
                <strong>human trust requirement</strong>, and{" "}
                <strong>physical complexity</strong>. Per-dimension scores
                are weighted and aggregated into a per-task AI exposure
                percentage. Per-task percentages are weighted by task
                centrality to the role to produce an overall replaceability
                figure.
              </p>
              <p>
                The overall figure is then mapped to one of five outcome
                bands (Replace, Commoditize, Assist, Amplify, Transform)
                using documented thresholds. The band is the prescription;
                the percentage is the evidence.
              </p>
            </TechBlock>
          </div>
        </details>
      </section>

      <hr className="border-ink-200" />

      {/* Footer */}
      <footer className="max-w-content mx-auto px-6 py-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to selected work
        </Link>
      </footer>
    </main>
  );
}

/* ---------- Sub-components ---------- */

function TechBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {title}
      </div>
      <div className="space-y-2 text-[13px] text-ink-700 leading-[1.65]">
        {children}
      </div>
    </div>
  );
}

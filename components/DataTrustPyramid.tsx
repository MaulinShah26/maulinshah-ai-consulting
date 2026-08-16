import { ArrowRight } from "lucide-react";

const STAGES = [
  {
    number: "01",
    label: "Business question",
    detail: "What decision needs to get better?",
    tone: "foundation",
  },
  {
    number: "02",
    label: "Data foundation",
    detail: "Clean events, definitions and ownership",
    tone: "foundation",
  },
  {
    number: "03",
    label: "Trusted signal",
    detail: "Metrics and models people believe",
    tone: "foundation",
  },
  {
    number: "04",
    label: "Decision system",
    detail: "Rules, scores and actions that repeat",
    tone: "decision",
  },
  {
    number: "05",
    label: "AI leverage",
    detail: "Automate once the logic is sound",
    tone: "ai",
  },
] as const;

export function DataTrustPyramid() {
  return (
    <div className="mt-5 overflow-hidden rounded-[22px] border border-ink-200 bg-surface/70 p-4 md:p-5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch gap-2 md:gap-0">
        {STAGES.map((stage, index) => {
          const isDecision = stage.tone === "decision";
          const isAI = stage.tone === "ai";

          return (
            <div key={stage.number} className="contents">
              <article
                className={`relative min-w-0 rounded-[16px] border p-4 md:min-h-[138px] flex flex-col justify-between ${
                  isAI
                    ? "border-accent bg-accent text-white shadow-[0_14px_34px_rgb(var(--accent)/0.16)]"
                    : isDecision
                      ? "border-accent/45 bg-accent-soft/70"
                      : "border-ink-200 bg-page/70"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-[9px] uppercase tracking-[0.12em] ${
                      isAI ? "text-white/72" : "text-accent"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <h3
                    className={`mt-5 font-serif text-[17px] font-semibold leading-[1.08] ${
                      isAI ? "text-white" : "text-ink"
                    }`}
                  >
                    {stage.label}
                  </h3>
                </div>
                <p
                  className={`mt-3 text-[11.5px] leading-[1.45] ${
                    isAI ? "text-white/78" : "text-ink-500"
                  }`}
                >
                  {stage.detail}
                </p>
              </article>

              {index < STAGES.length - 1 && (
                <div
                  className="flex h-7 md:h-auto md:w-9 items-center justify-center text-ink-300"
                  aria-hidden
                >
                  <ArrowRight className="rotate-90 md:rotate-0" size={16} strokeWidth={1.5} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-ink-200 pt-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-400">
          Foundation
        </span>
        <span className="text-[12px] text-ink-600">
          AI comes last because it amplifies the decision logic already underneath it.
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
          Leverage
        </span>
      </div>
    </div>
  );
}

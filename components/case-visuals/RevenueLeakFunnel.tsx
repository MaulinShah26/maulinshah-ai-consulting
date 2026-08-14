const STAGES = [
  { w: "w-full", label: "First order placed", pct: "100%", leak: false },
  { w: "w-[82%]", label: "Came back once", pct: "~60%", leak: false },
  { w: "w-[64%]", label: "Became a repeat buyer", pct: "~35%", leak: true },
  { w: "w-[50%]", label: "Stayed long term", pct: "~25%", leak: false },
];

export function RevenueLeakFunnel() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        {STAGES.map((stage) => (
          <div
            key={stage.label}
            className={`${stage.w} text-center rounded-[12px] border px-4 py-3 ${
              stage.leak
                ? "bg-accent-soft border-accent"
                : "bg-surface border-ink-200"
            }`}
          >
            <div className="text-[14px] font-medium leading-tight text-ink">
              {stage.label}
              <span className="font-mono text-[9.5px] text-ink-400 ml-2">
                {stage.pct}
              </span>
            </div>
            {stage.leak && (
              <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-accent">
                Retention leak becomes visible here
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-[13px] text-ink-500 italic mt-4 leading-[1.45]">
        By the time the drop off was visible in aggregate metrics, many customers had already gone quiet.
      </p>
    </div>
  );
}

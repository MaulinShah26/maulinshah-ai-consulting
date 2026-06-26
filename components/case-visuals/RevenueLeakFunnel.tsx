const STAGES = [
  { w: "w-full", label: "First order placed", pct: "100%", leak: false },
  { w: "w-[80%]", label: "Came back once", pct: "~60%", leak: false },
  { w: "w-[60%]", label: "Became a repeat buyer", pct: "~35%", leak: true },
  { w: "w-[48%]", label: "Stayed long-term", pct: "~25%", leak: false },
];

export function RevenueLeakFunnel() {
  return (
    <div>
      <div className="flex flex-col items-center gap-1.5">
        {STAGES.map((s) => (
          <div
            key={s.label}
            className={`${s.w} relative text-center rounded-[7px] border px-3.5 py-2 text-[12.5px] font-medium ${
              s.leak ? "bg-accent-soft border-accent" : "bg-surface border-ink-200"
            }`}
          >
            {s.label}
            <span className="font-mono text-[9px] text-ink-400 ml-1.5">{s.pct}</span>
            {s.leak && (
              <span className="absolute right-0 top-1/2 translate-x-[106%] -translate-y-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-wide text-accent hidden md:inline">
                &larr; the leak, seen too late
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-[12px] text-ink-500 italic mt-2.5">
        The drop-off was invisible until customers had already gone quiet.
      </p>
    </div>
  );
}

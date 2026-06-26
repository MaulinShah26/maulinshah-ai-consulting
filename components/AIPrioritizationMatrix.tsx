const Q = [
  { t: "Strategic bets", d: "Worth it, but not ready. Set up the basics first.", build: false },
  { t: "Build now", d: "Worth it and ready. Start here.", build: true },
  { t: "Ignore / park", d: "Low value and not ready. Easy to say no.", build: false },
  { t: "Quick wins", d: "Easy, but low value. Do it only if it’s cheap.", build: false },
];

export function AIPrioritizationMatrix() {
  return (
    <div className="relative pl-7 pb-7">
      <div className="absolute left-0 top-0 bottom-7 flex flex-col justify-between items-center">
        <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[8.5px] uppercase tracking-wide text-ink-400">
          High business value
        </span>
        <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[8.5px] uppercase tracking-wide text-ink-400">
          Low value
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
        {Q.map((q) => (
          <div
            key={q.t}
            className={`rounded-[10px] border p-3.5 min-h-[92px] ${
              q.build ? "bg-accent-soft border-accent" : "bg-surface border-ink-200"
            }`}
          >
            <div className="text-[13.5px] font-medium text-ink mb-1">{q.t}</div>
            <div className="text-[11px] text-ink-500 leading-snug">{q.d}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="font-mono text-[8.5px] uppercase tracking-wide text-ink-400">
          Low readiness
        </span>
        <span className="font-mono text-[8.5px] uppercase tracking-wide text-ink-400">
          High readiness
        </span>
      </div>
    </div>
  );
}

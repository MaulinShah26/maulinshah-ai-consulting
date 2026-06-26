const CANDIDATES = ["Email", "WhatsApp", "Discount", "Do nothing"];

export function DecisioningFlywheel() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-[auto_auto_1fr] gap-3 items-center">
        <div className="flex flex-col gap-1.5">
          {CANDIDATES.map((c) => (
            <div
              key={c}
              className="text-[11px] bg-surface border border-ink-200 rounded-[7px] px-2.5 py-1.5 text-ink-600"
            >
              {c}
            </div>
          ))}
        </div>
        <div className="bg-accent-soft border-[1.5px] border-accent rounded-[11px] px-4 py-3.5 text-center">
          <div className="font-serif text-[14px] font-semibold leading-tight">
            Pick the one best next action
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="text-[12px] bg-surface border border-ink-200 rounded-lg px-3 py-2">
            <b className="font-medium">Send it</b> to that customer, that cycle
          </div>
          <div className="text-[12px] bg-surface border border-ink-200 rounded-lg px-3 py-2">
            <b className="font-medium">Measure</b> what it did, against a holdout
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wide text-accent mt-1.5 flex items-center gap-1.5">
            &#8635; learns and re-ranks every cycle
          </div>
        </div>
      </div>
      <p className="text-[12px] text-ink-500 italic mt-2.5">
        Many in, one out, then a feedback loop. A selector with memory.
      </p>
    </div>
  );
}

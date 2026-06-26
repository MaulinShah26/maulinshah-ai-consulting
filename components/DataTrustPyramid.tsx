const LEVELS = [
  { w: "w-[46%]", cls: "bg-accent text-white border-accent", label: "AI & automation" },
  { w: "w-[58%]", cls: "bg-accent-soft text-ink border-accent", label: "Decision systems" },
  { w: "w-[70%]", cls: "bg-surface text-ink border-ink-200", label: "Trusted metrics & models" },
  { w: "w-[82%]", cls: "bg-surface text-ink border-ink-200", label: "Clean events, definitions, ownership" },
  { w: "w-[94%]", cls: "bg-surface text-ink border-ink-200", label: "Business questions that matter" },
];

export function DataTrustPyramid() {
  return (
    <div className="flex flex-col items-center gap-1">
      {LEVELS.map((l) => (
        <div
          key={l.label}
          className={`${l.w} text-center rounded-[7px] border px-3.5 py-1.5 text-xs font-medium leading-tight ${l.cls}`}
        >
          {l.label}
        </div>
      ))}
    </div>
  );
}

interface SectionHeaderProps {
  number?: string;
  label: string;
  uppercase?: boolean;
}

export function SectionHeader({ number, label, uppercase = true }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`font-mono text-[11px] tracking-[0.08em] text-accent font-medium ${
          uppercase ? "uppercase" : ""
        }`}
      >
        {number ? `${number} — ` : ""}
        {label}
      </span>
      <span className="flex-1 h-px bg-ink-200" aria-hidden="true" />
    </div>
  );
}

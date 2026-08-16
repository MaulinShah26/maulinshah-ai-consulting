import Link from "next/link";

type BrandLockupProps = {
  compact?: boolean;
  inverse?: boolean;
  className?: string;
};

export function BrandLockup({
  compact = false,
  inverse = false,
  className = "",
}: BrandLockupProps) {
  const textColor = inverse ? "text-page" : "text-ink";
  const mutedColor = inverse ? "text-page/66" : "text-ink-500";
  const markSurface = inverse ? "bg-page text-ink" : "bg-ink text-page";

  return (
    <Link
      href="/"
      aria-label="Maulin Shah, home"
      className={`group inline-flex items-center ${compact ? "gap-2.5" : "gap-3.5"} ${className}`}
    >
      <span
        aria-hidden
        className={`${markSurface} grid shrink-0 place-items-center rounded-full font-serif font-medium tracking-[-0.05em] transition-transform duration-200 group-hover:-rotate-3 ${
          compact ? "h-9 w-9 text-[16px]" : "h-12 w-12 text-[21px]"
        }`}
      >
        MS
      </span>

      <span
        className={`min-w-0 ${
          compact
            ? "flex flex-col sm:flex-row sm:items-baseline sm:gap-3"
            : "flex flex-wrap items-baseline gap-x-4 gap-y-1"
        }`}
      >
        <span
          className={`shrink-0 font-serif font-semibold tracking-[-0.025em] leading-none transition-colors group-hover:text-accent ${textColor} ${
            compact ? "text-[18px]" : "text-[23px]"
          }`}
        >
          Maulin Shah
        </span>

        <span
          className={`flex items-center whitespace-nowrap font-mono uppercase tracking-[0.11em] ${mutedColor} ${
            compact ? "mt-1 sm:mt-0 text-[9px] lg:text-[9.5px]" : "text-[10px]"
          }`}
        >
          <span>Data</span>
          <span className="mx-1.5 text-accent">·</span>
          <span>AI</span>
          <span className="mx-1.5 text-accent">·</span>
          <span>Product</span>
          <span className="mx-1.5 text-accent">·</span>
          <span>Growth</span>
        </span>
      </span>
    </Link>
  );
}

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
  const mutedColor = inverse ? "text-page/58" : "text-ink-500";
  const markSurface = inverse ? "bg-page text-ink" : "bg-ink text-page";

  return (
    <Link
      href="/"
      aria-label="Maulin Shah, home"
      className={`group inline-flex items-center ${compact ? "gap-2.5" : "gap-3.5"} ${className}`}
    >
      <span
        aria-hidden
        className={`${markSurface} relative grid shrink-0 place-items-center rounded-full font-serif font-medium tracking-[-0.05em] transition-transform duration-200 group-hover:-rotate-3 ${
          compact ? "h-9 w-9 text-[16px]" : "h-12 w-12 text-[21px]"
        }`}
      >
        MS
        <span className="absolute bottom-[22%] right-[15%] h-1.5 w-1.5 rounded-full bg-accent" />
      </span>

      <span className="flex min-w-0 flex-col">
        <span
          className={`font-serif font-semibold tracking-[-0.025em] leading-none transition-colors group-hover:text-accent ${textColor} ${
            compact ? "text-[18px]" : "text-[23px]"
          }`}
        >
          Maulin Shah
        </span>
        <span
          className={`mt-1.5 flex items-center whitespace-nowrap font-mono uppercase tracking-[0.14em] ${mutedColor} ${
            compact ? "text-[6.5px] sm:text-[7px]" : "text-[8px]"
          }`}
        >
          <span>Data</span>
          <span className="mx-1 text-accent">·</span>
          <span>AI</span>
          <span className="mx-1 text-accent">·</span>
          <span>Product</span>
          <span className="mx-1 text-accent">·</span>
          <span>Growth</span>
        </span>
      </span>
    </Link>
  );
}

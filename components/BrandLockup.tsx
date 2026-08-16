import Link from "next/link";
import styles from "./BrandLockup.module.css";

type BrandLockupProps = {
  compact?: boolean;
  inverse?: boolean;
  className?: string;
};

const domains = ["Data", "AI", "Product", "Growth"];

function DomainPhrase() {
  return (
    <>
      {domains.map((domain, index) => (
        <span key={domain} className="contents">
          <span>{domain}</span>
          {index < domains.length - 1 && (
            <span className={styles.separator} aria-hidden>·</span>
          )}
        </span>
      ))}
    </>
  );
}

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
      className={`group inline-flex items-center ${compact ? "gap-3" : "gap-3.5"} ${className}`}
    >
      <span
        aria-hidden
        className={`${markSurface} grid shrink-0 place-items-center rounded-full font-serif font-medium tracking-[-0.05em] transition-transform duration-200 group-hover:-rotate-3 ${
          compact ? "h-10 w-10 text-[18px]" : "h-[52px] w-[52px] text-[23px]"
        }`}
      >
        MS
      </span>

      <span className="flex min-w-0 flex-col">
        <span
          className={`shrink-0 font-serif font-semibold tracking-[-0.025em] leading-none transition-colors group-hover:text-accent ${textColor} ${
            compact ? "text-[18px]" : "text-[23px]"
          }`}
        >
          Maulin Shah
        </span>

        <span
          className={`${styles.domainLine} ${mutedColor} ${
            compact ? "mt-1.5 text-[10px] lg:text-[10.5px]" : "mt-2 text-[11px]"
          }`}
          aria-label="Data, AI, Product, Growth"
        >
          <span className={styles.domainPhrase} aria-hidden>
            <DomainPhrase />
          </span>
        </span>
      </span>
    </Link>
  );
}

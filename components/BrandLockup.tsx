import Link from "next/link";
import styles from "./BrandLockup.module.css";

type BrandLockupProps = {
  compact?: boolean;
  inverse?: boolean;
  className?: string;
  animateDomains?: boolean;
};

const rotatingDomains = ["Data", "AI / ML", "Product", "Growth", "Data"];
const staticDomains = ["Data", "AI / ML", "Product", "Growth"];

export function BrandLockup({
  compact = false,
  inverse = false,
  className = "",
  animateDomains = true,
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

      <span
        className={
          animateDomains
            ? "flex min-w-0 items-center gap-3"
            : "flex min-w-0 flex-col"
        }
      >
        <span
          className={`shrink-0 font-serif font-semibold tracking-[-0.025em] leading-none transition-colors group-hover:text-accent ${textColor} ${
            compact ? "text-[18px]" : "text-[23px]"
          }`}
        >
          Maulin Shah
        </span>

        {animateDomains && (
          <span
            aria-hidden
            className={`h-5 w-px shrink-0 ${inverse ? "bg-page/18" : "bg-ink-200"}`}
          />
        )}

        <span
          className={`${styles.domainBase} ${
            animateDomains ? styles.domainAnimated : styles.domainStatic
          } ${mutedColor} ${
            animateDomains
              ? compact
                ? "text-[10px] lg:text-[10.5px]"
                : "text-[11px]"
              : compact
                ? "mt-1.5 text-[10px] lg:text-[10.5px]"
                : "mt-2 text-[11px]"
          }`}
          aria-label="Data, AI and machine learning, Product, Growth"
        >
          {animateDomains ? (
            <span className={styles.domainTrack} aria-hidden>
              {rotatingDomains.map((domain, index) => (
                <span key={`${domain}-${index}`} className={styles.domainItem}>
                  {domain}
                </span>
              ))}
            </span>
          ) : (
            <span className={styles.staticPhrase} aria-hidden>
              {staticDomains.map((domain, index) => (
                <span key={domain} className="contents">
                  <span>{domain}</span>
                  {index < staticDomains.length - 1 && (
                    <span className={styles.separator}>·</span>
                  )}
                </span>
              ))}
            </span>
          )}
        </span>
      </span>
    </Link>
  );
}

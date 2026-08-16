import Link from "next/link";
import { meta } from "@/lib/data";
import { BrandLockup } from "./BrandLockup";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="px-6 py-8 text-[11px] text-ink-500">
      <div className="max-w-[1180px] mx-auto border-t border-ink-200 pt-7">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <BrandLockup />

          <div className="flex flex-wrap items-center gap-4">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-ink-200/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {meta.author}</span>
          <span>{meta.location}</span>
        </div>
      </div>
    </footer>
  );
}

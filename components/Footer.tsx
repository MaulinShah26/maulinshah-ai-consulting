import Link from "next/link";
import { meta } from "@/lib/data";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="px-6 py-7 border-t border-ink-200 text-[12px] text-ink-500">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} {meta.author} · {meta.location}</span>
        <div className="flex flex-wrap items-center gap-4">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

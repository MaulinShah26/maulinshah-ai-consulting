import { meta, nav, hero } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-page/85 backdrop-blur-md border-b border-ink-200/70">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label={`${meta.author}, home`}
        >
          {/* Geometric MS monogram */}
          <span
            className="w-[26px] h-[26px] border-[1.5px] border-accent rounded-md flex items-center justify-center text-accent text-[11px] font-medium font-sans tracking-tight flex-shrink-0"
            aria-hidden="true"
          >
            MS
          </span>
          {/* Name + role line */}
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-medium text-ink leading-tight">
              {meta.author}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[1.5px] text-ink-500 mt-1 leading-none">
              {hero.eyebrow}
            </span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex items-center gap-5 text-[13px] text-ink-600">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

import { meta, nav } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-page/85 backdrop-blur-md border-b border-ink-200/70">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium text-ink hover:text-ink-700 transition-colors"
          aria-label={`${meta.author}, home`}
        >
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
          <span>{meta.author}</span>
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

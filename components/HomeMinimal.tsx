import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { experience, social } from "@/lib/data";

const shortcuts = [
  {
    label: "Work",
    href: "/work",
    body: "Case studies, systems and products I have built.",
  },
  {
    label: "Services",
    href: "/services",
    body: "Audit, build or fractional leadership.",
  },
  {
    label: "About",
    href: "/about",
    body: "My background, operating style and experience.",
  },
  {
    label: "Contact",
    href: "/contact",
    body: "Start a conversation about your situation.",
  },
];

export function HomeMinimal() {
  return (
    <main>
      <section className="px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-content mx-auto">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent mb-5">
            Fractional Head of Data & AI
          </div>
          <h1 className="max-w-[880px] font-serif text-[42px] sm:text-[54px] md:text-[68px] font-medium leading-[1.02] tracking-tight text-ink mb-6">
            Turn messy data and AI into better growth decisions.
          </h1>
          <p className="max-w-[720px] text-[17px] md:text-[19px] text-ink-600 leading-[1.65] mb-8">
            I help growth stage consumer businesses build decision systems for retention, customer intelligence and practical AI.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-[13px] font-medium text-page hover:bg-ink-800 transition-colors"
            >
              View selected work
              <ArrowUpRight size={14} aria-hidden />
            </Link>
            <a
              href={social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-4 py-2.5 text-[13px] font-medium text-ink hover:bg-ink-50 transition-colors"
            >
              <Calendar size={14} aria-hidden />
              Book a fit call
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-content mx-auto border-y border-ink-200 py-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-center">
            <div className="col-span-2 md:col-span-2">
              <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-400 mb-2">
                Built data and AI at
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {experience.firms.map((firm) => (
                  <a
                    key={firm.name}
                    href={firm.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:opacity-75 transition-opacity"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={firm.logo} alt="" width={22} height={22} className="h-[22px] w-[22px] rounded object-cover" />
                    {firm.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-serif text-[26px] text-ink leading-none">10+</div>
              <div className="text-[11px] text-ink-500 mt-1">years in data and AI</div>
            </div>
            <div>
              <div className="font-serif text-[26px] text-ink leading-none">10M+</div>
              <div className="text-[11px] text-ink-500 mt-1">players reached</div>
            </div>
            <div>
              <div className="font-serif text-[26px] text-ink leading-none">~60%</div>
              <div className="text-[11px] text-ink-500 mt-1">lift in a retention test</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-4 pb-16 md:pb-24">
        <div className="max-w-content mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-4">
            Explore
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {shortcuts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-h-[145px] rounded-xl border border-ink-200 bg-surface p-5 flex flex-col justify-between hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-serif text-[20px] font-semibold text-ink">{item.label}</h2>
                  <ArrowUpRight size={16} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </div>
                <p className="text-[12.5px] text-ink-500 leading-relaxed max-w-[220px]">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

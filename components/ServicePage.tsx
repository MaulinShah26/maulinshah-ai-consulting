import Link from "next/link";
import { operatingModel } from "@/lib/data";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SectionHeader } from "./SectionHeader";
import { DataTrustPyramid } from "./DataTrustPyramid";
import { AIPrioritizationMatrix } from "./AIPrioritizationMatrix";

type ServiceData = {
  slug: string;
  eyebrow: string;
  heroTitle: string;
  heroSub: string;
  meta: string[];
  problem: string;
  visual: "audit" | "rail" | "timeline";
  whatLabel: string;
  whatIDo: string[];
  walkAway: string[];
  notThis: string[];
  useCases: string[];
  phases?: { label: string; body: string }[];
  ctaLabel: string;
  ctaTitle: string;
  ctaSub: string;
  href?: string;
};

function Bullets({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <div className="grid gap-2 max-w-[900px]">
      {items.map((t, i) => (
        <div key={i} className="flex gap-2.5 text-[13.5px] text-ink-700 leading-relaxed">
          <span
            className={`flex-shrink-0 w-[5px] h-[5px] rounded-full mt-2 ${
              muted ? "bg-ink-300" : "bg-accent"
            }`}
          />
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

export function ServicePage({ service }: { service: ServiceData }) {
  return (
    <main className="bg-page text-ink min-h-screen">
      <Nav />

      <section className="pt-7 pb-5 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label={service.eyebrow} />
          <h1 className="max-w-[980px] font-serif font-medium text-[clamp(30px,3.6vw,42px)] leading-[1.08] tracking-tight mb-4">
            {service.heroTitle}
          </h1>
          <p className="max-w-[860px] text-[15.5px] text-ink-600 leading-[1.65]">{service.heroSub}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {service.meta.map((m) => (
              <span
                key={m}
                className="font-mono text-[10px] uppercase tracking-wide text-ink-500 bg-surface border border-ink-200 rounded-full px-3 py-1.5"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="What’s usually broken" />
          <p className="max-w-[900px] text-[14px] text-ink-700 leading-[1.7]">{service.problem}</p>
        </div>
      </section>

      {service.visual === "audit" && (
        <>
          <section className="py-4 px-6">
            <div className="max-w-content mx-auto">
              <SectionHeader label="Decision before solution" />
              <h2 className="max-w-[820px] font-serif text-[21px] font-medium tracking-tight mb-2">
                Start with the decision, then test what can support it.
              </h2>
              <p className="max-w-[900px] text-[14px] text-ink-700 leading-relaxed mb-3">
                Data quality matters, but so do the workflow, ownership, economics and consequences of being wrong. AI is one possible solution—not the starting assumption.
              </p>
              <DataTrustPyramid />
            </div>
          </section>
          <section className="py-4 px-6">
            <div className="max-w-content mx-auto">
              <SectionHeader label="What you get" />
              <h2 className="max-w-[820px] font-serif text-[21px] font-medium tracking-tight mb-2">
                Every option sorted by value, readiness and operating risk.
              </h2>
              <p className="max-w-[900px] text-[14px] text-ink-700 leading-relaxed mb-3">
                You leave with explicit choices: what to fix now, build next, experiment with,
                wait on, or not build at all.
              </p>
              <AIPrioritizationMatrix />
            </div>
          </section>
        </>
      )}

      {service.visual === "rail" && (
        <section className="py-4 px-6">
          <div className="max-w-content mx-auto">
            <SectionHeader label="How I work inside the business" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {operatingModel.steps.map((s) => (
                <div key={s.n} className="min-w-0">
                  <div className="font-mono text-[11px] text-accent mb-2">{s.n}</div>
                  <h4 className="font-serif text-[16px] font-semibold mb-1">{s.title}</h4>
                  <p className="text-[12.5px] text-ink-600 leading-relaxed max-w-[280px]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.visual === "timeline" && service.phases && (
        <section className="py-4 px-6">
          <div className="max-w-content mx-auto">
            <SectionHeader label="How the build runs" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {service.phases.map((ph, i) => (
                <div key={ph.label} className="min-w-0">
                  <div className="font-mono text-[11px] text-accent mb-2">
                    {String(i + 1).padStart(2, "0")} · {ph.label}
                  </div>
                  <p className="text-[12.5px] text-ink-600 leading-relaxed max-w-[280px]">{ph.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label={service.whatLabel} />
          <Bullets items={service.whatIDo} />
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="What you walk away with" />
          <Bullets items={service.walkAway} />
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="What this is not" />
          <Bullets items={service.notThis} muted />
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="When founders call me for this" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {service.useCases.map((u, i) => (
              <div
                key={i}
                className="bg-surface border border-ink-200 rounded-[10px] p-3.5 text-[13px] text-ink-700 leading-relaxed italic"
              >
                &ldquo;{u}&rdquo;
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-6 pb-10">
        <div className="max-w-content mx-auto">
          <h2 className="max-w-[760px] font-serif text-[21px] font-medium tracking-tight mb-2">
            {service.ctaTitle}
          </h2>
          <p className="max-w-[760px] text-[14px] text-ink-700 leading-relaxed mb-3.5">{service.ctaSub}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink text-page text-[13px] font-medium px-4 py-2.5 hover:bg-ink-700 transition-colors"
          >
            {service.ctaLabel}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
    <div className="grid gap-2">
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

      {/* hero */}
      <section className="pt-6 pb-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label={service.eyebrow} />
          <h1 className="font-serif font-medium text-[clamp(26px,5vw,36px)] leading-[1.18] tracking-tight mb-3.5">
            {service.heroTitle}
          </h1>
          <p className="text-[15.5px] text-ink-600 leading-relaxed">{service.heroSub}</p>
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

      {/* problem */}
      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="What’s usually broken" />
          <p className="text-[14px] text-ink-700 leading-relaxed">{service.problem}</p>
        </div>
      </section>

      {/* visual */}
      {service.visual === "audit" && (
        <>
          <section className="py-4 px-6">
            <div className="max-w-content mx-auto">
              <SectionHeader label="Data before AI" />
              <h2 className="font-serif text-[21px] font-medium tracking-tight mb-2">
                AI only works on top of data you can trust.
              </h2>
              <p className="text-[14px] text-ink-700 leading-relaxed mb-3">
                I check every layer from the bottom up before suggesting anything at the
                top. Most stuck AI projects are really a broken layer lower down.
              </p>
              <DataTrustPyramid />
              <p className="text-center text-[12px] text-ink-500 italic mt-2.5">
                Read bottom to top. AI can’t make a decision your business hasn’t defined yet.
              </p>
            </div>
          </section>
          <section className="py-4 px-6">
            <div className="max-w-content mx-auto">
              <SectionHeader label="What you get, not a list" />
              <h2 className="font-serif text-[21px] font-medium tracking-tight mb-2">
                Every idea sorted by value and readiness.
              </h2>
              <p className="text-[14px] text-ink-700 leading-relaxed mb-3">
                You don’t leave with a list of AI ideas. You leave knowing what to build now,
                what to set up for later, and what to drop.
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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {operatingModel.steps.map((s) => (
                <div key={s.n}>
                  <div className="font-mono text-[11px] text-accent mb-2">{s.n}</div>
                  <h4 className="font-serif text-[16px] font-semibold mb-1">{s.title}</h4>
                  <p className="text-[12px] text-ink-600 leading-relaxed">{s.body}</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {service.phases.map((ph, i) => (
                <div key={ph.label}>
                  <div className="font-mono text-[11px] text-accent mb-2">
                    {String(i + 1).padStart(2, "0")} · {ph.label}
                  </div>
                  <p className="text-[12px] text-ink-600 leading-relaxed">{ph.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* what I do */}
      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label={service.whatLabel} />
          <Bullets items={service.whatIDo} />
        </div>
      </section>

      {/* walk away */}
      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="What you walk away with" />
          <Bullets items={service.walkAway} />
        </div>
      </section>

      {/* what this is not */}
      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="What this is not" />
          <Bullets items={service.notThis} muted />
        </div>
      </section>

      {/* use cases */}
      <section className="py-4 px-6">
        <div className="max-w-content mx-auto">
          <SectionHeader label="When founders call me for this" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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

      {/* cta */}
      <section className="py-4 px-6 pb-10">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[21px] font-medium tracking-tight mb-2">
            {service.ctaTitle}
          </h2>
          <p className="text-[14px] text-ink-700 leading-relaxed mb-3.5">{service.ctaSub}</p>
          <Link
            href="/#contact"
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

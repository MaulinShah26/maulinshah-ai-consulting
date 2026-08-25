import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ServicesV3 } from "@/components/ServicesV3";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Maulin Shah",
  description:
    "Decision Systems Diagnostics, focused builds, and fractional Data and AI leadership for growing companies.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pb-5 pt-10 md:pb-7 md:pt-12">
          <div className="mx-auto max-w-content">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              Services
            </div>
            <h1 className="mb-4 max-w-[900px] font-serif text-[36px] font-medium leading-[1.06] tracking-[-0.025em] text-ink md:text-[50px]">
              Improve the decisions your business depends on.
            </h1>
            <p className="max-w-[720px] text-[15px] leading-relaxed text-ink-600 md:text-[16px]">
              Start by diagnosing the decision gap, build one focused operating system, or add ongoing senior ownership until your team can run it.
            </p>
          </div>
        </section>

        <ServicesV3 />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

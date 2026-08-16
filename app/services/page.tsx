import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ServicesV3 } from "@/components/ServicesV3";
import { ServicesProcess } from "@/components/ServicesProcess";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Maulin Shah",
  description:
    "Fractional Data and AI leadership, opportunity audits, and decision system builds for growing companies.",
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
            <h1 className="mb-4 max-w-[980px] font-serif text-[36px] font-medium leading-[1.06] tracking-[-0.025em] text-ink md:text-[50px]">
              Start with the problem you actually have.
            </h1>
            <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-600 md:text-[16px]">
              You do not need to know which service to buy. Pick the situation that sounds most like yours. We can work out the right shape from there.
            </p>
          </div>
        </section>

        <ServicesV3 />
        <ServicesProcess />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

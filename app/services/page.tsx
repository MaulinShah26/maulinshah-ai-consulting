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
        <section className="px-6 pt-12 pb-5">
          <div className="max-w-content mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-3">
              Services
            </div>
            <h1 className="max-w-[760px] font-serif text-[36px] md:text-[48px] font-medium leading-tight text-ink mb-4">
              Choose the help you need right now.
            </h1>
            <p className="max-w-[620px] text-[15px] text-ink-600 leading-relaxed">
              Start with clarity, a specific build, or ongoing senior ownership. The engagement follows the problem.
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

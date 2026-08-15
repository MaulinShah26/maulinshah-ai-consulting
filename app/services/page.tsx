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
        <section className="px-6 pt-10 pb-3">
          <div className="max-w-content mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-3">
              Services
            </div>
            <h1 className="max-w-[920px] font-serif text-[34px] md:text-[44px] font-medium leading-[1.08] text-ink mb-3">
              How I can help.
            </h1>
            <p className="max-w-[760px] text-[15px] text-ink-600 leading-relaxed">
              Start with clarity, one focused build, or ongoing senior ownership. We choose the format after we understand the problem.
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

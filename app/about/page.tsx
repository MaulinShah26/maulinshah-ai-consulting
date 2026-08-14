import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Maulin Shah",
  description: "Background and experience of Maulin Shah, Fractional Head of Data and AI.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pt-12 pb-5">
          <div className="max-w-content mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-3">About</div>
            <h1 className="max-w-[760px] font-serif text-[36px] md:text-[48px] font-medium leading-tight text-ink mb-4">
              I work between the business question and the system that answers it.
            </h1>
            <p className="max-w-[680px] text-[15px] text-ink-600 leading-relaxed">
              My work has moved from infrastructure and analytics into ML products, customer intelligence, decision systems and data leadership.
            </p>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

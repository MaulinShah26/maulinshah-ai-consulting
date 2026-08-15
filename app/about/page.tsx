import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Maulin Shah",
  description: "My background and experience as a Fractional Head of Data and AI.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pt-12 pb-6">
          <div className="max-w-content mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-3">About me</div>
            <h1 className="max-w-[1080px] font-serif text-[38px] md:text-[52px] font-medium leading-[1.06] text-ink mb-4">
              I turn business questions into working systems.
            </h1>
            <p className="max-w-[900px] text-[15px] md:text-[16px] text-ink-600 leading-relaxed">
              I’ve spent 10+ years moving from infrastructure and analytics into ML products, customer intelligence, decision systems and Data and AI leadership.
            </p>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Maulin Shah",
  description: "How I work with data, AI, product and business teams.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pb-7 pt-12 md:pb-9 md:pt-14">
          <div className="mx-auto max-w-content">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              About me
            </div>
            <h1 className="mb-4 max-w-[980px] font-serif text-[38px] font-medium leading-[1.05] tracking-[-0.03em] text-ink md:text-[52px]">
              I help companies make better decisions with data and AI.
            </h1>
            <p className="max-w-[820px] text-[15px] leading-relaxed text-ink-600 md:text-[16px]">
              10+ years across analytics, ML products, customer intelligence and decision systems at ISRO, CricHeroes and Supertails.
            </p>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

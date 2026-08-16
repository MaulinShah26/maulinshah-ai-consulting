import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Maulin Shah",
  description: "How I think, work with teams, and became a Fractional Head of Data and AI.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pb-7 pt-12 md:pb-10 md:pt-14">
          <div className="mx-auto max-w-content">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              About me
            </div>
            <h1 className="mb-5 max-w-[1080px] font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-ink md:text-[56px]">
              I work where data, product and business decisions collide.
            </h1>
            <p className="max-w-[870px] text-[15px] leading-relaxed text-ink-600 md:text-[16px]">
              My job is not to make a company more technical. It is to help a team make better decisions, build the systems those decisions depend on, and leave the team more capable than I found it.
            </p>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

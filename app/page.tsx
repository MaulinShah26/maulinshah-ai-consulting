import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Diagnostic } from "@/components/Diagnostic";
import { ChaosMap } from "@/components/ChaosMap";
import { NotebookInsight } from "@/components/NotebookInsight";
import { OperatingModel } from "@/components/OperatingModel";
import { ServicesV3 } from "@/components/ServicesV3";
import { ProofTriptych } from "@/components/ProofTriptych";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollDepth } from "@/components/ScrollDepth";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollDepth />
      <main>
        <Hero />
        <Experience />
        <Diagnostic />
        <ChaosMap />
        <NotebookInsight />
        <OperatingModel />
        <ServicesV3 />
        <ProofTriptych />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

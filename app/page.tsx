import { Nav } from "@/components/Nav";
import { HeroV4 } from "@/components/HeroV4";
import { Experience } from "@/components/Experience";
import { ProofTriptych } from "@/components/ProofTriptych";
import { Diagnostic } from "@/components/Diagnostic";
import { DecisionSystems } from "@/components/DecisionSystems";
import { OperatingModel } from "@/components/OperatingModel";
import { ServicesV4 } from "@/components/ServicesV4";
import { AboutV4 } from "@/components/AboutV4";
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
        <HeroV4 />
        <Experience />
        <ProofTriptych />
        <Diagnostic />
        <DecisionSystems />
        <OperatingModel />
        <ServicesV4 />
        <AboutV4 />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

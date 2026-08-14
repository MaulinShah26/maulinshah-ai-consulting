import { Nav } from "@/components/Nav";
import { HeroV4 } from "@/components/HeroV4";
import { Experience } from "@/components/Experience";
import { ProofV4 } from "@/components/ProofV4";
import { DiagnosticV4 } from "@/components/DiagnosticV4";
import { DecisionSystems } from "@/components/DecisionSystems";
import { OperatingModelV4 } from "@/components/OperatingModelV4";
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
        <ProofV4 />
        <DiagnosticV4 />
        <DecisionSystems />
        <OperatingModelV4 />
        <ServicesV4 />
        <AboutV4 />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

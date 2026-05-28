import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Situation } from "@/components/Situation";
import { Approach } from "@/components/Approach";
import { Engagements } from "@/components/Engagements";
import { Outcomes } from "@/components/Outcomes";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Situation />
        <Approach />
        <Engagements />
        <Outcomes />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

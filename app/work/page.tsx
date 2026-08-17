import { Nav } from "@/components/Nav";
import { FeaturedWork, featuredCorporateHrefs } from "@/components/FeaturedWork";
import { Work } from "@/components/Work";
import { TestimonialProof } from "@/components/TestimonialProof";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-6">
        <FeaturedWork />
        <TestimonialProof person="kuntal" label="From CricHeroes leadership" />
        <Work sectionLabel="More work" excludeCorporateHrefs={featuredCorporateHrefs} />
      </main>
      <Footer />
    </>
  );
}

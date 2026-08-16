import { Nav } from "@/components/Nav";
import { FeaturedWork, featuredCorporateHrefs } from "@/components/FeaturedWork";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-6">
        <FeaturedWork />
        <Work sectionLabel="More work" excludeCorporateHrefs={featuredCorporateHrefs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

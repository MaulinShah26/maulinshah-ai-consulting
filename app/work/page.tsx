import { Nav } from "@/components/Nav";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-6">
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

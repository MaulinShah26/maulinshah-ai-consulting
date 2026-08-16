import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { MediumWriting } from "@/components/MediumWriting";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Writing | Maulin Shah",
  description: "Writing on data, AI, product strategy, growth and decision systems by Maulin Shah.",
};

export default function WritingPage() {
  return (
    <>
      <Nav />
      <main>
        <MediumWriting />
      </main>
      <Footer />
    </>
  );
}

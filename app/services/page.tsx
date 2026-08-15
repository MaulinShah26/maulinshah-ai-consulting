import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ServicesPageV4 } from "@/components/ServicesPageV4";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Maulin Shah",
  description:
    "Fractional Data and AI leadership, opportunity audits, and decision system builds for growing companies.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <ServicesPageV4 />
      </main>
      <Footer />
    </>
  );
}

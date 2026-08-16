import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Maulin Shah",
  description: "Book a conversation with Maulin Shah about data, AI, decision systems or fractional leadership.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-8">
        <Footer />
      </main>
    </>
  );
}

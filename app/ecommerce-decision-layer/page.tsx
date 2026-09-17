import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Decision Layer Prototype | Maulin Shah",
  description:
    "An interactive prototype showing how e-commerce can move from product recommendations to visible decision support.",
};

export default function EcommerceDecisionLayerPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#f6f8f7" }}>
      <iframe
        src="/ecommerce-decision-layer-prototype.html"
        title="E-commerce Decision Layer Prototype"
        style={{ width: "100%", minHeight: "100vh", height: "100vh", border: 0, display: "block" }}
      />
    </main>
  );
}

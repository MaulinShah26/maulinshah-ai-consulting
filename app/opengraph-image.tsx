import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maulin Shah · Data & AI Decision Systems for Growth Stage Startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 78px",
          background: "#f6f4ef",
          color: "#171717",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2.2,
              textTransform: "uppercase",
              color: "#0f766e",
            }}
          >
            Maulin Shah · Fractional Head of Data & AI
          </div>
          <div
            style={{
              maxWidth: 980,
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -2.5,
            }}
          >
            Turn messy data and AI into better growth decisions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #d8d4ca",
            paddingTop: 28,
            fontSize: 24,
            color: "#55524d",
          }}
        >
          <div>Retention · Customer intelligence · Practical AI</div>
          <div style={{ color: "#0f766e", fontWeight: 700 }}>Decision systems</div>
        </div>
      </div>
    ),
    size
  );
}

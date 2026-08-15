import type { Metadata } from "next";
import { Inter, Spectral, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { meta, social } from "@/lib/data";
import "./globals.css";
import "./readability.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500"],
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? meta.siteUrl;
const title = "Maulin Shah | Fractional Head of Data & AI";
const description =
  "I help growing companies turn important business questions into better decisions, working data systems and practical AI.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Maulin Shah", url: siteUrl }],
  creator: "Maulin Shah",
  keywords: [
    "fractional data lead",
    "fractional AI lead",
    "decision systems",
    "startup data strategy",
    "retention analytics",
    "customer intelligence",
    "AI strategy for startups",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Maulin Shah",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maulin Shah, Fractional Head of Data & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#maulin-shah`,
    name: "Maulin Shah",
    url: siteUrl,
    jobTitle: "Fractional Head of Data & AI",
    sameAs: [social.linkedin],
    knowsAbout: [
      "Data strategy",
      "Artificial intelligence",
      "Machine learning",
      "Retention analytics",
      "Customer intelligence",
      "Decision systems",
      "Product analytics",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#data-ai-consulting`,
    name: "Maulin Shah, Fractional Data & AI Leadership",
    url: siteUrl,
    provider: { "@id": `${siteUrl}/#maulin-shah` },
    areaServed: "Worldwide",
    serviceType: [
      "Fractional Data & AI Leadership",
      "Data & AI Opportunity Audit",
      "Decision System Build",
    ],
    description,
  },
];

const NO_FLASH_SCRIPT = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spectral.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-page text-ink font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}

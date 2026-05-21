import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { meta } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: meta.defaultTitle,
    template: `%s · ${meta.author}`,
  },
  description: meta.defaultDescription,
  authors: [{ name: meta.author }],
  creator: meta.author,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: meta.siteUrl,
    siteName: meta.siteName,
    title: meta.defaultTitle,
    description: meta.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans text-ink bg-white antialiased">{children}</body>
    </html>
  );
}

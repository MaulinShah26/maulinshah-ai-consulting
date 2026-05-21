import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { meta } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.defaultTitle,
  description: meta.defaultDescription,
  metadataBase: new URL(meta.siteUrl),
  openGraph: {
    title: meta.defaultTitle,
    description: meta.defaultDescription,
    url: meta.siteUrl,
    siteName: meta.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.defaultTitle,
    description: meta.defaultDescription,
  },
};

// Runs before React hydrates. Reads the stored theme preference and applies
// the correct class to <html> before first paint, preventing a flash of the
// wrong theme on page load. Light is the default if no preference exists.
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
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
      </head>
      <body className="bg-page text-ink font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

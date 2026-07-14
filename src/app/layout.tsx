import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorProvider from "@/components/cursor/CursorProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import LenisProvider from "@/providers/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Rubais Ghouri | Creative Frontend Engineer & WordPress Web Specialist",
    template: "%s | Rubais Ghouri",
  },
  description:
    "Creative Frontend Engineer & WordPress Web Specialist crafting premium websites with WordPress, Elementor, Divi, WooCommerce, Webflow, Wix, Next.js, and GSAP.",
  keywords: [
    "Rubais Ghouri",
    "Frontend Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Elementor Expert",
    "Divi Expert",
    "WooCommerce Developer",
    "Webflow Developer",
    "Wix Developer",
    "GSAP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
     <body>
  <ThemeProvider>
    <LenisProvider>
      {children}

      <CursorProvider />
    </LenisProvider>
  </ThemeProvider>
</body>
    </html>
  );
}

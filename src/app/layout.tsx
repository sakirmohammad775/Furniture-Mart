import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Heaven Furniture Mart | Bespoke Furniture in Chattogram",
    template: "%s | Heaven Furniture Mart",
  },

  description:
    "Bespoke furniture designed around your space, taste and lifestyle. Discover premium handcrafted furniture from Heaven Furniture Mart in Chattogram.",

  keywords: [
    "furniture in Chattogram",
    "bespoke furniture Chattogram",
    "custom furniture Bangladesh",
    "luxury furniture Chattogram",
    "Heaven Furniture Mart",
    "custom sofa Chattogram",
    "custom bedroom furniture",
  ],

  authors: [
    {
      name: "Heaven Furniture Mart",
    },
  ],

  creator: "Heaven Furniture Mart",

  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Heaven Furniture Mart",
    title: "Heaven Furniture Mart | Bespoke Furniture in Chattogram",
    description:
      "Designed. Crafted. Customized. Bespoke furniture created around your space, taste and lifestyle.",
    images: [
      {
        url: "/images/hero/hero.webp",
        width: 1200,
        height: 630,
        alt: "Heaven Furniture Mart bespoke furniture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Heaven Furniture Mart | Bespoke Furniture in Chattogram",
    description: "Designed. Crafted. Customized.",
    images: ["/images/hero/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
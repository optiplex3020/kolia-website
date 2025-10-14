import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sans-serif font for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Serif font for headings
const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOLIA - Maison Sensorielle Culinaire",
  description:
    "Une expérience gastronomique mensuelle qui réinvente les cultures africaines et diasporiques. Découvrez des saveurs authentiques, des histoires inspirantes et un rituel culinaire unique.",
  keywords: [
    "gastronomie africaine",
    "box culinaire",
    "cuisine africaine",
    "expérience sensorielle",
    "abonnement gastronomique",
  ],
  authors: [{ name: "Kolia" }],
  openGraph: {
    title: "KOLIA - Maison Sensorielle Culinaire",
    description:
      "Une expérience gastronomique mensuelle qui réinvente les cultures africaines et diasporiques.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOLIA - Maison Sensorielle Culinaire",
    description:
      "Une expérience gastronomique mensuelle qui réinvente les cultures africaines et diasporiques.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

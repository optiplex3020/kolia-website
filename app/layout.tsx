import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimationClassSetter from "@/components/AnimationClassSetter";

// Sans-serif interface fallback (Monument Grotesk alternative)
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Serif display fallback (Romie alternative)
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
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
    <html lang="fr" className={`${workSans.variable} ${playfair.variable}`}>
      <body className="antialiased page-fade">
        <AnimationClassSetter />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

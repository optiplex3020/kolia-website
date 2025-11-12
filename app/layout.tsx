import type { Metadata } from "next";
import { Work_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Kolia — Maison sensorielle du goût",
  description:
    "Vestibule numérique d’une maison sensorielle. Accès restreint aux rituels Kolia, objets rares mêlant goût, mémoire et silence.",
  keywords: [
    "maison sensorielle",
    "experience gustative",
    "objets rituels",
    "kolia",
    "editions limitees",
  ],
  authors: [{ name: "Kolia" }],
  openGraph: {
    title: "Kolia — Maison sensorielle du goût",
    description:
      "Entrer ou attendre. Kolia, maison sensorielle protégeant les rituels gustatifs rares.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolia — Maison sensorielle du goût",
    description:
      "Vestibule numérique des rituels Kolia. Accès restreint, éditions limitées.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${workSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

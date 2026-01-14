import type { Metadata } from "next";
import { Bodoni_Moda, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Kolia — Maison sensorielle du goût",
  description:
    "Maison sensorielle du goût. Kolia compose des objets rituels mensuels mêlant goût, odeur, texte et matière. Accès par invitation.",
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
      "Entrer ou attendre. Kolia protège des rituels gustatifs rares, pensés comme des objets de collection.",
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
    <html lang="fr" className={`${spaceGrotesk.variable} ${bodoniModa.variable}`}>
      <body className="antialiased w-full">
        <Header />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

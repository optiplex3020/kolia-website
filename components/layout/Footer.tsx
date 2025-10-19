"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  const footerLinks: Record<string, FooterLink[]> = {
    "À Propos": [
      { label: "Notre Histoire", href: "/univers" },
      { label: "La Box", href: "/la-box" },
      { label: "Collections", href: "/collections" },
      { label: "Artistes & Producteurs", href: "/artistes" },
    ],
    "S'abonner": [
      { label: "Découvrir les formules", href: "/sabonner" },
      { label: "Offrir Kolia", href: "/sabonner?gift=true" },
      { label: "FAQ", href: "/faq" },
    ],
    "Suivre": [
      { label: "Journal", href: "/journal" },
      { label: "Instagram", href: "https://instagram.com", external: true },
      { label: "TikTok", href: "https://tiktok.com", external: true },
      { label: "Pinterest", href: "https://pinterest.com", external: true },
    ],
  };

  return (
    <footer className="bg-[var(--color-sand)] border-t border-[var(--color-beige)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">KOLIA</h3>
            </Link>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-sm leading-relaxed">
              Une maison sensorielle culinaire qui réinvente l'expérience gastronomique à travers
              le prisme des cultures africaines et diasporiques.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                Rejoignez notre communauté
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white border border-[var(--color-stone)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)] transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-2.5 bg-[var(--color-terracotta)] text-white rounded-full text-sm font-medium hover:bg-[var(--color-ochre)] transition-colors"
                >
                  S'inscrire
                </motion.button>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-beige)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-text-light)]">
              © {currentYear} Kolia. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                href="/cgv"
                className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

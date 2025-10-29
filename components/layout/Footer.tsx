"use client";

import Link from "next/link";

const secondaryLinks = [
  { label: "Lettre Kolia", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Conditions", href: "/cgv" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-separator)] bg-[var(--color-background)]/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-5 slow-reveal">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">Kolia</p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Maison sensorielle du goût. Objets rituels rares, révélés avec lenteur.
          </p>
          <Link
            href="/entrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.38em] text-[var(--color-text-secondary)] transition-colors duration-700 ease-out hover:text-[var(--color-rouge-brique)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
          >
            Entrer. Ou attendre.
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-6 text-xs uppercase tracking-[0.32em] text-[var(--color-text-muted)] sm:grid-cols-2 md:grid-cols-4">
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-b border-transparent pb-3 transition-colors duration-700 ease-out hover:border-[var(--color-separator)] hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--color-separator)] pt-6 text-xs uppercase tracking-[0.28em] text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Kolia. Maison Sensorielle.</p>
          <p>Paris · Tokyo · New York</p>
        </div>
      </div>
    </footer>
  );
}

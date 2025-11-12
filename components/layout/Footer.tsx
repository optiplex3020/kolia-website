"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "/entrer", label: "Entrer" },
    { href: "/rituel", label: "Rituel" },
    { href: "/memoire", label: "Mémoire" },
    { href: "/contact", label: "Lettre" },
  ];

  return (
    <footer className="border-t border-[var(--color-separator)] bg-[var(--color-background)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-[var(--color-text-muted)]">
            Kolia
          </p>
          <p className="text-base text-[var(--color-text-secondary)]">
            Maison sensorielle. Objets rituels en quantité limitée.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
            © {currentYear} · Silence conservé.
          </p>
        </div>

        <nav className="space-y-3 text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)] sm:text-right">
          {links.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

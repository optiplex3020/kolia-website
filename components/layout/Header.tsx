"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/entrer", label: "Entrer" },
  { href: "/rituel", label: "Rituel" },
  { href: "/memoire", label: "Mémoire" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-transparent transition-all duration-700 ease-out",
        isScrolled
          ? "bg-[var(--color-background)]/96 backdrop-blur-md border-[var(--color-separator)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="tracking-[0.45em] text-xs font-semibold uppercase text-[var(--color-text-primary)] transition-colors duration-700 ease-out hover:text-[var(--color-rouge-brique)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
        >
          Kolia
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.38em] text-[var(--color-text-secondary)] transition-all duration-700 ease-out hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden rounded-full border border-[var(--color-separator)] px-3 py-2 text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)] transition-colors duration-700 ease-out hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden border-t border-[var(--color-separator)] transition-[max-height] duration-700 ease-out",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 pb-6 pt-4">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-text-muted)] slow-reveal">
            Navigation
          </p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="slow-reveal">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-transparent pb-2 text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)] transition-colors duration-700 ease-out hover:border-[var(--color-separator)] hover:text-[var(--color-text-primary)]"
                >
                  {link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

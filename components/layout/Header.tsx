"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[var(--z-fixed)] border-b transition-all duration-[var(--transition-base)]",
          isScrolled
            ? "backdrop-blur-xl bg-[var(--color-background)]/85 border-[var(--color-separator)] shadow-[var(--shadow-sm)]"
            : "bg-[var(--color-background)] border-transparent"
        )}
      >
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.4em] text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-rouge-brique)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]"
          >
            Kolia
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.5em] transition-colors duration-[var(--transition-fast)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]",
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-separator)] lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Menu"
          >
            <span className="text-[10px] uppercase tracking-[0.4em]">Menu</span>
          </button>
        </nav>
      </header>

      <aside
        className={cn(
          "fixed inset-0 z-[var(--z-modal)] bg-[var(--color-overlay)]/70 backdrop-blur-lg transition-opacity duration-[var(--transition-fast)] lg:hidden",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="absolute inset-x-4 top-24 rounded-[var(--radius-xl)] border border-[var(--color-separator)] bg-[var(--color-background)] p-8 shadow-[var(--shadow-lg)]"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
            Vestibule
          </p>
          <nav className="space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block text-lg uppercase tracking-[0.4em]",
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

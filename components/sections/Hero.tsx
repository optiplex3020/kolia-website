"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-24 sm:px-10">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-surface)_0%,transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--color-rouge-brique)_0%,transparent_70%)] opacity-5" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="slow-reveal text-xs uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
          Rituel Kolia · Édition limitée
        </p>

        <h1 className="slow-reveal mt-8 text-4xl font-medium leading-tight sm:text-5xl">
          Goûter le silence. Garder la mémoire.
        </h1>

        <p className="slow-reveal mt-6 max-w-2xl text-sm text-[var(--color-text-secondary)]">
          Chaque objet Kolia contient un fragment sensoriel: matière, poème, note olfactive,
          geste culinaire. Les invitations sont rares. Les fenêtres se referment vite.
        </p>

        <div className="slow-reveal mt-10 flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em] sm:flex-row">
          <Link
            href="/entrer"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[var(--color-vert-kolia)] bg-[var(--color-vert-kolia)] px-8 py-3 text-[var(--color-ivoire)] transition-colors duration-700 ease-out hover:bg-[#0a2417] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
          >
            Invitation
          </Link>
          <Link
            href="/memoire"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[var(--color-separator)] px-8 py-3 text-[var(--color-text-secondary)] transition-colors duration-700 ease-out hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
          >
            Archives
          </Link>
        </div>

        <p className="slow-reveal mt-12 text-xs uppercase tracking-[0.38em] text-[var(--color-text-muted)]">
          Fenêtre actuelle — {process.env.NEXT_PUBLIC_RITUAL_WINDOW ?? "à annoncer"}
        </p>
      </div>
    </section>
  );
}

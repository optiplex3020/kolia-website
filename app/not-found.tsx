import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-24 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.48em] text-[var(--color-text-muted)]">Page introuvable</p>
      <h1 className="text-3xl font-[family-name:var(--font-display)] uppercase tracking-[var(--tracking-wide)] sm:text-4xl">
        Silence ici. Pas de rituel.
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)]">
        La route demandée n&apos;existe pas. Essayez plutôt le vestibule ou les archives.
      </p>
      <div className="flex gap-4 text-xs uppercase tracking-[0.32em]">
        <Link
          href="/"
          className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-[var(--color-vert-kolia)] bg-[var(--color-vert-kolia)] px-8 py-3 text-[var(--color-ivoire)] transition-colors duration-[var(--transition-base)] hover:bg-transparent hover:text-[var(--color-vert-kolia)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
        >
          Accueil
        </Link>
        <Link
          href="/memoire"
          className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-[var(--color-separator)] px-8 py-3 text-[var(--color-text-secondary)] transition-colors duration-[var(--transition-base)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
        >
          Archives
        </Link>
      </div>
    </section>
  );
}

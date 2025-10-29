import Link from "next/link";

export default function Home() {
  const windowIsOpen = process.env.NEXT_PUBLIC_RITUAL_OPEN === "true";
  const windowNote =
    process.env.NEXT_PUBLIC_RITUAL_WINDOW ?? "Fenêtre d'ouverture non annoncée.";

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
      <div className="max-w-3xl space-y-8">
        <p className="slow-reveal text-xs uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
          Maison sensorielle du goût
        </p>

        <h1 className="slow-reveal text-4xl font-medium sm:text-5xl">
          Le temps est comestible.
        </h1>

        <p className="slow-reveal text-sm text-[var(--color-text-secondary)]">
          Chaque édition Kolia éveille cinq sens. Objets rituels. Matières rares. Fenêtre
          d&apos;accès limitée.
        </p>

        <div className="slow-reveal space-y-4">
          <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-text-muted)]">
            {windowIsOpen ? "Fenêtre ouverte" : "Fenêtre close"}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">{windowNote}</p>
        </div>

        <div className="slow-reveal flex flex-col items-center gap-4 text-xs uppercase tracking-[0.32em] sm:flex-row sm:justify-center">
          {windowIsOpen ? (
            <Link
              href="/rituel"
              className="inline-flex min-w-[182px] items-center justify-center rounded-full border border-[var(--color-vert-kolia)] bg-[var(--color-vert-kolia)] px-8 py-3 text-[var(--color-ivoire)] transition-colors duration-700 ease-out hover:bg-[#0a2417] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
            >
              Entrer
            </Link>
          ) : (
            <span className="inline-flex min-w-[182px] items-center justify-center rounded-full border border-[var(--color-separator)] px-8 py-3 text-[var(--color-text-muted)]">
              Entrer
            </span>
          )}
          <Link
            href="/memoire"
            className="text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)] transition-colors duration-700 ease-out hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-[var(--color-rouge-brique)]"
          >
            Archives
          </Link>
        </div>
      </div>
    </section>
  );
}

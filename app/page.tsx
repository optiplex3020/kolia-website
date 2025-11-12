import Link from "next/link";

const status = [
  {
    label: "Ouverture",
    value: "Mardi · 14h",
    detail: "Fenêtre limitée",
  },
  {
    label: "Édition",
    value: "Rituel 08",
    detail: "Dakar souterrain",
  },
  {
    label: "Stock",
    value: "178 / 300",
    detail: "Mise à jour lente",
  },
];

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-12 px-6 py-24 text-center sm:gap-16">
      <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
        Vestibule Kolia
      </p>

      <div className="space-y-3">
        <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-[family-name:var(--font-display)] leading-[var(--leading-tight)]">
          Ici, le temps est comestible.
        </h1>
        <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">
          Entrer. Ou attendre.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)] sm:flex-row">
        <Link
          href="/entrer"
          className="rounded-full border border-[var(--color-text-primary)] px-10 py-3 transition-colors duration-[var(--transition-base)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-ivoire)]"
        >
          Entrer
        </Link>
        <Link
          href="/memoire"
          className="rounded-full border border-transparent px-10 py-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
        >
          Mémoire
        </Link>
      </div>

      <div className="mt-8 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {status.map((item) => (
          <div
            key={item.label}
            className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-5 text-left"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-text-muted)]">
              {item.label}
            </p>
            <p className="mt-3 text-xl font-[family-name:var(--font-display)]">
              {item.value}
            </p>
            <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

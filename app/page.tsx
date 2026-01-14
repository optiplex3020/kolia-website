import Link from "next/link";

const status = [
  {
    label: "Fenêtre",
    value: "Mardi 14h",
    detail: "Ouvert 48h maximum",
  },
  {
    label: "Édition",
    value: "Rituel 08",
    detail: "Novembre",
  },
  {
    label: "Quantité",
    value: "178 / 300",
    detail: "Pas de réassort",
  },
];

const fragments = [
  {
    title: "Goût",
    text: "Un élément gustatif rare, pensé comme un geste.",
  },
  {
    title: "Odeur",
    text: "Un fragment olfactif révélé à l'ouverture.",
  },
  {
    title: "Poème",
    text: "Un texte imprimé sur papier texturé.",
  },
  {
    title: "Son",
    text: "Un plan fixe ou une composition sonore courte.",
  },
  {
    title: "Matière",
    text: "Un objet à garder, une surface à toucher.",
  },
];

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl space-y-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
            Vestibule
          </p>
          <h1 className="mt-6 text-[clamp(2.2rem,7vw,4rem)] font-[family-name:var(--font-display)] uppercase tracking-[var(--tracking-ritual)]">
            Maison sensorielle du goût
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Kolia compose des objets rituels mensuels qui mêlent goût, odeur, texte et matière.
            Accès par invitation, fenêtres courtes, quantités limitées.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-xs uppercase tracking-[0.45em] sm:flex-row">
            <Link
              href="/entrer"
              className="rounded-full border border-[var(--color-vert-kolia)] bg-[var(--color-vert-kolia)] px-10 py-3 text-[var(--color-ivoire)] transition-colors duration-[var(--transition-base)] hover:bg-transparent hover:text-[var(--color-vert-kolia)]"
            >
              Entrer
            </Link>
            <Link
              href="/rituel"
              className="rounded-full border border-[var(--color-separator)] px-10 py-3 text-[var(--color-text-secondary)] transition-colors duration-[var(--transition-base)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
            >
              Rituel actuel
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {status.map((item) => (
            <div
              key={item.label}
              className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-text-muted)]">
                {item.label}
              </p>
              <p className="mt-3 text-xl font-[family-name:var(--font-display)] tracking-[var(--tracking-wide)]">
                {item.value}
              </p>
              <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 border-t border-[var(--color-separator)] pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {fragments.map((item) => (
            <div key={item.title}>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                {item.title}
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

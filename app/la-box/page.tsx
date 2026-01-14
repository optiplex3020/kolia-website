import Link from "next/link";

const composition = [
  "1 élément gustatif rare",
  "1 élément olfactif intégré à l'ouverture",
  "1 fragment poétique imprimé",
  "1 fragment sonore (QR code discret)",
  "1 objet tactile à conserver",
];

const packaging = [
  "Format livre-objet : 30 × 22 × 6 cm",
  "Carton rigide teinté masse, 2 mm",
  "Fermeture magnétique lente",
  "Extérieur muet, identité révélée à l'intérieur",
  "Embossage à sec ou bronze mat discret",
];

const availability = [
  { label: "Fenêtre", value: "Mardi 14h · 48h max" },
  { label: "Quantité", value: "200 à 500 objets" },
  { label: "Rituel", value: "Édition 08 · Novembre" },
];

export default function LaBoxPage() {
  return (
    <div className="pt-24">
      <section className="section-padding border-b border-[var(--color-separator)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
                Objet rituel
              </p>
              <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.2rem)] font-[family-name:var(--font-display)] uppercase tracking-[var(--tracking-ritual)]">
                Dakar souterrain
              </h1>
              <p className="mt-6 text-base text-[var(--color-text-secondary)]">
                Un rituel mensuel construit comme un objet de collection. Chaque élément est
                pensé pour activer les cinq sens, sans sur-explication.
              </p>
              <div className="mt-10 flex flex-col gap-3 text-xs uppercase tracking-[0.45em] text-[var(--color-text-secondary)] sm:flex-row">
                <Link
                  href="/entrer"
                  className="rounded-full border border-[var(--color-vert-kolia)] bg-[var(--color-vert-kolia)] px-10 py-3 text-[var(--color-ivoire)] transition-colors duration-[var(--transition-base)] hover:bg-transparent hover:text-[var(--color-vert-kolia)]"
                >
                  Entrer
                </Link>
                <Link
                  href="/collections"
                  className="rounded-full border border-[var(--color-separator)] px-10 py-3 text-[var(--color-text-secondary)] transition-colors duration-[var(--transition-base)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
                >
                  Voir les archives
                </Link>
              </div>
            </div>
            <div className="rounded-[var(--radius-2xl)] border border-[var(--color-separator)] bg-[var(--color-surface)] p-8">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                Disponibilité
              </p>
              <div className="mt-6 space-y-4">
                {availability.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.45em] text-[var(--color-text-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
            Composition standard
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {composition.map((item) => (
              <div
                key={item}
                className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6 text-sm text-[var(--color-text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-separator)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
            Packaging
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {packaging.map((item) => (
              <div
                key={item}
                className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] bg-[var(--color-background)] p-6 text-sm text-[var(--color-text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

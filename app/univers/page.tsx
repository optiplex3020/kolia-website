import Link from "next/link";

const principles = [
  {
    title: "Rareté",
    text: "Ce qui est précieux est rare. Chaque rituel est limité, numéroté, non reconduit.",
  },
  {
    title: "Silence",
    text: "La beauté naît du vide. Peu de mots, un geste clair, une présence calme.",
  },
  {
    title: "Lenteur",
    text: "Un seul rituel par mois. Le temps est une matière et un luxe.",
  },
  {
    title: "Matérialité",
    text: "Le goût passe par le corps : papier, bois, céramique, odeur, texture.",
  },
];

const process = [
  {
    step: "01",
    title: "Curation",
    text: "Sélection des matières, des artisans et des fragments sensoriels.",
  },
  {
    step: "02",
    title: "Composition",
    text: "Assemblage du goût, de l'odeur, du texte et du son.",
  },
  {
    step: "03",
    title: "Rituel",
    text: "Geste d'ouverture, séquence lente, expérience complète.",
  },
  {
    step: "04",
    title: "Mémoire",
    text: "L'objet demeure, l'expérience s'inscrit.",
  },
];

export default function UniversPage() {
  return (
    <div className="pt-24">
      <section className="section-padding border-b border-[var(--color-separator)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
            Manifeste
          </p>
          <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.2rem)] font-[family-name:var(--font-display)] uppercase tracking-[var(--tracking-ritual)]">
            Maison sensorielle du goût
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Kolia crée des objets rituels mensuels qui contiennent un goût, une odeur, un poème,
            un fragment sonore et une matière. Ce n&apos;est ni un service ni une box alimentaire.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
            Principes
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                  {principle.title}
                </p>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-separator)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
            Processus
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <p className="text-4xl font-[family-name:var(--font-display)] text-[var(--color-bronze)]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-lg font-[family-name:var(--font-display)] tracking-[var(--tracking-wide)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
            Entrer ou attendre
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Le vestibule s&apos;ouvre rarement. Pour une invitation, écrivez-nous.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-xs uppercase tracking-[0.45em] sm:flex-row">
            <Link
              href="/entrer"
              className="rounded-full border border-[var(--color-vert-kolia)] bg-[var(--color-vert-kolia)] px-10 py-3 text-[var(--color-ivoire)] transition-colors duration-[var(--transition-base)] hover:bg-transparent hover:text-[var(--color-vert-kolia)]"
            >
              Entrer
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--color-separator)] px-10 py-3 text-[var(--color-text-secondary)] transition-colors duration-[var(--transition-base)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
            >
              Écrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

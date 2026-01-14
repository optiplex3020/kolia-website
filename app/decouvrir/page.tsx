import Link from "next/link";

export const metadata = {
  title: "Découvrir Kolia — Maison sensorielle du goût",
  description:
    "Kolia conçoit des objets rituels mensuels mêlant goût, odeur, texte et matière. Accès par invitation.",
};

const pillars = [
  {
    title: "Maison sensorielle",
    text: "Nous composons des expériences matérielles, limitées en quantité et dans le temps.",
  },
  {
    title: "Rareté protégée",
    text: "Jamais de réassort. Une fenêtre courte, un nombre précis, un objet numéroté.",
  },
  {
    title: "Lenteur assumée",
    text: "Un seul rituel par mois. Le temps devient une matière.",
  },
];

const ritualElements = [
  {
    title: "Élément gustatif",
    text: "Un goût rare, préparé pour un geste unique.",
  },
  {
    title: "Élément olfactif",
    text: "Une odeur qui se révèle à l'ouverture.",
  },
  {
    title: "Fragment poétique",
    text: "Un texte imprimé, jamais seulement numérique.",
  },
  {
    title: "Fragment sonore",
    text: "Un plan fixe ou une composition courte, par QR code discret.",
  },
  {
    title: "Objet tactile",
    text: "La boîte elle-même devient un objet à conserver.",
  },
];

const accessRules = [
  "Accès par invitation uniquement.",
  "Fenêtre d'achat : mardi 14h, 48h maximum.",
  "Quantités limitées (200 à 500 objets).",
  "Aucune promotion, aucun réassort.",
];

export default function DecouvrirPage() {
  return (
    <div className="pt-24">
      <section className="section-padding border-b border-[var(--color-separator)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
            Découvrir
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,4.2rem)] uppercase tracking-[var(--tracking-ritual)]">
            Kolia, maison sensorielle
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Kolia n&apos;est ni une box alimentaire ni un service. Nous créons des objets
            rituels mensuels qui contiennent un goût, une odeur, un poème et une matière.
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
              Voir le rituel
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                  {pillar.title}
                </p>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-separator)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
              Ce que contient un rituel
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ritualElements.map((element) => (
              <div key={element.title} className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] bg-[var(--color-background)] p-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                  {element.title}
                </p>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                  {element.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
                Accès et rareté
              </h2>
              <p className="mt-6 text-base text-[var(--color-text-secondary)]">
                Le vestibule s&apos;ouvre rarement. Kolia protège la lenteur, la matière et le
                silence. Les informations restent simples, le geste est clair.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                Règles d&apos;accès
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-secondary)]">
                {accessRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

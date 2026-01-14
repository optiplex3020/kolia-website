export const metadata = {
  title: "Collections Kolia — Archives",
  description:
    "Archives publiques des rituels Kolia. Chaque édition est unique et n'est jamais rééditée.",
};

const collections = [
  {
    id: "rituel-08",
    title: "Dakar souterrain",
    date: "Novembre",
    status: "Actuel",
    note: "Rituel 08",
  },
  {
    id: "rituel-07",
    title: "Mémoire de braise",
    date: "Septembre",
    status: "Épuisé",
    note: "Rituel 07",
  },
  {
    id: "rituel-06",
    title: "Pluie sur Ouidah",
    date: "Juin",
    status: "Épuisé",
    note: "Rituel 06",
  },
  {
    id: "rituel-05",
    title: "Hiver #3",
    date: "Février",
    status: "Archive",
    note: "Rituel 05",
  },
];

export default function CollectionsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding border-b border-[var(--color-separator)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
            Archives
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,4.2rem)] uppercase tracking-[var(--tracking-ritual)]">
            Collections Kolia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Chaque rituel est unique et n&apos;est jamais réédité. Voici les fragments publics.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                  {collection.note}
                </p>
                <h2 className="mt-4 text-xl font-[family-name:var(--font-display)] tracking-[var(--tracking-wide)]">
                  {collection.title}
                </h2>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">
                  <span>{collection.date}</span>
                  <span>{collection.status}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Les archives complètes sont accessibles sur invitation.
          </p>
        </div>
      </section>
    </div>
  );
}

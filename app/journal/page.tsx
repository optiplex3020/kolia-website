const fragments = [
  {
    id: "film-automne",
    type: "Film",
    title: "Novembre. À boire lentement.",
    excerpt: "Plan fixe. Feuilles dans un bol de thé fumant. 47 secondes.",
    date: "Novembre 2025",
  },
  {
    id: "poeme-septembre",
    type: "Poème",
    title: "SEPTEMBRE",
    excerpt: "Quelque chose brûle sans se consumer. Goûtez.",
    date: "Septembre 2025",
  },
  {
    id: "collaboration-miyake",
    type: "Collaboration",
    title: "Pli. Dépli. L'origami du goût.",
    excerpt: "200 exemplaires. Mai 2025.",
    date: "Mai 2025",
  },
  {
    id: "hiver-3",
    type: "Poème",
    title: "HIVER #3",
    excerpt: "Le silence a une saveur. Elle ressemble à l'attente.",
    date: "Janvier 2025",
  },
];

export default function JournalPage() {
  return (
    <div className="pt-24">
      <section className="section-padding border-b border-[var(--color-separator)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
            Fragments
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,4.2rem)] uppercase tracking-[var(--tracking-ritual)]">
            Journal Kolia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Extraits publics des films, poèmes et collaborations. Le reste se découvre dans les
            rituels.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-6">
            {fragments.map((fragment) => (
              <div
                key={fragment.id}
                className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
                  <span>{fragment.type}</span>
                  <span>{fragment.date}</span>
                </div>
                <h2 className="mt-4 text-xl font-[family-name:var(--font-display)] tracking-[var(--tracking-wide)]">
                  {fragment.title}
                </h2>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{fragment.excerpt}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Les films complets sont accessibles via QR code.
          </p>
        </div>
      </section>
    </div>
  );
}

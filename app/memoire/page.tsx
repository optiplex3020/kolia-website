const archives = [
  { code: "07", titre: "Mémoire de braise", statut: "Épuisé", note: "Abidjan · Juin" },
  { code: "06", titre: "Pluie sur Ouidah", statut: "Épuisé", note: "Cotonou · Avril" },
  { code: "05", titre: "Or du Sahel", statut: "Repos", note: "Niamey · Février" },
];

export default function MemoirePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl flex-col gap-10 px-6 py-24">
      <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">Mémoire</p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] font-[family-name:var(--font-display)] leading-[var(--leading-tight)]">
        Archives en veille.
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Pour consulter un rituel passé, adressez une lettre. Les fragments sont conservés sous scellés.
      </p>

      <div className="space-y-4">
        {archives.map((archive) => (
          <div
            key={archive.code}
            className="flex flex-col gap-2 rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                Rituel #{archive.code}
              </p>
              <p className="mt-2 text-lg font-[family-name:var(--font-display)]">{archive.titre}</p>
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">
              <p>{archive.statut}</p>
              <p className="mt-1 text-[var(--color-text-muted)]">{archive.note}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
        Dernière mise à jour transmise : veille.
      </p>
    </section>
  );
}

export default function MemoirePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl flex-col justify-center gap-8 px-6 py-24 sm:px-8 lg:px-12">
      <p className="text-xs uppercase tracking-[0.48em] text-[var(--color-text-muted)] slow-reveal">
        Mémoire Kolia
      </p>
      <h1 className="text-3xl font-medium slow-reveal sm:text-4xl">
        Archives en veille.
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] slow-reveal">
        Les éditions Kolia se reposent ici. Une bibliothèque de matières, de saveurs et de
        poèmes conservés à portée restreinte. Les détenteurs d&apos;une invitation seront
        informés lors de la réouverture des archives.
      </p>
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-text-muted)] slow-reveal">
        Dernière mise à jour · Silence maintenu
      </p>
    </section>
  );
}

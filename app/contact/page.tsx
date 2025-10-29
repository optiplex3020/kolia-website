export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-2xl flex-col justify-center gap-8 px-6 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.48em] text-[var(--color-text-muted)] slow-reveal">
        Lettre Kolia
      </p>
      <h1 className="text-3xl font-medium slow-reveal sm:text-4xl">
        Écrire peu. Dire juste.
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] slow-reveal">
        Pour rejoindre la liste d&apos;invitation Kolia, adressez une lettre. Nous lisons tout,
        nous répondons lentement. Les détails d&apos;expédition seront communiqués lors de la
        prochaine fenêtre d&apos;ouverture.
      </p>
      <div className="space-y-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)] slow-reveal">
        <p>Lettre Kolia</p>
        <p>19 Rue du Silence · 75003 Paris</p>
        <p>courrier@kolia.maison</p>
      </div>
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-text-muted)] slow-reveal">
        Aucun formulaire. Le geste compte.
      </p>
    </section>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-2xl flex-col gap-8 px-6 py-24">
      <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
        Lettre Kolia
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] font-[family-name:var(--font-display)] uppercase tracking-[var(--tracking-wide)]">
        Une lettre suffit
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Pour une invitation, une question ou une collaboration, écrivez-nous. Nous répondons
        sous 24h ouvrées, sans relance automatique.
      </p>
      <div className="space-y-2 text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
        <p>Lettre Kolia</p>
        <p>19 Rue du Silence · 75003 Paris</p>
        <p>courrier@kolia.maison</p>
      </div>
      <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
        Aucun formulaire. Le geste compte.
      </p>
    </section>
  );
}

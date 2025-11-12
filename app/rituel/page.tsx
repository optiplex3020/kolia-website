const elements = [
  {
    label: "Goût",
    detail: "Grains de fonio fumé, huile de baobab, poudre de café Touba.",
  },
  {
    label: "Odeur",
    detail: "Encens de bois de santal, sachet de poivre Selim.",
  },
  {
    label: "Poème",
    detail: "Fragment manuscrit de Fatou Kandé Senghor. Papier ivoire brut.",
  },
  {
    label: "Son",
    detail: "Plan fixe · 02:14 · Dakar nuit. QR code discret.",
  },
];

const timings = [
  { label: "Ouverture", value: "14h00" },
  { label: "Clôture", value: "Selon épuisement" },
  { label: "Stock", value: "178 / 300" },
];

export default function RitualPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col gap-12 px-6 py-24">
      <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">Rituel en cours</p>

      <div className="space-y-2">
        <h1 className="text-[clamp(2.4rem,6vw,3.8rem)] font-[family-name:var(--font-display)] leading-[var(--leading-tight)]">
          Dakar souterrain.
        </h1>
        <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-text-secondary)]">
          Édition 08 · Novembre
        </p>
      </div>

      <article className="space-y-6">
        <p className="text-base leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Une boîte sombre, velours intérieur. Les matières sont numérotées. La dégustation commence par le silence,
          se poursuit par un geste lent. Rien n’est répété.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {elements.map((item) => (
            <div key={item.label} className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">{item.label}</p>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{item.detail}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="grid gap-4 border-y border-[var(--color-separator)] py-6 text-xs uppercase tracking-[0.45em] text-[var(--color-text-secondary)] sm:grid-cols-3">
        {timings.map((item) => (
          <div key={item.label}>
            <p className="text-[var(--color-text-muted)]">{item.label}</p>
            <p className="mt-2 text-base normal-case tracking-normal text-[var(--color-text-primary)]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
        Aucune nouvelle invitation n’est émise pendant la fenêtre.
      </p>
    </section>
  );
}

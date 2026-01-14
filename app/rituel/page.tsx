const elements = [
  {
    label: "Goût",
    detail: "Ingrédient rare, préparation courte, geste lent.",
  },
  {
    label: "Odeur",
    detail: "Bois de santal, épice brute, odeur révélée à l'ouverture.",
  },
  {
    label: "Poème",
    detail: "Fragment imprimé sur papier texturé, typographie soignée.",
  },
  {
    label: "Son",
    detail: "Plan fixe · 02:14 · QR code discret, une seule diffusion.",
  },
  {
    label: "Matière",
    detail: "Objet à garder : cuillère rituelle en céramique mate.",
  },
];

const sequence = [
  {
    label: "Réception",
    detail: "Poids, format, silence. Rien ne s'annonce.",
  },
  {
    label: "Ouverture",
    detail: "Rabat lent, révélation progressive, odeur immédiate.",
  },
  {
    label: "Découverte",
    detail: "Goût, odeur, texte et son se répondent.",
  },
  {
    label: "Consommation",
    detail: "Rituel personnel, sans vitesse, sans répétition.",
  },
  {
    label: "Conservation",
    detail: "L'objet reste. La mémoire s'ancre.",
  },
];

const timings = [
  { label: "Ouverture", value: "14h00" },
  { label: "Clôture", value: "Selon épuisement" },
  { label: "Stock", value: "178 / 300" },
];

export default function RitualPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col gap-12 px-6 py-24">
      <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">Rituel en cours</p>

      <div className="space-y-3">
        <h1 className="text-[clamp(2.4rem,6vw,3.8rem)] font-[family-name:var(--font-display)] uppercase tracking-[var(--tracking-ritual)]">
          Dakar souterrain
        </h1>
        <p className="text-sm uppercase tracking-[0.45em] text-[var(--color-text-secondary)]">
          Édition 08 · Novembre
        </p>
      </div>

      <article className="space-y-6">
        <p className="text-base leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Une boîte sombre, un intérieur ivoire, des matières numérotées. Le rituel commence par le
          silence, puis par un geste précis. Tout est limité, rien n&apos;est répété.
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

      <div className="grid gap-6 border-y border-[var(--color-separator)] py-8 sm:grid-cols-2 lg:grid-cols-3">
        {sequence.map((step) => (
          <div key={step.label}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
              {step.label}
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{step.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 text-xs uppercase tracking-[0.45em] text-[var(--color-text-secondary)] sm:grid-cols-3">
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
        Aucune invitation n&apos;est émise pendant la fenêtre.
      </p>
    </section>
  );
}

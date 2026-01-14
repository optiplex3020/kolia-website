import Link from "next/link";

const accessSteps = [
  {
    title: "Invitation",
    text: "Une invitation arrive par lettre ou par un membre existant.",
  },
  {
    title: "Fenêtre",
    text: "L'accès est ouvert 48h maximum, le mardi à 14h.",
  },
  {
    title: "Rituel",
    text: "Chaque achat correspond à un objet unique, numéroté.",
  },
];

const accessRules = [
  "Aucun abonnement flexible.",
  "Pas de promotion ni de réassort.",
  "Paiement en ligne sécurisé.",
  "Expédition sous 48h après l'achat.",
];

const faqs = [
  {
    question: "Puis-je m'abonner ?",
    answer:
      "Non. Kolia fonctionne par fenêtres d'achat ponctuelles. Chaque rituel est acheté séparément.",
  },
  {
    question: "Comment obtenir une invitation ?",
    answer:
      "Écrivez à la Lettre Kolia ou passez par un membre existant. Nous répondons sous 24h ouvrées.",
  },
  {
    question: "Livrez-vous à l'international ?",
    answer:
      "Oui. L'expédition est limitée à un nombre restreint de destinations, communiqué lors de l'ouverture.",
  },
];

export default function SabonnerPage() {
  return (
    <div className="pt-24">
      <section className="section-padding border-b border-[var(--color-separator)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-text-muted)]">
            Accès
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,4.2rem)] uppercase tracking-[var(--tracking-ritual)]">
            Entrer par invitation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Kolia n&apos;est pas un abonnement flexible. Chaque rituel s&apos;achète pendant une
            fenêtre courte et ne revient jamais.
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

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {accessSteps.map((step) => (
              <div key={step.title} className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-text-muted)]">
                  {step.title}
                </p>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-separator)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
                Règles d&apos;accès
              </h2>
              <p className="mt-6 text-base text-[var(--color-text-secondary)]">
                Nous protégeons la rareté et la lenteur. Les règles sont simples, sans marketing
                agressif.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] bg-[var(--color-background)] p-6">
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                {accessRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] uppercase tracking-[var(--tracking-wide)]">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[var(--radius-xl)] border border-[var(--color-separator)] p-6">
                <p className="text-sm uppercase tracking-[0.45em] text-[var(--color-text-muted)]">
                  {faq.question}
                </p>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

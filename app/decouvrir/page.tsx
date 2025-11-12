import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "Découvrir Kolia — Maison Sensorielle du Goût",
  description:
    "Plongez dans l'univers Kolia. Découvrez comment nous célébrons les cultures culinaires africaines à travers des expériences sensorielles uniques.",
};

export default function DecouvrirPage() {
  return (
    <div className="overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="section-padding relative bg-gradient-to-br from-[var(--color-ivoire)] via-[var(--color-background)] to-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn delay={0.1}>
              <Badge variant="primary" size="md" className="mb-8">
                Découvrir Kolia
              </Badge>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <h1 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[var(--leading-tight)]">
                Une expérience
                <br />
                <span className="text-[var(--color-rouge-brique)]">
                  multi-sensorielle
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <p className="mb-12 text-[var(--font-size-xl)] leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                Kolia réinvente l'art de la dégustation. Chaque mois, nous
                composons une box qui célèbre un territoire, une tradition, des
                savoir-faire ancestraux africains et diasporiques.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.7}>
              <Button variant="primary" size="xl" asChild>
                <Link href="/sabonner">Commencer l'aventure</Link>
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* Decorative blob */}
        <div className="pointer-events-none absolute -right-48 top-0 h-96 w-96 rounded-full bg-[var(--color-bronze)]/10 blur-3xl" />
      </section>

      {/* Comment ça marche */}
      <section className="section-padding bg-[var(--color-surface-elevated)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-20 text-center">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)]">
                Comment ça marche ?
              </h2>
              <p className="text-[var(--font-size-lg)] text-[var(--color-text-secondary)]">
                Une expérience en 4 étapes simples
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.15}>
                <div className="relative">
                  {/* Step number */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-vert-kolia)] to-[var(--color-vert-kolia)]/70 text-2xl font-bold text-[var(--color-ivoire)]">
                    {index + 1}
                  </div>

                  <h3 className="mb-3 text-[var(--font-size-2xl)] font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-[var(--font-size-base)] leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>

                  {/* Connector line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-[2px] w-full bg-gradient-to-r from-[var(--color-vert-kolia)] to-transparent lg:block" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous recevez */}
      <section className="section-padding bg-gradient-to-b from-[var(--color-background)] to-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-20 text-center">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)]">
                Ce que contient une box Kolia
              </h2>
              <p className="text-[var(--font-size-lg)] text-[var(--color-text-secondary)]">
                Six éléments soigneusement sélectionnés pour éveiller vos sens
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {boxContents.map((content, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <Card variant="elevated" padding="lg" className="h-full">
                  <CardContent>
                    <div className="mb-6 text-5xl">{content.icon}</div>
                    <h3 className="mb-3 text-[var(--font-size-xl)] font-semibold">
                      {content.title}
                    </h3>
                    <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
                      {content.description}
                    </p>
                    {content.examples && (
                      <ul className="mt-4 space-y-2 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
                        {content.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--color-rouge-brique)]">
                              •
                            </span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-[var(--color-vert-kolia)] text-[var(--color-ivoire)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn direction="right">
              <div>
                <h2 className="mb-8 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] text-[var(--color-ivoire)]">
                  Nos engagements
                </h2>
                <p className="text-[var(--font-size-lg)] leading-[var(--leading-relaxed)] text-[var(--color-ivoire)]/90">
                  Chez Kolia, chaque décision est guidée par nos valeurs
                  fondamentales : authenticité, équité, durabilité et excellence.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-[var(--radius-xl)] border border-[var(--color-ivoire)]/20 bg-[var(--color-ivoire)]/10 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-2xl">{value.icon}</span>
                      <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--color-ivoire)]">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-[var(--font-size-sm)] text-[var(--color-ivoire)]/80">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn direction="up">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)]">
              Prêt à découvrir
              <br />
              votre première box ?
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mb-12 text-[var(--font-size-xl)] leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
              Choisissez l'abonnement qui vous correspond et recevez votre
              première box Kolia sous 5 à 7 jours.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="primary" size="xl" asChild>
                <Link href="/sabonner">Voir les abonnements</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/collections">Explorer les collections</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Choisissez",
    description:
      "Sélectionnez l'abonnement qui correspond à vos envies : Découverte, Flex ou Prestige.",
  },
  {
    title: "Recevez",
    description:
      "Chaque début de mois, votre box arrive chez vous avec son livret et ses surprises.",
  },
  {
    title: "Découvrez",
    description:
      "Explorez les ingrédients, lisez les récits, écoutez la playlist, cuisinez les recettes.",
  },
  {
    title: "Partagez",
    description:
      "Rejoignez notre communauté, participez aux masterclass et partagez vos créations.",
  },
];

const boxContents = [
  {
    icon: "🌶️",
    title: "Ingrédients rares",
    description:
      "3 à 5 ingrédients premium sélectionnés chez des producteurs africains.",
    examples: ["Épices artisanales", "Huiles précieuses", "Graines anciennes"],
  },
  {
    icon: "📖",
    title: "Livret recettes",
    description:
      "20 à 24 pages de recettes, récits et techniques signées par des chefs locaux.",
    examples: ["4 recettes détaillées", "Histoire des ingrédients", "Conseils de chef"],
  },
  {
    icon: "🎨",
    title: "Œuvre d'art",
    description:
      "Une création originale signée par un artiste africain contemporain.",
    examples: ["Illustration exclusive", "Carte postale", "Affiche"],
  },
  {
    icon: "🎵",
    title: "Playlist",
    description:
      "Une sélection musicale pour accompagner votre expérience culinaire.",
  },
  {
    icon: "🎥",
    title: "Masterclass",
    description:
      "Accès à une masterclass en ligne avec le chef ou producteur du mois.",
  },
  {
    icon: "👥",
    title: "Communauté",
    description:
      "Rejoignez notre espace membre pour échanger, partager et apprendre.",
  },
];

const values = [
  {
    icon: "🤝",
    title: "Commerce équitable",
    description:
      "Nous rémunérons justement tous nos partenaires et producteurs, avec transparence.",
  },
  {
    icon: "🌱",
    title: "Durabilité",
    description:
      "Packaging recyclable, ingrédients bio, logistique optimisée et compensée carbone.",
  },
  {
    icon: "✨",
    title: "Excellence",
    description:
      "Chaque élément est sélectionné pour sa qualité exceptionnelle et son histoire unique.",
  },
  {
    icon: "🌍",
    title: "Authenticité",
    description:
      "Collaborations directes avec des artisans pour préserver les savoir-faire traditionnels.",
  },
];

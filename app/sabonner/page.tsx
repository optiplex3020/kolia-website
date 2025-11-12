"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function SabonnerPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Kolia Découverte",
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      description: "L'expérience Kolia essentielle",
      features: [
        "1 box par mois",
        "3 mélanges d'épices + ingrédients rares",
        "Livret 20 pages avec 4 recettes",
        "Accès communauté privée",
        "Contenus exclusifs (playlists, vidéos)",
        "Livraison offerte en France",
      ],
      popular: false,
      cta: "Commencer l'expérience",
    },
    {
      name: "Kolia Flex",
      monthlyPrice: 44.99,
      annualPrice: null,
      description: "Sans engagement, à l'unité",
      features: [
        "Commande à l'unité",
        "Tous les avantages Découverte",
        "Parfait pour offrir",
        "Aucun engagement",
        "Livraison offerte en France",
      ],
      popular: false,
      cta: "Commander une box",
    },
    {
      name: "Kolia Prestige",
      monthlyPrice: 89.99,
      annualPrice: 899.99,
      description: "L'expérience ultime",
      features: [
        "Box premium avec ingrédients ultra-rares",
        "Objet design inclus chaque mois",
        "Accès prioritaire éditions limitées",
        "Consultation culinaire trimestrielle",
        "Invitations événements exclusifs",
        "Livraison express gratuite",
      ],
      popular: true,
      cta: "Rejoindre Prestige",
      badge: "Le plus populaire",
    },
  ];

  const getCurrentPrice = (plan: typeof plans[0]) => {
    if (plan.annualPrice === null) return plan.monthlyPrice;
    return billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice / 12;
  };

  return (
    <div className="overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-ivoire)] to-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <FadeIn delay={0.1}>
            <Badge variant="primary" size="md" className="mb-8">
              Rejoignez Kolia
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[var(--leading-tight)]">
              Choisissez votre formule
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <p className="mb-12 text-[var(--font-size-xl)] leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
              Un rituel mensuel qui célèbre la lenteur, la beauté et les cultures
              africaines contemporaines. Sans engagement, résiliation simple.
            </p>
          </FadeIn>

          {/* Billing Toggle */}
          <FadeIn delay={0.7}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-elevated)] p-2 shadow-[var(--shadow-sm)]">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[var(--tracking-wide)] transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-[var(--color-vert-kolia)] text-[var(--color-ivoire)] shadow-[var(--shadow-md)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[var(--tracking-wide)] transition-all ${
                  billingPeriod === "annual"
                    ? "bg-[var(--color-vert-kolia)] text-[var(--color-ivoire)] shadow-[var(--shadow-md)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Annuel
                <Badge variant="secondary" size="sm" className="ml-2">
                  -17%
                </Badge>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} direction="up" delay={index * 0.15}>
                <Card
                  variant="elevated"
                  padding="xl"
                  className={`relative h-full ${
                    plan.popular
                      ? "border-4 border-[var(--color-rouge-brique)] scale-105"
                      : ""
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="secondary" size="md">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardContent>
                    <div className="mb-8 text-center">
                      <h3 className="mb-2 font-[family-name:var(--font-display)] text-[var(--font-size-3xl)] font-bold">
                        {plan.name}
                      </h3>
                      <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-8 text-center">
                      <div className="mb-2 flex items-baseline justify-center gap-2">
                        <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--color-text-primary)]">
                          {getCurrentPrice(plan).toFixed(2)}€
                        </span>
                        <span className="text-[var(--font-size-lg)] text-[var(--color-text-secondary)]">
                          /mois
                        </span>
                      </div>
                      {billingPeriod === "annual" && plan.annualPrice && (
                        <p className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
                          Soit {plan.annualPrice.toFixed(2)}€ facturé annuellement
                        </p>
                      )}
                    </div>

                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      fullWidth
                      className="mb-8"
                    >
                      {plan.cta}
                    </Button>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-rouge-brique)]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Trust Signals */}
          <FadeIn delay={0.6}>
            <div className="mt-16 flex flex-col items-center justify-center gap-6 text-[var(--font-size-sm)] text-[var(--color-text-muted)] sm:flex-row">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-[var(--color-rouge-brique)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)]">
                Questions fréquentes
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} direction="up" delay={index * 0.1}>
                <Card variant="elevated" padding="lg">
                  <CardContent>
                    <h3 className="mb-3 text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)]">
                      {faq.question}
                    </h3>
                    <p className="text-[var(--font-size-base)] leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[var(--color-vert-kolia)] text-[var(--color-ivoire)]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn direction="up">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)] text-[var(--color-ivoire)]">
              Plus de 1000 abonnés
              <br />
              nous font déjà confiance
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mb-10 text-[var(--font-size-xl)] leading-[var(--leading-relaxed)] text-[var(--color-ivoire)]/90">
              Rejoignez une communauté passionnée qui célèbre la gastronomie
              africaine avec authenticité et modernité.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <Button
              variant="secondary"
              size="xl"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[var(--color-ivoire)] text-[var(--color-vert-kolia)] hover:bg-[var(--color-surface)]"
            >
              Choisir ma formule
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

const trustSignals = [
  "Paiement 100% sécurisé",
  "Résiliation en 2 clics",
  "Satisfait ou remboursé 30 jours",
];

const faqs = [
  {
    question: "Comment fonctionne l'abonnement ?",
    answer:
      "Vous recevez automatiquement votre box Kolia chaque mois. Vous pouvez mettre en pause ou annuler à tout moment depuis votre espace membre. Aucun engagement, aucun frais de résiliation.",
  },
  {
    question: "Quand vais-je recevoir ma première box ?",
    answer:
      "Si vous vous abonnez avant le 25 du mois, vous recevrez votre box le mois suivant. Les box sont expédiées entre le 1er et le 5 de chaque mois.",
  },
  {
    question: "Puis-je offrir un abonnement Kolia ?",
    answer:
      "Absolument ! La formule Kolia Flex est parfaite pour offrir. Vous pouvez commander une ou plusieurs box en cadeau, avec un message personnalisé.",
  },
  {
    question: "Les ingrédients sont-ils bio ?",
    answer:
      "Nous privilégions les producteurs artisanaux et les circuits courts. La majorité de nos ingrédients sont bio ou issus de l'agriculture raisonnée. Chaque produit est tracé et son origine détaillée dans le livret.",
  },
  {
    question: "Livrez-vous hors de France ?",
    answer:
      "Actuellement, nous livrons en France métropolitaine et en Belgique. L'expansion vers d'autres pays européens est prévue courant 2026.",
  },
];

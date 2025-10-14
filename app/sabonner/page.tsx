"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function SabonnerPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[var(--color-sand)] to-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
              Rejoignez Kolia
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-8">
              Choisissez votre formule
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto mb-12">
              Un rituel mensuel qui célèbre la lenteur, la beauté et les cultures africaines
              contemporaines. Sans engagement, résiliation simple.
            </p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-4 bg-white p-2 rounded-full shadow-lg"
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-[var(--color-terracotta)] text-white"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === "annual"
                    ? "bg-[var(--color-terracotta)] text-white"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Annuel
                <span className="ml-2 text-xs bg-[var(--color-ochre)] text-white px-2 py-1 rounded-full">
                  -17%
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                  plan.popular ? "ring-4 ring-[var(--color-terracotta)] scale-105" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--color-terracotta)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-[var(--color-text-primary)]">
                        {getCurrentPrice(plan).toFixed(2)}€
                      </span>
                      <span className="text-lg text-[var(--color-text-secondary)]">/mois</span>
                    </div>
                    {billingPeriod === "annual" && plan.annualPrice && (
                      <p className="text-sm text-[var(--color-text-light)] mt-2">
                        Soit {plan.annualPrice.toFixed(2)}€ facturé annuellement
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-6 py-4 rounded-full text-base font-medium transition-colors shadow-lg ${
                      plan.popular
                        ? "bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-ochre)]"
                        : "bg-[var(--color-sand)] text-[var(--color-text-primary)] hover:bg-[var(--color-beige)]"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--color-terracotta)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-[var(--color-text-light)]"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[var(--color-terracotta)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Paiement 100% sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[var(--color-terracotta)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Résiliation en 2 clics</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[var(--color-terracotta)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Satisfait ou remboursé 30 jours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-[var(--color-sand)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
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
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-[var(--color-terracotta)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Plus de 1000 abonnés nous font déjà confiance
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Rejoignez une communauté passionnée qui célèbre la gastronomie africaine avec
              authenticité et modernité.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-10 py-4 bg-white text-[var(--color-terracotta)] rounded-full text-lg font-medium hover:bg-[var(--color-sand)] transition-colors shadow-xl"
            >
              Choisir ma formule
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

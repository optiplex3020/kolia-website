"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function LaBoxPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[var(--color-sand)] to-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
                Octobre 2025
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-8">
                Collection
                <br />
                <span className="text-[var(--color-terracotta)]">Dakar Underground</span>
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Plongez dans l'effervescence culinaire de la capitale sénégalaise. Des marchés
                vibrants de Sandaga aux tables créatives de la Médina, découvrez l'âme
                gastronomique de Dakar.
              </p>
              <Link href="/sabonner">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[var(--color-terracotta)] text-white rounded-full text-base font-medium hover:bg-[var(--color-ochre)] transition-colors shadow-lg"
                >
                  Recevoir cette box - 39,99€
                </motion.button>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-stone)] rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📦</div>
                    <p className="text-[var(--color-text-secondary)]">
                      Image de la box Dakar Underground
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anatomy of the Box */}
      <section ref={ref} className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Anatomie de votre box
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Chaque élément est soigneusement sélectionné pour créer une expérience sensorielle
              complète.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: "🌶️",
                title: "Les ingrédients",
                items: [
                  "3 mélanges d'épices signature Kolia",
                  "Fonio bio du terroir sénégalais",
                  "Huile de baobab artisanale",
                  "Pâte d'arachide traditionnelle",
                ],
              },
              {
                icon: "📖",
                title: "Le guide culinaire",
                items: [
                  "Livret 20 pages papier premium",
                  "4 recettes guidées et créatives",
                  "Contexte culturel et récits",
                  "Photos artistiques haute qualité",
                ],
              },
              {
                icon: "🎵",
                title: "L'expérience sensorielle",
                items: [
                  "Carte olfactive à découvrir",
                  "QR code vers playlist Afrobeats exclusive",
                  "Mini-documentaire (8 min) sur Dakar",
                  "Interview de chef local",
                ],
              },
              {
                icon: "🎨",
                title: "La dimension artistique",
                items: [
                  "Œuvre de Fatou Kandé Senghor",
                  "Tissu wax miniature authentique",
                  "Carte postale d'artiste",
                  "Bio complète de l'artiste",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--color-sand)] p-8 rounded-2xl"
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[var(--color-terracotta)] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-24 md:py-32 bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Les 4 recettes du mois
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Thiéboudienne revisité",
                description:
                  "Le plat national sénégalais dans une version contemporaine et audacieuse.",
                difficulty: "Intermédiaire",
                time: "45 min",
              },
              {
                name: "Yassa de légumes grillés",
                description:
                  "Une interprétation végétarienne du classique poulet yassa, mariné aux agrumes.",
                difficulty: "Facile",
                time: "30 min",
              },
              {
                name: "Mafé d'aubergines",
                description:
                  "Un ragoût onctueux à la pâte d'arachide avec une touche de baobab.",
                difficulty: "Facile",
                time: "35 min",
              },
              {
                name: "Caldou de poisson fumé",
                description:
                  "Un bouillon aromatique qui capture l'essence des côtes atlantiques.",
                difficulty: "Avancé",
                time: "60 min",
              },
            ].map((recipe, index) => (
              <motion.div
                key={recipe.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
                  {recipe.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6">{recipe.description}</p>
                <div className="flex gap-6 text-sm text-[var(--color-text-light)]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-terracotta)] rounded-full" />
                    {recipe.difficulty}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-ochre)] rounded-full" />
                    {recipe.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Un packaging
                <br />
                qui raconte une histoire
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Notre box n'est pas un simple emballage. C'est un <strong>objet de collection</strong>,
                pensé pour être conservé, réutilisé, chéri.
              </p>
              <ul className="space-y-4">
                {[
                  "Carton recyclé texturé, fermeture magnétique",
                  "Design épuré avec codes couleurs par région",
                  "Gaufrage discret du logo Kolia",
                  "Compartiments modulaires pour chaque élément",
                  "Dimensions : 25x20x8 cm",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--color-terracotta)] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-beige)] rounded-3xl shadow-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎁</div>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      Image du packaging à venir
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[var(--color-terracotta)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recevez Dakar Underground
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Abonnez-vous avant le 25 octobre pour recevoir cette collection exclusive dès le 1er
              novembre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sabonner">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[var(--color-terracotta)] rounded-full text-lg font-medium hover:bg-[var(--color-sand)] transition-colors shadow-xl"
                >
                  Choisir ma formule
                </motion.button>
              </Link>
              <Link href="/collections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Voir les collections passées
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

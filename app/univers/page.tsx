"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function UniversPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-[var(--color-sand)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-6">
              Notre philosophie
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-8">
              L'Univers Kolia
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Une maison sensorielle culinaire qui réinvente l'expérience gastronomique à travers
              le prisme des cultures africaines et diasporiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-12 text-center">
              Notre Manifeste
            </h2>
            <div className="space-y-8 text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <p className="text-2xl md:text-3xl text-center font-bold text-[var(--color-terracotta)] italic">
                "Kolia n'est ni fast, ni last.
                <br />
                Kolia est au centre du bon."
              </p>
              <p>
                Dans un monde qui accélère sans cesse, nous proposons de <strong>ralentir</strong>.
                Kolia n'est pas un flux de consommation, mais un <strong>rituel mensuel</strong>,
                un moment précieux où l'on se reconnecte avec l'essentiel.
              </p>
              <p>
                Nous ne vendons pas de la nourriture. Nous offrons une{" "}
                <strong>expérience totale</strong> : gustative, olfactive, visuelle, narrative.
                Chaque box est une invitation au voyage intérieur, une célébration de cultures
                vivantes et contemporaines.
              </p>
              <p>
                Nous refusons le folklore et les clichés. Notre mission est de célébrer les
                cultures africaines et diasporiques avec <strong>dignité et modernité</strong>,
                loin des représentations réductrices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-24 md:py-32 bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Nos Valeurs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Lenteur radicale",
                description:
                  "Contre la fast-culture, nous proposons un seul envoi par mois. Chaque box est attendue, désirée, savourée.",
              },
              {
                title: "Universalisme enraciné",
                description:
                  "Partir du local pour toucher l'universel. Célébrer les cultures africaines pour parler à tous.",
              },
              {
                title: "Dignité culturelle",
                description:
                  "Honorer les cultures sans folklore, avec respect et authenticité. Pas d'exotisme, juste de la beauté.",
              },
              {
                title: "Sensorialité totale",
                description:
                  "Au-delà du goût, nous éveillons tous les sens : vue, odorat, toucher, ouïe. Une immersion complète.",
              },
              {
                title: "Beauté accessible",
                description:
                  "Les codes du luxe (packaging noble, narration poétique) à un prix accessible aux jeunes urbains.",
              },
              {
                title: "Connexion humaine",
                description:
                  "Chaque produit a une histoire, chaque artiste a un visage. Nous créons des ponts entre producteurs et gourmets.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-1 bg-[var(--color-terracotta)] mb-6" />
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Notre Processus Créatif
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Chaque collection Kolia est le fruit d'un travail minutieux de recherche, de
              rencontres et de création.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Recherche",
                description:
                  "Exploration des cultures, rencontres avec les producteurs, étude des traditions culinaires.",
              },
              {
                step: "02",
                title: "Curation",
                description:
                  "Sélection rigoureuse des ingrédients et création de mélanges d'épices signature.",
              },
              {
                step: "03",
                title: "Narration",
                description:
                  "Écriture des histoires, collaboration avec des artistes, création de contenus multimédias.",
              },
              {
                step: "04",
                title: "Design",
                description:
                  "Conception du packaging, photographie artistique, assemblage minutieux de chaque box.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[var(--color-terracotta)] mb-4 opacity-40">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">{item.description}</p>
              </motion.div>
            ))}
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
              Rejoignez l'univers Kolia
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Faites partie d'une communauté qui célèbre la lenteur, la beauté et les cultures
              africaines contemporaines.
            </p>
            <Link href="/sabonner">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[var(--color-terracotta)] rounded-full text-lg font-medium hover:bg-[var(--color-sand)] transition-colors shadow-xl"
              >
                Découvrir les formules
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

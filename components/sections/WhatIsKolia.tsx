"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhatIsKolia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Un rituel mensuel",
      description:
        "Pas un flux, mais un moment attendu. Une seule box par mois, pensée comme une collection précieuse.",
    },
    {
      title: "Une expérience totale",
      description:
        "Au-delà du goût : des histoires, des artistes, des playlists, des méditations culinaires.",
    },
    {
      title: "Des cultures vivantes",
      description:
        "Nous célébrons les cultures africaines et diasporiques contemporaines, loin des clichés.",
    },
    {
      title: "Le luxe accessible",
      description:
        "Codes du luxe, packaging noble, narration poétique, à un prix accessible aux jeunes urbains.",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
            Notre essence
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
            Qu'est-ce que Kolia ?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Kolia n'est ni un service de livraison de repas, ni une simple box gastronomique.
            C'est une{" "}
            <span className="text-[var(--color-text-primary)] font-medium">
              invitation au voyage intérieur
            </span>
            , un moment de pause dans un monde accéléré, une reconnexion avec ses racines ou la
            découverte de l'altérité.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-4 w-12 h-1 bg-[var(--color-terracotta)] group-hover:w-20 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] italic max-w-4xl mx-auto">
            "Un objet de désir culturel à l'intersection de l'art, du design et de la
            gastronomie."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

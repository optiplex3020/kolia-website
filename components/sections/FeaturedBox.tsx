"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FeaturedBox() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--color-sand)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-stone)] rounded-2xl overflow-hidden ">
              {/* Placeholder for box image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📦</div>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Image de la box à venir
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-terracotta)] rounded-full opacity-20"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-ochre)] rounded-full opacity-20"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
              Octobre 2025
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
              Collection
              <br />
              <span className="text-[var(--color-terracotta)]">Dakar Underground</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Plongez dans la scène culinaire urbaine de Dakar. Des épices de rue aux saveurs
              raffinées, découvrez la créativité vibrante de la capitale sénégalaise à travers 4
              recettes signature et des ingrédients soigneusement sélectionnés.
            </p>

            {/* What's Inside */}
            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Ce mois-ci :
              </h3>
              <ul className="space-y-3">
                {[
                  "3 mélanges d'épices signature",
                  "Fonio bio du terroir",
                  "Huile de baobab artisanale",
                  "Livret 20 pages avec 4 recettes",
                  "Playlist Afrobeats exclusive",
                  "Œuvre de l'artiste Fatou Kandé Senghor",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-[var(--color-terracotta)] rounded-full flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sabonner">
                <motion.button
                  
                  
                  className="px-8 py-4 bg-[var(--color-terracotta)] text-white rounded-full text-base font-medium hover:bg-[var(--color-ochre)] transition-all duration-200 "
                >
                  Recevoir cette box
                </motion.button>
              </Link>
              <Link href="/la-box">
                <motion.button
                  
                  
                  className="px-8 py-4 bg-transparent border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] rounded-full text-base font-medium hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-200"
                >
                  En savoir plus
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

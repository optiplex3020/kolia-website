"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function FeaturedBox() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--color-sand)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className={`relative ${ready ? "slow-reveal" : ""}`}>
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

            {/* Decorative elements (static, large screens only) */}
            <div className="absolute -top-6 -right-6 hidden h-24 w-24 rounded-full bg-[var(--color-terracotta)]/10 lg:block" />
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-[var(--color-ochre)]/10 lg:block" />
          </div>

          {/* Content Side */}
          <div className={`${ready ? "slow-reveal" : ""}`}>
            <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
              Octobre 2025
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
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
                ].map((item) => (
                  <li key={item} className={`flex items-center gap-3 ${ready ? "slow-reveal" : ""}`}>
                    <span className="h-1.5 w-1.5 bg-[var(--color-terracotta)] rounded-full flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col flex-wrap gap-5 sm:flex-row">
              <Link href="/sabonner" className={`${ready ? "slow-reveal" : ""}`}>
                <span className="inline-flex px-8 py-4 rounded-full text-base font-medium text-white bg-[var(--color-terracotta)] transition-colors duration-700 ease-out hover:bg-[var(--color-ochre)]">
                  Recevoir cette box
                </span>
              </Link>
              <Link href="/la-box" className={`${ready ? "slow-reveal" : ""}`}>
                <span className="inline-flex px-8 py-4 rounded-full text-base font-medium border border-[var(--color-text-primary)] text-[var(--color-text-primary)] transition-colors duration-700 ease-out hover:bg-[var(--color-text-primary)] hover:text-white">
                  En savoir plus
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

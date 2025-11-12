"use client";

import { useEffect, useRef, useState } from "react";

export default function WhatIsKolia() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // Ensure content is visible; rely on CSS slow-reveal when available
    setReady(true);
  }, []);

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
        <div className={`max-w-3xl mb-16 ${ready ? "slow-reveal" : ""}`}>
          <p className="text-[var(--color-text-muted)] uppercase tracking-[0.18em] text-xs mb-3">
            Notre essence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
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
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature.title} className={`group ${ready ? "slow-reveal" : ""}`}>
              <div className="mb-3 w-10 h-px bg-[var(--color-rouge-brique)]/60 group-hover:w-16 transition-all duration-300" />
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`mt-16 text-center ${ready ? "slow-reveal" : ""}`}>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] italic max-w-4xl mx-auto">
            "Un objet de désir culturel à l'intersection de l'art, du design et de la
            gastronomie."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

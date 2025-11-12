"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const testimonials = [
    {
      quote:
        "Kolia m'a reconnectée à mes racines camerounaises d'une manière que je n'aurais jamais imaginée. C'est bien plus qu'une box, c'est une expérience émotionnelle.",
      author: "Léa M.",
      role: "Abonnée depuis 6 mois",
      location: "Paris",
    },
    {
      quote:
        "Le packaging est digne d'un objet de collection. Chaque mois, je découvre des saveurs que je n'ai jamais goûtées ailleurs. C'est un voyage culinaire exceptionnel.",
      author: "Thomas D.",
      role: "Food designer",
      location: "Lyon",
    },
    {
      quote:
        "Enfin des produits africains de qualité premium ! Kolia honore vraiment notre culture. J'attends chaque box avec impatience.",
      author: "Aminata K.",
      role: "Abonnée depuis 8 mois",
      location: "Bruxelles",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-14 ${ready ? "slow-reveal" : ""}`}>
          <p className="text-[var(--color-text-muted)] uppercase tracking-[0.18em] text-xs mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
            Ils vivent l'expérience Kolia
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className={`bg-[var(--color-sand)] p-8 rounded-2xl transition-shadow duration-300 ${
                ready ? "slow-reveal" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="text-[var(--color-terracotta)]/80 text-4xl mb-3 leading-none">"</div>

              {/* Quote */}
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-[var(--color-beige)] pt-6">
                <p className="text-[var(--color-text-primary)] font-semibold mb-1">
                  {testimonial.author}
                </p>
                <p className="text-[var(--color-text-light)] text-sm">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 ${ready ? "slow-reveal" : ""}`}>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Rejoignez plus de 1000 abonnés qui ont déjà adopté le rituel Kolia
          </p>
        </div>
      </div>
    </section>
  );
}

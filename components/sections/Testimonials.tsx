"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
            Témoignages
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
            Ils vivent l'expérience Kolia
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--color-sand)] p-8 rounded-2xl hover: transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="text-[var(--color-terracotta)] text-5xl mb-4 leading-none">"</div>

              {/* Quote */}
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 italic">
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Rejoignez plus de 1000 abonnés qui ont déjà adopté le rituel Kolia
          </p>
        </motion.div>
      </div>
    </section>
  );
}

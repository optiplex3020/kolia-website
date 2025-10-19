"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-background)]/40 to-[var(--color-background)] z-10" />
        {/* Placeholder for hero image - replace with actual image */}
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-sand)] via-[var(--color-beige)] to-[var(--color-stone)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[var(--color-text-secondary)] uppercase tracking-widest text-sm mb-6"
          >
            Maison Sensorielle Culinaire
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-text-primary)] mb-8 leading-tight"
          >
            Kolia n'est ni fast,
            <br />
            ni last.
            <br />
            <span className="text-[var(--color-terracotta)]">
              Kolia est au centre du bon.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Une expérience gastronomique mensuelle qui réinvente les cultures africaines et
            diasporiques. Un rituel, une collection, un voyage intérieur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link href="/sabonner">
              <button className="px-8 py-3 bg-[var(--color-terracotta)] text-white rounded-full text-[15px] font-medium hover:bg-[var(--color-ochre)] transition-all duration-200">
                Découvrir l'expérience
              </button>
            </Link>
            <Link href="/la-box">
              <button className="px-8 py-3 bg-transparent border border-[var(--color-text-primary)] text-[var(--color-text-primary)] rounded-full text-[15px] font-medium hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-200">
                Voir la box du mois
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)]"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

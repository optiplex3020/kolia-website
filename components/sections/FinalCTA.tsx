"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--color-sand)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className={ready ? "slow-reveal" : ""}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
            Prêt à ralentir
            <br />
            et savourer l'instant ?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez la maison Kolia et recevez votre première box dès le mois prochain. Un
            rituel mensuel qui célèbre la lenteur, la beauté et les cultures africaines
            contemporaines.
          </p>

          {/* Pricing Preview */}
          <div className={`inline-block bg-white p-6 rounded-2xl mb-16 ${ready ? "slow-reveal" : ""}`}>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">À partir de</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-[var(--color-text-primary)]">39,99€</span>
              <span className="text-lg text-[var(--color-text-secondary)]">/mois</span>
            </div>
            <p className="text-sm text-[var(--color-text-light)] mt-2">
              Sans engagement • Livraison offerte
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center mt-2 ${ready ? "slow-reveal" : ""}`}>
            <Link href="/sabonner">
              <span className="px-10 py-4 bg-[var(--color-terracotta)] text-white rounded-full text-lg font-medium transition-colors duration-700 ease-out hover:bg-[var(--color-ochre)]">
                Commencer l'expérience
              </span>
            </Link>
            <Link href="/univers">
              <span className="px-10 py-4 bg-transparent border border-[var(--color-text-primary)] text-[var(--color-text-primary)] rounded-full text-lg font-medium transition-colors duration-700 ease-out hover:bg-[var(--color-text-primary)] hover:text-white">
                En savoir plus
              </span>
            </Link>
          </div>

          {/* Trust Signals */}
          <div className={`mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-[var(--color-text-light)] ${ready ? "slow-reveal" : ""}`}>
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
              <span>Paiement sécurisé</span>
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
              <span>Résiliation simple</span>
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
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

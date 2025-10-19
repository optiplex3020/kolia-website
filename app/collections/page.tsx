"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      id: "dakar-underground",
      title: "Dakar Underground",
      date: "Octobre 2025",
      region: "Sénégal",
      status: "Actuel",
      color: "from-[#C97456] to-[#D4A373]",
      description: "La scène culinaire urbaine de la capitale sénégalaise",
    },
    {
      id: "route-sahel",
      title: "Route des Épices Sahéliennes",
      date: "Septembre 2025",
      region: "Sahel",
      status: "Archive",
      color: "from-[#D4A373] to-[#9B8B7E]",
      description: "Un voyage à travers les traditions culinaires du Sahel",
    },
    {
      id: "abidjan-memoires",
      title: "Mémoires d'Abidjan",
      date: "Août 2025",
      region: "Côte d'Ivoire",
      status: "Archive",
      color: "from-[#7A8450] to-[#4A5B7C]",
      description: "Les saveurs vibrantes de la perle des lagunes",
    },
    {
      id: "maghreb-moderne",
      title: "Maghreb Moderne",
      date: "Juillet 2025",
      region: "Afrique du Nord",
      status: "Archive",
      color: "from-[#4A5B7C] to-[#C97456]",
      description: "La cuisine maghrébine réinventée par la nouvelle génération",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[var(--color-sand)] to-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--color-terracotta)] uppercase tracking-widest text-sm mb-4">
              Archive
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-8">
              Les Collections Kolia
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Chaque mois, une nouvelle collection raconte une histoire géographique, culturelle ou
              sensorielle. Découvrez nos voyages culinaires passés et à venir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/collections/${collection.id}`}>
                  <div className="relative overflow-hidden rounded-3xl  hover: transition-all duration-300">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-90 group-hover:opacity-100 transition-opacity`}
                    />

                    {/* Status Badge */}
                    {collection.status === "Actuel" && (
                      <div className="absolute top-6 right-6 z-10">
                        <span className="bg-white text-[var(--color-terracotta)] px-4 py-2 rounded-full text-sm font-medium ">
                          Box actuelle
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative p-8 h-96 flex flex-col justify-end">
                      <div className="mb-4">
                        <span className="text-white/80 text-sm font-medium">
                          {collection.date} • {collection.region}
                        </span>
                      </div>
                      <h2 className="text-4xl font-bold text-white mb-4 group-hover:scale-105 transition-transform">
                        {collection.title}
                      </h2>
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {collection.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-white font-medium">
                        <span>Découvrir</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 md:py-32 bg-[var(--color-sand)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Prochaines Collections
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
              Abonnez-vous pour ne manquer aucune de nos futures explorations culinaires.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { month: "Novembre", title: "Lagos Electric", region: "Nigeria" },
                { month: "Décembre", title: "Hiver Éthiopien", region: "Éthiopie" },
                { month: "Janvier", title: "Zanzibar Spice", region: "Tanzanie" },
              ].map((preview, index) => (
                <motion.div
                  key={preview.month}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl"
                >
                  <p className="text-[var(--color-terracotta)] font-medium mb-2">
                    {preview.month} 2025
                  </p>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
                    {preview.title}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm">{preview.region}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/sabonner">
              <motion.button
                
                
                className="px-10 py-4 bg-[var(--color-terracotta)] text-white rounded-full text-lg font-medium hover:bg-[var(--color-ochre)] transition-all duration-200 "
              >
                S'abonner maintenant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

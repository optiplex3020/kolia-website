"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JournalPage() {
  const articles = [
    {
      id: "1",
      category: "Portrait",
      title: "Fatou Kandé Senghor : L'art comme pont entre les cultures",
      excerpt:
        "Rencontre avec l'artiste sénégalaise dont l'œuvre illustre notre collection Dakar Underground.",
      date: "15 octobre 2025",
      readTime: "8 min",
      image: "🎨",
    },
    {
      id: "2",
      category: "Ingrédient",
      title: "Le fonio, super-grain millénaire redécouvert",
      excerpt:
        "Plongée dans l'histoire et les bienfaits de cette céréale ancestrale d'Afrique de l'Ouest.",
      date: "10 octobre 2025",
      readTime: "6 min",
      image: "🌾",
    },
    {
      id: "3",
      category: "Recette",
      title: "Thiéboudienne : Au-delà du plat national",
      excerpt:
        "Comment le riz au poisson sénégalais est devenu une icône culinaire panafricaine.",
      date: "5 octobre 2025",
      readTime: "10 min",
      image: "🍚",
    },
    {
      id: "4",
      category: "Culture",
      title: "La cuisine de rue à Dakar : Une révolution silencieuse",
      excerpt:
        "Exploration de la scène street food dakaroise et de ses acteurs innovants.",
      date: "28 septembre 2025",
      readTime: "12 min",
      image: "🏙️",
    },
    {
      id: "5",
      category: "Producteur",
      title: "Awa Diop et son huile de baobab artisanale",
      excerpt:
        "Portrait d'une productrice qui perpétue un savoir-faire ancestral avec une vision moderne.",
      date: "20 septembre 2025",
      readTime: "7 min",
      image: "🌳",
    },
    {
      id: "6",
      category: "Philosophie",
      title: "Ralentir pour mieux savourer : Notre manifeste",
      excerpt:
        "Pourquoi Kolia choisit la lenteur radicale dans un monde accéléré.",
      date: "15 septembre 2025",
      readTime: "9 min",
      image: "⏰",
    },
  ];

  const categories = ["Tous", "Portrait", "Ingrédient", "Recette", "Culture", "Producteur", "Philosophie"];

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
              Éditorial
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-8">
              Le Journal Kolia
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Récits, portraits, recettes et réflexions. Un espace pour approfondir les histoires
              derrière chaque box, célébrer les artisans et explorer les cultures culinaires
              africaines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[var(--color-background)] sticky top-24 z-40 border-b border-[var(--color-beige)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  category === "Tous"
                    ? "bg-[var(--color-terracotta)] text-white"
                    : "bg-[var(--color-sand)] text-[var(--color-text-secondary)] hover:bg-[var(--color-beige)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/journal/${articles[0].id}`}>
              <div className="group relative bg-gradient-to-br from-[var(--color-terracotta)] to-[var(--color-ochre)] rounded-3xl overflow-hidden  hover:shadow-3xl transition-all">
                <div className="p-12 md:p-16 flex items-center justify-center min-h-[400px]">
                  <div className="max-w-3xl text-center text-white">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                      {articles[0].category} • À la une
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 group-hover:scale-105 transition-transform">
                      {articles[0].title}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-white/80">
                      <span>{articles[0].date}</span>
                      <span>•</span>
                      <span>{articles[0].readTime} de lecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/journal/${article.id}`}>
                  <div className="group bg-[var(--color-sand)] rounded-2xl overflow-hidden  hover: transition-all h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-stone)] flex items-center justify-center">
                      <span className="text-6xl">{article.image}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="inline-block text-[var(--color-terracotta)] text-sm font-medium mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-terracotta)] transition-all duration-200">
                        {article.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[var(--color-text-light)]">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-[var(--color-terracotta)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recevez nos nouveaux articles
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Inscrivez-vous à notre newsletter pour ne rien manquer de nos récits, portraits et
              découvertes culinaires.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-full bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                
                
                type="submit"
                className="px-8 py-4 bg-[var(--color-text-primary)] text-white rounded-full text-base font-medium hover:bg-[var(--color-text-secondary)] transition-all duration-200 "
              >
                S'inscrire
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card, { CardContent } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "Collections Kolia — Archive des Box",
  description:
    "Découvrez toutes nos collections passées et à venir. Chaque mois, une nouvelle exploration culinaire des cultures africaines et diasporiques.",
};

export default function CollectionsPage() {
  return (
    <div className="overflow-hidden pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-ivoire)] to-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <FadeIn delay={0.1}>
            <Badge variant="outline" size="md" className="mb-8">
              Archive
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[var(--leading-tight)]">
              Les Collections Kolia
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <p className="text-[var(--font-size-xl)] leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
              Chaque mois, une nouvelle collection raconte une histoire
              géographique, culturelle ou sensorielle.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {collections.map((collection, index) => (
              <FadeIn key={collection.id} direction="up" delay={index * 0.1}>
                <Link href={`/collections/${collection.id}`}>
                  <div className="group relative overflow-hidden rounded-[var(--radius-2xl)] transition-all hover:shadow-[var(--shadow-2xl)]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-90 transition-opacity group-hover:opacity-100`}
                    />

                    {collection.status === "Actuel" && (
                      <div className="absolute right-6 top-6 z-10">
                        <Badge variant="secondary" size="md">
                          Box actuelle
                        </Badge>
                      </div>
                    )}

                    <div className="relative flex h-[400px] flex-col justify-end p-8">
                      <div className="mb-4 text-sm font-medium text-white/80">
                        {collection.date} • {collection.region}
                      </div>
                      <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white transition-transform group-hover:scale-105">
                        {collection.title}
                      </h2>
                      <p className="mb-6 text-lg leading-relaxed text-white/90">
                        {collection.description}
                      </p>

                      <div className="flex items-center gap-2 font-medium text-white">
                        <span>Découvrir</span>
                        <svg
                          className="h-5 w-5 transition-transform group-hover:translate-x-2"
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

                    <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/10" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Prochaines Collections */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-[var(--font-size-5xl)]">
              Prochaines Collections
            </h2>
            <p className="mb-12 text-[var(--font-size-lg)] text-[var(--color-text-secondary)]">
              Abonnez-vous pour ne manquer aucune de nos futures explorations.
            </p>
          </FadeIn>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {upcomingCollections.map((preview, index) => (
              <FadeIn key={preview.month} direction="up" delay={index * 0.1}>
                <Card variant="elevated" padding="lg">
                  <CardContent>
                    <Badge variant="secondary" size="sm" className="mb-3">
                      {preview.month} 2025
                    </Badge>
                    <h3 className="mb-2 text-[var(--font-size-xl)] font-semibold">
                      {preview.title}
                    </h3>
                    <p className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
                      {preview.region}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <Button variant="primary" size="xl" asChild>
              <Link href="/sabonner">S'abonner maintenant</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

const collections = [
  {
    id: "dakar-underground",
    title: "Dakar Underground",
    date: "Novembre 2025",
    region: "Sénégal",
    status: "Actuel",
    color: "from-[#C97456] to-[#D4A373]",
    description: "La scène culinaire urbaine de la capitale sénégalaise",
  },
  {
    id: "route-sahel",
    title: "Route des Épices Sahéliennes",
    date: "Octobre 2025",
    region: "Sahel",
    status: "Archive",
    color: "from-[#D4A373] to-[#9B8B7E]",
    description: "Un voyage à travers les traditions culinaires du Sahel",
  },
  {
    id: "abidjan-memoires",
    title: "Mémoires d'Abidjan",
    date: "Septembre 2025",
    region: "Côte d'Ivoire",
    status: "Archive",
    color: "from-[#7A8450] to-[#4A5B7C]",
    description: "Les saveurs vibrantes de la perle des lagunes",
  },
  {
    id: "maghreb-moderne",
    title: "Maghreb Moderne",
    date: "Août 2025",
    region: "Afrique du Nord",
    status: "Archive",
    color: "from-[#4A5B7C] to-[#C97456]",
    description: "La cuisine maghrébine réinventée par la nouvelle génération",
  },
];

const upcomingCollections = [
  { month: "Décembre", title: "Lagos Electric", region: "Nigeria" },
  { month: "Janvier", title: "Hiver Éthiopien", region: "Éthiopie" },
  { month: "Février", title: "Zanzibar Spice", region: "Tanzanie" },
];

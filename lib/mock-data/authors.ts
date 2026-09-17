import type { Author } from "@/lib/types";

export const AUTHORS: Author[] = [
  {
    id: "a1",
    slug: "magdalena-wrobel",
    name: "Magdalena Wróbel",
    role_title_pl: "redaktor naczelna",
    role_title_en: "editor-in-chief",
    bio_pl:
      "Od dziesięciu lat obserwuje krakowską scenę kulturalną. Wierzy, że dobrą rekomendację da się streścić w dwóch zdaniach — resztę i tak trzeba zobaczyć na żywo.",
    bio_en:
      "Has been watching Kraków's cultural scene for a decade. Believes a good recommendation fits in two sentences — the rest you have to see for yourself.",
    initials: "MW",
    avatar_color: "#B91C5C",
    social_links: [{ label: "Email", url: "mailto:magdalena@karnet.example" }],
  },
  {
    id: "a2",
    slug: "piotr-zawadzki",
    name: "Piotr Zawadzki",
    role_title_pl: "redakcja — muzyka",
    role_title_en: "editorial team — music",
    bio_pl:
      "Pisze o muzyce, bo słuchanie w milczeniu nigdy mu nie wychodziło. Najchętniej o scenie klubowej i offowej, ale nie pogardzi filharmonią.",
    bio_en:
      "Writes about music because listening quietly never quite worked out for him. Happiest covering the club and indie scene, but won't turn down a philharmonic evening.",
    initials: "PZ",
    avatar_color: "#7C3AED",
  },
  {
    id: "a3",
    slug: "aleksandra-kmiecik",
    name: "Aleksandra Kmiecik",
    role_title_pl: "redakcja — teatr i sztuki wizualne",
    role_title_en: "editorial team — theatre & visual arts",
    bio_pl:
      "Teatrolożka z wykształcenia, recenzentka z zamiłowania. Twierdzi, że najlepsze wystawy to te, po których trzeba usiąść i pomilczeć.",
    bio_en:
      "A theatre scholar by training, a critic by inclination. Says the best exhibitions are the ones that leave you needing to sit quietly afterward.",
    initials: "AK",
    avatar_color: "#C2410C",
  },
  {
    id: "a4",
    slug: "tomasz-gorski",
    name: "Tomasz Górski",
    role_title_pl: "redakcja, strona internetowa",
    role_title_en: "editorial team, website",
    bio_pl:
      "Dba o to, żeby dane o wydarzeniach i dostępności się zgadzały — dzwoni do organizatorów, gdy coś nie pasuje. Współtworzy też miesięcznik Karnet.",
    bio_en:
      "Makes sure event and accessibility data actually checks out — calls organisers when something doesn't add up. Also helps put together the monthly Karnet magazine.",
    initials: "TG",
    avatar_color: "#15803D",
  },
];

export function findAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

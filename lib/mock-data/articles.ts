import type { Article } from "@/lib/types";

export const ARTICLES: Article[] = [
  {
    id: "art1",
    slug: "karnet-oglasza-smocze-granie",
    title_pl: "Karnet ogłasza program Smoczego Grania",
    title_en: "Karnet Announces the Dragon's Tune Programme",
    excerpt_pl: "Trzy dni, cztery sceny i ponad trzydzieści koncertów nad Wisłą — poznaj pełny line-up.",
    excerpt_en: "Three days, four stages, and over thirty concerts on the Vistula — meet the full line-up.",
    body_pl: [
      "Smocze Granie wraca po raz szósty i, jak zapowiadają organizatorzy, będzie to jak dotąd największa edycja festiwalu.",
      "Na scenie głównej usłyszymy zarówno uznane zespoły z krajowej listy przebojów, jak i debiutantów, których nazwiska dopiero poznajemy. Wstęp na wszystkie sceny pozostaje bezpłatny.",
      "Redakcja Karnetu będzie na miejscu przez wszystkie trzy dni — śledźcie nasze relacje na bieżąco.",
    ],
    body_en: [
      "Dragon's Tune is back for its sixth edition and, according to the organisers, this will be the festival's biggest yet.",
      "The main stage will feature both established names from the national charts and debut acts whose names we're only just learning. Entry to every stage remains free.",
      "The Karnet team will be on site for all three days — follow our live coverage as it happens.",
    ],
    published_at: "2026-09-02T09:00:00+02:00",
    article_type: "news",
    author_slug: "magdalena-wrobel",
    event_slugs: ["smocze-granie"],
  },
  {
    id: "art2",
    slug: "czego-oczekiwac-retrospektywa",
    title_pl: "Czego się spodziewać po Retrospektywie Kina Środkowej Europy",
    title_en: "What to Expect from the Central European Cinema Retrospective",
    excerpt_pl: "Siedem dni, dziewięć filmów, żadnych powtórek — nasz przewodnik po programie.",
    excerpt_en: "Seven days, nine films, no repeats — our guide to the programme.",
    body_pl: [
      "Kino Panorama po raz kolejny sięga do archiwów, tym razem prezentując cyfrowo zremasterowane kopie klasyki z Czech, Węgier i Polski.",
      "Polecamy szczególnie seans środowy — jeden z rzadziej pokazywanych tytułów w tej części Europy, a naszym zdaniem jeden z najważniejszych.",
    ],
    body_en: [
      "Kino Panorama once again digs into the archives, this time presenting digitally remastered prints of Czech, Hungarian, and Polish classics.",
      "We especially recommend Wednesday's screening — one of the less frequently shown titles from this part of Europe, and in our view one of the most important.",
    ],
    published_at: "2026-09-08T09:00:00+02:00",
    article_type: "preview",
    author_slug: "aleksandra-kmiecik",
    event_slugs: ["retrospektywa-kina-srodkowej-europy"],
  },
  {
    id: "art3",
    slug: "rozmowa-z-kuratorka-swiatla-miasta",
    title_pl: "Rozmowa z kuratorką wystawy „Światła miasta”",
    title_en: "A Conversation with the Curator of \"City Lights\"",
    excerpt_pl: "O tym, dlaczego nocna fotografia mówi o mieście więcej niż zdjęcia w pełnym słońcu.",
    excerpt_en: "On why night photography says more about a city than pictures taken in broad daylight.",
    body_pl: [
      "Rozmawiamy o procesie selekcji ponad dwustu zdjęć, które ostatecznie trafiły na ściany Galerii Nowa Fala.",
      "— W nocy miasto przestaje pozować — mówi kuratorka. — Dlatego te zdjęcia wydają się bardziej szczere.",
    ],
    body_en: [
      "We talk about the process of selecting the more than two hundred photographs that ultimately made it onto the walls of Nowa Fala Gallery.",
      "\"At night, the city stops posing,\" the curator says. \"That's why these photographs feel more honest.\"",
    ],
    published_at: "2026-09-09T09:00:00+02:00",
    article_type: "interview",
    author_slug: "aleksandra-kmiecik",
    event_slugs: ["swiatla-miasta"],
  },
  {
    id: "art4",
    slug: "sen-nocy-letniej-recenzja",
    title_pl: "Sen nocy letniej w nowej odsłonie — recenzja",
    title_en: "A Midsummer Night's Dream, Reimagined — Review",
    excerpt_pl: "Muzyczna wersja komedii Szekspira broni się przede wszystkim energią zespołu.",
    excerpt_en: "The musical take on Shakespeare's comedy works best thanks to the ensemble's sheer energy.",
    body_pl: [
      "Nowa inscenizacja Teatru Pod Żaglem stawia na żywą muzykę i skromną scenografię — i to dobra decyzja.",
      "Największym atutem spektaklu jest obsada, która świetnie się bawi na scenie, a ta radość udziela się widowni od pierwszych minut.",
    ],
    body_en: [
      "Teatr Pod Żaglem's new production leans on live music and modest staging — and it's the right call.",
      "The show's biggest strength is a cast that's clearly enjoying themselves on stage, and that joy reaches the audience from the very first minutes.",
    ],
    published_at: "2026-09-15T09:00:00+02:00",
    article_type: "review",
    author_slug: "aleksandra-kmiecik",
    event_slugs: ["sen-nocy-letniej"],
  },
  {
    id: "art5",
    slug: "co-w-najnowszym-numerze-karnetu",
    title_pl: "Co w najnowszym numerze Karnetu",
    title_en: "What's in the Latest Issue of Karnet",
    excerpt_pl: "Numer 328 już dostępny — o świętowaniu jesieni w mieście i nie tylko.",
    excerpt_en: "Issue 328 is out now — on celebrating autumn in the city, and more.",
    body_pl: [
      "W najnowszym wydaniu magazynu piszemy o jesiennych festiwalach, rozmawiamy z krakowskimi rzemieślnikami i podsuwamy plan na cały weekend.",
      "Numer znajdziecie w wersji cyfrowej na naszej stronie, a wydanie papierowe — w punktach partnerskich w całym mieście.",
    ],
    body_en: [
      "In the latest issue we write about autumn festivals, talk to Kraków artisans, and put together a plan for the whole weekend.",
      "You'll find the digital edition on our site, and the print edition at partner locations around the city.",
    ],
    published_at: "2026-09-01T09:00:00+02:00",
    article_type: "magazine",
    author_slug: "tomasz-gorski",
    event_slugs: [],
  },
  {
    id: "art6",
    slug: "krakow-swietuje-kulture-dostepna",
    title_pl: "Kraków świętuje kulturę dostępną — nowy raport",
    title_en: "Kraków Celebrates Accessible Culture — a New Report",
    excerpt_pl: "Coraz więcej instytucji w mieście deklaruje pętlę indukcyjną i audiodeskrypcję. Sprawdziliśmy, jak to wygląda naprawdę.",
    excerpt_en: "More and more venues in the city report hearing loops and audio description. We checked what that looks like in practice.",
    body_pl: [
      "Przez ostatni miesiąc redakcja Karnetu dzwoniła do organizatorów i instytucji, żeby zweryfikować dane o dostępności, które publikujemy przy każdym wydarzeniu.",
      "Efekt: coraz więcej miejsc potrafi jasno powiedzieć, czego może się spodziewać osoba poruszająca się na wózku albo korzystająca z pętli indukcyjnej — i to bez względu na to, czy odpowiedź brzmi „tak”, czy „jeszcze nie”.",
    ],
    body_en: [
      "Over the past month the Karnet team has been calling organisers and institutions to verify the accessibility information we publish alongside every event.",
      "The result: more and more venues can now clearly say what a wheelchair user or hearing-loop user should expect — regardless of whether the answer is \"yes\" or \"not yet.\"",
    ],
    published_at: "2026-09-05T09:00:00+02:00",
    article_type: "news",
    author_slug: "tomasz-gorski",
    event_slugs: ["teatr-cieni-basnie-slowianskie"],
  },
];

export function findArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

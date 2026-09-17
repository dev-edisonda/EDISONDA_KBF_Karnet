# Karnet Kraków — Design System

A design system for **Karnet** (`karnet.krakowculture.pl`), the bilingual cultural-events calendar published by **Krakowskie Biuro Festiwalowe (KBF)** under the *Kraków Culture* brand. Karnet started in the late 1990s as the website of the printed monthly *Karnet* and is today the fullest calendar of cultural life in Kraków and its metropolitan communes — festivals, concerts, theatre, literature, film, exhibitions — from the biggest festivals to community culture houses and independent galleries. It is editorially linked to *Kids in Kraków* and to the city tourism portal *Kraków Travel*, both also edited by KBF.

## Sources this system was built from

| Source | Used for |
| --- | --- |
| `main.css` from the live site (supplied by the maintainer) | Exact palette, fonts, type sizes, button heights, radii, transitions. All colour values below are sampled, not guessed. |
| `extra.css`, `bootstrap.css`, `leaflet.css`, `lightbox.css`, `owl.carousel.css`, `daterangepicker.css` | Confirmed the third-party stack: Bootstrap grid, Owl Carousel, Leaflet maps, Lightbox galleries, date-range picker. |
| Screenshots: homepage, events listing, event detail, article page | Layout, mosaic grids, listing rows, sidebar taxonomy, footer. |
| `logo.png` (white) and `logo-black.svg` | The official Kraków Culture / KARNET lockup — copied into `assets/`. |
| Public site copy (Polish) | Tone, casing, category names, real event titles used in the UI kit. |

Site URL: https://karnet.krakowculture.pl · Publisher: Krakowskie Biuro Festiwalowe, ul. Wygrana 2, 30-311 Kraków.

### Known gaps — please supply
1. **Icon fonts.** The site ships two Fontello sets (`fonts/fontello/`, `fonts/fontello2/` — `.woff2/.woff/.ttf/.eot`). The binaries were not supplied, so this system substitutes **Material Symbols Sharp**. Send the Fontello files (or the Fontello config JSON) and the substitution can be replaced glyph-for-glyph — most importantly the brand marks (`icon-social-facebook-alt-detail`), which Material Symbols has no equivalent for: social links currently render as text wordmarks rather than generic stand-in glyphs.
2. **Photography.** No event images were supplied; cards fall back to the site's own pale-rose category-glyph placeholder, and hero bands use a neutral gradient. 3–5 representative photos would finish the UI kit.
3. **Font binaries.** The site self-hosts PT Sans and DM Serif Display as TTFs; this system loads the identical families from Google Fonts. Drop the TTFs in and swap the `@import` in `tokens/fonts.css` if you want zero third-party requests.

## Index

| Path | What it holds |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `base.css`. |
| `components/core/` | Button, IconButton, Icon, Tag (+ CategoryTile), Badge, Card, SectionHeader, Logo. |
| `components/forms/` | Input, SearchField, Select, Checkbox, Radio, Switch. |
| `components/navigation/` | Tabs, Pagination, Breadcrumb. |
| `components/feedback/` | Dialog, Toast, Tooltip. |
| `components/events/` | EventCard, InfoBar, DateBadge. |
| `ui_kits/karnet-web/` | Clickable recreation — `index.html` (desktop: home → listing → event) and `mobile.html`. See its README. |
| `templates/event-listing-page/` | Starting template: full event-listing page. |
| `templates/slide-deck/` | Starting template: 6-slide 16:9 deck in brand. |
| `guidelines/` | 20 specimen cards (colour, type, spacing, radii, elevation, motion, states, logo, photography, iconography, layout). |
| `assets/` | `logo-black.svg`, `logo.png` — the official lockup, two variants. |
| `SKILL.md` | Agent-skill wrapper for use outside this project. |

### Components

Each is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, styled only through CSS custom properties.

**Core** — `Button`, `IconButton`, `Icon`, `Tag`, `CategoryTile`, `Badge`, `Card`, `SectionHeader`, `Logo`
**Forms** — `Input`, `SearchField`, `Select`, `Checkbox`, `Radio`, `Switch`
**Navigation** — `Tabs`, `Pagination`, `Breadcrumb`
**Feedback** — `Dialog`, `Toast`, `Tooltip`
**Events** — `EventCard`, `InfoBar`, `DateBadge`

The site is a CMS-rendered Bootstrap page rather than a component library, so the inventory was derived from what the CSS and screens actually define: buttons in three heights (`.btn` 60px, `.button` 50px, `.filter-button` 40px), the split rose+icon button, the rose icon tile, category tiles, event cards in three densities, search-panel fields, the rose nav tab bar, listing pager, breadcrumb, and the bordered info bars on event pages.

**Intentional additions:** `Icon` (wrapper over the substituted Material Symbols Sharp set so nothing inlines SVG), `Logo` (points at the real asset so no one retypes the wordmark), `Switch` and `Tooltip` (not on the site; included because modern filter panels and icon-only controls need them — drop them if you want strict parity).

## Content fundamentals

Karnet is an **editorial service**, not a marketing site: a newsroom describing other people's events. Copy is informative, warm about the city, never promotional about itself.

- **Polish first, English second.** Every page is bilingual via a PL/EN tile in the header. Write Polish first; English is a translation. Use Polish typographic quotes: `„Starzy i Młodzi, czyli Jazz w Krakowie"`.
- **Sentence case.** Titles, links and buttons: *Zobacz wszystkie*, *Kup bilet*, *Więcej*, *Szukaj wydarzeń*, *Wróć do listy*. Uppercase only for tiny eyebrow/label text (*REKLAMA*, *PORTAL INFORMACYJNO-KULTURALNY MIASTA KRAKOWA*).
- **Counts are part of the heading.** Sections are written *Festiwale (32)*, *Koncerty (205)*, *Wszystkie (685)* — the number lives in rose right beside the serif title.
- **Editions exactly as the organiser names them:** *XXXII Międzynarodowy Festiwal „Starzy i Młodzi, czyli Jazz w Krakowie"*, *17. Przegląd Nowego Kina Francuskiego*, *27. Letni Festiwal Opery Krakowskiej*. Never renumber or translate an edition.
- **Dates in numerals with dots, ranges with a hyphen:** `12.06.2026 - 21.06.2026`, `16.06.2026, 09:00`. In prose, long form: *wtorek, 12 maja 2026*.
- **Facts before adjectives.** Listing copy is one or two sentences that lead with what and where, then trail off with an ellipsis: *"Kolekcja prezentowana w Wieliczce powstała dzięki inżynierowi górnictwa. Muzeum Żup Krakowskich prezentuje ponad 120 obiektów…"* Truncation mid-sentence is normal and expected.
- **Venue is always full:** institution + street + number, e.g. *Krakowski Teatr Variété, ul. Grzegórzecka 71*; communes are named too — *Muzeum Żup Krakowskich w Wieliczce*.
- **Second person, informal, for instructions:** *"Dodaj wybrane wydarzenia do sekcji moje wydarzenia, aby zawsze mieć je pod ręką."* The newsroom appears as *Polecamy*, *Redakcja*, *Wybór redakcji*.
- **Inclusive plurals** where Polish naturally allows them (*pracowniczkami i pracownikami*) — keep them.
- **Access and price are visible copy, not fine print:** *wstęp wolny*, *dostępne dla niepełnosprawnych*, *dla dzieci*, *dla seniorów*, *dla rodzin*, *liczba miejsc ograniczona*, *tłumaczone na polski język migowy*.
- **No emoji, no hype.** No "amazing", no "must-see". Scale is expressed in facts: *ponad 200 filmów*, *ponad 120 obiektów*.
- **Vibe:** a well-edited city monthly that happens to be a database — curious, precise, generous with practical detail.

## Visual foundations

**Overall stance.** Editorial and calm: a light grey page (`#ececec`) carrying white content panels, dusty-rose accents, serif headlines over sans body. Nothing shouts; the photography and event posters supply all the colour energy. The modernization applied here is limited to what was asked for — softer corners, cleaner buttons, a consistent icon set — with the site's colour, type and structure untouched.

**Colour.** One brand family: rose. `--rose-500 #d57e91` is the primary fill (buttons, search submit, icon tiles, carousel dots); `--rose-400 #e6899e` is the accent used for section counts, field labels and the nav bar; `--rose-700 #915966` fills the darker icon block of split buttons and the language tile. Deeper rose values (`#ba6d7f`, `#ad6676`, `#aa6577`, `#85515d`, `#653e47`) step across the nav bar and grade the event categories. Crimson (`#cc234c`, `#a31c3c`, `#80152f`) is for emphasis and errors; `#ff2c5e` appears only on promo photo overlays; `#5b7bbc` is the Facebook tile. Ink is `#323232` for text and — importantly — for **hover fills**. Greys: `#dadada` default border, `#ececec` page and hairlines, `#f4f4f4` alt surface.

**Categories.** Each genre carries its own hue *and* its own icon: Festiwale burnt orange `#c8623f`, Koncerty ochre `#d18a5c`, Spektakle yellow `#c2a44e`, Literatura green `#7fa86b`, Film teal `#5f9e9a`, Wystawy blue `#6d8ec4`, W gminach Metropolii violet `#8f7fbe`, Inne plum `#a97a9e`. Every hue is matched to the rose's value and chroma, so a grid of tiles still reads as one family. No category uses the brand rose — rose is reserved for interactive fills, and category colour only ever appears on tiles, tags and placeholder glyphs. Each has a soft tint for soft tags and empty states.

**Type.** `DM Serif Display` (400 only) for every heading: h1 60px, section headers 48px, h2 30px, h3 20px, h4 18px, plus large numerals. `PT Sans` 16px/1.5 for body, 14px for secondary text and 14px bold for buttons; PT Sans also carries dates and metadata (there is no mono in the brand). Tracking is neutral; the serif is never letterspaced. Card titles clamp to 2–3 lines with an ellipsis.

**Spacing & layout.** 1250px container, 24px page gutters, Bootstrap-derived 12-column grid. Section headers use 50px top / 19px bottom padding — the site's actual rhythm. Listing pages are a 280px filter rail plus results panel with 16px gaps; homepage sections are white panels containing two-column mosaics (one large card + four square tiles). Control heights are 40 / 50 / 60px, hit target ≥44px.

**Backgrounds.** Grey page, white panels, ink for inverted blocks, rose for full-colour statements. No gradients in the chrome; the only gradient is the ink scrim over header photography. No patterns, no textures, no illustration.

**Imagery.** Event posters and documentary photos, full-colour, warm — supplied by organisers, so treatment must stay neutral: no duotone, no grain, no black-and-white. Media sits at 8px radius; the rose category tile pins to a thumbnail's top-left corner and the image is never cropped away from the poster's key art. Missing images fall back to the category glyph in its own hue at 32% opacity on white, 1.5px stroke.

**Text over imagery.** Always the bottom ink scrim (`--scrim-bottom`: 86% → 42% → transparent), never a solid box; the white logo variant sits top-left, the split button bottom-left. Glass/blur is used sparingly — the header bar over photography and the dialog scrim (`blur(3px)`) only.

**Corner radii.** Zero, everywhere. The live site is square (`border-radius: 0` in 52 of 57 declarations) and the system matches it: every radius token — `--radius-control`, `--radius-card`, `--radius-media`, `--radius-field`, `--radius-tag`, `--radius-icon-tile`, and the xs→pill ladder — resolves to `0px`. The named roles are kept so component code stays readable, and so a future softening is a one-file change in `tokens/radii.css`. Nothing in the system is rounded: buttons, chips, tags, cards, fields, media and icon tiles are all hard 90° corners.

**Cards.** White, 1px `#dadada` border, 12px radius, flat at rest. Hover lifts 2px, adds `--shadow-md`, turns the border rose and the title rose. Every event card ends in a **footer bar**: a hairline above, then the date between a rose "+" tile (add to *moje wydarzenia*) and a rose arrow tile.

**Shadows.** Shallow and rare — `xs` inputs, `sm` sticky bars, `md` card hover, `lg` dialogs and toasts. Structure is carried by 1px borders, as on the site.

**Borders.** `--border-subtle` (#ececec) between rows, `--border-default` (#dadada) around cards and fields, `--border-strong` (#323232) for secondary buttons and social tiles, rose for focus and active filters. Section headers close with a hairline; the active in-page tab carries a 3px rose bar.

**Motion.** 200ms and 300ms, `ease-in-out` — exactly what the site uses. Transitions are colour, border and 2px translations only: no bounce, no spring, no scroll-triggered reveals, no entrance animations. Carousels slide; everything else fades or swaps colour. `prefers-reduced-motion` zeroes durations and the press scale.

**Hover states.** The signature move is **inversion**: a rose fill becomes ink `#323232` while the darker icon block becomes rose. Secondary (outlined) buttons fill with ink. Ghost buttons take an `#ececec` wash. Outline icon tiles take a rose border and rose glyph. Links turn rose. Cards lift and their titles turn rose. Never opacity-only.

**Press states.** `scale(0.98)` plus the next darker rose (`--rose-700`). No ripple, no flash.

**Focus.** 2px rose outline at 2px offset for links and buttons; boxed fields switch their border to `--rose-700` and add a 3px 40%-rose halo. Underlined search fields darken their rule.

**Fixed elements.** Sticky filter rail on listings, sticky mobile header, bottom action bar on mobile event pages, centred toast, centred dialog, a scroll-to-top tile (the site's `#scrollTop`). No floating action button.

## Iconography

- **Substituted set — flagged.** The site uses two **Fontello** icon fonts (`fontello`, `fontello2`) via `[class^="icon-"]` classes — `icon-search`, `icon-mail`, `icon-www`, `icon-other-info`, `icon-social-facebook-alt-detail`, plus per-category glyphs. The binaries were not supplied, so this system standardises on **Material Symbols Sharp** — Google's sharp cut, drawn with **square terminals and hard 90° corners**, chosen because it matches the system's 0px radii with no overrides. Axes: `opsz 24`, `wght 400`, `FILL 0`, `GRAD 0`; outline only. It ships as a font via `tokens/fonts.css`, so any page linking `styles.css` renders icons with **no script tag** (the earlier Lucide substitution and its UMD script are gone — Lucide bakes round caps into each icon definition, which is why it was replaced rather than restyled). Send the Fontello assets to restore exact glyphs.
- **Always through the `Icon` component:** `<Icon name="calendar-days" size={18} />`. It keeps the system's kebab-case vocabulary (Lucide-compatible names) and translates internally to Material ligatures; any Material Symbols name also works verbatim. Never inline SVG, never emoji, never a Unicode glyph standing in for an icon.
- **Icons are rose by default** when they sit beside text (venue pins, date bars, field affordances) and white when they sit inside a rose or ink tile.
- **Sizes:** 12px in tags, 14–15px in list rows and buttons, 17–19px in info bars and header tiles, 26–44px for placeholders and empty states.
- **Working vocabulary:** `search`, `map-pin`, `map`, `calendar-days`, `calendar-x`, `clock`, `ticket`, `plus`, `arrow-right`, `arrow-left`, `chevron-right`, `chevron-down`, `chevron-left`, `filter`, `list`, `grid-2x2`, `share-2`, `home`, `menu`, `x`, `check`, `phone`, `mail`, `globe`, `glasses`, and one per category: `flag` (Festiwale), `music` (Koncerty), `drama` (Spektakle), `book-open` (Literatura), `film` (Film), `image` (Wystawy), `calendar-days` (W gminach Metropolii), `layout-grid` (Inne).
- **No brand marks.** Material Symbols ships no platform logos, and a generic substitute reads wrong (a thumbs-up is not Facebook). Social links render as text wordmarks — "Facebook", "Instagram", "LinkedIn", "YouTube" — until the site's Fontello set arrives with its real `icon-social-*` glyphs. Never alias a brand mark to an unrelated icon.
- **Logo, never redrawn.** `assets/logo-black.svg` on light surfaces, `assets/logo.png` (white) on photography, ink and rose. Minimum height 40px; keep clear space equal to the KARNET slab height.
- **Unicode as typography, not iconography:** the middot in meta lines, en dashes in ranges, the ellipsis in truncated summaries, Polish quotes „ ".

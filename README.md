# Shaahi Creations — Website

Static marketing site for Shaahi Creations (Corporate Events and Experiences), built from
the client design deck (`Updated Shaahi Website plan.pdf`) and the capability deck
(`Shaahi_Creations_Capability_Deck-compressed.pdf`).

No frameworks, no build dependencies. The HTML in the project root is the deployable site.

---

## Running it

Open `index.html` directly, or serve the folder:

```bash
node _build/serve.js      # http://localhost:4173
```

A local server is needed for the sitemap, manifest and video to behave exactly as in production.

## Editing content

All copy, project data, client lists, case studies, destinations and blog posts live in
two files. Edit those, then regenerate:

```bash
node _build/build.js
```

| File | What it holds |
| --- | --- |
| `_build/site.js` | Contact details, offices, social links, navigation, headline stats |
| `_build/data.js` | Services, clients, testimonials, gallery, case studies, destinations, venues, blog posts, FAQs |
| `_build/components.js` | Shared markup: head/SEO, header, footer, wave, cards |
| `_build/icons.js` | Inline SVG icon set |
| `_build/build.js` | Home and About page templates |
| `_build/build-pages.js` | Work, case studies, blog, destinations, contact, utility pages |

Never hand-edit the generated `.html` files in the root — the next build overwrites them.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Our Work — Gallery | `our-work.html` |
| Our Work — Case Studies | `case-studies.html` (+ 15 detail pages in `case-studies/`) |
| Our Work — Blogs | `blog.html` (+ 6 articles in `blog/`) |
| Destinations | `destinations.html` (4 tabs: cities, destinations, venue partners, approach) |
| Contact | `contact.html` |
| Utility | `404.html`, `thank-you.html`, `privacy-policy.html` |
| Machine-readable | `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest` |

---

## Search, answer and generative engine optimisation

**SEO.** Unique title and meta description per page, canonical URLs, Open Graph and Twitter
cards, semantic heading order, descriptive alt text on every image, responsive `srcset`,
lazy loading below the fold, `fetchpriority` on hero images, XML sitemap, and a robots file.

**Structured data (80 JSON-LD blocks, all validated).** `Organization` / `ProfessionalService`
with address, contact points and `sameAs`; `WebSite`; `Service` with an `OfferCatalog`;
`BreadcrumbList` on every inner page; `ImageGallery`; `CollectionPage` and `ItemList`;
`Article` per case study; `BlogPosting` per article.

**AEO.** The Canva design has no FAQ section on any page, so the visible FAQ blocks were
removed to match it, and the `FAQPage` schema went with them (Google requires that markup
to mirror visible content). The question-and-answer content is still written and still
served to answer engines through `llms.txt`, and the answers remain in `_build/data.js`
under `faqs`. If you want that search surface back, the cleanest route is a dedicated FAQ
page, which is roughly an hour of work.

**GEO.** `llms.txt` gives generative engines a compact, factual brief of the company, its
services, clients, partnerships, pages and FAQs. `robots.txt` explicitly allows GPTBot,
OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended and
Applebot-Extended. An "at a glance" definition list on the home and destinations pages
states the core facts in a form that is easy to cite.

## Typography

Per the brand type sheet: **Reross Quadratic** for headings, **Poppins** for
sub-headings and body copy. Both are self-hosted, so there is no Google Fonts
request and no third-party dependency.

Poppins is in place, converted from the supplied zip to WOFF2 and subset to
Latin: five weights totalling about 50 KB. **Reross Quadratic was not in the
supplied font folder**, so headings currently fall back to Poppins. Drop
`assets/fonts/reross-quadratic.woff2` in and rebuild, and the build wires it up
on its own. Full detail in `assets/fonts/README.txt`.

Make sure the production host serves `.woff2` as `font/woff2`.

## Responsive and accessibility

Verified with no horizontal overflow at 360, 768 and 1440 px on every page. Fluid type via
`clamp()`, a focus-trapped off-canvas mobile menu that is inert when closed, visible focus
rings, a skip link, `prefers-reduced-motion` support, and a no-JS fallback so scroll-reveal
animations never leave content invisible.

---

## Still needed from the client

These are placeholders. Each is a one-line change in `_build/site.js` or `_build/data.js`.

1. **Hyderabad street address.** `_build/site.js` → `offices[0].street` and `.map`.
   The plan document says the location was shared but it was not included in the files provided.
2. **Pune and Mumbai office addresses.** `_build/site.js` → `offices[1]`, `offices[2]`.
   The plan says these will follow.
3. **Social media URLs.** `_build/site.js` → `social`. Sensible defaults are in place;
   confirm the real handles before go-live.
4. **Team photographs.** Save them into `assets/img/people/` using the exact filenames
   listed in `assets/img/people/README.txt`, then rebuild. `neetu.webp`, `mrunalinli.webp`
   and `mukesh.webp` are missing, and `snehal.webp` and `rupesh.webp` are still stock
   placeholders that should be replaced with the real headshots. Any missing file renders
   as a branded monogram tile, and `node _build/build.js` prints the list of what is still
   missing on every run.
   **LinkedIn URLs** are set for Rupesh Patil, Neetu Elluri and Mukesh Deshmukh. Still
   needed for Snehal Deshpande and Mrunalinli Bhurle, in `_build/data.js` → `team`.
5. **City and destination photography.** The city and destination cards currently use a
   branded gradient with a landmark line illustration. `placeCard` already accepts an
   `img` value, so adding photos is a data change only.
6. **Contact form endpoint.** `contact.html` currently validates and then opens a
   pre-filled email. Point the form `action` at Formspree, Netlify Forms or the client CRM
   and it will submit natively. On success, redirect to `thank-you.html`.
7. **Reross Quadratic font file**, for headings. See `assets/fonts/README.txt`.
8. **Production domain.** `_build/site.js` → `origin` is set to
   `https://www.shaahicreations.com`. Change it if the live domain differs, then rebuild
   so canonicals, Open Graph URLs and the sitemap update.

## Notes on the source material

- Zelis is replaced by **ZEST** throughout, as instructed in the plan document. One
  supplied photograph has "Zelis India" burnt into the LED content and is excluded from
  the site.
- Headline figures follow the approved design (1500+ events executed, 1000+ corporate
  events, 25+ cities, 4000 largest audience) rather than the older capability-deck
  figures, and are used consistently across every page.
- The `What We Do` row on the home page is icons and titles only, per the plan note
  "What we do — just icons". The full service descriptions are carried in the `Service`
  structured data and in `llms.txt`.
- Every section was matched against the Canva file `Updated Shaahi Website plan`
  (12 pages, read directly from the shared link). Layouts follow the design; written
  content follows the plan notes where the two differ. Two such cases: the design mocks
  four offices including Delhi NCR and Bangalore, while the notes name Hyderabad, Pune and
  Mumbai, so the site shows those three; and the design's city grid ends with an "Others"
  card, which now covers Ahmedabad, Chandigarh and Ludhiana.
- The Destinations tabs are anchor links to sections on one page rather than panels that
  hide content. That matches the design, which shows every section in a single scroll, and
  keeps all of it indexable.

- Case study photography is cropped from the capability deck at its native resolution into
  `assets/img/case-studies/`, with sizes listed in `_build/data.js` under `csPhotos`. The deck
  is compressed, so these images are only 370 to 840 px wide. Replacing them with the original
  photographs under the same filenames (and updating `csPhotos`) will sharpen every case study.
  Porsche and the Rishikesh retreat are not in the deck and still use gallery images.

## Deployment weight

The site itself is about **36 MB**: 14 MB of optimised WebP in `assets/img/`, plus
`assets/videos/Website.mp4` (22 MB) which is `preload="none"` and only fetched when a
visitor clicks "Watch Our Story". Initial page payloads are roughly:

| Page | Initial load |
| --- | --- |
| Home | 640 KB |
| Our Work (Gallery) | 770 KB |
| Blog | 520 KB |
| Case Studies | 480 KB |
| Destinations | 390 KB |
| About | 375 KB |
| Contact | 350 KB |

Two things to do before deploying:

- **`assets/Images/` (154 MB) is not used by the site.** It holds the original JPG/PNG/NEF
  source files that were converted into `assets/img/`. Keep it in the repository if useful,
  but exclude it from the upload.
- **`assets/videos/hero-reel-loop.mp4` (17 MB) is not referenced.** Only `Website.mp4` is.
  Transcoding `Website.mp4` to around 5 MB at 1080p would be worthwhile.

## QA harnesses

`_build/qa/` holds three pages used to verify the build. Serve the site, then open:

- `/_build/qa/frame.html?w=390&p=/index.html` — render any page at an exact viewport width
- `/_build/qa/measure.html?w=390&p=/index.html` — report layout width and overflowing elements
- `/_build/qa/test.html?w=1280&p=/our-work.html` — run behaviour tests (nav, carousels,
  filters, load more, lightbox, tabs, FAQ, video modal, form validation)

These are development tools. They are excluded from the sitemap and disallowed in
`robots.txt`, and do not need to be deployed.

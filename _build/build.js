/* ==========================================================================
   Shaahi Creations - static site generator
   Run: node _build/build.js
   Emits plain HTML into the project root. No dependencies.
   ========================================================================== */
const fs = require('fs');
const path = require('path');
const C = require('./components.js');
const D = require('./data.js');
const { site, nav } = require('./site.js');
const I = C.icons;

const ROOT = path.resolve(__dirname, '..');
const written = [];

function write(rel, html) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html.replace(/\n{3,}/g, '\n\n'), 'utf8');
  written.push(rel.replace(/\\/g, '/'));
}

const img = (d, p) => `${C.R(d)}${p}`;

/* Section wrapper helpers ------------------------------------------------- */
const sec = (cls, inner, attrs = '') => `
<section class="section ${cls}"${attrs}>
  <div class="container">
    ${inner}
  </div>
</section>`;

/* ==========================================================================
   Shared blocks
   ========================================================================== */

function servicesGrid() {
  return `<div class="svc-grid">
      ${D.services
        .map(
          (s) => `<article class="svc-item tone-${s.tone} reveal">
        <span class="svc-icon">${I[s.icon]}</span>
        <h3 class="svc-title">${s.title}</h3>
      </article>`
        )
        .join('\n      ')}
    </div>`;
}

function statsRow(cls = '') {
  return `<div class="stats-row ${cls}">
      ${site.stats
        .map(
          (s) => `<div class="stat reveal">
        <span class="stat-value">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>`
        )
        .join('\n      ')}
    </div>`;
}

/* Logos are sized to equal area rather than equal height, so a wide wordmark
   and a square crest carry the same visual weight. `--lw` is the base width in
   px, capped at 44px tall; the CSS --logo-scale shrinks both per breakpoint. */
function clientWall(d) {
  /* The design shows open rows of marks, no boxed grid. */
  return `<div class="clients-head">
      <p class="eyebrow"><span class="eyebrow-rule"></span>Some of our clients</p>
    </div>
    <div class="client-row reveal">
      ${D.clients
        .map((c) => {
          const ar = c.w / c.h;
          const lw = Math.round(Math.min(50 * Math.sqrt(ar), 44 * ar));
          return `<span class="client-cell"><img src="${img(d, 'assets/img/clients/marks/' + c.file + '.webp')}" width="${c.w}" height="${c.h}" style="--lw:${lw}" alt="${C.plain(c.name)} logo" loading="lazy" decoding="async"></span>`;
        })
        .join('\n      ')}
      <span class="client-more">&amp; many more</span>
    </div>`;
}

/* Featured cards resolve against the case study they point at. */
function featuredWork() {
  return D.featured.map((f) => {
    const c = D.caseStudies.find((x) => x.slug === f.slug);
    if (!c) throw new Error('Featured work: no case study with slug ' + f.slug);
    return { title: c.title, meta: c.kicker, img: f.img || c.hero, overlay: f.overlay, href: 'case-studies/' + c.slug + '.html' };
  });
}

function workCard(d, w, eager = false) {
  return `<a class="work-card reveal" href="${img(d, w.href)}">
        ${C.csImg(d, w.img, { cls: 'ph-img', alt: C.plain(w.title) + ' by Shaahi Creations', sizes: '(max-width: 720px) 84vw, (max-width: 1100px) 46vw, 30vw', eager })}
        ${w.overlay ? `<span class="work-overlay">${w.overlay}</span>` : ''}
        <span class="work-body">
          <span class="work-title">${w.title}</span>
          <span class="work-meta">${w.meta}</span>
        </span>
        <span class="work-go" aria-hidden="true">${I.arrow}</span>
      </a>`;
}

function testimonialCarousel() {
  return `<div class="carousel carousel-quotes" data-carousel data-nav="quotes">
      <div class="carousel-track">
        ${D.testimonials
          .map(
            (t) => `<figure class="quote-card reveal">
          <span class="quote-badge" aria-hidden="true">${I.quote}</span>
          <div class="quote-main">
            <blockquote class="quote-text">&ldquo;${t.quote}&rdquo;</blockquote>
            <span class="quote-rule" aria-hidden="true"></span>
            <figcaption class="quote-by">
              <span class="quote-name">${t.name}</span>
              <span class="quote-org">${t.org}</span>
            </figcaption>
          </div>
        </figure>`
          )
          .join('\n        ')}
      </div>
    </div>`;
}

function atGlance(rows) {
  return `<div class="at-glance reveal">
      <h2>Shaahi Creations at a glance</h2>
      <dl>
        ${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n        ')}
      </dl>
    </div>`;
}

const glanceRows = [
  ['Company', 'Shaahi Creations, corporate events and experiences'],
  ['Founded', '2018'],
  ['Head office', 'Hyderabad, Telangana, India'],
  ['Other offices', 'Pune and Mumbai'],
  ['Coverage', 'PAN India, 25+ cities'],
  ['Events delivered', '1500+ events, 1000+ corporate events'],
  ['Largest audience', '4000 attendees'],
  ['Specialisms', 'Conferences, annual days, family days, product launches, dealer meets, brand activations, offsites, destination events'],
  ['Contact', `<a href="${site.emails[0].href}">${site.emails[0].label}</a> &middot; <a href="${site.phones[0].href}">${site.phones[0].label}</a>`]
];

/* ==========================================================================
   Home
   ========================================================================== */
function buildHome() {
  const d = 0;
  const schema = [
    C.organizationSchema(),
    C.websiteSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Featured corporate events by Shaahi Creations',
      itemListElement: featuredWork().map((f, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: C.plain(f.title),
        url: site.origin + '/' + f.href
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Corporate event management',
      provider: { '@id': C.orgId },
      areaServed: { '@type': 'Country', name: 'India' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Corporate event services',
        itemListElement: D.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: C.plain(s.title), description: C.plain(s.blurb) }
        }))
      }
    }
  ];

  const html = `${C.head({
    depth: d,
    path: 'index.html',
    page: 'home',
    title: 'Shaahi Creations | Corporate Event Management Company in Hyderabad, India',
    description:
      'Shaahi Creations is a PAN India corporate event management company founded in 2018 and headquartered in Hyderabad. We design and deliver conferences, annual days, product launches, brand activations, team offsites and destination corporate events. 1500+ events across 25+ cities.',
    keywords:
      'corporate event management company, corporate events Hyderabad, conference organisers India, annual day event company, product launch events, MICE company India, destination corporate events, event management Pune, event management Mumbai',
    ogImage: 'assets/img/gallery/g14.webp',
    ogImageAlt: 'A corporate annual event produced by Shaahi Creations',
    preload: ['assets/img/gallery/g14.webp'],
    schema
  })}
${C.header(d, 'index.html')}

<main id="main">

  <!-- ============================ HERO ============================ -->
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-media">
      <img src="${img(d, 'assets/img/gallery/g14.webp')}" srcset="${img(d, 'assets/img/gallery/g14-t.webp')} 820w, ${img(d, 'assets/img/gallery/g14.webp')} 1207w" sizes="100vw" width="1207" height="817" alt="A large corporate annual event produced by Shaahi Creations, with stage lighting over a full banquet hall" fetchpriority="high" decoding="async">
    </div>
    ${C.wave('wave-hero', 'a')}
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>Corporate Events &amp; Experiences</p>
        <h1 class="hero-title" id="hero-title">
          <span>Ideas.</span>
          <span>People.</span>
          <span>Experiences.</span>
          <span class="accent">Together.</span>
        </h1>
        <p class="hero-lede">We design and deliver corporate events that inspire, engage and create lasting impact.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${img(d, 'our-work.html')}">Explore Our Work ${I.arrow}</a>
          <button class="play-btn" type="button" data-video>
            <span class="play-ring">${I.play}</span>
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>
      <div class="hero-words" aria-hidden="true">
        <span>People</span><span>Ideas</span><span>Culture</span><span>Impact</span>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">${I.scroll}<span>Scroll</span></div>
  </section>

  <!-- ============================ WHAT WE DO ============================ -->
  ${sec(
    'section-what',
    `${C.sectionHead({
      eyebrow: 'What we do',
      title: 'More Than Events.<br>Meaningful Experiences.',
      lede: 'From strategy to stage, we craft end-to-end corporate event solutions that engage people, strengthen relationships and drive measurable impact.',
      link: { href: 'about.html#expertise', label: 'View all services' }
    })}
    ${servicesGrid()}`,
    ' aria-labelledby="what-we-do"'
  ).replace('<h2 class="sec-title">More Than', '<h2 class="sec-title" id="what-we-do">More Than')}

  <!-- ============================ FEATURED WORK ============================ -->
  <section class="section section-dark" aria-labelledby="featured-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Featured work',
        title: 'Ideas in Action',
        lede: 'Real challenges. Creative solutions. Memorable experiences. Here are a few highlights from our journey.',
        link: { href: 'case-studies.html', label: 'View all projects' }
      })
        .replace('<h2 class="sec-title">Ideas in Action', '<h2 class="sec-title" id="featured-title">Ideas in Action')
        .replace('class="link-arrow"', 'class="link-arrow link-arrow-light"')}
      <div class="carousel carousel-side carousel-work" data-carousel>
        <button class="cbtn cbtn-light" type="button" data-prev aria-label="Previous projects">${I.chevronLeft}</button>
        <div class="carousel-track">
          ${featuredWork().map((f, i) => workCard(d, f, i < 4)).join('\n          ')}
        </div>
        <button class="cbtn cbtn-light" type="button" data-next aria-label="Next projects">${I.chevronRight}</button>
      </div>
    </div>
  </section>

  <!-- ============================ OUR IMPACT ============================ -->
  <section class="section" aria-labelledby="impact-title">
    <div class="container">
      <div class="impact-grid">
        <div>
          <p class="eyebrow"><span class="eyebrow-rule"></span>Our impact</p>
          <h2 class="sec-title" id="impact-title">Trusted by Leading Brands.<br>Experienced Across India.</h2>
        </div>
        ${statsRow()}
      </div>
      <div class="mt-4">
        ${clientWall(d)}
      </div>
    </div>
  </section>

  <!-- ============================ WHO WE ARE ============================ -->
  <section class="who-band" aria-labelledby="who-title">
    <div class="who-grid">
      <div class="who-media reveal">
        <img src="${img(d, 'assets/img/gallery/g07.webp')}" srcset="${img(d, 'assets/img/gallery/g07-t.webp')} 820w, ${img(d, 'assets/img/gallery/g07.webp')} 1207w" sizes="(max-width: 980px) 100vw, 34vw" width="1207" height="817" alt="Employees and their families celebrating together at a corporate annual day by Shaahi Creations" loading="lazy" decoding="async">
        <span class="who-words" aria-hidden="true">
          <span>People</span><span>Ideas</span><span>Relationships</span><span>Lasting Impact</span>
        </span>
      </div>

      <div class="who-body reveal reveal-d1">
        <p class="eyebrow"><span class="eyebrow-rule"></span>Who we are</p>
        <h2 class="sec-title" id="who-title">Built on Passion.<br>Driven by People.</h2>
        <p class="lede">Founded in 2018, Shaahi Creations is a Hyderabad-based corporate event management company with offices in Pune and Mumbai. We bring together strategic thinking, creative design and hospitality excellence to create experiences that align with business objectives and inspire people.</p>
        <p class="lede">We work as an extension of our clients&rsquo; teams, from defining the objective to the last detail on the night.</p>
        <div class="split-actions">
          <a class="btn btn-outline" href="${img(d, 'about.html')}">Our Story ${I.arrow}</a>
        </div>
      </div>

      <div class="who-note reveal reveal-d2">
        <p class="script-note">Events<br>that move<br>businesses<br>forward.</p>
        ${C.scriptWave()}
      </div>
    </div>
  </section>

  <!-- ============================ TESTIMONIALS ============================ -->
  <section class="section section-dark section-quotes" aria-labelledby="quotes-title">
    <div class="container">
      <div class="sec-head sec-head-quotes">
        <div class="sec-head-left">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Client testimonials</p>
          <h2 class="sec-title" id="quotes-title">Words That Inspire Us.</h2>
        </div>
        <div class="sec-head-right">
          <p class="sec-lede">Our clients&rsquo; success stories are a reflection of the trust, collaboration and impact we strive to create in every engagement.</p>
          <div class="carousel-nav" data-nav-for="quotes">
            <button class="cbtn cbtn-light" type="button" data-prev aria-label="Previous testimonials">${I.chevronLeft}</button>
            <button class="cbtn cbtn-light" type="button" data-next aria-label="Next testimonials">${I.chevronRight}</button>
          </div>
        </div>
      </div>
      ${testimonialCarousel()}
    </div>
  </section>

  <!-- ============================ DESTINATIONS ============================ -->
  <section class="section section-alt" aria-labelledby="dest-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Destination experiences',
        title: 'Extraordinary Places.<br>Exceptional Experiences.',
        lede: 'From beaches to palaces, mountains to cities, we create seamless corporate experiences across India&rsquo;s most inspiring destinations.',
        link: { href: 'destinations.html', label: 'Explore destinations' }
      }).replace('<h2 class="sec-title">Extraordinary', '<h2 class="sec-title" id="dest-title">Extraordinary')}
      <div class="grid g-4">
        ${D.destHighlights
          .map((p) => `<div class="reveal">${C.placeCard({ ...p, href: 'destinations.html#destinations' })}</div>`)
          .join('\n        ')}
      </div>
      ${C.placeCredits(D.destHighlights.map((p) => p.photo))}
    </div>
  </section>

</main>

${C.ctaBand(d)}
${C.footer(d)}
${C.videoModal(d)}
${C.foot(d)}`;

  write('index.html', html);
}

/* ==========================================================================
   About
   ========================================================================== */
function buildAbout() {
  const d = 0;
  /* Only reference a headshot when the file is really there. */
  const PEOPLE = new Set(
    fs.existsSync(path.join(ROOT, 'assets/img/people'))
      ? fs.readdirSync(path.join(ROOT, 'assets/img/people'))
          .filter((f) => f.endsWith('.webp'))
          .map((f) => f.replace(/\.webp$/, ''))
      : []
  );
  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([{ name: 'Home', path: 'index.html' }, { name: 'About', path: 'about.html' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Shaahi Creations',
      url: site.origin + '/about.html',
      about: { '@id': C.orgId },
      mainEntity: {
        '@type': 'Organization',
        '@id': C.orgId,
        employee: D.team.map((t) => ({ '@type': 'Person', name: C.plain(t.name), jobTitle: C.plain(t.role), worksFor: { '@id': C.orgId } }))
      }
    }
  ];

  const storyStats = [
    ['2018', 'Year We Began'],
    ['1500+', 'Events Executed'],
    ['1000+', 'Corporate Events'],
    ['25+', 'Cities Across India']
  ];

  const html = `${C.head({
    depth: d,
    path: 'about.html',
    page: 'about',
    title: 'About Shaahi Creations | Corporate Event Company Founded in 2018',
    description:
      'Shaahi Creations was founded in 2018 in Hyderabad. Meet the team, the beliefs that guide our work and the nine capabilities we bring to every corporate event, from consulting and creative design through production, hospitality and measurement.',
    keywords: 'about Shaahi Creations, corporate event company Hyderabad, event management team, event agency India, event capabilities',
    ogImage: 'assets/img/gallery/g08.webp',
    schema
  })}
${C.header(d, 'about.html')}

<main id="main">

  <section class="phero" aria-labelledby="about-title">
    <div class="phero-media">
      <img src="${img(d, 'assets/img/gallery/g08.webp')}" srcset="${img(d, 'assets/img/gallery/g08-t.webp')} 820w, ${img(d, 'assets/img/gallery/g08.webp')} 1207w" sizes="100vw" width="1207" height="817" alt="A large-format corporate event hall produced by Shaahi Creations" fetchpriority="high" decoding="async">
    </div>
    ${C.wave('wave-hero-page', 'c')}
    <div class="container phero-inner">
      <div class="phero-copy">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>Corporate Events &amp; Experiences</p>
        <h1 class="phero-title" id="about-title">We Create Experiences<br>That <span class="accent">Move People.</span></h1>
        <p class="phero-lede">Strategic event partners. Hospitality professionals. Experience creators.</p>
        <div class="phero-actions">
          <button class="play-btn" type="button" data-video>
            <span class="play-ring">${I.play}</span>
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>
      <div class="hero-words" aria-hidden="true">
        <span>People</span><span>Ideas</span><span>Culture</span><span>Impact</span>
      </div>
    </div>
  </section>

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'About' }])}

  <!-- ============================ OUR STORY ============================ -->
  <section class="section" id="story" aria-labelledby="story-title">
    <div class="container">
      <div class="story-grid">
        <div class="story-copy reveal">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Our story</p>
          <h2 class="sec-title" id="story-title">Built on Passion.<br>Driven by People.</h2>
          <p class="lede">Founded in 2018, Shaahi Creations began with a simple belief: every event should do more than happen. It should inspire people, create meaningful connections and leave a lasting impact.</p>
          <p class="lede">What started as a Hyderabad-based event management company has grown into a trusted corporate event partner, delivering experiences for organisations across India. Today we bring together strategic thinking, creative design, hospitality excellence and meticulous execution to create events that align with business objectives and inspire people.</p>
          <div class="split-actions">
            <a class="btn btn-outline" href="#how-we-think">Our Journey ${I.arrow}</a>
          </div>
        </div>

        <div class="story-media reveal reveal-d1">
          <img src="${img(d, 'assets/img/our-story.webp')}" srcset="${img(d, 'assets/img/our-story.webp')} 760w, ${img(d, 'assets/img/our-story-lg.webp')} 1159w" sizes="(max-width: 780px) 92vw, (max-width: 1080px) 40vw, 28vw" width="1159" height="1159" alt="The Shaahi Creations welcome wall at a corporate event, reading Good Ideas, People, Extraordinary Experiences, with guests networking beyond it" loading="lazy" decoding="async">
        </div>

        <div class="story-stats reveal reveal-d2">
          ${storyStats.map(([v, l]) => `<div class="stat"><span class="stat-value">${v}</span><span class="stat-label">${l}</span></div>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ WHAT WE BELIEVE ============================ -->
  <section class="section section-dark" id="beliefs" aria-labelledby="believe-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'What we believe',
        title: 'Ideas. People. Purpose.',
        lede: 'Great events are a combination of the right ideas, the right people and a clear purpose. These beliefs guide everything we do.'
      }).replace('<h2 class="sec-title">Ideas.', '<h2 class="sec-title" id="believe-title">Ideas.')}
      <div class="belief-grid">
        ${D.beliefs
          .map(
            (b, i) => `<article class="belief reveal reveal-d${Math.min(i, 3)}">
          ${I[b.icon]}
          <h3>${b.title}</h3>
          <p>${b.text}</p>
        </article>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ TEAM ============================ -->
  <section class="section" id="team" aria-labelledby="team-title">
    <div class="container">
      <div class="sec-head sec-head-quotes">
        <div class="sec-head-left">
          <p class="eyebrow"><span class="eyebrow-rule"></span>The people behind the experiences</p>
          <h2 class="sec-title" id="team-title">A Team That Brings Ideas to Life.</h2>
        </div>
        <div class="sec-head-right">
          <p class="sec-lede">Behind every experience is a team that brings together business thinking, client relationships, operational precision and creative imagination.</p>
          <div class="carousel-nav" data-nav-for="team">
            <button class="cbtn" type="button" data-prev aria-label="Previous team members">${I.chevronLeft}</button>
            <button class="cbtn" type="button" data-next aria-label="Next team members">${I.chevronRight}</button>
          </div>
        </div>
      </div>
      <div class="carousel carousel-team" data-carousel data-nav="team">
        <div class="carousel-track team-grid">
        ${D.team
          .map((m) => {
            const initials = C.plain(m.name).split(' ').map((w) => w[0]).join('').slice(0, 2);
            const photo = m.photo && PEOPLE.has(m.photo)
              ? `<img src="${img(d, 'assets/img/people/' + m.photo + '.webp')}" width="900" height="900" alt="${C.plain(m.name)}, ${C.plain(m.role)} at Shaahi Creations" loading="lazy" decoding="async">`
              : `<span class="team-initials" aria-hidden="true">${initials}</span>`;
            return `<article class="team-card reveal">
          <div class="team-photo">${photo}</div>
          <div class="team-body">
            <h3 class="team-name">${m.name}</h3>
            <p class="team-role">${m.role}</p>
            <p class="team-bio">${m.bio}</p>
            ${m.linkedin ? `<a class="team-social" href="${m.linkedin}" rel="noopener" target="_blank" aria-label="${C.plain(m.name)} on LinkedIn"><span class="li-badge">${I.linkedin}</span><span>View LinkedIn</span>${I.arrow}</a>` : ''}
          </div>
        </article>`;
          })
          .join('\n        ')}
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ HOW WE THINK ============================ -->
  <section class="think-band" id="how-we-think" aria-labelledby="think-title">
    <div class="think-grid">
      <div class="think-panel reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>How we think</p>
        <h2 class="sec-title" id="think-title">From Insight to Impact.</h2>
        <p class="lede on-dark">Every event starts with a business objective. We take the time to understand your audience, purpose and desired outcome before crafting an experience that delivers real impact.</p>
        <div class="split-actions">
          <a class="btn btn-ghost-light" href="${img(d, 'case-studies.html')}">Our Approach ${I.arrow}</a>
        </div>
      </div>

      <div class="think-steps reveal reveal-d1">
        ${D.process
          .map(
            (p, i) => `<article class="think-step">
          <span class="think-icon tone-${['coral','gold','teal','purple','blue','pink'][i % ['coral','gold','teal','purple','blue','pink'].length]}">${I[p.icon]}</span>
          <h3>${p.title}</h3>
          <p>${p.text}</p>
        </article>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ EXPERTISE ============================ -->
  <section class="section" id="expertise" aria-labelledby="exp-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Our expertise',
        title: 'End-to-End. Under One Roof.',
        lede: 'Our multidisciplinary capabilities allow us to take on an event from strategy to production, hospitality and on-ground execution.',
        link: { href: 'case-studies.html', label: 'Explore our work' }
      }).replace('<h2 class="sec-title">End-to-End', '<h2 class="sec-title" id="exp-title">End-to-End')}
      <div class="exp-row">
        ${D.expertise
          .map(
            (e, i) => `<article class="exp-item reveal">
          <span class="exp-icon tone-${['coral','pink','purple','blue','teal','gold','coral','pink','purple'][i % ['coral','pink','purple','blue','teal','gold','coral','pink','purple'].length]}">${I[e.icon]}</span>
          <h3>${e.title}</h3>
        </article>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ TECHNOLOGY ============================ -->
  <section class="section tech-band" id="technology" aria-labelledby="tech-title">
    <div class="container">
      <div class="tech-grid">
        <div class="tech-copy reveal">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Creativity meets technology</p>
          <h2 class="sec-title" id="tech-title">Experiences That Go Further.</h2>
          <p class="lede">From immersive environments and experiential design to event apps, RFID, AI-powered solutions, AR/VR, LED and live streaming, we use technology where it makes the experience smarter, more engaging and more impactful.</p>
          <div class="split-actions">
            <a class="btn btn-outline" href="${img(d, 'case-studies.html')}">Discover More ${I.arrow}</a>
          </div>
        </div>
        <div class="tech-media reveal reveal-d1">
          <img src="${img(d, 'assets/img/creativity-tech.webp')}" srcset="${img(d, 'assets/img/creativity-tech.webp')} 1100w, ${img(d, 'assets/img/creativity-tech-lg.webp')} 2170w" sizes="(max-width: 900px) 92vw, 58vw" width="2170" height="725" alt="A speaker on stage before a large LED globe at a technology-led corporate event, beside the words Immersive, Engaging, Smarter, More Impactful" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>

</main>

${C.ctaBand(d, { title: 'Let&rsquo;s Create<br>What&rsquo;s Next.', lede: 'Have an event in mind? We&rsquo;d love to bring it to life.' })}
${C.footer(d)}
${C.videoModal(d)}
${C.foot(d)}`;

  write('about.html', html);
}

module.exports = { write, written, sec, img, servicesGrid, statsRow, clientWall, workCard, testimonialCarousel, atGlance, glanceRows, buildHome, buildAbout, ROOT };

/* run all builders when invoked directly */
if (require.main === module) {
  const more = require('./build-pages.js');
  buildHome();
  buildAbout();
  more.buildAll();
  const missing = D.team.filter((m) => m.photo && !fs.existsSync(path.join(ROOT, 'assets/img/people', m.photo + '.webp')));
  if (missing.length) {
    console.log('\nMissing team headshots (cards fall back to initials):');
    missing.forEach((m) => console.log('  assets/img/people/' + m.photo + '.webp  <- ' + C.plain(m.name)));
    console.log('');
  }
  console.log('Wrote ' + written.length + ' files:');
  written.forEach((f) => console.log('  ' + f));
}

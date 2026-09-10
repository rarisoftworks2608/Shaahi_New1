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

function clientWall(d) {
  return `<div class="clients-head">
      <p class="eyebrow"><span class="eyebrow-rule"></span>Some of our clients</p>
    </div>
    <div class="client-grid reveal">
      ${D.clients
        .map(
          (c) => `<div class="client-cell"><img src="${img(d, 'assets/img/clients/' + c.file + '.webp')}" width="420" height="224" alt="${C.plain(c.name)} logo" loading="lazy" decoding="async"></div>`
        )
        .join('\n      ')}
      <div class="client-more">&amp; many more</div>
    </div>
    <p class="client-text-list">Also trusted by ${D.clientsTextOnly.join(', ')}.</p>`;
}

function workCard(d, w, eager = false) {
  return `<a class="work-card reveal" href="${img(d, w.href)}">
        ${C.galleryImg(d, w.img, C.plain(w.title) + ' by Shaahi Creations', '(max-width: 720px) 84vw, (max-width: 1100px) 46vw, 30vw', eager)}
        ${w.overlay ? `<span class="work-overlay">${w.overlay}</span>` : ''}
        <span class="work-body">
          <span class="work-title">${w.title}</span>
          <span class="work-meta">${w.meta}</span>
        </span>
        <span class="work-go" aria-hidden="true">${I.arrow}</span>
      </a>`;
}

function testimonialCarousel() {
  return `<div class="carousel" data-carousel>
      <div class="carousel-track">
        ${D.testimonials
          .map(
            (t) => `<figure class="quote-card reveal">
          <span class="quote-mark">${I.quote}</span>
          <blockquote class="quote-text">${t.quote}</blockquote>
          <figcaption class="quote-by">
            <span class="quote-name">${t.name}</span>
            <span class="quote-org">${t.org}</span>
          </figcaption>
        </figure>`
          )
          .join('\n        ')}
      </div>
      <div class="carousel-nav">
        <button class="cbtn" type="button" data-prev aria-label="Previous testimonials">${I.chevronLeft}</button>
        <button class="cbtn" type="button" data-next aria-label="Next testimonials">${I.chevronRight}</button>
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
    C.faqSchema(D.faqs.home),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Featured corporate events by Shaahi Creations',
      itemListElement: D.featured.map((f, i) => ({
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
          <span>Ideas. People.</span>
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
      <div class="carousel carousel-side" data-carousel>
        <button class="cbtn cbtn-light" type="button" data-prev aria-label="Previous projects">${I.chevronLeft}</button>
        <div class="carousel-track">
          ${D.featured.map((f, i) => workCard(d, f, i < 3)).join('\n          ')}
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
  <section class="section section-alt" aria-labelledby="who-title">
    <div class="container">
      <div class="split split-wide">
        <div class="split-media reveal">
          <img src="${img(d, 'assets/img/gallery/g07.webp')}" srcset="${img(d, 'assets/img/gallery/g07-t.webp')} 820w, ${img(d, 'assets/img/gallery/g07.webp')} 1207w" sizes="(max-width: 860px) 92vw, 46vw" width="1207" height="817" alt="Employees and their families celebrating together at a corporate annual day by Shaahi Creations" loading="lazy" decoding="async">
          <span class="split-words" aria-hidden="true">
            <span>People</span><span>Ideas</span><span>Relationships</span><span>Lasting Impact</span>
          </span>
        </div>
        <div class="split-body reveal reveal-d1">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Who we are</p>
          <h2 class="sec-title" id="who-title">Built on Passion.<br>Driven by People.</h2>
          <p class="lede">Founded in 2018, Shaahi Creations is a Hyderabad-based corporate event management company with offices in Pune and Mumbai. We bring together strategic thinking, creative design and hospitality excellence to create experiences that align with business objectives and inspire people.</p>
          <p class="lede">We work as an extension of our clients&rsquo; teams, from defining the objective to the last detail on the night.</p>
          <div class="split-actions">
            <a class="btn btn-outline" href="${img(d, 'about.html')}">Our Story ${I.arrow}</a>
          </div>
          <p class="script-note">Events that move businesses forward.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ TESTIMONIALS ============================ -->
  <section class="section" aria-labelledby="quotes-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Client testimonials',
        title: 'Words That Inspire Us.',
        lede: 'Our clients&rsquo; success stories are a reflection of the trust, collaboration and impact we strive to create in every engagement.'
      }).replace('<h2 class="sec-title">Words', '<h2 class="sec-title" id="quotes-title">Words')}
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
    </div>
  </section>

  <!-- ============================ AT A GLANCE + FAQ ============================ -->
  <section class="section section-tight" aria-label="Company facts">
    <div class="container">${atGlance(glanceRows)}</div>
  </section>

  ${C.faqSection(D.faqs.home)}

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
  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([{ name: 'Home', path: 'index.html' }, { name: 'About', path: 'about.html' }]),
    C.faqSchema(D.faqs.about),
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
      <div class="split split-wide">
        <div class="split-body reveal">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Our story</p>
          <h2 class="sec-title" id="story-title">Built on Passion.<br>Driven by People.</h2>
          <p class="lede">Founded in 2018, Shaahi Creations began with a simple belief: every event should do more than happen. It should inspire people, create meaningful connections and leave a lasting impact.</p>
          <p class="lede">What started as a Hyderabad-based event management company has grown into a trusted corporate event partner, delivering experiences for organisations across India. Today we bring together strategic thinking, creative design, hospitality excellence and meticulous execution to create events that align with business objectives and inspire people.</p>
          <div class="split-actions">
            <a class="btn btn-outline" href="#how-we-think">Our Journey ${I.arrow}</a>
          </div>
        </div>
        <div class="reveal reveal-d1">
          <div class="split-media split-media-tall mb-3">
            <img src="${img(d, 'assets/img/gallery/g27.webp')}" srcset="${img(d, 'assets/img/gallery/g27-t.webp')} 820w, ${img(d, 'assets/img/gallery/g27.webp')} 1207w" sizes="(max-width: 860px) 92vw, 46vw" width="1207" height="817" alt="A themed stage design created by Shaahi Creations for a corporate celebration" loading="lazy" decoding="async">
            <span class="split-words" aria-hidden="true">
              <span>Good Ideas</span><span>People</span><span>Extraordinary Experiences</span>
            </span>
          </div>
          <div class="story-stats">
            ${storyStats.map(([v, l]) => `<div class="stat"><span class="stat-value">${v}</span><span class="stat-label">${l}</span></div>`).join('\n            ')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ WHAT WE BELIEVE ============================ -->
  <section class="section section-alt" id="beliefs" aria-labelledby="believe-title">
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
      ${C.sectionHead({
        eyebrow: 'The people behind the experiences',
        title: 'A Team That Brings Ideas to Life.',
        lede: 'Behind every experience is a team that brings together business thinking, client relationships, operational precision and creative imagination.'
      }).replace('<h2 class="sec-title">A Team', '<h2 class="sec-title" id="team-title">A Team')}
      <div class="team-grid">
        ${D.team
          .map((m) => {
            const initials = C.plain(m.name).split(' ').map((w) => w[0]).join('').slice(0, 2);
            const photo = m.photo
              ? `<img src="${img(d, 'assets/img/people/' + m.photo + '.webp')}" width="900" height="1257" alt="${C.plain(m.name)}, ${C.plain(m.role)} at Shaahi Creations" loading="lazy" decoding="async">`
              : `<span class="team-initials" aria-hidden="true">${initials}</span>`;
            return `<article class="team-card reveal">
          <div class="team-photo">${photo}</div>
          <h3 class="team-name">${m.name}</h3>
          <p class="team-role">${m.role}</p>
          <p class="team-bio">${m.bio}</p>
          ${m.linkedin ? `<a class="team-social" href="${m.linkedin}" rel="noopener" target="_blank">${I.linkedin} View LinkedIn</a>` : ''}
        </article>`;
          })
          .join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ HOW WE THINK ============================ -->
  <section class="section section-alt" id="how-we-think" aria-labelledby="think-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'How we think',
        title: 'From Insight to Impact.',
        lede: 'Every event starts with a business objective. We take the time to understand your audience, purpose and desired outcome before crafting an experience that delivers real impact.'
      }).replace('<h2 class="sec-title">From Insight', '<h2 class="sec-title" id="think-title">From Insight')}
      <div class="step-grid">
        ${D.process
          .map(
            (p, i) => `<article class="step reveal">
          <span class="step-num" data-n="${String(i + 1).padStart(2, '0')}">${I[p.icon]}</span>
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
      <div class="exp-grid">
        ${D.expertise
          .map(
            (e) => `<article class="exp-item">
          ${I[e.icon]}
          <h3>${e.title}</h3>
          <p>${e.text}</p>
        </article>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ TECHNOLOGY ============================ -->
  <section class="section section-dark" id="technology" aria-labelledby="tech-title">
    <div class="container">
      <div class="split split-wide">
        <div class="split-body reveal">
          <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>Creativity meets technology</p>
          <h2 class="sec-title" id="tech-title">Experiences That Go Further.</h2>
          <p class="lede on-dark">From immersive environments and experiential design to event apps, RFID, AI-powered solutions, AR and VR, LED and live streaming, we use technology in ways that make the experience smarter, more engaging and more impactful.</p>
          <ul class="tech-list">
            ${D.techStack.map((t) => `<li>${t}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="split-media reveal reveal-d1">
          <img src="${img(d, 'assets/img/gallery/g18.webp')}" srcset="${img(d, 'assets/img/gallery/g18-t.webp')} 820w, ${img(d, 'assets/img/gallery/g18.webp')} 1207w" sizes="(max-width: 860px) 92vw, 46vw" width="1207" height="817" alt="LED production and stage technology at a corporate event by Shaahi Creations" loading="lazy" decoding="async">
          <span class="split-words" aria-hidden="true">
            <span>Immersive</span><span>Engaging</span><span>Smarter</span><span>More Impactful</span>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ INDUSTRIES ============================ -->
  <section class="section section-tight section-alt" aria-labelledby="ind-title">
    <div class="container">
      <p class="eyebrow"><span class="eyebrow-rule"></span>Industries we serve</p>
      <h2 class="sec-title mb-3" id="ind-title">Diverse Industries. One Commitment.</h2>
      <div class="pill-row">
        ${D.industries.map((i) => `<span class="pill">${i}</span>`).join('\n        ')}
      </div>
    </div>
  </section>

  ${C.faqSection(D.faqs.about, { title: 'About Shaahi Creations.', lede: 'The questions organisations most often ask before appointing an event partner.' })}

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
  console.log('Wrote ' + written.length + ' files:');
  written.forEach((f) => console.log('  ' + f));
}

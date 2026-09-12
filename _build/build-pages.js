/* ==========================================================================
   Shaahi Creations - page builders (work, destinations, contact, utility)
   ========================================================================== */
const C = require('./components.js');
const D = require('./data.js');
const { site } = require('./site.js');
const B = require('./build.js');
const I = C.icons;
const { write, img, sec, atGlance, glanceRows, testimonialCarousel } = B;

/* Sub navigation shared by the three Our Work pages ----------------------- */
function workTabs(d, active) {
  const items = [
    ['Gallery', 'our-work.html'],
    ['Case Studies', 'case-studies.html'],
    ['Blogs', 'blog.html']
  ];
  return `<nav class="tabs" aria-label="Our work sections">
      ${items
        .map(
          ([label, href]) =>
            `<a class="tab${href === active ? ' is-active' : ''}" href="${img(d, href)}"${href === active ? ' aria-current="page"' : ''}>${label}</a>`
        )
        .join('\n      ')}
    </nav>`;
}

function pageHero(d, o) {
  return `<section class="phero" aria-labelledby="page-title">
    <div class="phero-media">
      <img src="${img(d, 'assets/img/gallery/' + o.img + '.webp')}" srcset="${img(d, 'assets/img/gallery/' + o.img + '-t.webp')} 820w, ${img(d, 'assets/img/gallery/' + o.img + '.webp')} 1207w" sizes="100vw" width="1207" height="817" alt="${C.esc(o.alt)}" fetchpriority="high" decoding="async">
    </div>
    ${C.wave('wave-hero-page', o.waveVariant || 'c')}
    <div class="container phero-inner">
      <div class="phero-copy">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>${o.eyebrow}</p>
        <h1 class="phero-title" id="page-title">${o.title}</h1>
        <p class="phero-lede">${o.lede}</p>
        ${o.actions || ''}
      </div>
      <div class="hero-words" aria-hidden="true">
        <span>Ideas</span><span>People</span><span>Culture</span><span>Impact</span>
      </div>
    </div>
  </section>`;
}

/* ==========================================================================
   Our Work - Gallery
   ========================================================================== */
function buildGallery() {
  const d = 0;
  const cats = Object.keys(D.CAT);
  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([
      { name: 'Home', path: 'index.html' },
      { name: 'Our Work', path: 'our-work.html' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Shaahi Creations corporate event gallery',
      url: site.origin + '/our-work.html',
      description: 'Photographs from corporate events produced by Shaahi Creations across India.',
      image: D.gallery.slice(0, 12).map((g) => ({
        '@type': 'ImageObject',
        contentUrl: site.origin + '/assets/img/gallery/' + g.img + '.webp',
        name: C.plain(g.title),
        description: C.plain(g.title + ' - ' + g.meta)
      }))
    }
  ];

  const items = D.gallery
    .map(
      (g, i) => `<button class="gal-item work-card reveal" type="button"
          data-cats="${g.cats.join(' ')}"
          data-full="${img(d, 'assets/img/gallery/' + g.img + '.webp')}"
          data-title="${C.esc(g.title)}"
          data-meta="${C.esc(g.meta)}"
          aria-label="View larger: ${C.esc(C.plain(g.title))}">
          ${C.galleryImg(d, g.img, C.plain(g.title) + ' - ' + C.plain(g.meta), '(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw', i < 3)}
          <span class="work-body">
            <span class="work-title">${g.title}</span>
            <span class="work-meta">${g.meta}</span>
          </span>
          <span class="work-go" aria-hidden="true">${I.plus}</span>
        </button>`
    )
    .join('\n        ');

  const html = `${C.head({
    depth: d,
    path: 'our-work.html',
    page: 'gallery',
    title: 'Corporate Event Gallery | Our Work | Shaahi Creations',
    description:
      'A gallery of corporate events produced by Shaahi Creations: annual days, conferences, product launches, team engagement programmes, family days, brand activations and destination events across India.',
    keywords: 'corporate event gallery, event photos India, annual day photos, conference event photos, product launch event gallery, corporate event portfolio',
    ogImage: 'assets/img/gallery/g02.webp',
    schema
  })}
${C.header(d, 'our-work.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g03',
    alt: 'A large corporate stage performance produced by Shaahi Creations',
    eyebrow: 'Our work',
    title: 'Experiences<br>In <span class="accent">Every</span> Detail.',
    lede: 'A glimpse into the moments we have created for brands, teams and ideas that move people.'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Our Work' }])}

  <div class="container">${workTabs(d, 'our-work.html')}</div>

  <section class="section" aria-labelledby="gal-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Explore our work',
        title: 'A Canvas of Possibilities.',
        lede: 'From grand stages to intimate experiences, every event is an opportunity to tell a unique story. Explore moments we have created across industries, formats and destinations.'
      }).replace('<h2 class="sec-title">A Canvas', '<h2 class="sec-title" id="gal-title">A Canvas')}

      <div class="chips" data-filter-group="gal" role="group" aria-label="Filter gallery by event type">
        <button class="chip is-active" type="button" data-cat="all" aria-pressed="true">All</button>
        ${cats.map((k) => `<button class="chip" type="button" data-cat="${k}" aria-pressed="false">${D.CAT[k]}</button>`).join('\n        ')}
      </div>

      <div class="gal-grid" data-filter-pool="gal" data-page-size="12">
        ${items}
      </div>
      <p class="gal-empty" data-filter-empty="gal" hidden>No projects in this category yet. Try another filter.</p>
      <div class="load-more-wrap">
        <button class="btn btn-outline" type="button" data-load-more="gal">Load More ${I.arrow}</button>
      </div>
    </div>
  </section>

</main>

${C.ctaBand(d)}
${C.footer(d)}
${C.foot(d)}`;

  write('our-work.html', html);
}

/* ==========================================================================
   Our Work - Case studies index
   ========================================================================== */
function buildCaseStudiesIndex() {
  const d = 0;
  const usedCats = [];
  D.caseStudies.forEach((c) => { if (usedCats.indexOf(c.cat) === -1) usedCats.push(c.cat); });

  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([
      { name: 'Home', path: 'index.html' },
      { name: 'Our Work', path: 'our-work.html' },
      { name: 'Case Studies', path: 'case-studies.html' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Corporate event case studies',
      url: site.origin + '/case-studies.html',
      isPartOf: { '@id': C.siteId },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: D.caseStudies.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: site.origin + '/case-studies/' + c.slug + '.html',
          name: C.plain(c.title)
        }))
      }
    }
  ];

  const cards = D.caseStudies
    .map(
      (c, i) => `<article class="cs-card reveal" data-cats="${c.cat}">
          <a class="cs-thumb" href="${img(d, 'case-studies/' + c.slug + '.html')}" tabindex="-1" aria-hidden="true">
            ${C.galleryImg(d, c.hero, C.plain(c.title), '(max-width: 640px) 92vw, (max-width: 980px) 46vw, 30vw', i < 3)}
          </a>
          <p class="cs-kicker">${c.kicker}</p>
          <h3 class="cs-title"><a href="${img(d, 'case-studies/' + c.slug + '.html')}">${c.title}</a></h3>
          <p class="cs-strap">${c.strap}</p>
          <p class="cs-summary">${c.summary}</p>
          <a class="link-arrow cs-link" href="${img(d, 'case-studies/' + c.slug + '.html')}">View Case Study ${I.arrow}</a>
        </article>`
    )
    .join('\n        ');

  const html = `${C.head({
    depth: d,
    path: 'case-studies.html',
    page: 'case-studies',
    title: 'Corporate Event Case Studies | Shaahi Creations',
    description:
      'Twelve corporate event case studies from Shaahi Creations, covering leadership summits for Microsoft, destination partner events for Marriott Bonvoy, annual days, product launches, dealer meets and government programmes.',
    keywords: 'corporate event case studies, event management case study India, conference case study, product launch case study, annual day case study',
    ogImage: 'assets/img/gallery/g04.webp',
    schema
  })}
${C.header(d, 'case-studies.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g04',
    alt: 'A corporate leadership conference stage produced by Shaahi Creations',
    eyebrow: 'Case studies',
    title: 'Real Objectives.<br>Remarkable <span class="accent">Experiences.</span>',
    lede: 'Ideas, execution and impact for the moments that matter.',
    waveVariant: 'a'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Our Work', path: 'our-work.html' }, { name: 'Case Studies' }])}

  <div class="container">${workTabs(d, 'case-studies.html')}</div>

  <section class="section" aria-labelledby="cs-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Our case studies',
        title: 'Turning Objectives<br>Into Experiences.',
        lede: 'Every event has a purpose. Here are a few stories of how we have partnered with organisations to create experiences that engage people, strengthen culture and deliver measurable impact.'
      }).replace('<h2 class="sec-title">Turning', '<h2 class="sec-title" id="cs-title">Turning')}

      <div class="chips" data-filter-group="cs" role="group" aria-label="Filter case studies by event type">
        <button class="chip is-active" type="button" data-cat="all" aria-pressed="true">All</button>
        ${usedCats.map((k) => `<button class="chip" type="button" data-cat="${k}" aria-pressed="false">${D.CAT[k]}</button>`).join('\n        ')}
      </div>

      <div class="cs-grid" data-filter-pool="cs">
        ${cards}
      </div>
      <p class="gal-empty" data-filter-empty="cs" hidden>No case studies in this category yet.</p>

      <div class="more-band mt-4 reveal">
        <span class="more-band-icon">${I.deliver}</span>
        <div>
          <h3>More Stories In The Making.</h3>
        </div>
        <p>From large-scale conferences to intimate leadership retreats, we continue to partner with organisations across industries to create experiences that make a real difference.</p>
        <a class="btn btn-dark" href="${img(d, 'contact.html')}">Let&rsquo;s Discuss Yours ${I.arrow}</a>
      </div>
    </div>
  </section>

</main>

${C.ctaBand(d)}
${C.footer(d)}
${C.foot(d)}`;

  write('case-studies.html', html);
}

/* ==========================================================================
   Our Work - Case study detail pages
   ========================================================================== */
function buildCaseStudyPages() {
  const d = 1;
  D.caseStudies.forEach((c, idx) => {
    const prev = D.caseStudies[(idx - 1 + D.caseStudies.length) % D.caseStudies.length];
    const next = D.caseStudies[(idx + 1) % D.caseStudies.length];

    const schema = [
      C.organizationSchema(),
      C.breadcrumbSchema([
        { name: 'Home', path: 'index.html' },
        { name: 'Our Work', path: 'our-work.html' },
        { name: 'Case Studies', path: 'case-studies.html' },
        { name: C.plain(c.title), path: 'case-studies/' + c.slug + '.html' }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: C.plain(c.title) + ' - ' + C.plain(c.strap),
        description: C.plain(c.summary),
        image: site.origin + '/assets/img/gallery/' + c.hero + '.webp',
        author: { '@id': C.orgId },
        publisher: { '@id': C.orgId },
        mainEntityOfPage: site.origin + '/case-studies/' + c.slug + '.html',
        about: { '@type': 'Event', name: C.plain(c.title), organizer: { '@id': C.orgId } },
        articleSection: C.plain(c.kicker),
        inLanguage: 'en-IN'
      }
    ];

    const html = `${C.head({
      depth: d,
      path: 'case-studies/' + c.slug + '.html',
      page: 'case-study',
      title: C.plain(c.title) + ' | Case Study | Shaahi Creations',
      description: C.plain(c.summary + ' ' + c.result),
      keywords: C.plain(c.kicker + ', ' + c.client + ' event, corporate event case study, ' + c.title),
      ogType: 'article',
      ogImage: 'assets/img/gallery/' + c.hero + '.webp',
      schema
    })}
${C.header(d, 'case-studies.html')}

<main id="main">

  <section class="phero" aria-labelledby="cs-hero-title">
    <div class="phero-media">
      <img src="${img(d, 'assets/img/gallery/' + c.hero + '.webp')}" srcset="${img(d, 'assets/img/gallery/' + c.hero + '-t.webp')} 820w, ${img(d, 'assets/img/gallery/' + c.hero + '.webp')} 1207w" sizes="100vw" width="1207" height="817" alt="${C.esc(C.plain(c.title))}" fetchpriority="high" decoding="async">
    </div>
    ${C.wave('wave-hero-page', 'b')}
    <div class="container phero-inner" style="display:block">
      <div class="phero-copy" style="max-width:760px">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>${c.kicker}</p>
        <h1 class="phero-title" id="cs-hero-title">${c.title}</h1>
        <p class="phero-lede">${c.strap} ${c.summary}</p>
      </div>
      <dl class="cs-hero-facts">
        ${c.facts.map(([k, v]) => `<div class="cs-fact"><dt>${k}</dt><dd>${v}</dd></div>`).join('\n        ')}
      </dl>
    </div>
  </section>

  ${C.breadcrumbs(d, [
    { name: 'Home', path: 'index.html' },
    { name: 'Our Work', path: 'our-work.html' },
    { name: 'Case Studies', path: 'case-studies.html' },
    { name: c.title }
  ])}

  <section class="section">
    <div class="container">
      <div class="cs-layout">
        <div class="prose">
          <h2>The objective</h2>
          <p>${c.objective}</p>

          <h2>How we approached it</h2>
          <ul>
            ${c.approach.map((a) => `<li>${a}</li>`).join('\n            ')}
          </ul>

          <h2>The outcome</h2>
          <p>${c.result}</p>

          ${c.quote ? `<blockquote>${c.quote.text}<cite>${c.quote.by}</cite></blockquote>` : ''}
        </div>

        <aside class="side-card">
          ${c.logo ? `<img class="side-logo" src="${img(d, 'assets/img/clients/' + c.logo + '.webp')}" width="420" height="224" alt="${C.esc(C.plain(c.client))} logo" loading="lazy" decoding="async">` : ''}
          <h3>What we delivered</h3>
          <ul class="side-list">
            ${c.delivered.map((x) => `<li>${x}</li>`).join('\n            ')}
          </ul>
          <a class="btn btn-dark btn-sm btn-block mt-2" href="${img(d, 'contact.html')}">Plan Something Similar ${I.arrow}</a>
        </aside>
      </div>
    </div>
  </section>

  <section class="section section-tight section-alt" aria-label="Event photographs">
    <div class="container">
      <div class="cs-strip">
        ${c.images
          .map(
            (g) => `<img src="${img(d, 'assets/img/gallery/' + g + '.webp')}" srcset="${img(d, 'assets/img/gallery/' + g + '-t.webp')} 820w, ${img(d, 'assets/img/gallery/' + g + '.webp')} 1207w" sizes="(max-width: 700px) 92vw, 30vw" width="1207" height="817" alt="${C.esc(C.plain(c.title))} produced by Shaahi Creations" loading="lazy" decoding="async">`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section section-tight">
    <div class="container">
      <nav class="next-nav" aria-label="More case studies">
        <a href="${img(d, 'case-studies/' + prev.slug + '.html')}">
          <span class="nn-label">Previous</span>
          <span class="nn-title">${prev.title}</span>
        </a>
        <a class="nn-next" href="${img(d, 'case-studies/' + next.slug + '.html')}">
          <span class="nn-label">Next</span>
          <span class="nn-title">${next.title}</span>
        </a>
      </nav>
    </div>
  </section>

</main>

${C.ctaBand(d, { title: 'Have a Brief<br>Like This One?', lede: 'Tell us what you are trying to achieve. We will come back with a point of view.' })}
${C.footer(d)}
${C.foot(d)}`;

    write('case-studies/' + c.slug + '.html', html);
  });
}

/* ==========================================================================
   Our Work - Blog index
   ========================================================================== */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function niceDate(iso) {
  const [y, m, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[m - 1]} ${y}`;
}

function buildBlogIndex() {
  const d = 0;
  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([
      { name: 'Home', path: 'index.html' },
      { name: 'Our Work', path: 'our-work.html' },
      { name: 'Blogs', path: 'blog.html' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Shaahi Creations Journal',
      url: site.origin + '/blog.html',
      publisher: { '@id': C.orgId },
      blogPost: D.posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: C.plain(p.title),
        url: site.origin + '/blog/' + p.slug + '.html',
        datePublished: p.date,
        description: C.plain(p.excerpt)
      }))
    }
  ];

  const cards = D.posts
    .map(
      (p, i) => `<article class="post-card reveal">
          <a class="post-thumb" href="${img(d, 'blog/' + p.slug + '.html')}" tabindex="-1" aria-hidden="true">
            ${C.galleryImg(d, p.img, C.plain(p.title), '(max-width: 640px) 92vw, (max-width: 980px) 46vw, 30vw', i < 3)}
          </a>
          <p class="post-meta"><span class="post-cat">${p.cat}</span><span class="dot"></span><time datetime="${p.date}">${niceDate(p.date)}</time><span class="dot"></span><span>${p.readTime}</span></p>
          <h2 class="post-title"><a href="${img(d, 'blog/' + p.slug + '.html')}">${p.title}</a></h2>
          <p class="post-excerpt">${p.excerpt}</p>
          <a class="link-arrow" href="${img(d, 'blog/' + p.slug + '.html')}">Read Article ${I.arrow}</a>
        </article>`
    )
    .join('\n        ');

  const html = `${C.head({
    depth: d,
    path: 'blog.html',
    page: 'blog',
    title: 'Corporate Event Insights &amp; Blog | Shaahi Creations',
    description:
      'Practical writing on corporate event planning: how to write a better brief, what makes an annual day memorable, planning destination offsites in India, running hybrid events, measuring event ROI and choosing a venue in Hyderabad.',
    keywords: 'corporate event blog, event planning tips India, event brief template, annual day planning, destination offsite checklist, hybrid event guide, event ROI',
    ogImage: 'assets/img/gallery/g09.webp',
    schema
  })}
${C.header(d, 'blog.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g09',
    alt: 'A corporate conference room set up by Shaahi Creations',
    eyebrow: 'Journal',
    title: 'Notes From<br>The <span class="accent">Ground.</span>',
    lede: 'What we have learned producing more than 1500 corporate events across India, written for the teams who commission them.'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Our Work', path: 'our-work.html' }, { name: 'Blogs' }])}

  <div class="container">${workTabs(d, 'blog.html')}</div>

  <section class="section" aria-labelledby="blog-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Latest writing',
        title: 'Ideas Worth<br>Taking Into a Brief.',
        lede: 'No trend round-ups. These are the decisions that actually change how an event turns out, written from experience on the floor.'
      }).replace('<h2 class="sec-title">Ideas Worth', '<h2 class="sec-title" id="blog-title">Ideas Worth')}
      <div class="post-grid">
        ${cards}
      </div>
    </div>
  </section>

</main>

${C.ctaBand(d)}
${C.footer(d)}
${C.foot(d)}`;

  write('blog.html', html);
}

/* ==========================================================================
   Our Work - Blog detail pages
   ========================================================================== */
function renderBody(blocks) {
  return blocks
    .map(([kind, val]) => {
      if (kind === 'h2') return `<h2>${val}</h2>`;
      if (kind === 'h3') return `<h3>${val}</h3>`;
      if (kind === 'list') return `<ul>${val.map((li) => `<li>${li}</li>`).join('')}</ul>`;
      if (kind === 'quote') return `<blockquote>${val}</blockquote>`;
      return `<p>${val}</p>`;
    })
    .join('\n          ');
}

function buildBlogPages() {
  const d = 1;
  D.posts.forEach((p, idx) => {
    const next = D.posts[(idx + 1) % D.posts.length];
    const prev = D.posts[(idx - 1 + D.posts.length) % D.posts.length];

    const schema = [
      C.organizationSchema(),
      C.breadcrumbSchema([
        { name: 'Home', path: 'index.html' },
        { name: 'Our Work', path: 'our-work.html' },
        { name: 'Blogs', path: 'blog.html' },
        { name: C.plain(p.title), path: 'blog/' + p.slug + '.html' }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: C.plain(p.title),
        description: C.plain(p.excerpt),
        image: site.origin + '/assets/img/gallery/' + p.img + '.webp',
        datePublished: p.date,
        dateModified: p.date,
        author: { '@type': 'Organization', name: site.name, url: site.origin + '/' },
        publisher: { '@id': C.orgId },
        mainEntityOfPage: site.origin + '/blog/' + p.slug + '.html',
        articleSection: p.cat,
        inLanguage: 'en-IN',
        wordCount: C.plain(p.body.map((b) => (Array.isArray(b[1]) ? b[1].join(' ') : b[1])).join(' ')).split(/\s+/).length
      }
    ];

    const html = `${C.head({
      depth: d,
      path: 'blog/' + p.slug + '.html',
      page: 'post',
      title: C.plain(p.title) + ' | Shaahi Creations',
      description: C.plain(p.excerpt),
      keywords: C.plain(p.cat + ', corporate event planning, ' + p.title),
      ogType: 'article',
      ogImage: 'assets/img/gallery/' + p.img + '.webp',
      schema
    })}
${C.header(d, 'blog.html')}

<main id="main">

  <section class="phero" aria-labelledby="post-title">
    <div class="phero-media">
      <img src="${img(d, 'assets/img/gallery/' + p.img + '.webp')}" srcset="${img(d, 'assets/img/gallery/' + p.img + '-t.webp')} 820w, ${img(d, 'assets/img/gallery/' + p.img + '.webp')} 1207w" sizes="100vw" width="1207" height="817" alt="${C.esc(C.plain(p.title))}" fetchpriority="high" decoding="async">
    </div>
    ${C.wave('wave-hero-page', 'c')}
    <div class="container phero-inner" style="display:block">
      <div class="phero-copy" style="max-width:780px">
        <p class="post-hero-meta">
          <span class="post-cat">${p.cat}</span>
          <time datetime="${p.date}">${niceDate(p.date)}</time>
          <span>${p.readTime}</span>
        </p>
        <h1 class="phero-title" id="post-title">${p.title}</h1>
        <p class="phero-lede">${p.excerpt}</p>
      </div>
    </div>
  </section>

  ${C.breadcrumbs(d, [
    { name: 'Home', path: 'index.html' },
    { name: 'Our Work', path: 'our-work.html' },
    { name: 'Blogs', path: 'blog.html' },
    { name: p.title }
  ])}

  <article class="section">
    <div class="container">
      <div class="post-body">
        <div class="prose">
          ${renderBody(p.body)}
        </div>

        <div class="share-row">
          <span>Share</span>
          <a class="btn btn-outline btn-sm" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(site.origin + '/blog/' + p.slug + '.html')}" rel="noopener" target="_blank">LinkedIn</a>
          <a class="btn btn-outline btn-sm" href="https://api.whatsapp.com/send?text=${encodeURIComponent(C.plain(p.title) + ' ' + site.origin + '/blog/' + p.slug + '.html')}" rel="noopener" target="_blank">WhatsApp</a>
          <button class="btn btn-outline btn-sm" type="button" data-copy-link>Copy link</button>
        </div>
      </div>
    </div>
  </article>

  <section class="section section-tight section-alt">
    <div class="container">
      <nav class="next-nav" aria-label="More articles">
        <a href="${img(d, 'blog/' + prev.slug + '.html')}">
          <span class="nn-label">Previous</span>
          <span class="nn-title">${prev.title}</span>
        </a>
        <a class="nn-next" href="${img(d, 'blog/' + next.slug + '.html')}">
          <span class="nn-label">Next</span>
          <span class="nn-title">${next.title}</span>
        </a>
      </nav>
    </div>
  </section>

</main>

${C.ctaBand(d, { eyebrow: 'Planning something?', title: 'Let&rsquo;s Talk<br>About Your Event.', lede: 'We are happy to be a sounding board before anything is committed.' })}
${C.footer(d)}
${C.foot(d)}`;

    write('blog/' + p.slug + '.html', html);
  });
}

/* ==========================================================================
   Destinations
   ========================================================================== */
/* Stylised India outline. Coordinates derived from lat/lon on a 400x460
   viewBox: x = (lon - 68) * 13.33, y = (37 - lat) * 15.33 */
const INDIA_PATH =
  'M107,40 L131,30 L149,33 L162,54 L176,86 L174,106 L196,121 L226,136 L262,158 L270,136 ' +
  'L292,144 L318,152 L344,131 L381,137 L370,166 L360,197 L341,212 L334,232 L306,227 L281,231 ' +
  'C275,240 268,249 260,255 C246,266 232,276 224,286 C209,303 196,315 178,326 C173,347 169,368 162,392 ' +
  'C154,414 141,432 128,446 C120,436 114,424 110,412 C104,392 99,371 90,352 C82,334 74,318 70,302 ' +
  'C65,286 62,268 60,252 L60,238 L44,240 L27,237 L11,229 L6,214 L9,203 L24,199 L41,193 L36,174 ' +
  'L28,153 L40,132 L58,119 L81,108 L86,86 L82,60 Z';

const MAP_DOTS = [
  ['Ludhiana', 106, 95], ['Chandigarh', 118, 97], ['Delhi NCR', 123, 114], ['Jaipur', 104, 156],
  ['Ahmedabad', 63, 215], ['Indore', 106, 220], ['Kolkata', 264, 224], ['Mumbai', 72, 274],
  ['Pune', 80, 284], ['Hyderabad', 140, 301], ['Goa', 86, 331], ['Bangalore', 128, 367],
  ['Chennai', 158, 366], ['Kochi', 114, 412]
];

function indiaMap() {
  return `<svg class="india-map" viewBox="0 0 400 460" role="img" aria-labelledby="map-title">
        <title id="map-title">Map of India showing the cities Shaahi Creations works in</title>
        <path class="map-outline" d="${INDIA_PATH}"/>
        ${MAP_DOTS.map(([n, x, y]) => `<circle class="map-dot-soft" cx="${x}" cy="${y}" r="7"><title>${n}</title></circle><circle class="map-dot" cx="${x}" cy="${y}" r="3.2"/>`).join('\n        ')}
      </svg>`;
}

function buildDestinations() {
  const d = 0;
  const signature = D.destinations.filter((x) => x.kind === 'Signature');
  const offbeat = D.destinations.filter((x) => x.kind === 'Offbeat');

  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([{ name: 'Home', path: 'index.html' }, { name: 'Destinations', path: 'destinations.html' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Cities and destinations served by Shaahi Creations',
      itemListElement: D.cities.concat(D.destinations).map((x, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'Place', name: C.plain(x.name), address: { '@type': 'PostalAddress', addressCountry: 'IN' } }
      }))
    }
  ];

  const html = `${C.head({
    depth: d,
    path: 'destinations.html',
    page: 'destinations',
    title: 'Destination Corporate Events Across India | Shaahi Creations',
    description:
      'Shaahi Creations delivers corporate events in 25+ Indian cities including Hyderabad, Mumbai, Delhi NCR, Bangalore, Pune, Kolkata and Chennai, plus destination locations such as Goa, Udaipur, Jaipur, Rishikesh, Coorg, Jim Corbett and Kabini.',
    keywords: 'destination corporate events India, corporate offsite destinations, Goa corporate event, Udaipur offsite, Rishikesh leadership retreat, event management Hyderabad venues, MICE destinations India',
    ogImage: 'assets/img/gallery/g40.webp',
    schema
  })}
${C.header(d, 'destinations.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g35',
    alt: 'An elaborate floral venue installation created by Shaahi Creations for a destination event',
    eyebrow: 'Destinations',
    title: 'Extraordinary Places.<br>Unforgettable <span class="accent">Experiences.</span>',
    lede: 'From vibrant cities to breathtaking destinations, we create seamless events wherever your business takes you.',
    waveVariant: 'a'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Destinations' }])}

  <div class="container">
    <nav class="tabs" aria-label="Destination sections">
      <a class="tab is-active" href="#india-cities">India Cities</a>
      <a class="tab" href="#destinations">Destinations</a>
      <a class="tab" href="#venue-partners">Venue Partners</a>
      <a class="tab" href="#our-approach">Our Approach</a>
    </nav>
  </div>

  <!-- ============================ INDIA CITIES ============================ -->
  <section class="section" id="india-cities" aria-labelledby="cities-title">
    <div class="container">
      <div class="map-panel">
        <div class="map-copy">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Pan India presence</p>
          <h2 class="sec-title" id="cities-title">In Every Major City.<br>With the Same Commitment.</h2>
          <p class="sec-lede">From metros to emerging hubs, we bring local expertise, strong vendor networks and seamless execution across India&rsquo;s key business cities.</p>
          <div class="map-stats">
            <div class="stat"><span class="stat-value">25+</span><span class="stat-label">Cities Across India</span></div>
            <div class="stat"><span class="stat-value">1500+</span><span class="stat-label">Events Executed</span></div>
            <div class="stat"><span class="stat-value">One</span><span class="stat-label">Consistent Standard</span></div>
          </div>
        </div>

        <div class="map-figure">
          ${indiaMap()}
          <p class="map-caption">Events<br>that move<br>people<br>across India</p>
        </div>

        <div class="map-note">
          ${I.pin}
          <strong>Not just locations.<br>Extended teams on the ground.</strong>
          <p>Events that move people across India, delivered by people who know the city they are working in.</p>
        </div>
      </div>

      <div class="place-grid mt-3">
        ${D.cities.map((c) => `<div class="reveal">${C.placeCard({ name: c.name, tag: c.note, hue: c.hue })}</div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ DESTINATIONS ============================ -->
  <section class="section section-alt" id="destinations" aria-labelledby="sig-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Signature destinations',
        title: 'Iconic Backdrops.<br>Extraordinary Experiences.',
        lede: 'From serene beaches to royal palaces and mountain retreats, we craft immersive experiences at India&rsquo;s most inspiring destinations.',
        link: { href: 'contact.html', label: 'Enquire about a destination' }
      }).replace('<h2 class="sec-title">Iconic', '<h2 class="sec-title" id="sig-title">Iconic')}

      <div class="place-grid">
        ${signature.map((x) => `<div class="reveal">${C.placeCard({ name: x.name, tag: x.tag, hue: x.hue })}</div>`).join('\n        ')}
      </div>

      <div class="mt-4">
        <p class="eyebrow"><span class="eyebrow-rule"></span>Offbeat destinations</p>
        <h3 class="sec-title mb-3" style="font-size:var(--fs-h3)">Somewhere Quieter. Somewhere Different.</h3>
        <div class="place-grid">
          ${offbeat.map((x) => `<div class="reveal">${C.placeCard({ name: x.name, tag: x.tag, hue: x.hue })}</div>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ VENUE PARTNERS ============================ -->
  <section class="section" id="venue-partners" aria-labelledby="venue-title">
    <div class="container">
      ${C.sectionHead({
        eyebrow: 'Venue partners',
        title: 'The Right Room<br>For the Right Brief.',
        lede: 'A working shortlist of the Hyderabad venues we use most often, filtered on production capability rather than availability alone. We hold similar relationships in every city we operate in.'
      }).replace('<h2 class="sec-title">The Right', '<h2 class="sec-title" id="venue-title">The Right')}

      <div class="venue-table-wrap">
        <table class="venue-table">
          <caption>Hyderabad venue partners, ordered by how often we work with them.</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">Venue</th><th scope="col">Why we use it</th><th scope="col">Links</th></tr>
          </thead>
          <tbody>
            ${D.venues
              .map(
                (v) => `<tr>
              <td>${String(v.rank).padStart(2, '0')}</td>
              <td><span class="venue-name">${v.name}</span><span class="venue-area">${v.area}</span></td>
              <td>${v.desc}</td>
              <td><div class="venue-links">
                <a href="${v.map}" rel="noopener nofollow" target="_blank">${I.pin} Map</a>
                <a href="${v.web}" rel="noopener nofollow" target="_blank">${I.external} Site</a>
                <a href="${v.insta}" rel="noopener nofollow" target="_blank">${I.instagram} Instagram</a>
              </div></td>
            </tr>`
              )
              .join('\n            ')}
          </tbody>
        </table>
      </div>

      <div class="venue-cards">
        ${D.venues
          .map(
            (v) => `<article class="venue-card">
          <span class="venue-name">${v.name}</span>
          <span class="venue-area">${v.area}</span>
          <p>${v.desc}</p>
          <div class="venue-links">
            <a href="${v.map}" rel="noopener nofollow" target="_blank">${I.pin} Map</a>
            <a href="${v.web}" rel="noopener nofollow" target="_blank">${I.external} Site</a>
            <a href="${v.insta}" rel="noopener nofollow" target="_blank">${I.instagram} Instagram</a>
          </div>
        </article>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ============================ OUR APPROACH ============================ -->
  <section class="approach-band" id="our-approach" aria-labelledby="why-title">
    <div class="container approach-inner">
      <div class="approach-label">
        <p class="eyebrow"><span class="eyebrow-rule"></span>Why choose Shaahi</p>
        <h2 class="sec-title" id="why-title">For your<br>destination event?</h2>
      </div>
      <article class="approach-item reveal"><span class="exp-icon tone-blue">${I.route}</span><h3>End-to-end planning and execution</h3></article>
      <article class="approach-item reveal reveal-d1"><span class="exp-icon tone-coral">${I.handshake}</span><h3>Trusted local partnerships</h3></article>
      <article class="approach-item reveal reveal-d2"><span class="exp-icon tone-pink">${I.plane}</span><h3>Travel, stay and hospitality management</h3></article>
      <article class="approach-item reveal reveal-d3"><span class="exp-icon tone-gold">${I.shield}</span><h3>Seamless experiences, anywhere in India</h3></article>
    </div>
  </section>

</main>

${C.ctaBand(d, { title: 'Where Do You<br>Want To Go Next?', lede: 'Tell us your next event. We will take care of the rest.' })}
${C.footer(d)}
${C.foot(d)}`;

  write('destinations.html', html);
}

/* ==========================================================================
   Contact
   ========================================================================== */
function buildContact() {
  const d = 0;
  const headOffice = site.offices.find((o) => o.primary);

  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([{ name: 'Home', path: 'index.html' }, { name: 'Contact Us', path: 'contact.html' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: site.origin + '/contact.html',
      name: 'Contact Shaahi Creations',
      mainEntity: { '@id': C.orgId }
    }
  ];

  const officePlate = { Hyderabad: 'hyderabad', Pune: 'pune', Mumbai: 'mumbai' };

  const html = `${C.head({
    depth: d,
    path: 'contact.html',
    page: 'contact',
    title: 'Contact Shaahi Creations | Corporate Event Enquiries, Hyderabad, Pune, Mumbai',
    description:
      'Talk to Shaahi Creations about your next corporate event. Head office in Hyderabad, with offices in Pune and Mumbai. Call +91 91000 37360 or write to events@shaahicreations.com. We typically respond within 24 hours.',
    keywords: 'contact event management company Hyderabad, corporate event enquiry, event planners Pune, event planners Mumbai, event company contact India',
    ogImage: 'assets/img/gallery/g05.webp',
    schema
  })}
${C.header(d, 'contact.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g05',
    alt: 'Guests networking at a corporate event managed by Shaahi Creations',
    eyebrow: 'Contact us',
    title: 'Let&rsquo;s Create<br>What&rsquo;s <span class="accent">Next.</span>',
    lede: 'Have an event in mind? We would love to hear from you. Let us turn your ideas into experiences that move people.',
    waveVariant: 'b'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Contact Us' }])}

  <section class="section" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact-grid">

        <div class="contact-form-wrap">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Get in touch</p>
          <h2 class="sec-title contact-h" id="contact-title">Tell Us About Your Event.</h2>
          <p class="contact-intro">Share a few details and our team will get back to you soon.</p>

          <!-- To wire this to a backend, set action to your endpoint (Formspree,
               Netlify Forms, your CRM, etc). Until then it opens a pre-filled email. -->
          <form id="enquiry-form" action="#" method="post" novalidate>
            <div class="form-grid">
              <div class="field">
                <label for="f-name">Your Name <span class="req">*</span></label>
                <input id="f-name" name="name" type="text" autocomplete="name" required placeholder="Full name">
              </div>
              <div class="field">
                <label for="f-company">Company Name <span class="req">*</span></label>
                <input id="f-company" name="company" type="text" autocomplete="organization" required placeholder="Organisation">
              </div>
              <div class="field">
                <label for="f-email">Email Address <span class="req">*</span></label>
                <input id="f-email" name="email" type="email" autocomplete="email" required placeholder="name@company.com">
              </div>
              <div class="field">
                <label for="f-phone">Phone Number <span class="req">*</span></label>
                <input id="f-phone" name="phone" type="tel" autocomplete="tel" required inputmode="tel" placeholder="+91">
              </div>
              <div class="field field-full">
                <label for="f-type">Type of Event <span class="req">*</span></label>
                <select id="f-type" name="eventType" required>
                  <option value="">Select an option</option>
                  ${site.eventTypes.map((t) => `<option>${t}</option>`).join('\n                  ')}
                </select>
              </div>
              <div class="field field-full">
                <label for="f-message">Tell Us About Your Event <span class="req">*</span></label>
                <textarea id="f-message" name="message" required placeholder="What are you trying to achieve? Who is in the room? Anything already decided?"></textarea>
              </div>
              <div class="field field-full">
                <label class="consent" for="f-consent">
                  <input id="f-consent" name="consent" type="checkbox" required>
                  <span>I agree to be contacted by Shaahi Creations.</span>
                </label>
              </div>
            </div>
            <button class="btn btn-dark mt-2" type="submit">Submit Enquiry ${I.arrow}</button>
            <p class="form-note">We typically respond within 24 hours during business hours.</p>
            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>

        <aside class="contact-direct">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Let&rsquo;s talk</p>
          <h2 class="sec-title contact-h">Reach Us Directly.</h2>
          <p class="contact-intro">Prefer a direct conversation? Here are the quickest ways to get in touch with us.</p>

          <div class="contact-list">
            <div class="contact-row">
              <span class="contact-row-icon">${I.phone}</span>
              <div>
                ${site.phones.map((p) => `<a href="${p.href}">${p.label}</a>`).join('\n                ')}
                <span class="contact-sub">${site.hours}</span>
              </div>
            </div>
            <div class="contact-row">
              <span class="contact-row-icon">${I.mail}</span>
              <div>
                ${site.emails.map((e) => `<a href="${e.href}">${e.label}</a>`).join('\n                ')}
                <span class="contact-sub">We typically respond within 24 hours</span>
              </div>
            </div>
            <div class="contact-row">
              <span class="contact-row-icon">${I.pin}</span>
              <div>
                <a href="${headOffice.map}" rel="noopener nofollow" target="_blank">${headOffice.city} (Head Office)</a>
                <address>${headOffice.street},<br>${headOffice.region} &ndash; ${headOffice.postal}</address>
              </div>
            </div>
          </div>

          <div class="contact-social">
            <p class="eyebrow"><span class="eyebrow-rule"></span>Follow our journey</p>
            <h3 class="contact-h3">Stay Connected.</h3>
            <div class="footer-social">
              ${site.social
                .map(
                  (s) => `<a class="social-link" href="${s.href}" aria-label="${site.name} on ${s.name}" rel="noopener" target="_blank">${I[s.icon]}</a>`
                )
                .join('\n              ')}
            </div>
            <span class="quote-rule" aria-hidden="true"></span>
            <p class="contact-social-note">Let&rsquo;s be social for the latest updates, behind the scenes and event stories.</p>
          </div>
        </aside>

      </div>
    </div>
  </section>

  <!-- ============================ OFFICES ============================ -->
  <section class="section section-alt" aria-labelledby="offices-title">
    <div class="container">
      <div class="offices-panel">
        <div class="offices-copy">
          <p class="eyebrow"><span class="eyebrow-rule"></span>Our offices</p>
          <h2 class="sec-title" id="offices-title">Where You Can Find Us.</h2>
          <p class="sec-lede">Our base is in Hyderabad, and we work across India with teams and partners in key cities.</p>

          <div class="office-grid mt-3">
            ${site.offices
              .map(
                (o) => `<article class="office-card reveal">
              <span class="office-plate place-${officePlate[o.city] || 'hyderabad'}">
                <svg class="place-mark" viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 56h112"/><path d="M14 56V34l10-8 10 8v22"/><path d="M24 26V16"/><path d="M44 56V28h14v28"/><path d="M51 28V18l-4-4h8l-4 4"/><path d="M68 56V22l12-10 12 10v34"/><path d="M80 12V4"/><path d="M100 56V38h14v18"/><path d="M74 56V44h12v12"/></svg>
              </span>
              <div class="office-body">
                <h3 class="office-city">${o.city}</h3>
                <p class="office-role">${o.role}</p>
                <span class="quote-rule" aria-hidden="true"></span>
                <address class="office-addr">${o.street}${o.region ? ',<br>' + o.region : ''}${o.postal ? ' &ndash; ' + o.postal : ''}</address>
                <a class="link-arrow" href="${o.map}" rel="noopener nofollow" target="_blank">View on map ${I.arrow}</a>
              </div>
            </article>`
              )
              .join('\n            ')}
          </div>
        </div>

        <div class="offices-map">
          <p class="eyebrow"><span class="eyebrow-rule"></span>A pan-India presence</p>
          <p class="sec-lede">From metros to emerging hubs, we bring local expertise and seamless execution wherever you are.</p>
          <div class="map-figure mt-2">
            ${indiaMap()}
            <p class="map-caption">Events<br>that move<br>people<br>across India</p>
          </div>
          <a class="btn btn-outline mt-2" href="${img(d, 'destinations.html')}">View All Locations ${I.arrow}</a>
        </div>
      </div>
    </div>
  </section>

</main>

${C.ctaBand(d, { title: 'Start a Conversation<br>Today.', lede: 'Great ideas start with a simple conversation. We are here to help.' })}
${C.footer(d)}
${C.foot(d)}`;

  write('contact.html', html);
}

/* ==========================================================================
   Utility pages
   ========================================================================== */
function buildUtility() {
  const d = 0;

  /* --- 404 --- */
  write(
    '404.html',
    `${C.head({
      depth: d,
      path: '404.html',
      page: '404',
      title: 'Page Not Found | Shaahi Creations',
      description: 'The page you are looking for has moved or no longer exists. Explore our work, destinations or get in touch.',
      schema: [C.organizationSchema()]
    }).replace('<meta name="robots" content="index, follow', '<meta name="robots" content="noindex, follow')}
${C.header(d, '')}
<main id="main">
  <section class="section" style="min-height:56vh;display:grid;place-items:center;text-align:center">
    <div class="container container-narrow">
      <p class="eyebrow" style="justify-content:center"><span class="eyebrow-rule"></span>Error 404</p>
      <h1 style="font-size:var(--fs-h1)">This Page Has<br>Left the Venue.</h1>
      <p class="lede mb-3">The page you were looking for has moved or no longer exists. Here is the way back.</p>
      <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-dark" href="index.html">Back to Home ${I.arrow}</a>
        <a class="btn btn-outline" href="our-work.html">Our Work ${I.arrow}</a>
        <a class="btn btn-outline" href="contact.html">Contact Us ${I.arrow}</a>
      </div>
    </div>
  </section>
</main>
${C.footer(d)}
${C.foot(d)}`
  );

  /* --- Thank you --- */
  write(
    'thank-you.html',
    `${C.head({
      depth: d,
      path: 'thank-you.html',
      page: 'thanks',
      title: 'Thank You | Shaahi Creations',
      description: 'Thank you for your enquiry. The Shaahi Creations team will be in touch within 24 hours.',
      schema: [C.organizationSchema()]
    }).replace('<meta name="robots" content="index, follow', '<meta name="robots" content="noindex, follow')}
${C.header(d, '')}
<main id="main">
  <section class="section" style="min-height:56vh;display:grid;place-items:center;text-align:center">
    <div class="container container-narrow">
      <p class="eyebrow" style="justify-content:center"><span class="eyebrow-rule"></span>Enquiry received</p>
      <h1 style="font-size:var(--fs-h1)">Thank You.<br>We Are On It.</h1>
      <p class="lede mb-3">Your enquiry has reached our team. We typically respond within 24 hours during business hours, Monday to Saturday.</p>
      <p class="mb-3">Need us sooner? Call <a class="accent" href="${site.phones[0].href}">${site.phones[0].label}</a>.</p>
      <a class="btn btn-dark" href="index.html">Back to Home ${I.arrow}</a>
    </div>
  </section>
</main>
${C.ctaBand(d)}
${C.footer(d)}
${C.foot(d)}`
  );

  /* --- Privacy --- */
  write(
    'privacy-policy.html',
    `${C.head({
      depth: d,
      path: 'privacy-policy.html',
      page: 'privacy',
      title: 'Privacy Policy | Shaahi Creations',
      description: 'How Shaahi Creations collects, uses and protects the information you share through this website.',
      schema: [C.organizationSchema(), C.breadcrumbSchema([{ name: 'Home', path: 'index.html' }, { name: 'Privacy Policy', path: 'privacy-policy.html' }])]
    })}
${C.header(d, '')}
<main id="main">
  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Privacy Policy' }])}
  <section class="section">
    <div class="container container-narrow">
      <p class="eyebrow"><span class="eyebrow-rule"></span>Legal</p>
      <h1 style="font-size:var(--fs-h1)">Privacy Policy</h1>
      <div class="prose mt-3">
        <p>This policy explains what information Shaahi Creations collects through this website, why we collect it and how we look after it.</p>

        <h2>What we collect</h2>
        <p>We collect only the information you choose to give us through the enquiry form: your name, company name, email address, phone number, the type of event you are planning, and any details you write in the message field. We do not ask for payment details on this site.</p>

        <h2>Why we collect it</h2>
        <p>We use this information for one purpose: to respond to your enquiry and, if you go on to work with us, to plan and deliver your event. We do not sell it, rent it or share it with third parties for marketing.</p>

        <h2>How long we keep it</h2>
        <p>Enquiries that do not proceed are retained for up to 24 months so that we have context if you get back in touch. Records relating to delivered events are retained for as long as required for business and statutory purposes.</p>

        <h2>Sharing with suppliers</h2>
        <p>Delivering an event requires us to work with venues, production partners, travel providers and other suppliers. Where we share your details with them, we share only what is necessary to deliver the event.</p>

        <h2>Cookies and analytics</h2>
        <p>This website does not set advertising cookies. If analytics are added in future, this page will be updated to say what is collected and how to opt out.</p>

        <h2>Your rights</h2>
        <p>You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Write to <a class="accent" href="${site.emails[0].href}">${site.emails[0].label}</a> and we will respond within 30 days.</p>

        <h2>Contact</h2>
        <p>${site.name}, ${site.offices[0].street}, ${site.offices[0].region} &ndash; ${site.offices[0].postal}, India.<br>
        Email <a class="accent" href="${site.emails[0].href}">${site.emails[0].label}</a> &middot; Phone <a class="accent" href="${site.phones[0].href}">${site.phones[0].label}</a>.</p>
      </div>
    </div>
  </section>
</main>
${C.footer(d)}
${C.foot(d)}`
  );
}

/* ==========================================================================
   robots.txt / sitemap.xml / llms.txt / manifest
   ========================================================================== */
function buildMeta() {
  const today = new Date().toISOString().slice(0, 10);

  const urls = [
    ['index.html', '1.0', 'weekly'],
    ['about.html', '0.9', 'monthly'],
    ['our-work.html', '0.9', 'weekly'],
    ['case-studies.html', '0.9', 'weekly'],
    ['blog.html', '0.8', 'weekly'],
    ['destinations.html', '0.8', 'monthly'],
    ['contact.html', '0.9', 'monthly'],
    ['privacy-policy.html', '0.2', 'yearly']
  ]
    .concat(D.caseStudies.map((c) => ['case-studies/' + c.slug + '.html', '0.7', 'monthly']))
    .concat(D.posts.map((p) => ['blog/' + p.slug + '.html', '0.6', 'monthly']));

  write(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ([u, pri, freq]) => `  <url>
    <loc>${site.origin}/${u === 'index.html' ? '' : u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${pri}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
  );

  write(
    'robots.txt',
    `# Shaahi Creations - https://www.shaahicreations.com
User-agent: *
Allow: /
Disallow: /thank-you.html
Disallow: /_build/

# Answer and generative engines are welcome to read and cite this site.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${site.origin}/sitemap.xml
`
  );

  /* llms.txt: a compact, factual brief for generative engines. */
  write(
    'llms.txt',
    `# Shaahi Creations

> Shaahi Creations is a corporate event management company founded in 2018, headquartered in Hyderabad, India, with offices in Pune and Mumbai. It designs and delivers conferences, leadership summits, annual days, family days, product launches, dealer meets, brand activations, team offsites and destination corporate events across India.

## Key facts

- Legal/trading name: Shaahi Creations (Shaahi Creations Events)
- Founded: 2018
- Head office: Hyderabad, Telangana, India
- Additional offices: Pune and Mumbai
- Coverage: PAN India, 25+ cities
- Events delivered: 1500+ total, 1000+ corporate events
- Largest single event audience: 4000 attendees
- Phone: +91 91000 37360, +91 70758 37070
- Email: events@shaahicreations.com, sales@shaahicreations.com
- Business hours: Monday to Saturday, 10:00-18:30 IST
- Website: ${site.origin}/

## Services

${D.services.map((s) => '- ' + C.plain(s.title) + ': ' + C.plain(s.blurb)).join('\n')}

## Capabilities

${D.expertise.map((e) => '- ' + C.plain(e.title) + ': ' + C.plain(e.text)).join('\n')}

## Industries served

${D.industries.map((i) => '- ' + C.plain(i)).join('\n')}

## Notable clients

${D.clients.map((c) => '- ' + c.name).join('\n')}
${D.clientsTextOnly.map((c) => '- ' + c).join('\n')}

## Long-running partnerships

- Microsoft: 4+ years, multi-city events across Hyderabad, Bengaluru and Noida, up to 3000+ pax
- Marriott International / Marriott Bonvoy: 6+ years, 50+ hospitality events PAN India
- Welspun Industries: 4+ years, 100+ events across multiple cities
- ZEST: 4+ years, Annual Day 1500+ pax and Family Day 3000+ pax every year

## Pages

${[
  ['Home', 'index.html', 'Overview of services, featured work, clients and testimonials'],
  ['About', 'about.html', 'Company story, beliefs, leadership team, process and nine capabilities'],
  ['Our Work - Gallery', 'our-work.html', 'Photographs from 39 corporate events, filterable by event type'],
  ['Our Work - Case Studies', 'case-studies.html', '12 detailed case studies with objectives, approach and outcomes'],
  ['Our Work - Blogs', 'blog.html', 'Practical writing on corporate event planning'],
  ['Destinations', 'destinations.html', 'Cities, signature and offbeat destinations, Hyderabad venue partners'],
  ['Contact', 'contact.html', 'Enquiry form, phone, email and office locations']
]
  .map(([n, u, desc]) => `- [${n}](${site.origin}/${u}): ${desc}`)
  .join('\n')}

## Case studies

${D.caseStudies.map((c) => `- [${C.plain(c.title)}](${site.origin}/case-studies/${c.slug}.html): ${C.plain(c.summary)}`).join('\n')}

## Articles

${D.posts.map((p) => `- [${C.plain(p.title)}](${site.origin}/blog/${p.slug}.html): ${C.plain(p.excerpt)}`).join('\n')}

## Frequently asked questions

${D.faqs.home.concat(D.faqs.about, D.faqs.destinations, D.faqs.contact).map((f) => `### ${C.plain(f.q)}\n\n${C.plain(f.a)}`).join('\n\n')}
`
  );

  write(
    'site.webmanifest',
    JSON.stringify(
      {
        name: 'Shaahi Creations - Corporate Events and Experiences',
        short_name: 'Shaahi Creations',
        description:
          'Corporate event management company in Hyderabad delivering conferences, annual days, product launches and destination events across India.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0e2036',
        lang: 'en-IN',
        icons: [
          { src: '/assets/img/brand/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/assets/img/brand/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }
        ]
      },
      null,
      2
    ) + '\n'
  );
}

/* ========================================================================== */
function buildAll() {
  buildGallery();
  buildCaseStudiesIndex();
  buildCaseStudyPages();
  buildBlogIndex();
  buildBlogPages();
  buildDestinations();
  buildContact();
  buildUtility();
  buildMeta();
}

module.exports = { buildAll };

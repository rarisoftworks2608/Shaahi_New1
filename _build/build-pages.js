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

/* Two source conventions: gallery ids (assets/img/gallery/<id>.webp + -t.webp
   thumbnail) via `img`, or scene banners (assets/img/scene/<name>.webp +
   -lg.webp for the larger srcset entry) via `scene` + explicit `sceneDims`
   (the base file's own width/height, so the reserved box matches it). */
function pageHero(d, o) {
  const media = o.scene
    ? `<img src="${img(d, 'assets/img/scene/' + o.scene + '.webp')}" srcset="${img(d, 'assets/img/scene/' + o.scene + '.webp')} 1800w, ${img(d, 'assets/img/scene/' + o.scene + '-lg.webp')} 2600w" sizes="100vw" width="${o.sceneDims[0]}" height="${o.sceneDims[1]}" alt="${C.esc(o.alt)}" fetchpriority="high" decoding="async">`
    : `<img src="${img(d, 'assets/img/gallery/' + o.img + '.webp')}" srcset="${img(d, 'assets/img/gallery/' + o.img + '-t.webp')} 820w, ${img(d, 'assets/img/gallery/' + o.img + '.webp')} 1207w" sizes="100vw" width="1207" height="817" alt="${C.esc(o.alt)}" fetchpriority="high" decoding="async">`;
  return `<section class="phero" aria-labelledby="page-title">
    <div class="phero-media">
      ${media}
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
      (g, i) => `<button class="gal-item work-card gal-item-plain reveal" type="button"
          data-cats="${g.cats.join(' ')}"
          data-full="${img(d, 'assets/img/gallery/' + g.img + '.webp')}"
          data-title="${C.esc(g.title)}"
          data-meta="${C.esc(g.meta)}"
          aria-label="View larger: ${C.esc(C.plain(g.title))}">
          ${C.galleryImg(d, g.img, C.plain(g.title) + ' - ' + C.plain(g.meta), '(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw', i < 3, g.dims || [1207, 817])}
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
    scene: 'conference-stage',
    sceneDims: [1800, 1350],
    alt: 'A large conference stage set produced by Shaahi Creations',
    eyebrow: 'Our work',
    title: 'Experiences<br>In Every <span class="accent">Detail.</span>',
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

/* Deck crops vary in shape, so they sit in justified rows at their own aspect
   ratio instead of being cropped to 4:3, and never grow past native width. */
function csStrip(d, c) {
  const alt = C.plain(c.title) + ' produced by Shaahi Creations';
  if (!c.images.every((g) => D.csPhotos[g])) {
    return `<div class="cs-strip">
        ${c.images.map((g) => C.csImg(d, g, { alt, sizes: '(max-width: 700px) 92vw, 30vw' })).join('\n        ')}
      </div>`;
  }
  return `<div class="cs-strip cs-strip-fit">
        ${c.images
          .map((g) => {
            const p = C.csPhoto(g);
            const ar = p.w / p.h;
            return `<figure style="flex:${Math.round(ar * 100)} 1 ${Math.round(ar * 200)}px;max-width:${p.w}px">${C.csImg(d, g, { alt })}</figure>`;
          })
          .join('\n        ')}
      </div>`;
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
            ${C.csImg(d, c.hero, { cls: 'ph-img', alt: C.plain(c.title), sizes: '(max-width: 640px) 92vw, (max-width: 980px) 46vw, 30vw', eager: i < 3 })}
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
      D.caseStudies.length + ' corporate event case studies from Shaahi Creations, covering leadership summits for Microsoft, hospitality conferences for Marriott Bonvoy, annual days, product launches, dealer meets and government programmes.',
    keywords: 'corporate event case studies, event management case study India, conference case study, product launch case study, annual day case study',
    ogImage: 'assets/img/gallery/g04.webp',
    schema
  })}
${C.header(d, 'case-studies.html')}

<main id="main">

  ${pageHero(d, {
    scene: 'arena-scale',
    sceneDims: [1800, 1201],
    alt: 'A large-scale corporate arena event produced by Shaahi Creations',
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
        image: site.origin + '/' + C.csPhoto(c.hero).src,
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
      ogImage: C.csPhoto(c.hero).src,
      schema
    })}
${C.header(d, 'case-studies.html')}

<main id="main">

  <section class="phero" aria-labelledby="cs-hero-title">
    <div class="phero-media">
      ${C.csImg(d, c.hero, { alt: C.plain(c.title), sizes: '100vw', priority: true })}
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
      ${csStrip(d, c)}
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
/* Official India outline, including Jammu & Kashmir, Ladakh, the north-east
   states and the Andaman & Nicobar Islands, as required for maps of India.
   Derived from amcharts4-geodata "worldIndiaHigh" (feature id "IN") and
   simplified to ~350 points. Equirectangular projection fitted to the
   400x460 viewBox; MAP_DOTS below are projected with the same transform:
   x = 4 + (lon - 68.1649) * 13.438, y = 26.5 + (37.0359 - lat) * 13.438 */
const INDIA_PATH =
  'M331.1,382.4 L329.3,382.5 L329,379.7 L331.2,377.8 L332,380.3 Z M334,369.2 L333.3,369.1 ' +
  'L331.5,364.6 L332.5,363.6 L333.6,360 L334.2,352.5 L335.2,351.1 L335.8,344.7 L336.7,343 ' +
  'L338.6,342.2 L338.7,346.1 L337.8,348.3 L336.2,350.3 L337.3,351.5 L337.6,355.7 L335.9,357.1 ' +
  'L336.1,359.9 L334.4,363 L335,364.6 Z M129.7,415.6 L122.3,411.2 L116.7,404.6 L113.7,397.2 ' +
  'L112.5,390.8 L114.3,396 L115.5,396 L113.9,390.9 L111.9,388.7 L105.6,371.5 L95.1,355.3 ' +
  'L87.5,329.4 L81.7,321.6 L81.5,317.3 L75.4,308.5 L67.2,273.1 L69.1,268.6 L66.8,269.2 L64.5,257.7 ' +
  'L67.4,244.3 L63.8,235.8 L66.8,232.8 L62.8,232.6 L63.5,224.8 L60,224.9 L56,230.9 L59,233.1 ' +
  'L59,234.9 L55.7,239.9 L42.4,245.5 L38.3,245.5 L30.4,240.7 L15.3,225.9 L15,223.4 L17,223 ' +
  'L18.9,224.7 L31,220.9 L33.1,217.6 L32,215.5 L24.2,218.4 L18.4,217.1 L10.4,212.6 L7.4,207.4 ' +
  'L4.9,207.1 L4,203.6 L11.5,202.2 L11.6,198.1 L22.7,198 L24.8,199.4 L36,196.1 L36.4,197.9 ' +
  'L38.3,198.5 L42.7,196.3 L41.7,195.1 L42.7,192.4 L37.4,182.6 L37.4,179.3 L32.2,178.7 L30,176 ' +
  'L30.8,168.5 L21.5,164 L22.9,159 L34.1,147.6 L40.4,151.8 L53.8,148.4 L60.1,137.8 L67.7,134.1 ' +
  'L74.1,121.9 L79.8,119.8 L81.5,118.1 L81.1,115.2 L90.9,107.1 L89.4,105.1 L89.9,96.6 L99.3,92.3 ' +
  'L100.3,90.4 L91.3,87.2 L91.3,84 L85.6,84.1 L81.9,81.2 L76.6,79.8 L73.8,60.6 L77,60.3 L77.3,57.7 ' +
  'L81.1,56.9 L82.9,53.4 L77.4,50.9 L78.5,48 L70.2,45.9 L69.1,43.7 L64,44.3 L61.4,40.9 L69.8,32.7 ' +
  'L76.2,32.9 L78.6,32.2 L78.1,30.2 L82.9,30.7 L82.7,29.3 L91.7,26.5 L100.5,28.1 L101.6,30.5 ' +
  'L107.1,31.7 L108.9,35.3 L108.6,40.2 L112.7,43 L116.7,41.9 L116.9,43.5 L121.1,45.6 L133.5,47.3 ' +
  'L144.2,43.1 L150.8,43 L151.3,41.8 L161,43.6 L165.2,46 L166.3,47.5 L164.6,53.9 L159.1,60.4 ' +
  'L156,61.1 L156.4,64.2 L154.8,66.6 L148.2,67 L149.7,70.8 L148.1,71.9 L148.4,74.6 L154.1,76.7 ' +
  'L154.4,81.2 L156.7,84 L155.7,86.1 L150.5,89 L148.5,89.4 L145.6,86.1 L141.4,87.2 L142.8,91.3 ' +
  'L146,94.7 L145.5,97.7 L147,99.3 L145.9,101.3 L146.8,103.7 L151,102.2 L157.2,108.3 L160.3,108 ' +
  'L165.7,110.8 L165.6,113.4 L176.3,117.9 L168.4,124.7 L164,136.8 L178.8,143.4 L187.9,149.7 ' +
  'L189.8,149.1 L196,152.3 L199,152.3 L199.8,154.4 L207.3,156.4 L209.4,155.1 L214.5,156.3 ' +
  'L218,154.8 L225,157.3 L226,160.8 L234.2,164.8 L237.9,163.5 L241.7,166.7 L243.8,166.1 L253.1,169 ' +
  'L257.3,167.3 L261,170 L271.3,169 L272.7,165.1 L270.3,159.6 L272,148.8 L278.9,146.7 L282,149.7 ' +
  'L280.6,154.3 L282.5,157.1 L280.5,159 L282.1,161.9 L286,163.8 L294.3,165.4 L302.1,162.8 ' +
  'L307.4,164.4 L324.3,163.3 L325.4,157.5 L324.2,155.3 L320.9,155.4 L318.9,153.9 L319.4,151.1 ' +
  'L324,151.6 L333.2,148.6 L333.7,145.9 L339.3,142.5 L340.5,140 L349.9,137.1 L359.6,130.3 ' +
  'L361.5,132.1 L370.3,133.8 L371.5,131.7 L378.5,128.5 L381.2,131.2 L379.7,133.4 L380.2,135.7 ' +
  'L383.9,133.8 L385.9,137.7 L381.8,142.4 L386.2,141.7 L395.8,145 L396,148.8 L390.1,152.7 ' +
  'L390.2,155.5 L392.9,159.2 L392,160 L387,156.8 L380.6,157.8 L366.3,166.8 L365.4,168.4 ' +
  'L366.4,174.2 L359.5,182.7 L358.6,185 L360.7,187.6 L352.9,203.3 L341.9,201.4 L343.3,205.9 ' +
  'L342.7,213.3 L339.9,214.7 L338.8,218.9 L339.9,223.7 L337.3,228.5 L333.6,226.8 L332,228.8 ' +
  'L327.6,205.9 L323.4,205.9 L323.5,208.3 L321,211.3 L321.3,213.7 L319.2,215.4 L316.7,212.4 ' +
  'L315.1,213.7 L313,206.2 L315.8,200.4 L322.6,199.1 L325.2,196.6 L327.7,189.6 L330.3,190.3 ' +
  'L330.6,189 L325,186 L303.3,186.1 L294.9,184.1 L295,175.6 L293.5,172.5 L292.3,171.9 L291.4,174.7 ' +
  'L287.9,174.3 L285.4,172.1 L279.7,170.9 L277.5,167.8 L275.2,168 L276.5,169.8 L271.7,176.3 ' +
  'L278.5,181.6 L280.9,181.6 L283.2,184.3 L282.5,185.6 L276.7,185.7 L274.8,189.8 L272.6,189.4 ' +
  'L270.9,193.2 L280.4,198.6 L278.2,206.1 L280.5,209.2 L280.3,211.7 L283,212.6 L282,214.6 ' +
  'L284.7,224.9 L284.7,233.2 L279.8,232.1 L280.5,228.5 L279.4,227.7 L278.4,233.1 L271.3,232.7 ' +
  'L273,228.1 L266.2,233.2 L258.5,235.3 L255.2,238.8 L256.8,246 L253.8,251.2 L247.4,256.5 ' +
  'L238,259.6 L237.7,257.2 L236.4,256.8 L233.6,258.7 L236.2,260.4 L227.2,267.2 L218.2,278.4 ' +
  'L212.1,281.4 L206,287.6 L194.8,294.4 L193.4,301.7 L186.7,304.8 L181.9,304.3 L179.7,305.6 ' +
  'L176.2,312.4 L171.7,310.6 L167,313.1 L163.8,321.6 L165.3,328.3 L164.5,333.2 L166.3,339.1 ' +
  'L163.9,341.3 L167.6,344.6 L166.1,353.7 L159.7,368.6 L161,373.7 L160.9,385.5 L154.9,385.7 ' +
  'L153,387.5 L148.5,397.2 L149.3,399.6 L141.8,401.8 L138.8,404.7 L137,411.5 Z M349.7,432.4 ' +
  'L348.9,433.5 L347.3,430.1 L346.9,427.7 L349.3,427.3 L350.2,430.5 Z';

const MAP_DOTS = [
  ['Ludhiana', 107, 109], ['Chandigarh', 120, 111], ['Delhi NCR', 126, 140], ['Jaipur', 106, 163],
  ['Ahmedabad', 63, 215], ['Indore', 107, 219], ['Kolkata', 275, 221], ['Mumbai', 67, 268],
  ['Pune', 81, 275], ['Hyderabad', 143, 291], ['Goa', 80, 316], ['Bangalore', 131, 350],
  ['Chennai', 167, 348], ['Kochi', 113, 391]
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
  /* Every card links somewhere real: to its venue-partner showcase when we
     have one, otherwise to the contact page so interest turns into an enquiry. */
  const cityHref = (x) => (x.venues ? img(d, 'venue-partners.html') + '#venues-' + x.venues : img(d, 'contact.html'));
  const destHref = (x) => (x.venues ? img(d, 'destination-venues.html') + '#venues-' + x.venues : img(d, 'contact.html'));

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
    scene: 'destination-sunset',
    sceneDims: [1800, 1236],
    alt: 'A beachfront stage at sunset, produced by Shaahi Creations for a destination event',
    eyebrow: 'Destinations',
    title: 'Extraordinary <span class="accent">Places.</span><br>Unforgettable Experiences.',
    lede: 'From vibrant cities to breathtaking destinations, we create seamless events wherever your business takes you.',
    waveVariant: 'a'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Destinations' }])}

  <div class="container">
    <nav class="tabs" aria-label="Destination sections">
      <a class="tab is-active" href="#india-cities">India Cities</a>
      <a class="tab" href="#destinations">Destinations</a>
      <a class="tab" href="${img(d, 'venue-partners.html')}">Venue Partners</a>
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
        ${D.cities.map((c) => `<div class="reveal">${C.placeCard({ name: c.name, tag: c.note, hue: c.hue, photo: c.photo, href: cityHref(c) })}</div>`).join('\n        ')}
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
        ${signature.map((x) => `<div class="reveal">${C.placeCard({ name: x.name, tag: x.tag, hue: x.hue, photo: x.photo, href: destHref(x) })}</div>`).join('\n        ')}
      </div>

      <div class="mt-4">
        <p class="eyebrow"><span class="eyebrow-rule"></span>Offbeat destinations</p>
        <h3 class="sec-title mb-3" style="font-size:var(--fs-h3)">Somewhere Quieter. Somewhere Different.</h3>
        <div class="place-grid">
          ${offbeat.map((x) => `<div class="reveal">${C.placeCard({ name: x.name, tag: x.tag, hue: x.hue, photo: x.photo, href: destHref(x) })}</div>`).join('\n          ')}
        </div>
      </div>
      ${C.placeCredits(D.cities.concat(D.destinations).map((x) => x.photo))}
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
   Venue Partners
   ========================================================================== */
/* The 12 venueCities entries split the same way the Destinations page splits
   its cards: business/metro cities vs leisure destination places. Keeping
   the two on separate pages mirrors that split instead of mixing them. */
const CITY_VENUE_KEYS = ['hyderabad', 'bengaluru', 'mumbai', 'delhi', 'chennai', 'pune', 'jaipur'];
const DEST_VENUE_KEYS = ['goa', 'udaipur', 'rishikesh', 'kochi'];

/* Full-width banner image for a city/place, sized for the 16:5.4 hero crop
   rather than the small grid-card sizes placePhotoImg assumes. */
function venueHeroImg(d, key) {
  const m = C.placePhotoMeta(key);
  if (!m) return '';
  return `<img src="${img(d, 'assets/img/places/' + key + '.webp')}" srcset="${img(d, 'assets/img/places/' + key + '-sm.webp')} 640w, ${img(d, 'assets/img/places/' + key + '.webp')} 1600w" sizes="100vw" width="${m.w}" height="${m.h}" alt="${C.esc(m.alt)}" loading="lazy" decoding="async">`;
}

/* Shared tabs + stacked panels markup, used by both venue-listing pages. */
function venueShowcase(d, cityKeys) {
  const list = cityKeys.map((k) => D.venueCities.find((c) => c.key === k)).filter(Boolean);
  return `<nav class="venue-tabs" aria-label="Jump to a city">
        ${list.map((c) => `<a class="vtab" href="#venues-${c.key}">${c.name} <span class="vtab-count">${c.venues.length}</span></a>`).join('\n        ')}
      </nav>

      ${list
        .map(
          (c) => `<div class="venue-panel" id="venues-${c.key}" tabindex="-1">
        <div class="venue-hero">
          ${venueHeroImg(d, c.photo)}
          <span class="venue-hero-count">${c.venues.length} partner${c.venues.length === 1 ? '' : 's'}</span>
          <div class="venue-hero-copy">
            <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>${c.tag}</p>
            <h2 class="venue-hero-title">${c.name}</h2>
          </div>
        </div>
        <div class="venue-grid">
          ${c.venues
            .map(
              (v) => `<article class="vcard">
            <div class="vcard-head">
              <span class="vcard-rank">${String(v.rank).padStart(2, '0')}</span>
              <span class="vcard-type">${v.type}</span>
            </div>
            <h3 class="vcard-name">${v.name}</h3>
            <p class="vcard-area">${I.pin}${v.area}</p>
            <p class="vcard-desc">${v.desc}</p>
            <p class="vcard-facts">${v.facts}</p>
            <ul class="vcard-tags" aria-label="Suited to">
              ${v.events.map((e) => `<li>${e}</li>`).join('\n              ')}
            </ul>
            <div class="venue-links">
              <a href="${v.map}" rel="noopener nofollow" target="_blank">${I.pin} Map</a>
              <a href="${v.web}" rel="noopener nofollow" target="_blank">${I.external} Site</a>
              <a href="${v.insta}" rel="noopener nofollow" target="_blank">${I.instagram} Instagram</a>
            </div>
          </article>`
            )
            .join('\n          ')}
        </div>
      </div>`
        )
        .join('\n      ')}`;
}

function buildVenuePartners() {
  const d = 0;
  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([
      { name: 'Home', path: 'index.html' },
      { name: 'Destinations', path: 'destinations.html' },
      { name: 'Venue Partners', path: 'venue-partners.html' }
    ])
  ];

  const html = `${C.head({
    depth: d,
    path: 'venue-partners.html',
    page: 'venue-partners',
    title: 'Venue Partners Across India | Luxury Hotels &amp; Palaces | Shaahi Creations',
    description: 'A curated, city-by-city shortlist of the luxury hotels, palaces and resorts Shaahi Creations works with most often - each matched to the kind of event it is actually built for.',
    keywords: 'corporate event venues India, luxury hotel venues, wedding venue Hyderabad, MICE venue Mumbai, conference hotel Bengaluru, gala venue Mumbai',
    ogImage: 'assets/img/gallery/g14.webp',
    schema
  })}
${C.header(d, 'destinations.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g35',
    alt: 'An elegant ballroom set for a gala event',
    eyebrow: 'Venue partners',
    title: 'Rooms Built<br>For <span class="accent">The Brief.</span>',
    lede: 'A working shortlist of the business-city venues we return to, again and again - chosen for what they can actually deliver, not just for being available.',
    waveVariant: 'b'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Destinations', path: 'destinations.html' }, { name: 'Venue Partners' }])}

  <section class="section">
    <div class="container">
      ${venueShowcase(d, CITY_VENUE_KEYS)}
    </div>
  </section>

</main>

${C.ctaBand(d, { title: 'Don&rsquo;t See Your City?', lede: 'We hold the same production-first relationships everywhere we operate. Tell us where, and we will bring the shortlist.' })}
${C.footer(d)}
${C.foot(d)}`;

  write('venue-partners.html', html);
}

function buildDestinationVenues() {
  const d = 0;
  const schema = [
    C.organizationSchema(),
    C.breadcrumbSchema([
      { name: 'Home', path: 'index.html' },
      { name: 'Destinations', path: 'destinations.html' },
      { name: 'Destination Venues', path: 'destination-venues.html' }
    ])
  ];

  const html = `${C.head({
    depth: d,
    path: 'destination-venues.html',
    page: 'destination-venues',
    title: 'Destination Venues | Palaces, Beach Resorts &amp; Retreats | Shaahi Creations',
    description: 'A curated shortlist of the palaces, beach resorts and wellness retreats Shaahi Creations works with for offsites, incentive travel and destination celebrations across Goa, Rajasthan, Uttarakhand and South India.',
    keywords: 'destination wedding venue India, offsite resort Goa, palace venue Udaipur, wellness retreat Rishikesh, incentive travel Kerala resort',
    ogImage: 'assets/img/gallery/g35.webp',
    schema
  })}
${C.header(d, 'destinations.html')}

<main id="main">

  ${pageHero(d, {
    img: 'g08',
    alt: 'A large-format destination event set against a scenic backdrop',
    eyebrow: 'Destination venues',
    title: 'Escapes Built<br>For <span class="accent">The Occasion.</span>',
    lede: 'Palaces, beach resorts and wellness retreats we return to for offsites, incentive travel and destination celebrations - each chosen for a different kind of moment.',
    waveVariant: 'c'
  })}

  ${C.breadcrumbs(d, [{ name: 'Home', path: 'index.html' }, { name: 'Destinations', path: 'destinations.html' }, { name: 'Destination Venues' }])}

  <section class="section">
    <div class="container">
      ${venueShowcase(d, DEST_VENUE_KEYS)}
    </div>
  </section>

</main>

${C.ctaBand(d, { title: 'Planning Something Further Out?', lede: 'We hold the same relationships in offbeat destinations too. Tell us where, and we will bring the shortlist.' })}
${C.footer(d)}
${C.foot(d)}`;

  write('destination-venues.html', html);
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
    scene: 'audience-gold',
    sceneDims: [1800, 1200],
    alt: 'An audience at a corporate event lit in gold, produced by Shaahi Creations',
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
    ['venue-partners.html', '0.7', 'monthly'],
    ['destination-venues.html', '0.7', 'monthly'],
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
  ['Our Work - Case Studies', 'case-studies.html', D.caseStudies.length + ' detailed case studies with objectives, approach and outcomes'],
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
        theme_color: '#152f49',
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
  buildVenuePartners();
  buildDestinationVenues();
  buildContact();
  buildUtility();
  buildMeta();
}

module.exports = { buildAll };

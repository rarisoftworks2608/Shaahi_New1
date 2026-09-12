/* ==========================================================================
   Shared markup components
   ========================================================================== */
const { site, nav } = require('./site.js');
const icons = require('./icons.js');

/* Relative-path helper: depth 0 = site root, 1 = /case-studies/ etc. */
const R = (d) => (d ? '../'.repeat(d) : '');

const esc = (s) => String(s).replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Plain text from an HTML-ish string (for meta tags / JSON-LD). */
const plain = (s) =>
  String(s)
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&ndash;/g, '\u2013')
    .replace(/&mdash;/g, '\u2014').replace(/&eacute;/g, '\u00e9').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();

const jsonld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

/* --------------------------------------------------------------------------
   <head>
   -------------------------------------------------------------------------- */
function head(o) {
  const d = o.depth || 0;
  const r = R(d);
  const canonical = site.origin + '/' + (o.path === 'index.html' ? '' : o.path);
  const ogImage = site.origin + '/' + (o.ogImage || 'assets/img/gallery/g14.webp');
  const title = o.title;
  const desc = plain(o.description);

  const preload = (o.preload || [])
    .map((p) => `<link rel="preload" as="image" href="${r}${p}" fetchpriority="high">`)
    .join('\n  ');

  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  ${o.keywords ? `<meta name="keywords" content="${esc(o.keywords)}">` : ''}
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="${site.name}">
  <meta name="theme-color" content="#0e2036">
  <meta name="format-detection" content="telephone=yes">

  <meta property="og:type" content="${o.ogType || 'website'}">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${esc(o.ogTitle || title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1207">
  <meta property="og:image:height" content="817">
  <meta property="og:image:alt" content="${esc(o.ogImageAlt || site.name + ' corporate event production')}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(o.ogTitle || title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${ogImage}">

  <link rel="icon" href="${r}assets/img/brand/icon-32.png" sizes="32x32">
  <link rel="icon" href="${r}assets/img/brand/icon-192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="${r}assets/img/brand/icon-180.png">
  <link rel="manifest" href="${r}site.webmanifest">

  <script>document.documentElement.className += ' js';</script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="${r}assets/css/style.css">
  ${preload}
  ${(o.schema || []).map(jsonld).join('\n  ')}
</head>
<body${o.bodyClass ? ` class="${o.bodyClass}"` : ''} data-page="${o.page || ''}">
<a class="skip-link" href="#main">Skip to main content</a>`;
}

/* --------------------------------------------------------------------------
   Brand logo
   -------------------------------------------------------------------------- */
function logo(d, variant = 'primary', cls = '') {
  const r = R(d);
  const f = variant === 'inverse' ? 'logo-inverse' : 'logo-primary';
  return `<img class="logo-img ${cls}" src="${r}assets/img/brand/${f}.webp" srcset="${r}assets/img/brand/${f}-sm.webp 500w, ${r}assets/img/brand/${f}.webp 1000w" sizes="(max-width: 700px) 150px, 190px" width="1000" height="476" alt="${site.name} &ndash; ${site.descriptor}" decoding="async">`;
}

/* --------------------------------------------------------------------------
   Header
   -------------------------------------------------------------------------- */
function header(d, active) {
  const r = R(d);
  const isActive = (item) =>
    item.href === active || (item.children || []).some((c) => c.href === active);

  const links = nav
    .map((item) => {
      const cur = isActive(item);
      if (item.children) {
        return `<li class="nav-item has-sub">
            <a class="nav-link${cur ? ' is-active' : ''}" href="${r}${item.href}"${cur ? ' aria-current="page"' : ''} aria-haspopup="true" aria-expanded="false">${item.label}<span class="nav-caret">${icons.chevronDown}</span></a>
            <button class="nav-sub-toggle" type="button" aria-label="Toggle ${plain(item.label)} submenu" aria-expanded="false">${icons.chevronDown}</button>
            <ul class="nav-sub">
              ${item.children.map((c) => `<li><a href="${r}${c.href}"${c.href === active ? ' aria-current="page"' : ''}>${c.label}</a></li>`).join('\n              ')}
            </ul>
          </li>`;
      }
      return `<li class="nav-item"><a class="nav-link${cur ? ' is-active' : ''}" href="${r}${item.href}"${cur ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
    })
    .join('\n          ');

  return `
<header class="site-header" id="site-header">
  <div class="container header-inner">
    <a class="brand" href="${r}index.html" aria-label="${site.name} home">${logo(d)}</a>

    <nav class="site-nav" id="site-nav" aria-label="Primary">
      <ul class="nav-list">
          ${links}
      </ul>
      <a class="btn btn-dark nav-cta-mobile" href="${r}contact.html">Let&rsquo;s Talk ${icons.arrow}</a>
      <div class="nav-mobile-meta">
        <a href="${site.phones[0].href}">${site.phones[0].label}</a>
        <a href="${site.emails[0].href}">${site.emails[0].label}</a>
      </div>
    </nav>

    <div class="header-actions">
      <a class="btn btn-dark header-cta" href="${r}contact.html">Let&rsquo;s Talk ${icons.arrow}</a>
      <button class="nav-toggle" id="nav-toggle" type="button" aria-label="Open menu" aria-controls="site-nav" aria-expanded="false">
        <span class="nav-toggle-bars"><span></span><span></span><span></span></span>
      </button>
    </div>
  </div>
</header>
<div class="nav-scrim" id="nav-scrim" hidden></div>`;
}

/* --------------------------------------------------------------------------
   Wave graphic (the brand signature)
   -------------------------------------------------------------------------- */
let waveSeq = 0;
function wave(cls = '', variant = 'a') {
  const id = `wg${++waveSeq}`;
  const paths = {
    a: 'M-20,150 C160,40 300,26 470,104 C640,182 760,206 930,140 C1080,82 1240,58 1460,116',
    b: 'M-20,196 C170,96 300,74 480,148 C660,222 790,240 950,178 C1100,120 1260,96 1460,150',
    c: 'M-20,104 C150,196 320,214 500,146 C680,78 800,60 960,120 C1120,180 1270,196 1460,132'
  };
  return `<div class="wave ${cls}" aria-hidden="true">
  <svg viewBox="0 0 1440 260" preserveAspectRatio="none" role="presentation" focusable="false">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f6b41e"/>
        <stop offset="14%" stop-color="#f07e2c"/>
        <stop offset="27%" stop-color="#ee4b3c"/>
        <stop offset="40%" stop-color="#e5326e"/>
        <stop offset="53%" stop-color="#a8459e"/>
        <stop offset="65%" stop-color="#6c4fa3"/>
        <stop offset="77%" stop-color="#3b72c4"/>
        <stop offset="88%" stop-color="#1ba0d6"/>
        <stop offset="96%" stop-color="#14a79c"/>
        <stop offset="100%" stop-color="#6fbe44"/>
      </linearGradient>
    </defs>
    <path class="wave-glow" d="${paths[variant]}" stroke="url(#${id})" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path class="wave-line" d="${paths[variant]}" stroke="url(#${id})" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  </svg>
</div>`;
}

/* Small brand squiggle that sits under the handwritten note. */
let swSeq = 0;
function scriptWave() {
  const id = `sw${++swSeq}`;
  return `<svg class="script-wave" viewBox="0 0 220 42" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f6b41e"/><stop offset="22%" stop-color="#ee4b3c"/>
        <stop offset="45%" stop-color="#e5326e"/><stop offset="66%" stop-color="#6c4fa3"/>
        <stop offset="84%" stop-color="#1ba0d6"/><stop offset="100%" stop-color="#14a79c"/>
      </linearGradient>
    </defs>
    <path d="M2,28 C34,4 66,4 98,20 C130,36 162,36 194,14 C204,7 212,6 218,9"
          stroke="url(#${id})" stroke-width="3.4" stroke-linecap="round" fill="none"/>
  </svg>`;
}

/* --------------------------------------------------------------------------
   Section header: eyebrow + title on the left, lede + link on the right
   -------------------------------------------------------------------------- */
function sectionHead(o) {
  const right =
    o.lede || o.link
      ? `<div class="sec-head-right">
        ${o.lede ? `<p class="sec-lede">${o.lede}</p>` : ''}
        ${o.link ? `<a class="link-arrow" href="${o.link.href}">${o.link.label} ${icons.arrow}</a>` : ''}
      </div>`
      : '';
  return `<div class="sec-head${right ? '' : ' is-single'}">
      <div class="sec-head-left">
        <p class="eyebrow"><span class="eyebrow-rule"></span>${o.eyebrow}</p>
        <h2 class="sec-title">${o.title}</h2>
      </div>
      ${right}
    </div>`;
}

/* --------------------------------------------------------------------------
   Responsive gallery <picture>
   -------------------------------------------------------------------------- */
function galleryImg(d, id, alt, sizes = '(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 30vw', eager = false) {
  const r = R(d);
  return `<img class="ph-img" src="${r}assets/img/gallery/${id}.webp" srcset="${r}assets/img/gallery/${id}-t.webp 820w, ${r}assets/img/gallery/${id}.webp 1207w" sizes="${sizes}" width="1207" height="817" alt="${esc(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
}

/* --------------------------------------------------------------------------
   Place card (cities / destinations) - gradient plate + landmark mark
   -------------------------------------------------------------------------- */
const landmark = `<svg class="place-mark" viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 56h112"/><path d="M14 56V34l10-8 10 8v22"/><path d="M24 26V16"/><path d="M44 56V28h14v28"/><path d="M51 28V18l-4-4h8l-4 4"/><path d="M68 56V22l12-10 12 10v34"/><path d="M80 12V4"/><path d="M100 56V38h14v18"/><path d="M74 56V44h12v12"/></svg>`;

/* Renders a photo when `img` is supplied, otherwise a branded gradient plate.
   Dropping real city/destination photography in later is a data-only change. */
function placeCard(o) {
  const plate = o.img
    ? `<span class="place-plate place-photo"><img src="${o.img}" width="1207" height="817" alt="${esc(o.imgAlt || plain(o.name))}" loading="lazy" decoding="async"></span>`
    : `<span class="place-plate place-${o.hue || 'goa'}">${landmark}</span>`;
  const inner = `${plate}
      <span class="place-body">
        <span class="place-name">${o.name}</span>
        ${o.tag ? `<span class="place-tag">${o.tag}</span>` : ''}
      </span>
      <span class="place-go" aria-hidden="true">${icons.arrow}</span>`;
  return o.href
    ? `<a class="place-card" href="${o.href}">${inner}</a>`
    : `<div class="place-card">${inner}</div>`;
}

/* --------------------------------------------------------------------------
   CTA band + footer
   -------------------------------------------------------------------------- */
function ctaBand(d, o = {}) {
  const r = R(d);
  return `
<section class="cta-band" aria-labelledby="cta-title">
  ${wave('wave-cta', 'b')}
  <div class="container cta-inner">
    <div class="cta-left">
      <p class="eyebrow eyebrow-light"><span class="eyebrow-rule"></span>${o.eyebrow || 'Let&rsquo;s Create Together'}</p>
      <h2 class="cta-title" id="cta-title">${o.title || 'Let&rsquo;s Create<br>What&rsquo;s Next.'}</h2>
    </div>
    <div class="cta-right">
      <p class="cta-lede">${o.lede || 'Tell us about your next event. We&rsquo;d love to bring it to life.'}</p>
      <a class="btn btn-light" href="${r}contact.html">${o.cta || 'Let&rsquo;s Talk'} ${icons.arrow}</a>
    </div>
  </div>
</section>`;
}

function footer(d) {
  const r = R(d);
  const links = nav
    .map((i) => `<li><a href="${r}${i.href}">${i.label}</a></li>`)
    .join('\n            ');
  const social = site.social
    .map((s) => `<a class="social-link" href="${s.href}" aria-label="${site.name} on ${s.name}" rel="noopener" target="_blank">${icons[s.icon]}</a>`)
    .join('\n            ');
  return `
<footer class="site-footer">
  <div class="container footer-inner">
    <a class="brand footer-brand" href="${r}index.html" aria-label="${site.name} home">${logo(d)}</a>
    <nav class="footer-nav" aria-label="Footer">
      <ul>
            ${links}
      </ul>
    </nav>
    <div class="footer-social">
            ${social}
    </div>
  </div>
  <div class="container footer-bottom">
    <p>&copy; ${new Date().getFullYear()} ${site.name}. All rights reserved.</p>
    <p class="footer-motto">Ideas &middot; People &middot; Experiences &middot; Together</p>
  </div>
</footer>`;
}

function foot(d, extra = '') {
  const r = R(d);
  return `${extra}
<script src="${r}assets/js/main.js" defer></script>
</body>
</html>`;
}

/* --------------------------------------------------------------------------
   Video lightbox (shared markup, activated from any [data-video] trigger)
   -------------------------------------------------------------------------- */
function videoModal(d) {
  const r = R(d);
  return `
<div class="vmodal" id="vmodal" hidden>
  <div class="vmodal-scrim" data-vclose></div>
  <div class="vmodal-box" role="dialog" aria-modal="true" aria-label="Shaahi Creations showreel">
    <button class="vmodal-close" type="button" data-vclose aria-label="Close video">${icons.close}</button>
    <video id="vmodal-video" controls playsinline preload="none" poster="${r}assets/img/gallery/g14-t.webp">
      <source src="${r}assets/videos/Website.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
</div>`;
}

/* --------------------------------------------------------------------------
   FAQ block + FAQPage schema
   -------------------------------------------------------------------------- */
function faqSection(list, o = {}) {
  const items = list
    .map(
      (f, i) => `<details class="faq-item"${i === 0 ? ' open' : ''}>
        <summary><span>${f.q}</span><span class="faq-plus" aria-hidden="true">${icons.plus}</span></summary>
        <div class="faq-answer"><p>${f.a}</p></div>
      </details>`
    )
    .join('\n      ');
  return `
<section class="section section-faq" aria-labelledby="faq-title">
  <div class="container">
    ${sectionHead({
      eyebrow: o.eyebrow || 'Good to know',
      title: o.title || 'Questions We Are Often Asked.',
      lede: o.lede || 'Short answers to the things most teams want to know before they get in touch.'
    }).replace('sec-title', 'sec-title" id="faq-title')}
    <div class="faq-list">
      ${items}
    </div>
  </div>
</section>`;
}

function faqSchema(list) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: plain(f.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) }
    }))
  };
}

/* --------------------------------------------------------------------------
   Shared schema graphs
   -------------------------------------------------------------------------- */
const orgId = site.origin + '/#organization';
const siteId = site.origin + '/#website';

function organizationSchema() {
  const head = site.offices.find((o) => o.primary);
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    name: site.name,
    alternateName: site.legalName,
    url: site.origin + '/',
    logo: { '@type': 'ImageObject', url: site.origin + '/assets/img/brand/logo-primary.png', width: 1000, height: 476 },
    image: site.origin + '/assets/img/gallery/g14.webp',
    description:
      'Shaahi Creations is a PAN India corporate event management company founded in 2018 and headquartered in Hyderabad. We design and deliver conferences, annual days, product launches, brand activations, team offsites and destination corporate events.',
    foundingDate: site.founded,
    slogan: 'Ideas. People. Experiences. Together.',
    email: site.emails[0].label,
    telephone: site.phones[0].label,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: head.street,
      addressLocality: head.city,
      addressRegion: head.region,
      postalCode: head.postal,
      addressCountry: 'IN'
    },
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-91000-37360',
        contactType: 'sales',
        email: site.emails[0].label,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Telugu', 'Marathi']
      }
    ],
    sameAs: site.social.map((s) => s.href),
    knowsAbout: [
      'Corporate event management', 'Conference production', 'Annual day celebrations',
      'Product launch events', 'Brand activations', 'Team offsites', 'Destination corporate events',
      'MICE', 'Event production', 'Artist management'
    ],
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 }
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': siteId,
    url: site.origin + '/',
    name: site.name,
    publisher: { '@id': orgId },
    inLanguage: 'en-IN'
  };
}

function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: plain(t.name),
      item: site.origin + '/' + (t.path === 'index.html' ? '' : t.path)
    }))
  };
}

function breadcrumbs(d, trail) {
  const r = R(d);
  return `<nav class="crumbs" aria-label="Breadcrumb"><div class="container"><ol>
    ${trail
      .map((t, i) =>
        i === trail.length - 1
          ? `<li aria-current="page">${t.name}</li>`
          : `<li><a href="${r}${t.path}">${t.name}</a></li>`
      )
      .join('\n    ')}
  </ol></div></nav>`;
}

module.exports = {
  R, esc, plain, jsonld, head, logo, header, wave, scriptWave, sectionHead, galleryImg,
  placeCard, ctaBand, footer, foot, videoModal, faqSection, faqSchema,
  organizationSchema, websiteSchema, breadcrumbSchema, breadcrumbs, icons, site, nav,
  orgId, siteId
};

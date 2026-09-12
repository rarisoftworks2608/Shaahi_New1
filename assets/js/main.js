/* ==========================================================================
   Shaahi Creations - site behaviour
   Vanilla JS, no dependencies. Every block is defensive: a page that does not
   contain a given component simply skips it.
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ *
   * Header shadow on scroll
   * ------------------------------------------------------------------ */
  (function stickyHeader() {
    var header = $('#site-header');
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle('is-stuck', window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ------------------------------------------------------------------ *
   * Mobile navigation
   * ------------------------------------------------------------------ */
  (function mobileNav() {
    var toggle = $('#nav-toggle');
    var nav = $('#site-nav');
    var scrim = $('#nav-scrim');
    if (!toggle || !nav) return;

    var lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('nav-open');
      if (scrim) { scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add('is-visible'); }); }
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    }

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('nav-open');
      if (scrim) {
        scrim.classList.remove('is-visible');
        window.setTimeout(function () { scrim.hidden = true; }, 300);
      }
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    toggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) close(); else open();
    });
    if (scrim) scrim.addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
    });

    /* keep focus inside the drawer while it is open */
    nav.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !nav.classList.contains('is-open')) return;
      var items = $$('a[href], button:not([disabled])', nav).filter(function (el) {
        return el.offsetParent !== null;
      });
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    /* submenu accordion on small screens */
    $$('.nav-sub-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = btn.parentElement.querySelector('.nav-sub');
        if (!sub) return;
        var isOpen = sub.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
    });

    /* reset drawer state when leaving the mobile breakpoint */
    var mq = window.matchMedia('(min-width: 1025px)');
    var onChange = function (e) { if (e.matches && nav.classList.contains('is-open')) close(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  })();

  /* ------------------------------------------------------------------ *
   * Scroll reveal
   * ------------------------------------------------------------------ */
  (function reveal() {
    var items = $$('.reveal');
    if (!items.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });

    /* Failsafe: if nothing has revealed after 3s the observer is not firing
       (an offscreen iframe, an unusual embed). Never leave content invisible. */
    window.setTimeout(function () {
      if (!document.querySelector('.reveal.is-in')) {
        items.forEach(function (el) { el.classList.add('is-in'); });
      }
    }, 3000);
  })();

  /* ------------------------------------------------------------------ *
   * Carousels ( [data-carousel] with .carousel-track + [data-prev]/[data-next] )
   * ------------------------------------------------------------------ */
  (function carousels() {
    $$('[data-carousel]').forEach(function (root) {
      var track = $('.carousel-track', root);
      /* Controls may sit outside the carousel (see the testimonials header). */
      var navName = root.getAttribute('data-nav');
      var navHost = navName ? $('[data-nav-for="' + navName + '"]') : null;
      var prev = $('[data-prev]', navHost || root);
      var next = $('[data-next]', navHost || root);
      if (!track) return;

      function step() {
        var first = track.firstElementChild;
        if (!first) return track.clientWidth;
        var gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
        return first.getBoundingClientRect().width + gap;
      }

      function sync() {
        var max = track.scrollWidth - track.clientWidth - 2;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft >= max;
      }

      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }); });

      track.addEventListener('scroll', function () { window.requestAnimationFrame(sync); }, { passive: true });
      window.addEventListener('resize', sync);
      window.addEventListener('load', sync);
      if ('ResizeObserver' in window) new ResizeObserver(sync).observe(track);
      $$('img', track).forEach(function (im) {
        if (!im.complete) im.addEventListener('load', sync, { once: true });
      });
      sync();
    });
  })();

  /* ------------------------------------------------------------------ *
   * Filter chips ( [data-filter-group] -> .chip[data-cat], [data-filterable] )
   * ------------------------------------------------------------------ */
  (function filters() {
    $$('[data-filter-group]').forEach(function (group) {
      var name = group.getAttribute('data-filter-group');
      var chips = $$('.chip', group);
      var pool = $('[data-filter-pool="' + name + '"]');
      if (!pool) return;
      var items = $$('[data-cats]', pool);
      var empty = $('[data-filter-empty="' + name + '"]');
      var loadMore = $('[data-load-more="' + name + '"]');
      var pageSize = parseInt(pool.getAttribute('data-page-size') || '0', 10);
      var current = 'all';
      var shown = pageSize || items.length;

      function apply() {
        var matched = 0;
        items.forEach(function (el) {
          var cats = (el.getAttribute('data-cats') || '').split(' ');
          var isMatch = current === 'all' || cats.indexOf(current) !== -1;
          if (isMatch) {
            matched++;
            el.hidden = pageSize ? matched > shown : false;
          } else {
            el.hidden = true;
          }
        });
        if (empty) empty.hidden = matched !== 0;
        if (loadMore) loadMore.hidden = !pageSize || matched <= shown;
      }

      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          chips.forEach(function (c) {
            c.classList.toggle('is-active', c === chip);
            c.setAttribute('aria-pressed', String(c === chip));
          });
          current = chip.getAttribute('data-cat') || 'all';
          shown = pageSize || items.length;
          apply();
        });
      });

      if (loadMore) {
        loadMore.addEventListener('click', function () {
          shown += pageSize;
          apply();
        });
      }

      apply();
    });
  })();

  /* ------------------------------------------------------------------ *
   * Tabbed panels ( [data-tabs] -> .tab[data-tab], [data-panel] )
   * ------------------------------------------------------------------ */
  (function tabs() {
    $$('[data-tabs]').forEach(function (root) {
      var buttons = $$('.tab[data-tab]', root);
      var name = root.getAttribute('data-tabs');
      var panels = $$('[data-panel][data-tabs-for="' + name + '"]');
      if (!buttons.length || !panels.length) return;

      function activate(key, focus) {
        buttons.forEach(function (b) {
          var on = b.getAttribute('data-tab') === key;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-selected', String(on));
          b.tabIndex = on ? 0 : -1;
          if (on && focus) b.focus();
        });
        panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== key; });
        try {
          history.replaceState(null, '', '#' + key);
        } catch (err) { /* file:// or blocked history - ignore */ }
      }

      buttons.forEach(function (b) {
        b.addEventListener('click', function () { activate(b.getAttribute('data-tab'), false); });
        b.addEventListener('keydown', function (e) {
          var i = buttons.indexOf(b);
          if (e.key === 'ArrowRight') { e.preventDefault(); activate(buttons[(i + 1) % buttons.length].getAttribute('data-tab'), true); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); activate(buttons[(i - 1 + buttons.length) % buttons.length].getAttribute('data-tab'), true); }
        });
      });

      var hash = (window.location.hash || '').replace('#', '');
      var initial = buttons.some(function (b) { return b.getAttribute('data-tab') === hash; })
        ? hash
        : buttons[0].getAttribute('data-tab');
      activate(initial, false);
    });
  })();

  /* ------------------------------------------------------------------ *
   * Anchor section tabs: highlight the section currently in view
   * ------------------------------------------------------------------ */
  (function sectionTabs() {
    var links = $$('.tabs a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var targets = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);
    if (!targets.length) return;

    function setActive(id) {
      links.forEach(function (a) {
        var on = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t); });
  })();

  /* ------------------------------------------------------------------ *
   * Image lightbox ( .gal-item with data-full / data-title / data-meta )
   * ------------------------------------------------------------------ */
  (function lightbox() {
    var triggers = $$('.gal-item[data-full]');
    if (!triggers.length) return;

    var box, imgEl, capTitle, capMeta, index = 0, opener = null;

    function build() {
      box = document.createElement('div');
      box.className = 'lightbox';
      box.hidden = true;
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.setAttribute('aria-label', 'Image viewer');
      box.innerHTML =
        '<button class="lb-btn lb-close" type="button" aria-label="Close">' +
        '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6 18 18M18 6 6 18"/></svg></button>' +
        '<button class="lb-btn lb-prev" type="button" aria-label="Previous image">' +
        '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 5-7 7 7 7"/></svg></button>' +
        '<button class="lb-btn lb-next" type="button" aria-label="Next image">' +
        '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 5 7 7-7 7"/></svg></button>' +
        '<figure class="lightbox-fig"><img alt=""><figcaption class="lightbox-cap"><strong></strong><span></span></figcaption></figure>';
      document.body.appendChild(box);
      imgEl = $('img', box);
      capTitle = $('.lightbox-cap strong', box);
      capMeta = $('.lightbox-cap span', box);

      $('.lb-close', box).addEventListener('click', close);
      $('.lb-prev', box).addEventListener('click', function () { show(index - 1); });
      $('.lb-next', box).addEventListener('click', function () { show(index + 1); });
      box.addEventListener('click', function (e) { if (e.target === box) close(); });
    }

    function visible() {
      return triggers.filter(function (t) { return !t.hidden && t.offsetParent !== null; });
    }

    function show(i) {
      var list = visible();
      if (!list.length) return;
      index = (i + list.length) % list.length;
      var t = list[index];
      imgEl.src = t.getAttribute('data-full');
      imgEl.alt = t.getAttribute('data-title') || '';
      capTitle.innerHTML = t.getAttribute('data-title') || '';
      capMeta.innerHTML = t.getAttribute('data-meta') || '';
    }

    function open(trigger) {
      if (!box) build();
      opener = trigger;
      var list = visible();
      show(list.indexOf(trigger));
      box.hidden = false;
      document.body.classList.add('nav-open');
      requestAnimationFrame(function () { box.classList.add('is-open'); });
      $('.lb-close', box).focus();
      document.addEventListener('keydown', onKey);
    }

    function close() {
      if (!box) return;
      box.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      document.removeEventListener('keydown', onKey);
      window.setTimeout(function () { box.hidden = true; if (imgEl) imgEl.src = ''; }, 260);
      if (opener && opener.focus) opener.focus();
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    }

    triggers.forEach(function (t) {
      t.addEventListener('click', function () { open(t); });
    });
  })();

  /* ------------------------------------------------------------------ *
   * Video modal ( [data-video] triggers -> #vmodal )
   * ------------------------------------------------------------------ */
  (function videoModal() {
    var modal = $('#vmodal');
    var triggers = $$('[data-video]');
    if (!modal || !triggers.length) return;
    var video = $('#vmodal-video', modal);
    var opener = null;

    function open(trigger) {
      opener = trigger;
      modal.hidden = false;
      document.body.classList.add('nav-open');
      var closeBtn = $('.vmodal-close', modal);
      if (closeBtn) closeBtn.focus();
      if (video) { video.currentTime = 0; var p = video.play(); if (p && p.catch) p.catch(function () {}); }
      document.addEventListener('keydown', onKey);
    }

    function close() {
      modal.hidden = true;
      document.body.classList.remove('nav-open');
      if (video) video.pause();
      document.removeEventListener('keydown', onKey);
      if (opener && opener.focus) opener.focus();
    }

    function onKey(e) { if (e.key === 'Escape') close(); }

    triggers.forEach(function (t) { t.addEventListener('click', function (e) { e.preventDefault(); open(t); }); });
    $$('[data-vclose]', modal).forEach(function (b) { b.addEventListener('click', close); });
  })();

  /* ------------------------------------------------------------------ *
   * Animated counters
   * ------------------------------------------------------------------ */
  (function counters() {
    var nodes = $$('[data-count]');
    if (!nodes.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        if (isNaN(target)) return;
        var suffix = el.getAttribute('data-suffix') || '';
        var start = performance.now();
        var dur = 1300;
        function tick(now) {
          var t = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });

    nodes.forEach(function (n) { io.observe(n); });
  })();

  /* ------------------------------------------------------------------ *
   * Contact form
   * The form posts to whatever action the client configures. Until an
   * endpoint is wired up it validates, then falls back to a mailto: draft.
   * ------------------------------------------------------------------ */
  (function contactForm() {
    var form = $('#enquiry-form');
    if (!form) return;
    var status = $('#form-status');
    var submit = form.querySelector('[type="submit"]');

    function setStatus(msg, kind) {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status is-' + kind;
    }

    form.addEventListener('submit', function (e) {
      /* let a configured endpoint handle it natively */
      var action = form.getAttribute('action');
      if (action && action.indexOf('mailto:') !== 0 && action !== '#') return;

      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var lines = [];
      var labels = {
        name: 'Name', company: 'Company', email: 'Email', phone: 'Phone',
        eventType: 'Type of event', city: 'City', guests: 'Approx. guests',
        eventDate: 'Preferred date', message: 'About the event'
      };
      Object.keys(labels).forEach(function (k) {
        var v = data.get(k);
        if (v) lines.push(labels[k] + ': ' + v);
      });

      var subject = 'Event enquiry from ' + (data.get('name') || 'website');
      var body = lines.join('\n');
      var href = 'mailto:events@shaahicreations.com?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      if (submit) submit.disabled = true;
      setStatus('Opening your email app with the enquiry ready to send. If nothing opens, write to events@shaahicreations.com.', 'ok');
      window.location.href = href;
      window.setTimeout(function () { if (submit) submit.disabled = false; }, 2500);
    });
  })();

  /* ------------------------------------------------------------------ *
   * Copy-to-clipboard for share links
   * ------------------------------------------------------------------ */
  (function copyLink() {
    $$('[data-copy-link]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var url = window.location.href;
        var done = function () {
          var old = btn.textContent;
          btn.textContent = 'Link copied';
          window.setTimeout(function () { btn.textContent = old; }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done, function () {});
        }
      });
    });
  })();

  /* ------------------------------------------------------------------ *
   * Current year
   * ------------------------------------------------------------------ */
  $$('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();

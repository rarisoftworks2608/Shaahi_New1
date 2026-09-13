Typefaces
=========

Per the brand type sheet:

  Headings              Reross Quadratic
  Sub-headings & body   Poppins

Poppins - DONE
--------------
Self-hosted here as WOFF2, subset to Latin (the Devanagari glyphs in the full
family were ~80% of the file size and the site is English only).

  poppins-300.woff2   Light
  poppins-400.woff2   Regular
  poppins-500.woff2   Medium
  poppins-600.woff2   SemiBold
  poppins-700.woff2   Bold

All five together are about 50 KB. Licence in OFL.txt.
Regenerated from assets/font/poppins_shahi (the supplied zip) if ever needed.

Reross Quadratic - STILL NEEDED
-------------------------------
The supplied zip contained Poppins only, so headings currently fall back to
Poppins. To switch them over, drop the file in as:

    assets/fonts/reross-quadratic.woff2

then run `node _build/build.js`. Nothing else to change - the build detects the
file and injects the @font-face automatically, and `--font-display` in
assets/css/style.css already lists 'Reross Quadratic' ahead of Poppins.

Until the file exists the build emits no @font-face for it, so visitors never
pay for a request to a missing font.

Reross Quadratic is a free typeface from Velvetyne Type Foundry
(velvetyne.fr/fonts/reross). If you have it as TTF or OTF, convert it with:

    pip install fonttools brotli
    python -c "from fontTools.ttLib import TTFont; f=TTFont('Reross-Quadratic.ttf'); f.flavor='woff2'; f.save('assets/fonts/reross-quadratic.woff2')"

Server note
-----------
Serve .woff2 as `font/woff2`. The local dev server does this already; check the
production host does too, otherwise the preload hint is ignored.

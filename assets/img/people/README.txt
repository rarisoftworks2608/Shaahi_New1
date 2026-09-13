Team headshots for the About page
=================================

Save each person's photo here using EXACTLY these filenames, then run:

    node _build/build.js

Required files
--------------
  snehal.webp       Snehal Deshpande    (currently a stock placeholder - replace)
  rupesh.webp       Rupesh Patil        (currently a stock placeholder - replace)
  neetu.webp        Neetu Elluri        MISSING
  mrunalinli.webp   Mrunalinli Bhurle   MISSING
  mukesh.webp       Mukesh Deshmukh     MISSING

Any name without a matching file renders as a branded monogram tile instead,
so the page never breaks - it just shows initials until the photo arrives.

Image spec
----------
  Format   .webp
  Shape    square (1:1) - the card crops to a square
  Size     900 x 900 px
  Weight   under 80 KB
  Framing  head and shoulders, face in the upper half of the frame

Converting a JPG or PNG to WebP
-------------------------------
  Online:  squoosh.app  (drag in, choose WebP, quality ~80, save)
  ffmpeg:  ffmpeg -i photo.jpg -vf "crop=min(iw\,ih):min(iw\,ih),scale=900:900" -q:v 80 neetu.webp

LinkedIn URLs live in _build/data.js under `team`. Three are set. Still needed:
Snehal Deshpande and Mrunalinli Bhurle.

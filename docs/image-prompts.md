# Generated asset prompts

The built-in image generation tool produced the photographic assets. The final
project assets are optimized WebP copies. Original generations remain outside
the repository in the tool's generated-images directory. `sharp` only resizes
and encodes selected outputs; it does not change their creative content.

## Hero and rupture keyframe

Saved asset: `public/images/chain-break.webp`.

```text
Use case: stylized-concept. Asset type: premium editorial website hero for ChainBreaker Labs, a technology company building human freedom. Create a sculptural product photograph of an enormous polished chrome chain link that has split open, with two neighboring links attached at diagonally opposed angles. The central link is torn in two with a generous clear gap, beautifully cut metal ends and very few tiny floating chrome fragments. The links are substantial rounded rectangular oval loops, tactile, mirror-metal reflecting dark charcoal and pale silver. In the gap between the two halves, one impossibly thin luminous acid-lime filament curls delicately through the air, a subtle sign of freedom. Composition: three intertwined links in an elegant dynamic diagonal from lower left to upper right, centered in the right two-thirds of a wide 3:2 frame, ample space around the sculpture, macro editorial still life. Background: completely plain warm ivory #F1F0E8, seamless studio floor, soft contact shadow, no horizon line. Light: refined photographic softbox, luxurious real reflections, slight film grain, understated futuristic art object. No text, no logos, no watermarks, no gradients, no coins, no flowers, no hands, no laboratory glassware. Not an illustration, not cartoon, not chunky plastic, not a website mockup. Photoreal CGI with premium art direction.
```

## Intact keyframe

Saved asset: `public/images/chain-closed.webp`. Edit target: the hero generation.

```text
Use case: precise-object-edit. Asset type: first keyframe of a scroll-driven website visual story. Starting with the reference sculpture photograph, repair the central chrome link so it is one intact closed oval chain link, joining the two cut halves seamlessly with continuous polished chrome tubing. The three chain links are joined and unbroken. Remove all floating metal fragments and the lime filament. Preserve exactly the camera position, diagonal composition, proportions, shapes of the neighboring links, warm ivory studio background #F1F0E8, floor, contact shadow, luxury reflections, and photographic lighting. The result should look like the same photograph taken immediately before the middle link broke. No text, logos or watermark.
```

## Freedom keyframe

Saved asset: `public/images/chain-free.webp`. Edit target: the hero generation.

```text
Use case: precise-object-edit. Asset type: final keyframe of a premium scroll-driven website story about freedom. Starting from the supplied broken chrome chain sculpture photograph, move the left chain link and its attached broken half farther to the lower left, and the right chain link and its attached broken half farther to the upper right, opening the central empty space dramatically. The link pieces gently levitate above the same ivory floor, softly separated, with refined floating shadows. The luminous thin acid-lime filament between the broken ends now traces a long graceful elegant open curve through the large empty center, not a closed knot. Remove the tiny floating metallic fragments. This is the same physical chrome chain, in the same diagonal orientation, with the same camera, exact warm ivory seamless background #F1F0E8 and luxurious polished reflections. Maintain wide 3:2 composition and premium photorealism. The final image feels spacious, released, calm and full of possibility. No text, logos, watermarks, no extra objects.
```

## Other assets

`public/images/infinyte-icon.webp` is an optimized copy of the existing icon
from the local Infinyte website. `public/images/infinyte-dashboard.webp` is an
optimized copy of the owner-provided `dashboard.jpeg`. The real interface is
placed inside a CSS iPhone frame without cropping or recreating its contents.

`public/favicon.svg` and the inline `#mark` symbol are original editable SVG
brand concepts. Fonts originate from [Google Fonts](https://github.com/google/fonts)
and their license texts are included in `public/fonts/`.

To optimize a selected replacement generation:

```sh
node scripts/optimize-image.mjs /absolute/path/to/generation.png public/images/chain-break.webp
```

Review consistency across all three keyframes before replacing a production
asset. Rebuild and verify desktop/mobile frames after any replacement.

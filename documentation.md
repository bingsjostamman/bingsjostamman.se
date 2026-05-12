## Image

1. cloudinaryPicture (base macro)
   • Purpose: Renders a <picture> element (or just <img> if no sources) with Cloudinary URLs, supporting multiple widths, optional LQIP, and responsive art direction.
   • Arguments:
   • id → Cloudinary public ID for the image.
   • alt → alt text (can be null for decorative images).
   • options → dictionary with optional properties:
   • widths → array of widths for srcset.
   • sizes → sizes attribute for <img>.
   • aspect → string "W:H" for calculating fallback height.
   • media → array of objects {id, query} for art-direction <source> elements.
   • lqipId → public ID for the low-quality placeholder image (optional).
   • Features:
   • Generates srcset for each width.
   • Automatically uses f_auto,q_auto transformations in URLs.
   • Conditionally adds art-direction <source> elements if media is provided.
   • Renders LQIP background if lqipId is provided.
   • <img> includes alt, width, height (if aspect ratio is set), loading="lazy" and decoding="async".

⸻

2. Preset middlemen macros

These wrap cloudinaryPicture to provide presets (hero, card, thumbnail) with sensible defaults:
• Hero Image (heroImage)
• Default widths: [800, 1600, 2400].
• Default sizes: 100vw (or can be overridden).
• Optional mobileId → triggers <source> with (max-width: 600px) media query.
• Optional lqipId → renders LQIP background automatically.
• Card Image (cardImage)
• Default widths: [400, 800, 1200].
• Default sizes: "33vw" (can be overridden).
• Default aspect ratio: "4:3".
• Optional lqipId.
• Thumbnail Image (thumbnailImage)
• Default widths: [150, 300, 600].
• Default sizes: "15vw" (can be overridden).
• Default aspect ratio: "1:1".
• Optional lqipId.
• Behavior:
• When calling these macros, you can override alt text, sizes, widths, and LQIP individually.
• The middlemen handle optional mobile images, art-direction, and sensible defaults automatically.
• You don’t need to pass media queries yourself — presets handle it.

3. How to call them

```
<h2>Hero Image</h2>
{{ heroImage("dimma_u2vigg", "Sunny beach at sunset", "legacy/bingsjoberget_njblcc_fxcspu") }}

<h2>Card Image</h2>
{{ cardImage("dimma_u2vigg", "Mountain view") }}

<h2>Thumbnail</h2>
{{ thumbnailImage("dimma_u2vigg", null, "legacy/thumb_lqip") }}
```

    •	Passing null for alt → decorative.
    •	Passing a third argument for hero → optional mobileId or lqipId.
    •	sizes and widths can be overridden via optional options object if needed.

⸻

✅ Key points:
• <picture> is only rendered if art-direction (media) is used; otherwise just <img>.
• LQIP background is optional but automatic if lqipId is provided.
• Lazy loading and f_auto,q_auto are already implemented.
• Aspect ratio is used to calculate fallback height for <img>.

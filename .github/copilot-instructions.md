# Bingsjöstämman.se – Project Overview

## Stack
- **Eleventy 3.1.2** (static site generator, Nunjucks templates)
- **Vite 7** (CSS/JS bundler, `emptyOutDir: true` wipes `public/assets/`)
- **Storybook 9** (HTML-Vite, uses `public/assets/` for CSS/JS/static)
- **Nunjucks** macros for components

## Build Pipeline
```
npm run build = prebuild → build:vite → build:11ty
```
- `prebuild`: `node scripts/prebuild-stories.js && node scripts/scan-used-components.js`
- `build:vite`: `npm run css:generate && vite build && npm run copy:assets`
- `css:generate`: `node scripts/scan-used-components.js && node scripts/generate-entry-css.js`
- `copy:assets`: `cp -R src/assets/* public/assets/` (runs after Vite wipes public/)
- `build:11ty`: `npx @11ty/eleventy`

## CSS Architecture (ITCSS)
Layers 01-settings → 07-utilities + component CSS co-located with components.
Entry CSS generated from global layers + scanned component CSS.

## Edition System
- Editions: `src/editions/{2024,2025,2026}/`
- Current edition (2025) served at root `/`, others at `/{year}/`
- Each edition has: lineup.json, index.njk, lineup.njk, artists.njk, tuesday.njk, wednesday.njk, schedule.njk + corresponding .11tydata.js files

## Lineup Data
Fields: day, stage, type, placement, page, name, ref, description, link, longdescription, image, starttime, endtime, startMinutes, endMinutes
- **type**: dansa, lyssna, spela, sjung, utställning, barnens, vandra, invigning
- **placement**: "" or "headline"
- **page**: "" or "artist" (controls whether artist page is generated)
- **ref**: groups multi-slot artists across stages
- Excel master → `node scripts/convert-lineup.js data/lineup-{year}.xlsx` → lineup.json
- Post-midnight times auto-detected: acts before 06:00 on days with evening acts get +1440 minutes

## Component Pattern
- Components in `src/_includes/components/{name}/`
- Each has: `{name}.njk` (macro), optionally `{name}.css`, `component.meta.json`, `{name}.render.njk`
- Prebuild: `"macro": true` in meta + `.render.njk` wrapper → prebuild-stories.js renders → .stories.js
- scan-used-components.js detects usage via regex matching `include` and `from` patterns

## Key Components
- **headline-acts**: Hero cards for headline placement acts
- **artist-list**: Non-headline artist listing with thumbnails, ref-based multi-slot grouping
- **stage-list**: `<ol>` chronological stage schedule, supports `excludeType` param
- **timeline**: CSS Grid visual schedule, stages as columns, time as rows. `aria-hidden="true"`, filters by day/stages/type

## Eleventy Config
- Passthrough: `{ "public/assets": "assets" }`
- Filters: slugify, swedishDate, date, map, min, max, split, math, padStart, groupBy
- `beforeBuild` hook runs component scanner

## Static Assets
- SVGs/fonts in `src/assets/` (logos/, gfx/, icons/, fonts/)
- Copied to `public/assets/` after Vite build via `copy:assets` script
- Cloudinary used for raster images (heroImage, cardImage, thumbnailImage macros)

## Known Quirks
- `beforeBuild` hook in eleventy.config.js has older regex that doesn't catch `from` imports (latent inconsistency with scan-used-components.js)
- prebuild-stories.js uses standalone Nunjucks — `slugify` filter not available (use `lower | replace(" ", "-")` instead)

# READ ME

This is the introductory information for running this website.

## Get your edition data ready

## Scripts

    "lint:css": "stylelint 'src/css/**/*.css' 'src/_includes/components/**/*.css' --fix",
    "lint:css:watch": "chokidar 'src/css/**/*.css' 'src/_includes/components/**/*.css' -c 'npm run lint:css'",
    "lint:css:netlify": "node ./scripts/lint-css-netlify.js",
    "eleventy:watch": "eleventy --serve",
    "vite:dev": "vite",
    "buildd": "npm run lint:css:netlify && npm run 11ty && vite build",
    "dev": "concurrently -k -n ELEVENTY,VITE,CSS \"npm run eleventy:watch\" \"npm run vite:dev\" \"npm run lint:css:watch\"",
    "build:css": "vite build --config vite.config.js",
    "dev:css": "vite build --watch --config vite.config.js",
    "check:css": "node scripts/check-entry-css.js",
    "11ty": "ELEVENTY_ENV=production eleventy",
    "11ty:start": "ELEVENTY_ENV=development eleventy --serve",
    "build:stories": "node scripts/prebuild-stories.js",
    "prebuild": "node scripts/prebuild-stories.js && node scripts/scan-used-components.js",
    "build:all": "npm run prebuild && npm run build:css",
    "test:a11y": "node scripts/test-accessibility.js",
    "postbuild": "npm run test:a11y",
    "storybook": "storybook dev -p 6006",
    "build:storybook": "storybook build -o _styleguide",
    "prod": "npm run build:css && npm run 11ty",
    "styleguide": "npm run prebuild && npm run build:storybook",
    "test": "echo \"Error: no test specified\" && exit 1"

## Edition folder

2025/
├── index.njk # main edition page
├── lineup.njk # artist list
├── artists.njk # individual artist pages (pagination)
├── artists.11tydata.js # provides `lineup` and `dates` for artists.njk
├── dates.json # mapping of day → actual date
├── lineup.json # raw lineup data for this edition
└── edition.11tydata.js # edition metadata (title, year, start/end, permalink logic)

src/
├── index.njk
├── pages/
│ ├── tickets.njk
│ ├── info.njk
│ └── editions.njk
└── editions/
├── 2024/
│ ├── index.njk
│ ├── lineup.njk
│ ├── artists.njk
│ ├── lineup.json
│ ├── dates.json
│ └── edition.11tydata.js
└── 2025/
├── index.njk
├── lineup.njk
├── artists.njk
├── lineup.json
├── dates.json
└── edition.11tydata.js

### Current edition

\_site/
├── index.html ← src/index.njk (renders 2025 edition index)
├── lineup/
│ └── index.html ← src/editions/2025/lineup.njk
├── scen/
│ └── [artist-slug]/
│ └── index.html ← src/editions/2025/artists.njk, pagination
├── tickets/
│ └── index.html ← src/pages/tickets.njk
├── info/
│ └── index.html ← src/pages/info.njk
└── editions/
└── index.html ← src/pages/editions.njk

### Past edition

\_site/
├── 2024/
│ ├── index.html ← src/editions/2024/index.njk
│ ├── lineup/
│ │ └── index.html ← src/editions/2024/lineup.njk
│ └── scen/
│ └── [artist-slug]/
│ └── index.html ← src/editions/2024/artists.njk, pagination

### Sitemap (2026)

bingsjostamman.se ([current edition]/)
│
├── tisdag ([current edition]/tisdag – menu link)
├── onsdag ([current edition]/onsdag – menu link)
├── allspel ([current edition]/allspel – menu link)
├── kurser ([current edition]/kurser – menu link)
├── schema ([current edition]/schema – menu link)
├── scen ([current edition]/scen)
│ ├── taby-spelmansgille ([current edition]/scen/taby-spelmansgille)
│ └── ellika-frisell ([current edition]/scen/ellika-frisell)
│
├── 2025 (ej i sitemap, indexeras ej av google)
│ ├── tisdag
│ ├── onsdag
│ ├── allspel
│ ├── kurser
│ ├── schema
│ ├── scen
│ ├── taby-spelmansgille
│ └── ellika-frisell
├── 2024... (ej i sitemap, indexeras ej av google)
├── 2023... (ej i sitemap, indexeras ej av google)
│
├── biljetter (menu link)
├── camping/boende (menu link)
├── parkering (menu link)
├── servering (menu link)
├── sakerhet (menu link)
├── tillganglighet (menu link)
├── kontakt (footer link)
├── om-bingsjostamman (footer link) (beskrivning, kort historia, tidigare stämmor på webben)
│ ├── styrelsen
│ ├── historia
│ └── miljopolicy
├── om-webbplatsen (footer link) miljö, performance, cookies
│ └── digital-tillganglighet
│
└── 404 (ej i sitemap, indexeras ej av google)

### root

favicons
humans.txt
robots.txt
sitemap.xml

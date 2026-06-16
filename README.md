# bingsjostamman.se

Static site for Bingsjostamman.se.

The stack is:

- Eleventy for page generation
- Vite for CSS and JS bundling
- Storybook for component development
- Nunjucks macros for reusable components

## Getting started

Install dependencies:

```bash
npm install
```

Create a local env file if you need one:

```bash
cp .env.example .env.development
```

`PSI_API_KEY` is optional for day-to-day development, but recommended for full production builds because the build fetches PageSpeed Insights data.

## Local development

Run the full local setup:

```bash
npm run dev
```

This starts three parallel processes:

- Vite in watch mode for bundled assets
- Eleventy with a local server
- A prebuild watcher that regenerates Storybook and component usage data

Useful individual commands:

```bash
npm run dev:11ty
npm run dev:vite
npm run dev:prebuild
npm run storybook
```

Notes:

- Storybook runs on port `6008`.
- Eleventy serves the site locally and uses `public/assets` as passthrough output.
- Vite wipes and rebuilds `public/assets`, so copied static assets are restored by `npm run copy:assets`.

## Build commands

Production build:

```bash
npm run build
```

What it does:

1. Runs prebuild tasks.
2. Builds bundled assets with Vite.
3. Fetches PageSpeed Insights data.
4. Fetches Website Carbon data.
5. Builds the Eleventy site.
6. Runs the accessibility test script.
7. Builds the Eleventy site again so generated data from tests is reflected in output.

Other useful commands:

```bash
npm run build:vite
npm run build:11ty
npm run build:storybook
npm run css:generate
npm run lint:css
npm run test:a11y
```

If `npm run build` fails on PageSpeed fetches because of quota or missing credentials, check `PSI_API_KEY` and reuse cached data in `src/_data/psi.json` when available.

## Project structure

Main directories:

- `src/editions/` holds year-specific festival content.
- `src/pages/` holds site-wide pages.
- `src/_includes/components/` holds Nunjucks component macros and component CSS.
- `src/assets/` holds static assets copied into `public/assets/`.
- `scripts/` holds build and content tooling.

The active edition is controlled in `src/_data/editions.json`.

Current behavior:

- `editions.current` is served at `/`
- older editions are served at `/{year}/`
- the sitemap only includes the current edition
- archived edition pages render with `noindex`

## Edition layout

Each edition folder typically contains:

```text
src/editions/2026/
├── 2026.11tydata.js
├── dates.json
├── lineup.json
├── index.njk
├── index.11tydata.js
├── lineup.njk
├── lineup.11tydata.js
├── artists.njk
├── artists.11tydata.js
├── tuesday.njk
├── tuesday.11tydata.js
├── wednesday.njk
├── wednesday.11tydata.js
├── allspel.njk
├── allspel.11tydata.js
├── workshops.njk
├── workshops.11tydata.js
├── schedule.njk
├── schedule.11tydata.js
└── content helper files such as `*-content.js`
```

Relevant data files:

- `src/_data/editions.json`: defines the current year and available years
- `src/editions/<year>/<year>.11tydata.js`: edition-level metadata such as `year`, `start`, and `end`
- `src/editions/<year>/dates.json`: maps festival day names to actual dates
- `src/editions/<year>/lineup.json`: normalized lineup data used by listing, schedule, and artist pages

## Working with lineup data

Convert the Excel master into edition JSON like this:

```bash
node scripts/convert-lineup.js data/lineup-2026.xlsx
```

The converter writes directly to `src/editions/2026/lineup.json` and normalizes times, including post-midnight schedule entries.

## Year rollover checklist

There is currently no working automation for creating a new edition. Treat the process as manual and use this checklist.

### Prepare the next edition in advance

You can work on a future edition before it is live.

As long as `src/_data/editions.json` keeps the current year unchanged, the future edition stays available under `/{year}/` instead of `/`. That makes it possible to prepare content, layout, schedule data, and artist pages ahead of time without replacing the live site at the root URL.

In practice, that means you can:

- create `src/editions/<next-year>/`
- build and review that edition locally
- deploy it while it still lives only at `/{next-year}/`
- keep it out of the main current-edition position until you are ready to switch `editions.current`

What this does not guarantee by itself:

- it may still be directly accessible to anyone who knows the URL
- shared navigation or shared page content may still surface links to it if those templates are changed that way
- it will not automatically be hidden by authentication or password protection

So this is best understood as “not current and not in the sitemap”, not as a private staging system.

### Navigation visibility for prepared editions

If a future edition should exist at `/{year}/` without taking over the main site navigation, check these places:

- `src/_data/editions.json` decides which edition is current at `/`.
- `src/_includes/components/menu/menu.njk` is the shared main menu. Its links point to root paths such as `/tisdag/`, `/onsdag/`, and `/scen/`, so it effectively promotes the current edition.
- `src/_includes/components/frontpage-teasers/frontpage-teasers.njk` is year-aware and automatically prefixes links with `/{year}` for non-current editions.
- Edition templates in `src/editions/<year>/` compute their own permalinks, so pages can exist under `/{year}/...` even when they are not current.
- `src/_includes/components/list-past-editions/list-past-editions.njk` only lists years older than `editions.current`, so adding a future year to `editions.years` does not automatically make it appear as a past edition.

Practical rule: a prepared future edition can be reachable by direct URL and by links inside its own edition pages, while the global shared menu still points visitors toward the current edition until you switch `editions.current` or explicitly add other shared links.

### Archive the current edition

- Confirm the current live year in `src/_data/editions.json`.
- Make sure the outgoing edition folder contains the final content, lineup, dates, artist pages, and schedule pages you want to preserve.
- Run a production build and spot-check the outgoing year under its future archive URL, for example `/{year}/`.
- Verify that archive behavior still works: archived editions should render under `/{year}/`, show the archive banner, and include `noindex`.

### Create the next edition

1. Copy the current edition folder in `src/editions/` to the new year.
2. Rename the top-level edition data file to match the new year, for example `2027.11tydata.js`.
3. Update the new edition metadata:
    - `year`
    - `start`
    - `end`
4. Update `dates.json` for the new festival dates.
5. Replace or regenerate `lineup.json` from the Excel source.
6. Update the edition-specific content files such as:
    - `index.njk`
    - `tuesday-content.js`
    - `wednesday-content.js`
    - `allspel-content.js`
    - `schedule-content.js`
7. Update imagery, hero copy, and any hard-coded artist or CTA references.
8. Add the new year to `src/_data/editions.json` `years` if archive navigation or year listings should know about it before launch.
9. In `src/_data/prices.json`, set `hidden` to `true` so prices stay hidden until the new edition is ready to publish them.

At this stage, do not change `current` yet if the old edition should remain live at `/`.

### Keep unfinished pages as drafts

Eleventy will build any page it can see, so `eleventyExcludeFromCollections` is not enough by itself to hide a page from output.

The edition folder now decides the published URL automatically. For pages in the next edition that are not ready yet, use a tiny draft convention like this:

```yaml
---
draft: true
---
```

Practical rules:

- keep the page in the correct edition folder so the structure is ready early
- set `draft: true` while the page is unfinished
- do not add anything else unless the page is ready to publish
- once the page is ready, remove `draft: true` and give it real content

If you want a visible stub for the upcoming edition, use the edition root page (`index.njk`) as the teaser page and keep the rest of the edition pages as drafts. That gives you one public entry point while the inner pages still 404 until launch.

If you prefer to prepare a whole section privately, you can also keep a draft-only subfolder inside the edition folder and move the pages out of it when they are ready. The important part is that unfinished pages should not get a public draft-free page yet.

### Switch the new edition live at root

1. Edit `src/_data/editions.json`.
2. Set `current` to the new year.
3. Add both the new year and older years to `years` if you want them exposed in archive navigation.
4. Keep `archiveIndexing` set the way you intend for archived content.

Once `current` changes, the new edition moves to `/` and the previous one automatically moves to `/{year}/` because edition permalinks are computed from that value.

This switch is the actual go-live moment for the edition structure. Everything before that can be treated as preparation.

### Validate the rollover

Run these checks after switching years:

```bash
npm run prebuild
npm run build:vite
npm run build:11ty
npm run test:a11y
```

Then verify:

- `/` shows the new edition
- `/{previous-year}/` shows the archived edition
- `/sitemap.xml` only lists the current edition pages
- artist links, menus, and schedule pages point to the correct year-aware URLs
- Storybook still builds if shared components were changed

### Content and release follow-up

- Update any year-specific copy outside `src/editions/<year>/` if needed.
- Rebuild Storybook if component examples depend on the new edition data.
- Check generated files in `_site/` for both root and archive paths.
- If PSI or Website Carbon data is part of the release, run a full production build with the right environment variables.

## Release-day checklist

Use this when the next edition is already prepared and you are ready to make it the live site.

### Before switching

- Confirm the new edition builds cleanly under `/{year}/`.
- Confirm the outgoing edition at `/` is in the exact state you want to archive.
- Check that important shared pages such as tickets, contact, travel, and information pages are updated for the new season if needed.
- If ticket prices should be visible at launch, set `hidden` to `false` in `src/_data/prices.json` and verify the values and note text.
- Make sure any required env vars for production builds are available, especially `PSI_API_KEY` if you want fresh PSI data.

### Go live

1. Change `src/_data/editions.json` so `current` points at the new year.
2. Run the production build:

```bash
npm run build
```

3. Verify locally in generated output that:
    - `/` is the new edition
    - `/{previous-year}/` is the archived edition
    - `/sitemap.xml` only lists current-edition pages
    - archive pages still show `noindex`

### Deploy and smoke-test

- Deploy the built site.
- Check the live homepage, schedule, artist listing, a few artist detail pages, and ticket-related pages.
- Verify that menus and CTA buttons point to the current edition where intended.
- Verify that archive links still resolve correctly.
- Check that CSS, fonts, and images loaded correctly after the Vite asset build and copy step.

### After deploy

- Record any immediate post-launch fixes.
- If PSI and Website Carbon data were refreshed, sanity-check that those values look reasonable.
- If search indexing matters at launch, re-check robots, sitemap, and archive `noindex` behavior on the deployed site.

## Branching and deployment workflow

This repository uses a practical multi-branch flow:

1. `main` deploys automatically to production (`www.bingsjostamman.se`).
2. `develop` deploys automatically to development/staging (`dev.bingsjostamman.se`).
3. `wip` is an internal work branch and is not deployed by Netlify.
4. `storybook` deploys to `block.bingsjostamman.se` when updated from `develop`.

As a solo workflow, this is a good balance: stable production, visible staging, and a private area for unfinished work.

### Two-lane model: content lane and system lane

To avoid blocking urgent content updates while larger development is in `wip`, use two lanes:

1. Content lane (fast path to production):
     - branch from `main`
     - change content-only files
     - merge to `main`
     - forward-port the same commit to `develop` and `wip`
2. System lane (normal development):
     - develop in `wip` (or feature branches)
     - merge to `develop` for review
     - merge to `main` when ready for production

### Content-only paths policy

Suggested allowlist for content-only releases:

- `src/editions/**`
- `src/_data/**`
- `src/pages/content/**`
- `data/**`

Content pages currently live in `src/pages/content/`.

Examples:

- `src/pages/content/contact.njk`
- `src/pages/content/tickets.njk`
- `src/pages/content/lodging.njk`
- `src/pages/content/lodging-content.js`
- `src/pages/content/lodging.11tydata.js`
- `src/pages/content/editions.njk`
- `src/pages/content/about-considerations.njk`

Suggested denylist for content-only releases:

- `src/_includes/components/**`
- `src/css/**`
- `src/js/**`
- `src/pages/system/**`
- `scripts/**`
- `eleventy.config.js`
- `vite.config.js`
- `package.json`

Notes:

- Some content still lives in templates today. If a content fix requires template edits, treat that change as system lane unless it is extremely low-risk and reviewed.
- Keep improving the boundary over time by moving copy and structured data into edition data files.
- The shared content/system path rules live in `scripts/change-lane-config.sh`, so the guard scripts only need one source of truth.
- `src/pages/` is now split by role into `src/pages/content/` and `src/pages/system/`.

Practical recommendation for `src/pages/`:

- Use `src/pages/content/` for visitor-facing editorial pages.
- Use `src/pages/system/` for sitemap, 404, diagnostics, and other build/system-oriented pages.
- If `content/` grows further, add subfolders by topic there before creating more top-level taxonomies.

### Urgent content hotfix flow

Use this when production content must be updated while `wip` contains ongoing system work:

1. Create a branch from `main`, for example `hotfix/content-YYYYMMDD`.
2. Edit only content-allowed paths.
3. Run local checks:

```bash
npm run build:vite
npm run build:11ty
npm run test:a11y
```

4. Merge to `main` (production deploy).
5. Merge or cherry-pick the same commit into `develop`.
6. Merge or cherry-pick the same commit into `wip`.
7. Confirm there is no content drift between `main`, `develop`, and `wip`.

### Path guard script for content-only PRs

This repository includes a lightweight guard script at `scripts/check-content-only-change.sh`.

Shared rules are loaded from `scripts/change-lane-config.sh`:

```bash
readonly CONTENT_ALLOWED_REGEX='^(src/editions/|src/_data/|src/pages/content/|data/)'
readonly CONTENT_BLOCKED_REGEX='^$'
```

The content-only script then applies those rules:

```bash
#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/change-lane-config.sh"

BASE_REF="${1:-origin/main}"

changed_files=$(git diff --name-only "$BASE_REF"...HEAD)

if [[ -z "$changed_files" ]]; then
    echo "No changed files."
    exit 0
fi

blocked=()
while IFS= read -r file; do
    [[ -z "$file" ]] && continue
    if [[ "$file" =~ $CONTENT_BLOCKED_REGEX ]] || [[ ! "$file" =~ $CONTENT_ALLOWED_REGEX ]]; then
        blocked+=("$file")
    fi
done <<< "$changed_files"

if (( ${#blocked[@]} > 0 )); then
    echo "Content-only check failed. Non-content files changed:"
    for f in "${blocked[@]}"; do
        echo " - $f"
    done
    exit 1
fi

echo "Content-only check passed."
```

Run it locally before merging a content hotfix:

```bash
npm run check:content-only -- origin/main
```

Optional CI step (GitHub Actions):

```yaml
- name: Enforce content-only paths
    run: npm run check:content-only -- origin/main
```

If you use another CI system, run the same script in the equivalent pipeline step.

### Path guard script for system-change PRs

For symmetry, the repository also includes `scripts/check-system-change.sh`.

Use it when a PR is intentionally template, component, config, or tooling work and you want to assert that the change is not content-only.

Run it locally like this:

```bash
npm run check:system-change -- origin/main
```

Optional CI step (GitHub Actions):

```yaml
- name: Enforce system-change paths
    run: npm run check:system-change -- origin/main
```

Suggested convention:

- use `[content-only]` in a PR title or add a `content-only` label when the fast content lane is intended
- use `[system-change]` in a PR title or add a `system-change` label when the normal development lane is intended and the PR should contain at least one non-content file

## Useful commands reference

```bash
npm run dev
npm run storybook
npm run prebuild
npm run css:generate
npm run build:vite
npm run build:11ty
npm run build
npm run build:storybook
npm run lint:css
npm run test:a11y
node scripts/convert-lineup.js data/lineup-2026.xlsx
```

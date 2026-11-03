# Horticulture Industries

A responsive horticulture website built locally with React, TypeScript, Tailwind CSS 4, and Vite. The dark theme combines deep forest green, botanical sage, warm ivory, and natural sunlight. Generated photographs show commercial hydroponic channels, coco-coir vegetable crops, and large greenhouse growing spaces. The Horticulture Industries wordmark appears in the header, hero, and footer.

- Website: https://horticulture-industries.netlify.app
- GitHub: https://github.com/shnushkin/Horticulture-industries.

## Local development

Use Node.js 24 and pnpm 11.25.0 (the exact package-manager version is declared in `package.json`).

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Vite. To validate and generate the production files:

```sh
pnpm build
pnpm preview
```

The build includes strict TypeScript checking. Production output goes in `dist/`. Fonts and photographs are served locally; the page does not require a third-party font or image request.

## Design review

- Hero: brand name, editorial headline, wide industrial greenhouse image, and anchor link.
- Our roots: introductory brand story.
- Growing systems: hydroponic, coco-coir, and greenhouse environments.
- Indoor growing: a full-frame violet LED grow-room image with varied crop heights, visible fixtures, ventilation, and industrial filtration.
- Our approach: botanical imagery and editorial principles.
- Field notes: three original articles with shareable URLs, an accessible reading dialog, and primary horticultural references.
- Background: subtle SVG vines and slowly moving window-pane light; respects reduced-motion settings and can be paused in the footer.
- Footer: full brand wordmark and concept disclosure.
- Typography: small labels and captions are at least 14px, with larger supporting copy and responsive spacing for readability.

The imagery is clearly disclosed as AI-generated concept photography. The site makes no claims about company facility size, history, customers, or certifications. There are no commerce, contact-form, or account features. Navigation links scroll to the corresponding sections. The mobile menu and article dialog support Escape and native focus handling.

## Updating Field notes

Articles live in the `notes` array in `src/Journal.tsx`. Add or edit a title, category, excerpt, image, paragraphs, and source link there. Each article can be shared using `?article=its-slug`; opening that URL directly displays the article. Publishing an update uses the same GitHub-to-Netlify workflow. This is a static journal and does not require a CMS or a database.

## Git and GitHub

The project uses the `main` branch. Save focused checkpoints with Git and push them to the configured `origin`. Generated builds, dependency directories, local QA captures, and environment files are ignored.

## Netlify

`netlify.toml` provides the production settings for a GitHub-connected Netlify project:

- Branch: `main`
- Build command: `pnpm build`
- Publish directory: `dist`
- Node: `24`
- pnpm: `11.25.0`

The `main` branch is connected to Netlify with a read-only repository deploy key and a push webhook. Pushes to `main` trigger a fresh Netlify build from GitHub. A custom domain can be attached later.

See `ASSETS.md` for final image prompts, provenance, and editorial references.

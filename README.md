# Horticulture Industries

A responsive branding concept built locally with React, TypeScript, Tailwind CSS 4, and Vite. Forest green, warm ivory, chartreuse, DM Sans, and Instrument Serif set the visual direction. The Horticulture Industries wordmark appears in the header, hero, and footer.

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

- Hero: brand name, editorial headline, greenhouse image, and anchor link.
- Our roots: introductory brand story.
- A world of green: three illustrative growing environments.
- Our approach: botanical imagery and editorial principles.
- Footer: full brand wordmark and concept disclosure.

The site is a visual concept. All copy is draft brand language, and images are illustrative. It makes no claims about verified company services, history, customers, or certifications. There are no commerce, contact-form, or account features. Navigation links scroll to the corresponding sections. The mobile menu supports Escape and returns focus to its trigger.

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

See `ASSETS.md` for image provenance and the generated hero image brief.

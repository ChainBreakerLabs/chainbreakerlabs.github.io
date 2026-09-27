# ChainBreaker Labs

An editorial company website about human agency: **your life, unchained**.
Infinyte is its first product. Financial, personal/spiritual, and professional
freedom describe the company's direction; they are not promises of financial
returns or announcements of other released apps.

## Run locally

Use Node.js 22 and npm. No API keys, accounts, environment variables, database,
or runtime server are required.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5178`. For the actual production output:

```sh
npm run build
npm run preview
```

Open `http://127.0.0.1:4178`.

## Verify

```sh
npm run types
npm run format:check
npm run build
npx playwright install chromium
npm test
```

On macOS, tests use an installed Google Chrome if available; otherwise they use
Playwright Chromium. In CI, the workflow installs Chromium and its system
dependencies. Browser tests exercise the production build, so rebuild after
changing source. `npm test` starts its own preview server if one is not running.

Tests cover navigation, history restoration, scroll reversal, all three
languages at 320px, reduced motion, silent navigation, no-JavaScript
content, external product links, local assets, and an automated WCAG AA audit.
An automated accessibility audit is not a substitute for manual assistive
technology review.

## Publish to GitHub Pages

Vite compiles this website into ordinary static files in `dist/`. GitHub Pages
serves those files; it does not need to run Vite or Node in production.

**Settings → Pages → Build and deployment → Source must use GitHub Actions.**
Raw TypeScript source is not a Pages deployment artifact. Vite builds the static
artifact before the workflow publishes it.

The prepared [workflow](.github/workflows/pages.yml) verifies formatting, builds,
runs browser tests, then publishes `dist/` on an authorized push to `main` or a
manual workflow run. Pull requests verify without publishing. Deployment runs and their results are available in the repository's Actions tab.

The existing `chainbreakerlabs.com` domain is preserved in both root `CNAME` and
`public/CNAME`, which Vite copies into `dist/`. `base: '/'` is correct for this
organization site and custom domain. Do not change DNS for this source upgrade.
The Infinyte product destination remains:
`https://chainbreakerlabs.com/infinyte-page-web/`.

Official reference: [Vite deployment to GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages).

## Structure and creative assets

- `index.html`: semantic Spanish content, available before JavaScript.
- `src/main.ts`: navigation, language controls, and page lifecycle.
- `src/motion.ts`: scroll timeline, bounded canvas field, pointer response, and reveals.
- `src/i18n.ts`: typed Spanish, English, and Portuguese dictionaries.
- `src/styles.css`: responsive editorial layout, design tokens, and motion preferences.
- `public/images/`: three generated photographic keyframes, the existing Infinyte icon, and the supplied real Dashboard capture.
- `public/fonts/`: self-hosted Manrope and Instrument Serif with SIL OFL licenses.

See [creative direction](docs/creative-direction.md), [asset prompts](docs/image-prompts.md),
and the [delivery checklist](docs/progress.md).

There are no production framework dependencies, analytics, tracking pixels,
forms, cookies, audio, or financial-data integrations. The phone preview uses
the owner's supplied `dashboard.jpeg`, optimized without reconstructing the UI.
Its CSS iPhone frame preserves the image's complete aspect ratio. Language
choice belongs to the current page and is not persisted.

The flask/broken-link symbol is an editable brand concept, not a trademark
registration or a claim of exclusive rights. Review the identity before formal
brand registration.

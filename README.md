# Invoicebolt

Free browser-based invoice generator — no sign-up, no watermark. Static site,
zero backend: the invoice and PDF are generated entirely client-side.

## Develop

```sh
node build.mjs        # builds ./dist (33 pages)
npx serve dist        # or any static server
```

All copy and pages are data-driven:

- `src/data/professions.mjs` — one entry per `/invoice-template/<slug>/` page
- `src/data/guides.mjs` — long-form guides under `/guides/`
- `src/data/pages.mjs` — about / privacy / terms
- `config.mjs` — brand, domain, base path, contact email

## Deploy

Built `dist/` is pushed to the `gh-pages` branch and served by GitHub Pages.

```sh
node build.mjs
cd dist && git init -b gh-pages && git add -A && git commit -m "deploy" \
  && git push -f git@github.com:joshuaLoren/invoicebolt.git gh-pages && cd .. && rm -rf dist/.git
```

## Moving to a custom domain

1. Buy the domain, point it at GitHub Pages (or switch hosting to Vercel/Cloudflare).
2. In `config.mjs`: set `SITE_URL` to the new origin and `BASE` to `""`.
3. Rebuild and redeploy. Submit the new sitemap in Google Search Console.

## Activating ads (after AdSense approval)

Empty `div.ad-slot` placeholders exist on the homepage (below the generator),
every template page, and every guide. Paste the AdSense unit code into those
divs (in `src/templates/*.html`) plus the AdSense `<script>` tag in
`src/templates/layout.html`, then rebuild. AdSense requires a custom domain
you own — apply after step "Moving to a custom domain."

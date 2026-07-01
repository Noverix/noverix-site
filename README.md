# Noverix Site

Marketing site for [Noverix](https://noverix.com) — custom web application development, monthly support, cloud migration, applied AI, and cybersecurity consulting for micro and small businesses.

Static HTML/CSS/JS, no build step, no dependencies. Trilingual (PT / EN / FR) with client-side language switching.

## Structure

```
index.html       Single-page site markup
styles.css        All styles (CSS custom properties, no preprocessor)
script.js         i18n translations + language switcher + Avelix screenshot carousel
assets/           Logos, favicon, and product screenshots
robots.txt        Crawler rules
.github/workflows/deploy-pages.yml   Deploys to GitHub Pages on push to main
```

## Local development

No build step — open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which copies the static files to GitHub Pages. No manual deploy step is needed.

## i18n

All translatable strings live in the `translations` object at the top of `script.js`, keyed by language (`en`, `pt`, `fr`). Elements opt into translation via `data-i18n="key"`. The selected language is persisted to `localStorage` and falls back to the browser language, then to Portuguese.

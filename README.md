# 8fifty4-website

Static marketing site for 8fifty4, built with plain HTML and Tailwind CSS.

## Development

Install dependencies:

`npm install`

Build CSS once:

`npm run build:css`

Watch CSS while editing:

`npm run dev:css`

Preview the deployable site locally:

`npm run build:site`

This creates `_site/` with the same files that GitHub Pages will publish.

## Deployment

Deployment is automated with GitHub Actions.

1. Push changes to `master`.
2. The workflow builds Tailwind CSS and deploys the site to GitHub Pages.

### One-time GitHub setup

In repository settings:

1. Open **Settings → Pages**
2. Set **Build and deployment → Source** to **GitHub Actions**
3. Keep your custom domain as `8fifty4.com` if already configured

After that, every push to `master` deploys automatically. You do not need to run `npm run build` before committing.

## URLs

- Homepage: `https://8fifty4.com/`
- HGVME account deletion: `https://8fifty4.com/hgvme/`

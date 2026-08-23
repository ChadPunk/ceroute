# ceroute.com static site

This repo is now a plain static GitHub Pages site. Hugo is no longer required.

## Site files
- `index.html`
- `styles.css`
- `script.js`
- `assets/`

## GitHub Pages
Deployment is handled by `.github/workflows/deploy.yml`.

In GitHub:
1. Open **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Push to `main`
4. Wait for the `Deploy static site to Pages` workflow to finish

## Custom domain
`CNAME` contains:

`ceroute.com`

Keep the existing DNS records for the GitHub Pages custom domain unless you are intentionally changing providers.

## Cloudflare verification
The repo contains:

`.well-known/cf-2fa-verify.txt`

with:

`44ea7708d6cfca2`

The deployed URL should be:

`https://ceroute.com/.well-known/cf-2fa-verify.txt`

## Replacing the old Hugo site
Remove the old Hugo-specific files and folders from the repository, including:
- `archetypes/`
- `content/`
- `public/`
- `resources/`
- `static/`
- `themes/`
- `.gitmodules`
- `.hugo_build.lock`
- `hugo.yaml`
- the old Hugo workflow

Then copy the contents of this package into the repository root and push to `main`.

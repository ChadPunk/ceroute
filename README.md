# ceroute.com static GitHub Pages site

This version does not embed YouTube's player.

## YouTube feed
The GitHub Actions workflow uses `yt-dlp` during deployment to retrieve the
latest three public uploads from:

https://www.youtube.com/c/ChadEmery/videos

It then generates `youtube-feed.json`. The page renders local video cards and
links directly to YouTube.

The workflow also runs once per day so the video cards can refresh without a
manual site edit.

If YouTube blocks a refresh on a particular run, the workflow keeps the
repository's existing fallback `youtube-feed.json` rather than breaking the site.

## GitHub Pages
Set:

Settings → Pages → Build and deployment → Source → GitHub Actions

## Domain
`CNAME` is set to `ceroute.com`.

## Cloudflare verification
`.well-known/cf-2fa-verify.txt` contains:

44ea7708d6cfca2

## Mobile overflow fix (v11)
The site now clips horizontal overflow at the `html`, `body`, and `main` levels,
clips the decorative hero visual on mobile, and sets `min-width: 0` on grid/flex
children to prevent content from widening the viewport.

# Chad Emery Creator Website

A responsive single-page site built around the CE brand.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/ce-logo.png`

## Run locally
Open `index.html` in a browser.

For a simple local web server:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000

## Before publishing
Replace the placeholder YouTube `href="#"` with your real channel URL and replace `YOUR_EMAIL_HERE` in `index.html` with the email address you want people to use for advice, collaborations, work, and partnerships.

## Brand palette
- Deep Navy: #0A1B33
- Electric Blue: #2563EB
- Charcoal: #1F2328
- White: #FFFFFF


## Social links configured
- YouTube: https://youtube.com/chademery
- Instagram: https://www.instagram.com/emerychad/
- LinkedIn: https://www.linkedin.com/in/chad-emery-2814a8126/

## Live YouTube section
The site loads the latest three YouTube uploads in the browser using the channel's
YouTube RSS feed and rss2json as an XML-to-JSON bridge. If the feed cannot be loaded,
the section automatically falls back to a direct link to the YouTube channel.

No video titles are hard-coded into the site.

## v4 visual tweaks
- Added inline social icons for YouTube, Instagram, and LinkedIn in the header, connect section, and footer.
- Replaced the generic hero terminal with a Cisco-style IOS CLI snippet using realistic networking commands.

# Shaikh Wasik Alli — Portfolio

A static personal portfolio site. No build step, no dependencies — plain HTML, CSS, and JS.

## Before you publish

1. **Add your real links** in `js/data.js` — search for `"ADD YOUR LINK"`:
   - `links.github` — your GitHub profile URL
   - `links.linkedin` — your LinkedIn profile URL
2. Your résumé PDF is already in `assets/resume.pdf` (copied from the file you uploaded). Replace it any time by dropping a new PDF in the same location with the same filename.
3. Optional: update `og:url` in `index.html` (`<meta property="og:url" ...>`) once you know your GitHub Pages URL.

## Publish to GitHub Pages

```bash
# from inside this folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

Then in your repo on GitHub: **Settings → Pages → Source → Deploy from branch → `main` / root**.

- If your repo is named `<your-username>.github.io`, the site goes live at `https://<your-username>.github.io/`.
- If it's named something else (e.g. `portfolio`), it goes live at `https://<your-username>.github.io/portfolio/`.

Pages usually takes 1–2 minutes to go live after the first push.

## Adding to LinkedIn

Once live, add the URL under your LinkedIn profile's **"Website"** field (Contact info → Websites) or in your **Featured** section.

## Updating content later

All copy — experience, the featured project, skills, education — lives in `js/data.js`. Edit that file and refresh; no other files need to change for content updates.

## File structure

```
├── index.html        # page structure + SEO metadata
├── css/styles.css     # all styling (design tokens at the top)
├── js/data.js          # all content — edit this to update the site
├── js/main.js          # rendering + interactions (nav, scroll reveal, etc.)
└── assets/resume.pdf   # downloadable résumé
```

# Shaikh Wasik Alli — Portfolio

A static personal portfolio. No build step and no dependencies — HTML, CSS, and JS. It is set up for GitHub Pages at the site root, which is how [thewasik.github.io](https://thewasik.github.io/) is published.

## Edit the page

Visible copy lives in `index.html`. `js/data.js` is a short fact sheet (name, links, project durations) so those details stay easy to find. It is not what the browser renders. `js/main.js` handles the menu, the current section in the navigation, and motion.

The résumé download points at `assets/resume.pdf`. Replace that file to update the download. The PDF still describes the scholarship portal as 24 months and does not mention Go SUGAM. The site follows the later correction: about three years on the scholarship portal, and six months on Go SUGAM.

## Publish

From this folder, on the `main` branch of `thewasik/thewasik.github.io`, GitHub Pages serves the repository root at `https://thewasik.github.io/`.

Relative links assume the site is served from the domain root. A project site in a subfolder would need those paths adjusted.

## Files

```
├── index.html
├── css/styles.css
├── js/main.js
├── js/data.js
├── assets/favicon.svg
└── assets/resume.pdf
```

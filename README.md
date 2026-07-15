# Good Growth Static Website — V1.1

This is the revised Good Growth static website.

V1.1 focuses on communication, not a redesign. The visual identity remains earthy, clean, and grounded, while the copy is shorter, more scannable, and organized around progressive disclosure.

## Files

- `index.html` — page structure and copy
- `styles.css` — visual styling and responsive layout
- `script.js` — mobile navigation and footer year
- `assets/ian-goodall-founder.jpg` — founder/contact image
- `assets/ian-goodall-founder-square.jpg` — alternate square crop for future use
- `favicon.svg` — browser icon
- `robots.txt` — basic crawler instruction
- `netlify.toml` — Netlify deploy config

## Deployment

This site is designed for Netlify or GitHub Pages.

For the current Good Growth setup:

1. Upload the changed files to the GitHub repository.
2. Include the full `assets` folder.
3. Commit the changes to `main`.
4. Netlify should automatically redeploy.

No build command is required. The publish directory is the repository root.

## Editing notes

Most brand colors are controlled in `styles.css` under the `:root` variables.

The founder/contact image is referenced in `index.html` as:

```html
assets/ian-goodall-founder.jpg
```

If replacing the image later, keep the same file name or update the path in `index.html`.

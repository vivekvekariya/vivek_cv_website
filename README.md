# Vivek V. Vekariya Portfolio

This folder now contains a small static portfolio site built from your CV.

## What is in the site

- `index.html` holds the content and section structure.
- `styles.css` defines the layout, colors, spacing, and responsive design.
- `script.js` adds the theme toggle, scroll reveal animation, and active navigation state.
- `Vivek_CV.pdf` is linked as the downloadable resume.

## How to understand the website

Think of the page in three layers:

1. Content layer: the words, links, and section order in `index.html`.
2. Presentation layer: the visual design in `styles.css`.
3. Behavior layer: small interactions in `script.js`.

If you want to change the website later, usually you edit `index.html` first, then adjust `styles.css` if the layout needs a new look, and only touch `script.js` for interactions.

## How the theme works

The blue look is controlled in `styles.css` through CSS variables near the top of the file.

- `--bg` controls the page background.
- `--panel` and `--panel-strong` control card surfaces.
- `--accent` controls buttons, links, and highlights.
- `:root[data-theme="dark"]` contains the dark-mode override.

If you want a different palette later, change those variables first. That will update the whole site faster than editing individual sections.

## How to open it

You can open `index.html` directly in the browser, or run a local server from this folder:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## How to deploy it

The simplest option is GitHub Pages because this site is static HTML, CSS, and JavaScript.

1. Create a GitHub repository and push these files to the repository root.
2. In GitHub, open `Settings` > `Pages`.
3. Under `Build and deployment`, select `Deploy from a branch`.
4. Choose the branch that contains this folder, usually `main`, and the root `/` folder.
5. Save the settings and wait for GitHub to publish the site.

After deployment, the final URL will usually be:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

If the repository is named exactly `YOUR-GITHUB-USERNAME.github.io`, then the URL is just:

`https://YOUR-GITHUB-USERNAME.github.io/`

If you want a custom domain later, you can point a domain to GitHub Pages and use that instead of the GitHub URL.

## Good next edits

- Replace the monogram card with a real photo if you want one.
- Add a projects section if you want to show demos or papers.
- Connect the contact buttons to your preferred email and social profiles if anything changes.

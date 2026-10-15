# alan lin · personal website

## Getting started

Requires **Node.js 20.19+**.

```bash
npm install
npm run dev       # dev server at http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with Oxlint |

## Project structure

```
src/
├── main.jsx                 entry point; wraps the app in <BrowserRouter>
├── App.jsx                  layout: background, header (name + nav), page routes
├── App.css                  name styling
├── index.css                Tailwind import, color variables, background, pause rule
├── components/
│   ├── Nav.jsx              experience / about / contact links
│   ├── BobaName.jsx/.css    the name with boba pearls
│   └── MilkTea.jsx/.css     background layer: smoke + rising bubbles
├── hooks/
│   └── usePageFocus.js      true while the page is visible and focused
└── pages/
    ├── Experience.jsx       default page
    ├── About.jsx
    └── Contact.jsx
```

## Editing content

Most edits are data, not layout:

- **Experience entries:** edit the `sections` array at the top of `src/pages/Experience.jsx`. Each entry has `text`, `org`, an optional `href`, and `sub` (date · tools).
- **Contact links:** edit the `links` array in `src/pages/Contact.jsx`.
- **Colors:** edit the variables in `src/index.css` (`:root` for the theme, `@theme` for the Tailwind `accent` and `muted` colors).
- **Bubbles:** `BUBBLE_COUNT` and the `rand(...)` ranges in `src/components/MilkTea.jsx`.

## Deployment

Set up for **[Vercel](https://vercel.com)**: import the GitHub repo once, and every push to `main` deploys automatically.

`vercel.json` does two things:

1. **Rewrites every path to `index.html`**, so direct links and refreshes on `/about` or `/contact` work instead of returning a 404.
2. **Sends security headers** with every response.

> **Adding anything external** (Google Fonts, analytics, embeds, images from another domain)? Add that domain to the matching directive in the `Content-Security-Policy` in `vercel.json`, or the browser will block it.

## Contact

[GitHub](https://github.com/alanlin12) · [LinkedIn](https://linkedin.com/in/alanlin12)

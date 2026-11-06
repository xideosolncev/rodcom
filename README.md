# Kindergarten Parent Committee Site

A static React + Vite landing site with three sections — **News**, **Group Members**, **Money Fund**.
There is no backend: all data lives in JSON files in `src/data/` and is imported directly.

## Structure

```
├── index.html
├── vite.config.js            # base path for GitHub Pages
├── package.json              # scripts incl. predeploy / deploy
├── .github/workflows/deploy.yml   # optional auto-deploy
└── src/
    ├── main.jsx              # entry, HashRouter
    ├── App.jsx               # routes
    ├── data/                 # news.json, members.json, fund.json
    ├── components/           # Layout, Navbar, Hero, SectionHeader, NewsCard, MemberCard, PaymentTable
    ├── pages/                # NewsPage, MembersPage, FundPage
    ├── utils/format.js       # date / money helpers
    └── styles/global.css     # design tokens + all styles
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Editing data

- **news.json** — `{ id, title, description, image }` (`image` is a `data:image/...;base64,...` string).
- **members.json** — `{ id, name, totem, icon, birthday (YYYY-MM-DD), parentName, parentPhone }`.
- **fund.json** — `balance`, `currency`, `events: [{ id, title }]`, and
  `payments: { "<memberId>": { "<eventId>": "paid" | "unpaid" } }`.
  Rows come from `members.json`, so add a child there and then add their payments entry here
  (a missing entry is shown as unpaid). To add a column, add an event and a status per child.

To turn a real image into base64: `base64 -w0 photo.jpg` and prefix with `data:image/jpeg;base64,`.
Keep images small (≈ 600 px wide) so the bundle stays light.

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `kindergarten-site`) and push this project to it:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<user>/kindergarten-site.git
   git push -u origin main
   ```
2. **Set `base`** in `vite.config.js` (`REPO_BASE`) to `'/<repo-name>/'` — leading and trailing slash, exact repo name.
   Use `'/'` for a `<user>.github.io` repo or a custom domain.
3. Run `npm run deploy`. This builds the site and publishes `dist/` to the `gh-pages` branch.
4. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `gh-pages`, folder `/ (root)`. The site appears at `https://<user>.github.io/<repo-name>/`.

**Why HashRouter?** URLs look like `/#/members`. GitHub Pages only serves real files, so a normal
router would 404 when a deep link is opened or refreshed. With a hash, the server always receives `/`,
so no 404 redirect hack is needed.

### Alternative: GitHub Actions

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
Use it instead of `npm run deploy`: set **Settings → Pages → Source: GitHub Actions**.

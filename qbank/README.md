# Question Bank PYQs — Installable PWA

Practice Previous Year Questions. Learn Smarter. Score Better.

A single React + Vite + TypeScript codebase that deploys as **one public
link** and installs like a native app on iPhone, iPad, Android phones and
tablets, Windows and macOS — no app store, no APK, no code required from
students.

---

## 1. Deploy it (one link, no local setup needed)

You do **not** need Node.js, npm or VS Code on your own computer either —
Netlify's servers run the build for you.

**Option A — drag and drop (fastest):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag this whole project folder onto the page.
3. Netlify builds it (`netlify.toml` already tells it how) and gives you a
   live `https://…netlify.app` link immediately. Share that link with
   students.

**Option B — connect a Git repo (best for future updates):**
1. Push this folder to a new GitHub repository.
2. In Netlify: *Add new site → Import an existing project* → pick the repo.
3. Build command and publish folder are already set via `netlify.toml`
   (`npm run build` → `dist`). Click Deploy.
4. Every future push (e.g. adding a new question) redeploys automatically.

Netlify also automatically serves `public/_redirects`
(`/* /index.html 200`), so deep links like
`/browse/class-10/mathematics/chapter-wise/real-numbers/2026` work correctly
on refresh instead of 404ing.

Any other static host (Vercel, GitHub Pages, Cloudflare Pages, your own
server) works too, as long as it runs `npm run build` and serves the `dist`
folder with an SPA fallback to `index.html`.

---

## 2. Installing the app (for students — no coding needed)

Once you share the link, students install it straight from the browser:

**iPhone / iPad (Safari):**
1. Open the link in **Safari**.
2. Tap the **Share** button.
3. Tap **"Add to Home Screen"**.
4. Turn on **"Open as Web App"** if shown, then tap **Add**.

The app also shows this exact walkthrough automatically the first time an
iPhone/iPad visits, via the in-app "Install App" button.

**Android (Chrome):**
1. Open the link in **Chrome**.
2. Tap **Install App** inside the app (or the install banner Chrome shows
   automatically).
3. Confirm — the app icon appears on the home screen.

**Windows / macOS (Chrome, Edge):**
Click the install icon (⊕) in the address bar, or use the in-app
**Install App** button.

Once installed, it opens full-screen with its own icon and splash — no
browser address bar or controls, matching a native app.

---

## 3. Offline behaviour

After a student opens the app once with internet, the service worker caches
the app shell, styles, fonts, icons and all current question-bank content
(hints, answers, full solutions, KaTeX rendering, factor tree). They can
then reopen it with no signal and keep practising, bookmarking and marking
questions complete — all of that is saved on-device (`localStorage`) and
never needs a server.

- A small **"You're offline"** badge appears when there's no connection.
- When a new version is deployed, an **"Update App"** toast appears; tapping
  it refreshes to the latest version without losing saved progress.

---

## 4. Local development (optional, only if you want to edit content)

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

---

## 5. How the app is built to grow

Everything the app displays — classes, subjects, chapter-wise/set-wise
modes, chapters, years and questions — comes from **one file**:

```
src/data/questionBank.ts
```

One generic screen (`src/pages/Browse.tsx`) walks that data tree and
renders whichever level the URL points to. No component, route or page
needs to change when you add content — see the in-file comments for the
`p()` / `m()` / `h()` content helpers and the exact shape to add a new
question, year, chapter, subject or class.

Question counts, progress bars, and "Coming Soon" cards for anything not
yet active are all computed automatically.

---

## 6. What's included

- Class → Subject → Chapter-wise/Set-wise → Chapter → Year → Question
  navigation, with breadcrumbs.
- KaTeX-rendered mathematics — never raw LaTeX, works fully offline.
- Hint / Answer / Full Solution panels, collapsed by default, independent.
- A responsive SVG factor-tree diagram.
- Search, type filters, completed/bookmarked filters.
- All Questions view and one-by-one Practice mode (sticky Previous/Next on
  mobile, arrow-key navigation, random question).
- Bookmarks and completion progress, saved locally per device.
- Dark/light theme (remembers your choice; respects system preference on
  first visit).
- Fully responsive with iPhone notch/home-indicator safe-area support, 44px
  minimum touch targets, and a bottom tab bar on mobile.
- Installable PWA: manifest with the full icon set (48–512px, maskable and
  Apple touch variants), service worker with offline caching and
  auto-update, native Android install prompt, and a custom iOS
  "Add to Home Screen" walkthrough.
- Netlify-ready (`netlify.toml` + `public/_redirects`) for one-step deploy.

## Currently active content

Class 10 → Mathematics → Chapter-wise → Real Numbers (2024, 2025, 2026) and
Polynomials (2024) — 25 verified questions in total. Every other class,
subject and chapter shows as "Coming Soon" until content is added.

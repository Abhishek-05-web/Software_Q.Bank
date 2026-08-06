import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// This single codebase ships to every platform:
// - Installed as a native-feeling, offline-capable app on iOS/iPadOS,
//   Android, Windows and macOS via the Web App Manifest + Service Worker
//   configured below (a Progressive Web App).
// - Works with zero install in any modern browser as a fallback.
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false, // we register manually in src/lib/pwa.ts to show the "Update App" toast
      includeAssets: ["favicon.svg", "favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "Question Bank PYQs",
        short_name: "PYQ Bank",
        description:
          "An interactive Class 9–12 previous-year question bank with hints, answers, solutions, bookmarks and progress tracking.",
        id: "/",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "any",
        background_color: "#faf7f0",
        theme_color: "#1e2749",
        icons: [
          { src: "icon-48.png", sizes: "48x48", type: "image/png" },
          { src: "icon-72.png", sizes: "72x72", type: "image/png" },
          { src: "icon-96.png", sizes: "96x96", type: "image/png" },
          { src: "icon-128.png", sizes: "128x128", type: "image/png" },
          { src: "icon-144.png", sizes: "144x144", type: "image/png" },
          { src: "icon-152.png", sizes: "152x152", type: "image/png" },
          { src: "icon-180.png", sizes: "180x180", type: "image/png" },
          { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "icon-384.png", sizes: "384x384", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "icon-maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
          { src: "icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        // App shell + all built JS/CSS/icons/fonts are precached automatically.
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            // Google Fonts stylesheet + font files: cache-first so typography
            // and KaTeX glyphs keep working fully offline after first load.
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "fonts-cache",
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },
      devOptions: { enabled: false }
    })
  ]
});

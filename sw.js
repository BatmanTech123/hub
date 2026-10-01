// Offline support: the app shell and the Firebase library are cached so the hub opens without signal.
// Firestore keeps its own offline copy of your data and syncs when you reconnect.
const CACHE = "hub-v2";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // Firebase SDK files are versioned and never change: cache first.
  // Firebase SDK and Google Fonts files are versioned and never change: cache first.
  const fixed = (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) || url.hostname === "fonts.gstatic.com" || url.hostname === "fonts.googleapis.com";
  if (fixed) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    })));
    return;
  }
  // Own files: network first so updates show up, cache as fallback when offline.
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    }).catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html"))));
  }
});

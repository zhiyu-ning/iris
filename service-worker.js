const VERSION = "162";
const CACHE = "iris-pages-v162-chrome";
const ASSETS = [
  "/iris/styles.css?v=162",
  "/iris/public-config.js?v=162",
  "/iris/app.js?v=162",
  "/iris/manifest.json",
  "/iris/assets/brand/iris-app-icon-dark-192.png?v=162",
  "/iris/assets/brand/iris-app-icon-dark-512.png?v=162",
  "/iris/assets/brand/iris-app-icon-dark-192.webp?v=162",
  "/iris/assets/brand/iris-app-icon-dark-512.webp?v=162",
  "/iris/assets/brand/iris-app-icon-light-192.png?v=162",
  "/iris/assets/brand/iris-app-icon-light-512.png?v=162",
  "/iris/assets/brand/iris-app-icon-light-192.webp?v=162",
  "/iris/assets/brand/iris-app-icon-light-512.webp?v=162",
  "/iris/assets/brand/iris-symbol-light-192.webp?v=162",
  "/iris/assets/brand/iris-symbol-light-512.webp?v=162",
  "/iris/assets/brand/iris-symbol-light-192.png?v=162",
  "/iris/assets/brand/iris-symbol-light-512.png?v=162"
];

function isCurrentVersionedStatic(url) {
  return url.pathname.startsWith("/iris/") && url.searchParams.get("v") === VERSION;
}

function updateStaticCache(request) {
  return fetch(request)
    .then((response) => {
      if (!response.ok) return undefined;
      const copy = response.clone();
      return caches.open(CACHE).then((cache) => cache.put(request, copy)).then(() => response);
    })
    .catch(() => undefined);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(ASSETS.map((asset) => cache.add(new Request(asset, { cache: "reload" }))))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => (key.startsWith("iris-pages-") || key.startsWith("jarvis-voice-")) && key !== CACHE).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.pathname === "/iris" || url.pathname === "/iris/" || url.pathname.endsWith("/service-worker.js")) {
    event.respondWith(fetch(new Request(event.request, { cache: "no-store" })));
    return;
  }

  if (!url.pathname.startsWith("/iris/")) return;

  const networkResponse = updateStaticCache(event.request);
  if (isCurrentVersionedStatic(url)) {
    event.waitUntil(networkResponse.then(() => undefined));
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(event.request).then((cached) =>
          cached || networkResponse.then((response) => response || Response.error())
        )
      )
    );
    return;
  }

  event.waitUntil(networkResponse.then(() => undefined));
  event.respondWith(
    networkResponse.then((response) =>
      response || caches.match(event.request).then((cached) => cached || Response.error())
    )
  );
});

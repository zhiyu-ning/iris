const VERSION = "403";
const CACHE = "iris-pages-v403-record-mode";
const ASSETS = [
  "/iris/styles.css?v=403",
  "/iris/public-config.js?v=403",
  "/iris/app.js?v=403",
  "/iris/manifest.json?v=403",
  "/iris/assets/brand/iris-companion-avatar.webp?v=403",
  "/iris/assets/brand/iris-app-icon-dark-192.webp?v=403",
  "/iris/assets/brand/iris-app-icon-light-192.webp?v=403",
  "/iris/assets/brand/iris-symbol-light-192.webp?v=403"
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

self.addEventListener("push", (event) => {
  let payload = {};
  if (event.data) {
    try {
      payload = event.data.json();
    } catch (error) {
      payload = { body: event.data.text() };
    }
  }
  const title = String(payload.title || "Iris");
  const body = String(payload.body || "有一条新的主动消息").slice(0, 220);
  const notificationId = String(payload.notification_id || "");
  const target = new URL(String(payload.url || "./"), self.registration.scope);
  if (notificationId && !target.searchParams.has("proactive_notification_id")) {
    target.searchParams.set("proactive_notification_id", notificationId);
  }
  const icon = new URL(
    "/iris/assets/brand/iris-app-icon-dark-192.png?v=403",
    self.location.origin
  ).href;
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon,
      badge: icon,
      tag: String(payload.tag || `iris-proactive-${notificationId || "message"}`),
      renotify: false,
      silent: false,
      data: {
        url: target.href,
        notification_id: notificationId,
        kind: String(payload.kind || "proactive")
      }
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const notificationId = String(data.notification_id || "");
  const target = new URL(String(data.url || "./"), self.registration.scope);
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async (windows) => {
      const scopeUrl = new URL(self.registration.scope);
      const existing = windows.find((client) => {
        try {
          const clientUrl = new URL(client.url);
          return clientUrl.origin === scopeUrl.origin
            && clientUrl.pathname.startsWith(scopeUrl.pathname);
        } catch (error) {
          return false;
        }
      });
      if (existing) {
        existing.postMessage({
          type: "IRIS_PROACTIVE_NOTIFICATION_CLICK",
          notification_id: notificationId
        });
        await existing.focus();
        return;
      }
      if (self.clients.openWindow) {
        await self.clients.openWindow(target.href);
      }
    })
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

const NAME = "jsp-v2";

const FILES = ["./index.html", "./style.css", "./script.js", "./index.js", "./css/buttons.css", "./css/code.css", "./css/game.css", "./css/nav.css", "./js/assets.js", "./js/hl.js", "./js/helpers/create-game.js", "./js/helpers/create-observer.js", "./js/helpers/find-last-question.js", "./js/helpers/generate-page.js", "./js/helpers/init-handlers.js", "./js/helpers/toggle-class.js", "./icons/icon-64.png", "./icons/icon-128.png", "./icons/icon-150.png", "./icons/icon-256.png", "./icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then(
        (response) =>
          response ||
          fetch(e.request).then((response) =>
            caches.open(NAME).then((cache) => {
              cache.put(e.request, response.clone());
              return response;
            })
          )
      )
      .catch(() => caches.match("./index.html"))
  );
});

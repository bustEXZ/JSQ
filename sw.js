const NAME = 'jsp-v4'

const FILES = [
  './index.html',
  './style.css',
  './script.js',
  './index.js',

  './css/buttons.css',
  './css/code.css',
  './css/footer.css',
  './css/game.css',
  './css/header.css',
  './css/loader.css',
  './css/section.css',

  './js/loader.js',
  './js/hl.js',

  './js/helpers/animate-details.js',
  './js/helpers/create-observer.js',
  './js/helpers/find-last-section.js',
  './js/helpers/generate-page.js',
  './js/helpers/init-handlers.js',
  './js/helpers/toggle-class.js',

  './js/patterns/create-patterns.js',

  './js/questions/create-game.js',
  './js/questions/create-questions.js',
  './js/questions/questions.js',

  './js/snippets/create-snippets.js',
  './js/snippets/snippets.js',

  './js/tasks/create-tasks.js',
  './js/tasks/tasks.js',

  './icons/icon-64.png',
  './icons/icon-128.png',
  './icons/icon-150.png',
  './icons/icon-256.png',
  './icons/icon-512.png',
]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(NAME).then((cache) => cache.addAll(FILES)))
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(
        (response) =>
          response ||
          fetch(e.request).then((response) =>
            caches.open(NAME).then((cache) => {
              cache.put(e.request, response.clone())
              return response
            })
          )
      )
      .catch(() => caches.match('./index.html'))
  )
})

const NAME = 'mycache-1'

const FILES = [
    './index.html',
    './style.css',
    './script.js',
    './server.js',

    './js/assets.js',
    './js/hl.js',
    './js/fun/create-game.js',
    './js/fun/create-observer.js',
    './js/fun/find-last-question.js',
    './js/fun/generate-page.js',
    './js/fun/init-handlers.js',
    './js/fun/toggle-class.js',
    './js/temp/practice.min.js',
    './js/temp/theory.min.js',

    './icons/icon-64.png',
    './icons/icon-128.png',
    './icons/icon-256.png',
    './icons/icon-512.png',

    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/github.png',
]

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(NAME)
            .then(cache => cache.addAll(FILES))
    )
    self.skipWaiting()
})

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(
                keys.map(key => {
                    if (key !== NAME) {
                        return caches.delete(key)
                    }
                }))))
    self.clients.claim()
})

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(response => response || fetch(e.request)
            .then(response => caches.open(NAME)
            .then(cache => {
                cache.put(e.request, response.clone())
                return response
            })))
            .catch(() => caches.match('./404.html'))
    )
})
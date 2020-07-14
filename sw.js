const NAME = 'cache-v1'

const FILES = [
    './index.html',
    './style.css',
    './script.js',
    './assets.js',
    './server.js',
    './icons/icon-64.png',
    './icons/icon-128.png',
    './icons/icon-256.png',
    './icons/icon-512.png'
]

self.addEventListener("install", ev => {
    ev.waitUntil(
        caches.open(NAME).then(cache => {
            return cache.addAll(FILES)
        })
    )
    self.skipWaiting()
})

self.addEventListener("activate", ev => {
    ev.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== NAME) {
                        return caches.delete(key)
                    }
                })
            )
        })
    )
    self.clients.claim()
})

self.addEventListener('fetch', ev => {
    ev.respondWith(
        fetch(ev.request)
        .then(res => {
            const cacheClone = res.clone()
            caches.open(NAME).then(cache => {
                cache.put(ev.request, cacheClone)
            })
            return res
        })
        .catch(() => caches.match(ev.request).then(res => res))
    )
})

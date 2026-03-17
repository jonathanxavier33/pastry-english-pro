const CACHE_NAME = 'pastry-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Installation du cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Récupération des fichiers depuis le cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
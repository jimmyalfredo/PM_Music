const CACHE_NAME = 'pm-music-cache-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  '/songs.json',
  '/mp3/CANTEMOS CON GOZO HERMANOS/08 - Tu misericordia.mp3',
  '/mp3/CANTEMOS CON GOZO HERMANOS/06 - Soberano Señor.mp3'
];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache))));
self.addEventListener('fetch', e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

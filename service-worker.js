const CACHE_NAME = 'pm-music-cache-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  '/songs.json',
  '/mp3/CANTEMOS_CON_GOZO_HERMANOS/08-Tu_misericordia.mp3',
  '/mp3/CANTEMOS_CON_GOZO_HERMANOS/06-Soberano_Señor.mp3'
];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache))));
self.addEventListener('fetch', e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));



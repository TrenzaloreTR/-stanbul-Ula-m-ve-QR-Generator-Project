
const CACHE_NAME = 'ist-ulasim-app-v3';
const TILE_CACHE = 'ist-ulasim-map-tiles-v1';

const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './data.js',
  './manifest.json',
  './assets/leaflet.js',
  './assets/leaflet.css',
  './assets/qrcode.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME && cache !== TILE_CACHE) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Harita Katmanları (Google Tile) için agresif önbellekleme
  if (url.hostname.includes('google.com') && url.pathname.includes('/vt/')) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse; // Çevrimdışıysa veya daha önce indirildiyse direkt cache'den ver
        }
        return fetch(event.request).then(networkResponse => {
          return caches.open(TILE_CACHE).then(cache => {
            cache.put(event.request, networkResponse.clone()); // Yeni bölgeyi kalıcı olarak kaydet
            return networkResponse;
          });
        }).catch(() => {
           // İnternet yoksa ve cache'de de yoksa yapacak bir şey yok (boş kalır)
           return new Response('');
        });
      })
    );
  } else {
    // Uygulama dosyaları için normal cache stratejisi
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});

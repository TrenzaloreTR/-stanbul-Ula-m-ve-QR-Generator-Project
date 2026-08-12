
const CACHE_NAME = 'ist-ulasim-app-v6';
const TILE_CACHE = 'ist-ulasim-map-tiles-v3';

const urlsToCache = [
  './', './index.html', './app.js', './style.css', './data.js', './manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];

self.addEventListener('install', event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))); });
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if (k !== CACHE_NAME && k !== TILE_CACHE) return caches.delete(k); }))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.hostname.includes('google.com') && url.pathname.includes('/vt/')) {
    event.respondWith(
      caches.match(event.request).then(res => res || fetch(event.request).then(netRes => {
        if (netRes && (netRes.status === 200 || netRes.type === 'opaque')) {
          const clone = netRes.clone(); caches.open(TILE_CACHE).then(c => c.put(event.request, clone));
        } return netRes;
      }).catch(() => new Response(new Blob(['<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"></svg>'], {type: 'image/svg+xml'}), { headers: { 'Content-Type': 'image/svg+xml' } })))
    ); return;
  }
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request).then(netRes => {
    if (netRes && netRes.status === 200) { const clone = netRes.clone(); caches.open(CACHE_NAME).then(c => c.put(event.request, clone)); }
    return netRes;
  }).catch(() => {})));
});

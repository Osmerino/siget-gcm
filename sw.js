const CACHE_NAME = 'siget-v2';

// Instala o Service Worker e força a ativação imediata
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Intercepta as requisições buscando sempre a versão mais recente na rede
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

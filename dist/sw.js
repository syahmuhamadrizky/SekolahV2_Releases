// Service Worker for Dapoy Schools
// Selalu mengutamakan data jaringan terbaru (Network First) dan auto-purge cache lama

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          console.log('[SW] Menghapus cache lama:', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Jangan pernah memblokir atau meng-cache request API atau navigasi halaman
  if (url.pathname.startsWith('/api') || event.request.mode === 'navigate') {
    return;
  }
});

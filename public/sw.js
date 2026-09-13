const CACHE_VERSION = 'v4.1';
const CACHE_NAME = `cyberwiki-${CACHE_VERSION}`;

// Cache strategies by resource type
const CACHE_STRATEGIES = {
  // Static assets - cache first, network fallback
  static: {
    patterns: [/\.css$/, /\.js$/, /\.png$/, /\.jpg$/, /\.svg$/, /\.woff2?$/],
    strategy: 'cache-first',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },

  // CDN resources - stale while revalidate
  cdn: {
    patterns: [/cdnjs\.cloudflare\.com/, /fonts\.googleapis\.com/, /fonts\.gstatic\.com/],
    strategy: 'stale-while-revalidate',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxEntries: 50
  },

  // API requests - network first, cache fallback
  api: {
    patterns: [/\/api\//, /ollama/, /generativelanguage/],
    strategy: 'network-first',
    maxAge: 5 * 60 * 1000, // 5 minutes
    maxEntries: 30
  },

  // Data files - stale while revalidate
  // (patrones quiz.js / quiz.d eliminados: ya no existen en el build)
  data: {
    patterns: [/data\.js$/, /data-github\.js$/, /data-htb\.js$/, /data-merge\.js$/, /data-guides\.js$/, /guides-interactive\.js$/],
    strategy: 'stale-while-revalidate',
    maxAge: 10 * 60 * 1000, // 10 minutes
    maxEntries: 20
  },

  // Navigation - network first, cache fallback
  navigation: {
    patterns: [/\.(html)$/],
    strategy: 'network-first',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    maxEntries: 10
  },

  // Images - cache first with network fallback
  images: {
    patterns: [/\.(png|jpg|jpeg|gif|webp|svg|ico)$/],
    strategy: 'cache-first',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 200
  }
};

// Pre-cache URLs for offline support.
// NOTE: the Vite bundles live under /assets/ with hashed filenames, so they
// are cached on first fetch (cache-first) instead of being hard-coded here.
// These are the stable entry points that always exist in the build.
const PRECACHE_URLS = [
  './',
  './index.html',
  './quiz.css',
  './data.js',
  './data-github.js',
  './data-htb.js',
  './data-merge.js',
  './guides-interactive.js',
  './vendor/prism/prism.min.js',
  './vendor/prism/prism-python.min.js',
  './vendor/prism/prism-bash.min.js',
  './vendor/prism/prism-javascript.min.js',
  './vendor/prism/prism-tomorrow.min.css'
];

/**
 * Install event - pre-cache critical resources.
 * Tolerant: a missing URL must not abort the whole install, otherwise the
 * new worker never activates and a stale worker keeps controlling the page.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        const jobs = PRECACHE_URLS.map(async (url) => {
          try {
            const res = await fetch(url);
            if (res.ok) await cache.put(url, res);
          } catch (err) {
            console.warn('[SW] skip precache', url, err);
          }
        });
        await Promise.all(jobs);
      })
      .then(() => self.skipWaiting())
  );
});

/**
 * Activate event - clean old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('cyberwiki-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

/**
 * Fetch event - route to appropriate cache strategy
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // The worker script itself must always come from the network so that new
  // builds can replace a stale worker (which otherwise re-serves old caches).
  if (new URL(request.url).pathname.endsWith('/sw.js')) return;

  // Skip cross-origin requests (except CDN)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin && !isCDN(url.hostname)) {
    return;
  }

  // Find matching cache strategy
  const strategy = getStrategy(url, request);

  if (strategy) {
    event.respondWith(executeStrategy(request, strategy));
  }
});

/**
 * Background sync for offline actions
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-chat') {
    event.waitUntil(syncChatHistory());
  }
});

/**
 * Push notifications
 */
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: './icon-192.png',
        badge: './favicon-32.png',
        data: data.url
      })
    );
  }
});

/**
 * Notification click handler
 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data || './')
  );
});

// Helper functions
function isCDN(hostname) {
  return hostname.includes('cloudflare.com') ||
         hostname.includes('googleapis.com') ||
         hostname.includes('gstatic.com');
}

function getStrategy(url, request) {
  for (const [name, config] of Object.entries(CACHE_STRATEGIES)) {
    if (config.patterns.some(pattern => pattern.test(url.pathname) || pattern.test(url.href))) {
      return { name, ...config };
    }
  }
  // Default: network first for navigation, cache first for others
  return request.mode === 'navigate'
    ? { name: 'navigation-default', ...CACHE_STRATEGIES.navigation }
    : null;
}

async function executeStrategy(request, strategy) {
  const cache = await caches.open(CACHE_NAME);

  switch (strategy.strategy) {
    case 'cache-first':
      return cacheFirst(request, cache, strategy.maxAge, strategy.maxEntries);
    case 'network-first':
      return networkFirst(request, cache, strategy.maxAge, strategy.maxEntries);
    case 'stale-while-revalidate':
      return staleWhileRevalidate(request, cache, strategy.maxAge, strategy.maxEntries);
    default:
      return fetch(request);
  }
}

async function cacheFirst(request, cache, maxAge, maxEntries) {
  const cached = await cache.match(request);
  if (cached && !isExpired(cached, maxAge)) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
      if (maxEntries) trimCache(CACHE_NAME, maxEntries); // antes nunca se llamaba
    }
    return response;
  } catch (error) {
    return cached || new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request, cache, maxAge, maxEntries) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
      if (maxEntries) trimCache(CACHE_NAME, maxEntries);
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request, cache, maxAge, maxEntries) {
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone()).then(() => {
        if (maxEntries) trimCache(CACHE_NAME, maxEntries);
      });
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}

function isExpired(response, maxAge) {
  const dateHeader = response.headers.get('date');
  if (!dateHeader) return false;
  const date = new Date(dateHeader);
  return (Date.now() - date.getTime()) > maxAge;
}

async function syncChatHistory() {
  // Placeholder for background sync
  console.log('Syncing chat history...');
}

// Cache size management
async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    await Promise.all(
      keys.slice(0, keys.length - maxEntries).map(key => cache.delete(key))
    );
  }
}
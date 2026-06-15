self.addEventListener('install', (event) => {
  self.skipWaiting()

  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key)))),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((keys) => Promise.all(keys.map((key) => caches.delete(key)))),
      self.clients.matchAll({ type: 'window' }).then((clients) =>
        Promise.all(
          clients.map((client) => {
            if ('navigate' in client) {
              return client.navigate(client.url)
            }

            return undefined
          }),
        ),
      ),
      self.registration.unregister(),
    ]),
  )
})

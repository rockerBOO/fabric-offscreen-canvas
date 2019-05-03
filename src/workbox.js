import { registerRoute } from 'workbox-routing/registerRoute.mjs'
import { StaleWhileRevalidate } from 'workbox-strategies/StaleWhileRevalidate.mjs'

registerRoute(/\.(?:js|css)$/, new StaleWhileRevalidate())

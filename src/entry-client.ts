import { createApp } from '/@src/app'
import initCookiesPlugin from '/@src/utils/cookies'

initCookiesPlugin()

createApp().then(async ({ app, router }) => {
  // wait client side hydratation to complete
  await router.isReady()

  app.mount('#app', true)
})

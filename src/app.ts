import { createApp as createClientApp } from 'vue'

import { createHead } from '@unhead/vue'
import { InferSeoMetaPlugin } from '@unhead/addons'

import { createRouter } from '/@src/router'
import OsvsApp from '/@src/OsvsApp.vue'
import 'unfonts.css'
import '/@src/styles'

const plugins = import.meta.glob<{ default: OsvsPlugin }>('./plugins/*.ts')

export type OsvsAppContext = Awaited<ReturnType<typeof createApp>>
export type OsvsPlugin = (context: OsvsAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: OsvsPlugin) {
  return plugin
}

export async function createApp() {
  const app = createClientApp(OsvsApp)
  const router = createRouter()

  const head = createHead({
    plugins: [InferSeoMetaPlugin()],
  })
  app.use(head)

  const context = {
    app,
    router,
    head,
    initialState: {} as Record<string, any>,
  }

  if (typeof window !== 'undefined') {
    context.initialState = window.__osvs__ ?? {}
  }

  app.provide('osvs', { plugins })

  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]()
      await plugin(context)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(router)

  return context
}

import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import PurgeIcons from 'vite-plugin-purge-icons'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePluginRadar } from 'vite-plugin-radar'
import Components from 'unplugin-vue-components/vite'
import Unfonts from 'unplugin-fonts/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import UnheadVite from '@unhead/addons/vite'
import { unheadVueComposablesImports } from '@unhead/vue'

const SITEMAP_HOST = process.env.SITEMAP_HOST || 'http://localhost:3000/'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({

  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  base: '/',
  // Directory to serve as plain static assets.
  publicDir: 'public',
  // Adjust console output verbosity.
  logLevel: 'info',
  // development server configuration
  server: {
    // Vite 3 now defaults to 5173, but you can override it with the port option.
    port: 3000,
  },
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
      {
        find: '/@/',
        replacement: `/`,
      },
    ],
  },
  optimizeDeps: {
    exclude: ['@vueuse/core', '@vueuse/components'],
    include: [
      'h3',
      'plyr',
      'vue-scrollto',
      'vue-marquee-text-component',
      'cobe',
      'vue3-carousel',
      'vue3-popper',
      'vue-my-photos',
      'vue3-markdown-it',
      'vue-accessible-color-picker',
      'prismjs',
      'vue-prism-component',
      '@iconify/iconify',
      'nprogress',
      '@vueform/slider',
      'mapbox-gl',
      'pinia',
    ],
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: Infinity,

    /**
     * Uncomment this section to build the demo with missing images
     * Don't forget to remove this section when you replaced assets with yours
     */
    /// rollupOptions: {
    ///   external: [/\/assets\/demo\/.*/],
    /// },
  },
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    Vue({
      include: [/\.vue$/],
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),

    /**
     * vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
     */
    VueI18nPlugin({
      compositionOnly: true,
      fullInstall: false,
      include: resolve(
        // @ts-ignore
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**',
      ),
    }),

    /**
     * vite-plugin-pages plugin generate routes based on file system
     *
     * @see https://github.com/hannoeru/vite-plugin-pages
     */
    Pages({
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      onRoutesGenerated: (routes) =>
        generateSitemap({
          routes,
          hostname: SITEMAP_HOST,
        }),
    }),

    /**
     * Unhead provides a Vite plugin to optimise your builds, by removing composables that aren't needed and simplifying your code.
     *
     * @see https://unhead.harlanzw.com/guide/getting-started/vite-plugin
     */
    UnheadVite(),

    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        unheadVueComposablesImports,
      ],
    }),

    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      directoryAsNamespace: false,
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [IconsResolver()],
    }),

    /**
     * unplugin-fonts plugin inject webfonts from differents providers
     *
     * @see https://github.com/cssninjaStudio/unplugin-fonts/
     */
    Unfonts({
      google: {
        families: [
          /*{
            name: 'Poppins',
            styles: 'ital,wght@0,300;0,400;1,500',
          },*/
          {
            name: 'Roboto',
            styles: 'ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400',
          },
          {
            name: 'Montserrat',
            styles: 'ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300;1,400',
          },
        ],
      },
    }),

    /**
     * unplugin-icons plugin injects icons from differents providers
     *
     * @see https://github.com/antfu/unplugin-icons
     */
    Icons({ compiler: 'vue3' }),

    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    PurgeIcons(),

    /**
     * vite-plugin-radar plugin inject snippets from analytics providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-radar
     */
    VitePluginRadar({
      enableDev: true,
      gtm: {
        id: 'GTM-P4BKNDB',
      },
    }),

    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      base: '/',
      mode: isProd ? 'production' : 'development',
      // registerType: 'autoUpdate',
      workbox: {
        /**
         * precache files that match the glob pattern
         *
         * @see https://vite-pwa-org.netlify.app/guide/service-worker-precache.html
         */
        globPatterns: ['**/*.{js,css,ico,png,svg,webp,jpg,jpeg}'],

        /**
         * add external cache of google fonts
         *
         * @see https://vite-pwa-org.netlify.app/workbox/generate-sw.html
         */
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})

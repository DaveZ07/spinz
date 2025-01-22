import { fileURLToPath } from 'node:url'

const BASE_URL = process.env.APP_URL || 'https://spinz.gg'

const BOOL_ROBOTS_DISABLED = process.env.ROBOTS_DISABLED === 'true'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],
  components: {
    dirs: ['@/components/content'],
    global: true
  },
  imports: { autoImport: false },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'SPINZ.GG',
      meta: [
        {
          name: 'description',
          content: 'SPINZ.GG'
        },
        {
          name: 'theme-color',
          content: '#8062f9'
        }
      ]
    }
  },
  site: {
    name: 'SPINZ.GG',
    indexable: !BOOL_ROBOTS_DISABLED
  },
  colorMode: { classSuffix: '' },
  runtimeConfig: {
    public: { BASE_URL }
  },
  alias: {
    '@layout': fileURLToPath(new URL('./app/components/layout', import.meta.url)),
    '@ui': fileURLToPath(new URL('./app/components/ui', import.meta.url))
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
  eslint: { config: { stylistic: true } },
  robots: {
    allow: ['/'],
    disallow: ['/dashboard', '/profile'],
    blockNonSeoBots: true,
    blockAiBots: true,
    credits: false
  },
  tailwindcss: {
    cssPath: './app/styles/main.css',
    viewer: false
  }
})

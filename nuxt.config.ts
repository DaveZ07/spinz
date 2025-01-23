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
      title: 'Spinz.gg',
      meta: [
        {
          name: 'description',
          content: 'Spinz.gg'
        },
        {
          name: 'theme-color',
          content: '#6938f0'
        }
      ]
    }
  },
  site: {
    name: 'Spinz.gg',
    url: BASE_URL,
    indexable: !BOOL_ROBOTS_DISABLED
  },
  colorMode: { classSuffix: '' },
  runtimeConfig: {
    MAILER_RECIPIENT: '', MAILER_SERVICE: '', MAILER_USER: '', MAILER_PASS: '',
    public: { BASE_URL }
  },
  alias: {
    '@layout': fileURLToPath(new URL('./app/components/layout', import.meta.url)),
    '@base': fileURLToPath(new URL('./app/components/base', import.meta.url)),
    '@ui': fileURLToPath(new URL('./app/components/ui', import.meta.url))
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
  vite: {
    optimizeDeps: {
      include: [
        '@vueuse/core',
        'radix-vue',
        'embla-carousel-vue',
        'vee-validate',
        '@vee-validate/rules',
        'class-variance-authority',
        'clsx',
        'tailwind-merge'
      ]
    }
  },
  eslint: { config: { stylistic: true } },
  robots: {
    allow: ['/'],
    blockNonSeoBots: true,
    blockAiBots: true,
    credits: false
  },
  tailwindcss: {
    cssPath: './app/styles/main.css',
    viewer: false
  }
})

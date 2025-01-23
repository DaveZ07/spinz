<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { withBase, withoutTrailingSlash } from 'ufo'

import { useHead, useRoute, useRuntimeConfig, useSeoMeta } from '#imports'

const config = useRuntimeConfig()
const route = useRoute()

const getPublicPath = (path: string) => withoutTrailingSlash(withBase(path, config.public.BASE_URL))

useHead({ htmlAttrs: { lang: 'en', dir: 'ltr' } })

const title = '%s | Spinz.gg'
const description = 'Leading influencer marketing agency with data-driven campaigns. Connect with authentic influencers to boost engagement and achieve measurable success.'
// TODO: Add og:image and twitter:image
const ogImage = getPublicPath('/assets/socials/og-image.jpg')
const twitterImage = getPublicPath('/assets/socials/twitter-image.jpg')

useSeoMeta({
  titleTemplate: title,
  description: description,

  ogTitle: title,
  ogDescription: description,
  ogImage: ogImage,
  ogUrl: getPublicPath(route.fullPath),

  twitterTitle: title,
  twitterDescription: description,
  twitterImage: twitterImage,
  twitterCard: 'summary_large_image'
})
</script>

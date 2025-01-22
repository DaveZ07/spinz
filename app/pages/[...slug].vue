<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<script setup lang="ts">
import { createError, queryCollection, useAsyncData, useRoute, useSeoMeta } from '#imports'

const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

if (page.value) {
  const { description, title, ...seo } = page.value.seo

  const parsedTitle = title ? { title } : {}
  const parsedDescription = description ? { description, ogDescription: description, twitterDescription: description } : {}

  useSeoMeta({ ...parsedTitle, ...parsedDescription, ...seo })
}
</script>

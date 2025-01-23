<template>
  <footer
    class="py-16 content-grid lg:py-24"
    :class="[isDefaultPage ? 'bg-primary-600' : 'bg-background-1000']"
  >
    <div class="col-content">
      <template v-if="isDefaultPage">
        <div class="lg:text-center">
          <div class="text-3xl font-medium lg:text-6xl">
            Let's Start the Conversation
          </div>

          <div class="mt-4 text-base text-primary-200 lg:mt-8 lg:text-lg">
            We'd love to hear from you! Whether you have a question, need more information<br /> or are ready to collaborate, reach out today.
          </div>

          <Button
            class="mt-6 h-16 bg-primary-950 px-10 py-5 text-white hover:bg-primary-950 lg:mt-12"
            as-child
          >
            <NuxtLink to="/contact">
              Talk Now!
            </NuxtLink>
          </Button>
        </div>

        <div class="my-6 h-px w-full bg-primary-500 lg:my-12" />
      </template>

      <div class="flex items-center justify-between gap-x-4">
        <NuxtLink
          to="/"
          class="flex h-8 select-none items-center gap-x-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 32"
            fill="none"
            class="w-12 shrink-0"
          >
            <path
              class="fill-primary-300"
              d="M9.071 17.896h9.382c.925 0 1.373-1.131.699-1.764l-5.004-4.703a1.436 1.436 0 01.983-2.481H33.89a5.055 5.055 0 004.402-2.569l2.751-4.87A1.011 1.011 0 0040.163 0H12.34A5.055 5.055 0 007.94 2.569L.132 16.387c-.38.674.106 1.509.88 1.509h8.059z"
            />
            <path
              class="fill-primary-200"
              d="M45.164 13.104h-17.44c-.925 0-1.373 1.13-.7 1.763l5.004 4.703a1.436 1.436 0 01-.983 2.481h-18.76a5.055 5.055 0 00-4.401 2.569l-2.752 4.87c-.38.675.106 1.51.88 1.51h27.823a5.056 5.056 0 004.402-2.57l7.807-13.818a1.011 1.011 0 00-.88-1.508z"
            />
          </svg>

          <span class="text-[26px] font-semibold text-white">Spinz<span class="text-primary-300">.gg</span></span>
        </NuxtLink>

        <nav class="ml-auto text-lg">
          <ul class="flex gap-x-8">
            <li>
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useNuxtApp, useRoute } from '#imports'

import { Button } from '~/components/ui/button'

const { hook } = useNuxtApp()
const route = useRoute()

const currentRoute = ref(route.path)
hook('page:transition:finish', () => {
  currentRoute.value = route.path
})

const isDefaultPage = computed(() => {
  return currentRoute.value !== '/contact'
})
</script>

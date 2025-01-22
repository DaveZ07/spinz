<template>
  <main
    class="relative grid h-svh place-items-center overflow-hidden"
    :class="[isDebugMode ? 'grid-rows-[min-content_1fr]' : '']"
  >
    <div
      v-if="isDebugMode"
      class="relative z-10 w-full max-w-[100vw] self-start overflow-hidden p-content-spacing"
    >
      <pre class="overflow-auto border-2 border-primary-500 p-content-spacing">{{ props.error }}</pre>
      <div class="absolute inset-content-spacing -z-10 bg-black/50" />
    </div>

    <div class="text-center">
      <div class="text-[132px] leading-[0.75em] lg:text-[200px]">
        #{{ props.error.statusCode }}
      </div>

      <div class="mt-12 text-5xl">
        <template v-if="props.error.statusCode === 404">
          Sorry, page not found
        </template>

        <template v-else>
          Something went wrong on our side.
        </template>
      </div>

      <button
        class="mt-16 h-16 rounded-lg px-16 font-sans text-xl font-bold [&_svg]:size-6"
        @click="handleError"
      >
        Go back
      </button>
    </div>

    <div class="sfc-stroke pointer-events-none absolute bottom-1/2 -z-10 text-[400px] leading-[0.85em] text-background-800 lg:text-[1080px]">
      #{{ props.error.statusCode }}
    </div>
    <div class="pointer-events-none absolute top-1/2 -z-10 text-[400px] leading-[0.85em] text-background-1000 lg:text-[1080px]">
      #{{ props.error.statusCode }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { NuxtError } from '#app'
import { useRoute } from '#imports'

interface ErrorProps {
  error: NuxtError
}

const props = defineProps<ErrorProps>()

const route = useRoute()
const isDebugMode = computed(() => 'debug' in route.query)

const handleError = () => {
  window.location.href = '/'
}
</script>

<style scoped lang=postcss>
.sfc-stroke {
  text-shadow:
    1px 1px 0px theme('colors.background.1000'),
    -1px -1px 0px theme('colors.background.1000'),
    1px -1px 0px theme('colors.background.1000'),
    -1px 1px 0px theme('colors.background.1000');
}
</style>

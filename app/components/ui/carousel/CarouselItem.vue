<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', props.class)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { useCarousel } from './use-carousel'

interface CarouselItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CarouselItemProps>()

const { orientation } = useCarousel()
</script>

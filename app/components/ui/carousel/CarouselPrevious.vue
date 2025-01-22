<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn('absolute size-8 touch-manipulation rounded-full p-0', orientation === 'horizontal' ? '-left-12 top-1/2 -translate-y-1/2' : '-top-12 left-1/2 -translate-x-1/2 rotate-90', props.class)"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <Icon
        name="material-symbols-light:arrow-back"
        class="size-4 text-current"
      />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { Button } from '@ui/button'

import { useCarousel } from './use-carousel'

interface CarouselPreviousProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CarouselPreviousProps>()

const { canScrollPrev, orientation, scrollPrev } = useCarousel()
</script>

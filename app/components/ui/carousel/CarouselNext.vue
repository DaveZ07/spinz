<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn('absolute size-8 touch-manipulation rounded-full p-0', orientation === 'horizontal' ? '-right-12 top-1/2 -translate-y-1/2' : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90', props.class)"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <Icon
        name="material-symbols-light:arrow-forward"
        class="size-4 text-current"
      />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { Button } from '@ui/button'

import { useCarousel } from './use-carousel'

interface CarouselNextProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CarouselNextProps>()

const { canScrollNext, orientation, scrollNext } = useCarousel()
</script>

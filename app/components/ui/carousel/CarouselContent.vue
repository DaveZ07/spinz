<template>
  <div
    ref="carouselRef"
    class="overflow-hidden"
  >
    <div
      :class="cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { useCarousel } from './use-carousel'

defineOptions({ inheritAttrs: false })

interface CarouselContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CarouselContentProps>()

const { carouselRef, orientation } = useCarousel()
</script>

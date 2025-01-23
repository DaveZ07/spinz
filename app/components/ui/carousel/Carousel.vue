<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    :tabindex="0"
    @keydown="onKeyDown"
  >
    <slot
      :can-scroll-next="canScrollNext"
      :can-scroll-prev="canScrollPrev"
      :carousel-api="carouselApi"
      :carousel-ref="carouselRef"
      :orientation="orientation"
      :scroll-next="scrollNext"
      :scroll-prev="scrollPrev"
    />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import type { CarouselEmits, CarouselProps as _CarouselProps } from './interface'
import { useProvideCarousel } from './use-carousel'

interface CarouselProps extends _CarouselProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal'
})

const emit = defineEmits<CarouselEmits>()

const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emit)

defineExpose({ canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev })

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
  const nextKey = props.orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight'

  if (event.key === prevKey) {
    event.preventDefault(); scrollPrev()
  } else if (event.key === nextKey) {
    event.preventDefault(); scrollNext()
  }
}
</script>

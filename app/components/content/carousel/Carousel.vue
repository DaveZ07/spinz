<template>
  <section :class="cn('relative overflow-hidden py-16 content-grid lg:py-24', props.class)">
    <div class="col-content">
      <template v-if="$slots.label">
        <div class="mb-8 w-fit rounded-full border border-primary-500/[0.12] bg-primary-500/10 px-4 py-2 text-primary-400">
          <slot
            name="label"
            mdc-unwrap="p"
          />
        </div>
      </template>

      <template v-if="$slots.title">
        <div class="text-3xl font-medium lg:text-6xl">
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </div>
      </template>
    </div>

    <div class="mt-16 col-content">
      <Carousel
        :opts="{ loop: true, align: 'start' }"
        class="relative w-full"
        @init-api="setCarouselApi"
      >
        <CarouselContent class="md:[&>*]:basis-1/2 xl:[&>*]:basis-1/3">
          <slot />
        </CarouselContent>
      </Carousel>

      <div class="ml-auto mt-8 flex w-fit gap-x-4">
        <Button
          size="icon"
          class="size-[4.5rem] bg-primary-500/20 hover:bg-primary-500/20"
          @click="handlePrevSlide"
        >
          <Icon
            name="material-symbols-light:arrow-back"
            class="size-8 text-primary-200"
          />
          <span class="sr-only">Previous slide</span>
        </Button>

        <Button
          size="icon"
          class="size-[4.5rem] bg-primary-600 hover:bg-primary-600"
          @click="handleNextSlide"
        >
          <Icon
            name="material-symbols-light:arrow-forward"
            class="size-8 text-primary-50"
          />
          <span class="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { Button } from '@ui/button'
import { Carousel, CarouselContent } from '@ui/carousel'
import type { CarouselApi } from '@ui/carousel'

interface CarouselProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CarouselProps>()

const carouselApi = ref<CarouselApi | null>(null)

const setCarouselApi = (value: CarouselApi) => {
  carouselApi.value = value
}

const handlePrevSlide = () => {
  carouselApi.value?.scrollPrev()
}

const handleNextSlide = () => {
  carouselApi.value?.scrollNext()
}
</script>

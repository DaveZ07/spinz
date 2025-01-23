<template>
  <section :class="cn('py-16 content-grid lg:py-24', props.class)">
    <div
      class="col-content"
      :class="{ 'grid items-center gap-x-6 gap-y-10 lg:grid-rows-1': $slots.image, 'lg:grid-cols-[4fr_6fr]': props.side === 'left', 'lg:grid-cols-[6fr_4fr]': props.side === 'right' }"
    >
      <div :class="{ 'lg:p-8': $slots.image }">
        <template v-if="$slots.label">
          <div class="mb-8 w-fit rounded-full border border-primary-500/[0.12] bg-primary-500/10 px-4 py-2 text-primary-400">
            <slot
              name="label"
              mdc-unwrap="p"
            />
          </div>
        </template>

        <template v-if="$slots.title">
          <div class="mt-8 text-3xl font-medium lg:text-6xl">
            <slot
              name="title"
              mdc-unwrap="p"
            />
          </div>
        </template>

        <template v-if="$slots.description">
          <div class="mt-4 space-y-lh text-lg text-grayscale-300 lg:mt-8 lg:text-xl">
            <slot name="description" />
          </div>
        </template>

        <template v-if="$slots.cta">
          <Button
            class="mt-12 w-full bg-primary-700 text-center text-xl font-medium text-white hover:bg-primary-700 lg:w-fit"
            as-child
          >
            <NuxtLink to="/contact">
              <slot
                name="cta"
                mdc-unwrap="p"
              />
            </NuxtLink>
          </Button>
        </template>
      </div>

      <template v-if="$slots.image">
        <div
          class="row-[1] [&>img]:size-full [&>img]:rounded-lg"
          :class="{ 'lg:col-[1]': props.side === 'left', 'lg:col-[2]': props.side === 'right' }"
        >
          <slot name="image" />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { Button } from '@ui/button'

interface BannerProps {
  side?: 'left' | 'right'
  class?: HTMLAttributes['class']
}

const props = defineProps<BannerProps>()
</script>

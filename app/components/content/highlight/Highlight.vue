<template>
  <section :class="cn('py-16 content-grid lg:py-24', props.class)">
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
        <div class="mt-8 text-3xl font-medium lg:text-6xl">
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </div>
      </template>

      <template v-if="$slots.description">
        <div class="mt-8 grid gap-8 text-base text-grayscale-300 lg:grid-cols-2 lg:text-xl">
          <slot name="description" />
        </div>
      </template>
    </div>

    <div class="mt-16 grid grid-cols-2 gap-x-8 gap-y-2 col-content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

interface HighlightProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<HighlightProps>()
</script>

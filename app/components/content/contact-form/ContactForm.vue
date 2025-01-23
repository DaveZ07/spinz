<template>
  <section :class="cn('pb-24 pt-12 content-grid lg:pb-20 lg:pt-16', props.class)">
    <div class="col-content">
      <template v-if="$slots.title">
        <div class="text-3xl font-medium lg:text-6xl [&_strong]:font-medium [&_strong]:text-primary-500">
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </div>
      </template>

      <template v-if="$slots.description">
        <div class="mt-8 text-base text-grayscale-300 lg:text-xl">
          <slot name="description" />
        </div>
      </template>
    </div>

    <div class="mt-16 col-content">
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { ContactForm } from '@base/contact-form'

interface HighlightProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<HighlightProps>()
</script>

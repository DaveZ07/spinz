<template>
  <CarouselItem>
    <div class="size-full rounded-lg border border-grayscale-400/15 bg-background-900">
      <div class="space-y-6 p-6">
        <template v-if="$slots.title">
          <div class="text-3xl font-medium">
            <slot
              name="title"
              mdc-unwrap="p"
            />
          </div>
        </template>

        <template v-if="$slots.description">
          <div class="text-lg text-grayscale-300">
            <slot
              name="description"
              mdc-unwrap="p"
            />
          </div>
        </template>
      </div>
    </div>
  </CarouselItem>
</template>

<script setup lang="ts">
import { CarouselItem } from '@ui/carousel'
</script>

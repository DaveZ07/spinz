<template>
  <input
    v-model="modelValue"
    :class="cn('flex h-[4.5rem] w-full rounded-md bg-[hsl(219,21%,16%)] px-6 py-5 text-xl text-grayscale-300 ring-offset-background-800 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grayscale-300/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

interface InputProps {
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}

const props = defineProps<InputProps>()

interface InputEmits {
  (e: 'update:modelValue', payload: string | number): void
}

const emit = defineEmits<InputEmits>()

const modelValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: props.defaultValue
})
</script>

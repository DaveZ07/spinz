<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="cn('peer size-4 shrink-0 rounded-sm border border-primary-600 ring-offset-background-800 data-[state=checked]:bg-primary-600 data-[state=checked]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  >
    <CheckboxIndicator class="flex size-full items-center justify-center text-current">
      <slot>
        <Icon
          name="material-symbols-light:check"
          class="size-4"
        />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps as _CheckboxRootProps } from 'radix-vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

interface CheckboxRootProps extends _CheckboxRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CheckboxRootProps>()
const emit = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>

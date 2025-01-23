<template>
  <div class="w-full">
    <div class="flex items-center gap-x-4">
      <Checkbox
        :id="props.name"
        v-model:checked="value"
        class="size-6 [&_svg]:size-8"
      />

      <Label
        :for="props.name"
        class="text-grayscale-300"
      >
        <slot />
      </Label>
    </div>

    <div
      v-if="showErrorMessage"
      class="mt-2 text-lg text-[hsl(0,72%,51%)]"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Label } from 'radix-vue'
import { titleCase } from 'scule'
import { useField, useIsFormTouched } from 'vee-validate'
import { computed } from 'vue'

import { Checkbox } from '@ui/checkbox'

interface ContactFormTextareaProps {
  name: string
}

const props = defineProps<ContactFormTextareaProps>()

const { errorMessage, meta, value } = useField<boolean>(() => props.name, undefined, {
  type: 'checkbox',
  label: titleCase(props.name)
})

const isFormTouched = useIsFormTouched()
const showErrorMessage = computed(
  () => (meta.dirty || meta.validated || isFormTouched.value) && errorMessage.value
)
</script>

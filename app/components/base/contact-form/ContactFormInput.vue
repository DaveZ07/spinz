<template>
  <div class="w-full">
    <Input
      v-model:model-value="value"
      :placeholder="props.placeholder"
      autocomplete="off"
    />

    <div
      v-if="showErrorMessage"
      class="mt-2 text-lg text-[hsl(0,72%,51%)]"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { titleCase } from 'scule'
import { useField, useIsFormTouched } from 'vee-validate'
import { computed } from 'vue'

import { Input } from '@ui/input'

interface ContactFormInputProps {
  name: string
  placeholder: string
}

const props = defineProps<ContactFormInputProps>()

const { errorMessage, meta, value } = useField<string>(() => props.name, undefined, {
  label: titleCase(props.name)
})

const isFormTouched = useIsFormTouched()
const showErrorMessage = computed(
  () => (meta.dirty || meta.validated || isFormTouched.value) && errorMessage.value
)
</script>

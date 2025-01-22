<template>
  <form
    class="grid gap-y-10"
    @submit.prevent="handleFormSubmit"
  >
    <ContactFormInput
      name="name"
      placeholder="Enter your name..."
    />

    <ContactFormInput
      name="email"
      placeholder="Enter your email..."
    />

    <ContactFormTextarea
      name="message"
      placeholder="Enter your message here..."
    />

    <ContactFormCheckbox name="terms">
      I agree to the terms and conditions.
    </ContactFormCheckbox>

    <Button
      :disabled="!isFormValid || isSubmitting"
      class="ml-auto h-[4.5rem] w-full bg-primary-500 px-8 py-6 text-white hover:bg-primary-500 lg:w-fit"
    >
      Submit message
    </Button>
  </form>
</template>

<script setup lang="ts">
import { useForm, useIsFormValid } from 'vee-validate'

import { Button } from '@ui/button'

import ContactFormCheckbox from './ContactFormCheckbox.vue'
import ContactFormInput from './ContactFormInput.vue'
import ContactFormTextarea from './ContactFormTextarea.vue'

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: {
    name: 'required',
    email: 'required|email',
    message: 'required',
    terms: 'checkbox'
  },
  initialValues: {
    name: '',
    email: '',
    message: '',
    terms: false
  }
})

const isFormValid = useIsFormValid()

const handleFormSubmit = handleSubmit(async (values) => {
  await $fetch('/api/mailer', { method: 'POST', body: JSON.stringify(values) })
})
</script>

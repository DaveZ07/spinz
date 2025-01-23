import { email, required } from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  defineRule('required', (value: unknown): boolean | string => {
    return required(value) ? true : 'Field cannot be empty.'
  })

  defineRule('checkbox', (value: unknown): boolean | string => {
    return required(value) ? true : 'Field must be checked.'
  })

  defineRule('email', (value: unknown): boolean | string => {
    return email(value) ? true : 'Invalid email address.'
  })
})

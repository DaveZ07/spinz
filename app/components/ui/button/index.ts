import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva('inline-flex items-center justify-center gap-x-6 whitespace-nowrap rounded-full text-xl font-medium ring-offset-background-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
  variants: {
    variant: {
      default: 'bg-white text-black hover:bg-white/80 focus-visible:ring-primary-600',
      outline: ''
    },
    size: {
      default: 'h-14 px-6 py-2',
      icon: 'aspect-square size-14'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

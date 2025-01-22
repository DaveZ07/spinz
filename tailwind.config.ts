import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import threed from 'tailwindcss-3d'
import animate from 'tailwindcss-animate'

export default {
  content: ['./app/**/*.{vue,ts}'],
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  theme: {
    fontFamily: { sans: ['Inter'] },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(var(--white))',
      black: 'hsl(var(--black))',
      primary: {
        50: 'hsl(var(--primary-50))',
        100: 'hsl(var(--primary-100))',
        200: 'hsl(var(--primary-200))',
        300: 'hsl(var(--primary-300))',
        400: 'hsl(var(--primary-400))',
        500: 'hsl(var(--primary-500))',
        600: 'hsl(var(--primary-600))',
        700: 'hsl(var(--primary-700))',
        800: 'hsl(var(--primary-800))',
        900: 'hsl(var(--primary-900))',
        950: 'hsl(var(--primary-950))'
      },
      background: {
        800: 'hsl(var(--background-800))',
        900: 'hsl(var(--background-900))',
        950: 'hsl(var(--background-950))',
        1000: 'hsl(var(--background-1000))'
      },
      grayscale: {
        50: 'hsl(var(--grayscale-50))',
        100: 'hsl(var(--grayscale-100))',
        200: 'hsl(var(--grayscale-200))',
        300: 'hsl(var(--grayscale-300))',
        400: 'hsl(var(--grayscale-400))',
        500: 'hsl(var(--grayscale-500))',
        600: 'hsl(var(--grayscale-600))',
        700: 'hsl(var(--grayscale-700))',
        800: 'hsl(var(--grayscale-800))',
        900: 'hsl(var(--grayscale-900))',
        950: 'hsl(var(--grayscale-950))'
      }
    },
    extend: {
      maxWidth: {
        content: '82.5rem' /* 1320px */
      },
      spacing: {
        header: '5.5rem', /* 80px */
        'content-spacing': '0.75rem', /* 12px */
        content: 'calc(100svh - 5.5rem)',

        lh: '1lh'
      },
      screens: {
        '3xl': '1728px'
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        inherit: 'inherit'
      }
    }
  },
  plugins: [animate, threed, scrollbar, plugin(({ addUtilities, addVariant, matchUtilities, theme }) => {
    addVariant('link-active', '&.router-link-active')
    addVariant('link-exact-active', '&.router-link-exact-active')

    addUtilities({
      '.content-grid': {},
      '.col-content': {
        'grid-column': 'content'
      },
      '.col-full-width': {
        'grid-column': 'full-width'
      },

      '.content-stack': {
        'grid-template-areas': '"stack"'
      },
      '.cell-stack': {
        'grid-area': 'stack'
      }
    })

    matchUtilities({ 'text-shadow': (value) => ({
      textShadow: value
    }) }, { values: theme('textShadow') })
  })]
} satisfies Config

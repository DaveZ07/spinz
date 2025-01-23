<template>
  <section class="relative overflow-hidden content-grid">
    <div class="mb-16 mt-24 grid place-content-end justify-center text-center col-content lg:mb-8 lg:mt-64">
      <template v-if="$slots.title">
        <div class="text-3xl font-medium lg:text-7xl">
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </div>
      </template>

      <template v-if="$slots.description">
        <div class="mt-6 text-base text-primary-100 lg:text-xl">
          <slot
            name="description"
            mdc-unwrap="p"
          />
        </div>
      </template>

      <template v-if="$slots.cta">
        <Button
          class="mt-16 h-[4.5rem] justify-normal p-2 text-xl font-medium lg:mt-24 lg:justify-self-center"
          as-child
        >
          <NuxtLink to="/contact">
            <div class="w-full pl-5 text-center">
              <slot
                name="cta"
                mdc-unwrap="p"
              />
            </div>

            <div class="size-14 shrink-0 rounded-full bg-primary-500 p-3 text-white">
              <Icon
                name="material-symbols-light:arrow-forward"
                class="size-full"
              />
            </div>
          </NuxtLink>
        </Button>
      </template>

      <div class="mx-auto mt-8 hidden items-center gap-x-4 lg:flex">
        <p class="text-lg">
          Learn More About Us
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 32"
          fill="none"
          class="h-8 w-6"
        >
          <rect
            stroke="currentColor"
            x="1.1"
            y=".6"
            width="19.8"
            height="30.8"
            rx="9.9"
            stroke-width="1.2"
          />
          <rect
            fill="currentColor"
            x="9.5"
            y="6"
            width="3"
            height="8"
            rx="1.5"
          />
        </svg>
      </div>
    </div>

    <div class="pointer-events-none absolute inset-0 -z-10 flex gap-x-4 opacity-80 lg:gap-x-6">
      <template
        v-for="i in 32"
        :key="i"
      >
        <div
          class="sfc-gradient relative h-full w-20 shrink-0 overflow-hidden lg:w-32"
          :style="{ '--index': i }"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@ui/button'
</script>

<style scoped lang="postcss">
@keyframes wave {
  50% {
    transform: scaleY(0.7);
    opacity: 0.5;
  }
}

.sfc-gradient::before {
  @apply absolute content-[''] h-[200%] aspect-square left-1/2 -translate-x-1/2;
  background-image: radial-gradient(50% 50% at 50% 50%, theme('colors.primary.600') 0%, transparent 100%);
  animation: wave 2s infinite theme('animationTimingFunction.in-out') calc(var(--index) * 0.1s);
}
</style>

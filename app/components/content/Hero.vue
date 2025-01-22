<template>
  <section class="relative overflow-hidden text-center content-grid">
    <div class="mb-8 mt-64 grid place-content-end col-content">
      <div class="text-[5rem] font-medium">
        <slot
          name="title"
          mdc-unwrap="p"
        />
      </div>

      <div class="mt-6 text-xl text-primary-100">
        <slot
          name="description"
          mdc-unwrap="p"
        />
      </div>

      <button class="mt-24 flex items-center gap-x-6 justify-self-center rounded-full bg-white p-2">
        <div class="pl-5 text-xl font-medium text-black">
          <slot
            name="cta"
            mdc-unwrap="p"
          />
        </div>

        <div class="size-14 rounded-full bg-primary-500 p-3">
          <Icon
            name="material-symbols-light:arrow-forward"
            class="size-full"
          />
        </div>
      </button>

      <div class="mx-auto mt-8 flex items-center gap-x-4">
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

    <div class="pointer-events-none absolute inset-0 -z-10 flex gap-x-6 opacity-80">
      <template
        v-for="i in 32"
        :key="i"
      >
        <div
          class="sfc-gradient relative h-full w-32 shrink-0 overflow-hidden"
          :style="{ '--index': i }"
        />
      </template>
    </div>
  </section>
</template>

<style scoped lang="postcss">
@keyframes wave {
  50% {
    transform: scaleY(0.7);
  }
}

.sfc-gradient::before {
  @apply absolute content-[''] h-[200%] aspect-square left-1/2 -translate-x-1/2;
  background-image: radial-gradient(50% 50% at 50% 50%, theme('colors.primary.600') 0%, transparent 100%);
  animation: wave 2s infinite theme('animationTimingFunction.in-out') calc(var(--index) * 0.1s);
}
</style>

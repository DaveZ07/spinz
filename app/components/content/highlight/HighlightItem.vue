<template>
  <div class="border-t border-primary-300/15 py-6">
    <div class="size-12 rounded-lg bg-primary-500/10 p-2 text-primary-300">
      <Icon
        name="material-symbols-light:check"
        class="size-full"
      />
    </div>

    <div class="mt-6">
      <template v-if="$slots.title">
        <div class="text-lg font-medium lg:text-2xl">
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </div>
      </template>

      <template v-if="$slots.description">
        <div class="mt-3 text-sm text-grayscale-300/80 lg:text-lg">
          <slot name="description" />
        </div>
      </template>
    </div>
  </div>
</template>

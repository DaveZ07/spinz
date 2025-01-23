<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Footer } from '@layout/footer'
import { Header } from '@layout/header'
</script>

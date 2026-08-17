<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="mx-auto max-w-2xl text-center">
    <p
      v-if="eyebrow"
      class="mb-5 flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-accent"
    >
      <span class="h-px w-6 bg-accent/60" />
      {{ eyebrow }}
      <span class="h-px w-6 bg-accent/60" />
    </p>

    <h2
      class="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { theme, themes, setTheme } = useTheme();
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="t in themes"
      :key="t.id"
      type="button"
      @click="setTheme(t.id)"
      :class="[
        'inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors',
        theme === t.id
          ? 'border-accent text-fg'
          : 'border-border-strong text-muted hover:text-fg hover:border-border-stronger',
      ]"
    >
      <span class="size-3 rounded-full" :style="{ background: t.swatch }" />
      {{ t.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme();
useHead({ htmlAttrs: { "data-theme": theme } });
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>

    <ClientOnly>
      <div class="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
        <div
          class="rounded-xl border border-border bg-surface/90 px-3 py-2 shadow-lg backdrop-blur"
        >
          <ThemeSwitcher />
        </div>
      </div>
    </ClientOnly>
    <AppFooter />
  </div>
</template>

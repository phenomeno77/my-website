<script setup lang="ts">
const open = ref(false);

const links = navLinks;

const phone = "+49123456789";
const phoneLabel = "01234 / 56 78 90";

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);

// Lock body scroll while the mobile menu is open
watch(open, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
});

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = "";
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-bg/80 backdrop-blur-md">
    <div class="container-page flex items-center justify-between gap-4 py-3.5">
      <!-- Brand -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5 text-fg"
        aria-label="My App – zur Startseite"
      >
        <span class="flex flex-col leading-none">
          <span class="font-display text-xl font-semibold tracking-tight">
            My App
          </span>
          <span class="eyebrow-tag mt-0.5 text-muted"></span>
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative rounded-full px-3.5 py-2 text-[0.95rem] text-muted transition-colors hover:text-fg"
          active-class="!text-fg font-semibold after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop CTA -->
      <a
        :href="`tel:${phone}`"
        class="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-accent-hover lg:inline-flex"
      >
        <FontAwesomeIcon :icon="['fas', 'phone']" />
        {{ phoneLabel }}
      </a>

      <!-- Mobile actions -->
      <div class="flex items-center gap-2 lg:hidden">
        <a
          :href="`tel:${phone}`"
          class="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white"
          aria-label="Anrufen"
        >
          <FontAwesomeIcon :icon="['fas', 'phone']" />
        </a>

        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-fg"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? 'Menü schließen' : 'Menü öffnen'"
          @click="open = !open"
        >
          <FontAwesomeIcon v-if="!open" :icon="['fas', 'bars']" />
          <FontAwesomeIcon v-else :icon="['fas', 'xmark']" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <nav
        v-if="open"
        id="mobile-menu"
        class="border-t border-border bg-bg px-5 pb-6 pt-4 lg:hidden"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-muted transition-colors hover:bg-surface hover:text-fg"
          active-class="bg-surface !text-fg font-semibold"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>

    <UiDivider />
  </header>
</template>

<script setup lang="ts">
const explore = navLinks;
const year = new Date().getFullYear();

const legal = [
  { label: "Impressum", to: "/impressum" },
  { label: "AGB", to: "/agb" },
  { label: "Datenschutz", to: "/datenschutz" },
];
</script>

<template>
  <footer class="bg-bg text-muted">
    <UiDivider />
    <div
      class="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
    >
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2.5 text-fg">
          <span class="flex flex-col leading-none">
            <span class="font-display text-xl font-semibold tracking-tight">
              My App
            </span>
          </span>
        </div>
        <div class="mt-6 flex items-center gap-3">
          <SocialMedia />
        </div>
      </div>

      <!-- Explore -->
      <nav aria-labelledby="footer-explore">
        <p id="footer-explore" class="eyebrow-tag text-accent">Entdecken</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="item in explore" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Legal -->
      <nav aria-labelledby="footer-legal">
        <p id="footer-legal" class="eyebrow-tag text-accent">Rechtliches</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="item in legal" :key="item.to">
            <NuxtLink :to="item.to" class="transition-colors hover:text-fg">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Kontakt -->
      <div>
        <p class="eyebrow-tag text-accent">Kontakt</p>

        <address class="mt-4 space-y-1 text-sm not-italic">
          <p>Musterstraße 12</p>
          <p>12345 Musterstadt</p>
        </address>

        <a
          href="tel:+49123456789"
          class="mt-4 inline-flex items-center gap-2.5 text-sm font-semibold text-fg transition-colors hover:text-accent"
        >
          <FontAwesomeIcon :icon="['fas', 'phone']" class="text-accent" />
          01234 / 56 78 90
        </a>
      </div>
    </div>

    <div class="border-t border-border">
      <div
        class="container-page flex flex-col items-center gap-2 py-6 text-center text-xs uppercase tracking-wider text-muted sm:flex-row sm:justify-between sm:text-left"
      >
        <p>© {{ year }} My App · Musterstadt</p>
      </div>
    </div>
  </footer>
</template>

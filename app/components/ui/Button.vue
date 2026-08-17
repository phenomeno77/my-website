<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "text";
    to?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  { variant: "primary", type: "button", disabled: false },
);

const tag = computed(() =>
  props.to ? resolveComponent("NuxtLink") : "button",
);

const base =
  "inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary:
    "rounded-lg px-5 py-2.5 bg-accent text-white hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  secondary:
    "rounded-lg px-5 py-2.5 border border-border-strong bg-transparent text-fg hover:bg-surface hover:border-border-stronger focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  text: "rounded px-0 py-1 text-accent hover:text-accent-hover hover:underline underline-offset-4 decoration-1 focus-visible:ring-2 focus-visible:ring-accent/40",
};
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :type="to ? undefined : type"
    :disabled="!to && disabled ? true : undefined"
    :class="[base, variants[variant]]"
  >
    <slot />
  </component>
</template>

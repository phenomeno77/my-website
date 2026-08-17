<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    ratio?: string;
    tone?: "moss" | "sand" | "clay";
  }>(),
  {
    ratio: "aspect-[4/3]",
    tone: "moss",
  },
);

const toneClasses: Record<string, string> = {
  moss: "bg-moss-700 text-sand-100",
  sand: "bg-sand-200 text-moss-800",
  clay: "bg-clay-500 text-sand-50",
};
</script>

<template>
  <div
    :class="[ratio, toneClasses[tone]]"
    class="flex w-full items-center justify-center overflow-hidden rounded-2xl"
    role="img"
    :aria-label="label"
  >
    <div class="flex flex-col items-center gap-2 px-4 text-center opacity-80">
      <span class="font-tag text-[0.68rem] uppercase tracking-wider">{{
        label
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) =>
    title ? `${title} — Meine Seite` : "Meine Seite – irgendwo in Musterstadt",
  description: "Beschreibung kommt hier...",
  ogImage: "/icon-512.png",
  ogImageAlt: "Meine Seite – irgendwo in Musterstadt",
  twitterCard: "summary", // "summary" suits a square image; "summary_large_image" for the 1200×630
  twitterTitle: "Meine Seite – irgendwo in Musterstadt",
  twitterDescription: "Beschreibung kommt hier...",
  twitterImage: "/icon-512.png",
});

useHead({
  htmlAttrs: { lang: "de" },
});
</script>

<template>
  <section>
    <div class="container-custom">
      <UiSectionTitle
        eyebrow="Eyebrow"
        title="Add title here"
        description="Here goes the description..."
        class="mb-20"
      />

      <div class="flex gap-5 pt-5">
        <UiButton>Get in touch</UiButton>
        <UiButton variant="secondary">View work</UiButton>

        <!-- as links -->
        <UiButton to="/contact">Get in touch</UiButton>
        <UiButton variant="secondary" to="/projects">View work</UiButton>
        <!-- text variant — no box, just clickable text -->
        <UiButton variant="text" to="/about">Learn more</UiButton>

        <UiButton variant="text" to="/projects"> View all projects </UiButton>
      </div>
    </div>
  </section>

  <section class="bg-bg-alt">
    <div class="container-custom">
      <UiSectionTitle
        eyebrow="Eyebrow"
        title="Add title here"
        description="Here goes the description..."
        class="mb-20"
      />

      <div class="flex gap-5 pt-5">
        <UiButton>Get in touch</UiButton>
        <UiButton variant="secondary">View work</UiButton>

        <!-- as links -->
        <UiButton to="/contact">Get in touch</UiButton>
        <UiButton variant="secondary" to="/projects">View work</UiButton>
        <!-- text variant — no box, just clickable text -->
        <UiButton variant="text" to="/about">Learn more</UiButton>

        <UiButton variant="text" to="/projects"> View all projects </UiButton>
      </div>
    </div>
  </section>
</template>

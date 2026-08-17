<script setup lang="ts">
import { siFacebook } from "simple-icons";
</script>

<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path :d="siFacebook.path" :fill="`#${siFacebook.hex}`" />
  </svg>
</template>

<template>
  <a :href="props.href" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 text-white
  hover:bg-red-500 hover:text-white transition-colors">
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>

<template>
  <NavBar/>
  <main class="min-h-[100vh]">
    <router-view />
  </main>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>

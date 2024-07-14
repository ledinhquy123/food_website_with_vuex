<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold">Random Meals</h1>
  </div>
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue'

const meals = computed(() => store.state.mealsRandom)

// Will be conduct after components attach DOM
onMounted(() => {
  for(let i = 0; i < 12; i++) {
    store.dispatch('mealsRandom')
  }
})

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal"/>
  </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => []
  }
})
</script>

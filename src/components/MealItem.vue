<template>
  <div class="bg-white shadow rounded-2xl hover:scale-105 transition-all">
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ meal.strInstructions }}</p>
      <div class="flex justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';
const { meal } = defineProps({
  meal: {
    require: true,
    type: Object
  }
})
</script>

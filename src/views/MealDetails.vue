<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full">

    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Catetory</strong>: {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area</strong>: {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags</strong>: {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="mt-4">
      <YoutubeButton :href="meal.strYoutube">Go to youtube</YoutubeButton>
      <a :href="meal.strSource" target="_blank" class="ml-3 px-3 py-2 rounded text-indigo-700 border-2 border-transparent
    hover:bg-indigo-600 hover:text-white transition-colors">
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const meal = ref({})
const route = useRoute()

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
  .then(({data}) => {
    meal.value = data.meals[0] || {}
  })
})

</script>

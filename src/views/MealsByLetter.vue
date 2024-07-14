<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold">Random By Letter</h1>
  </div>

  <div>
    <div class="flex justify-center gap-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="(letter, index) of letters" :key="index">
        {{ letter }}
      </router-link>
    </div>

    <div v-if="!meals.length" class="flex justify-center my-3">
      <p class="text-xl text-gray-500 font-bold">Not found</p>
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute()

function mealsByLetter(letter) {
  store.dispatch('searchMealsByLetter', letter)
}

watch(route, (newRoute) => {
  if(newRoute.params.letter) {
    mealsByLetter(newRoute.params.letter)
  }else {
    store.commit('setSearchedMealsByLetter', [])
  }
})

</script>

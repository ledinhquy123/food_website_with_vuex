<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold">Meals By Name</h1>
  </div>

  <div class="p-8 pb-0">
    <input v-model="keyword" type="text" class="p-2 rounded border-2 border-gray-200 w-full focus:ring-orange-500 focus:border-orange-500" placeholder="Search for meals" />
  </div>

  <div v-if="!meals.length" class="flex justify-center my-3">
    <p class="text-xl text-gray-500 font-bold">Not found</p>
  </div>
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import store from '../store/index.js';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()

function searchMeals() {
  if(keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  }else {
    store.commit('setSearchedMeals', [])
  }
}

watch(keyword, (newKeyword) => {
  if(newKeyword != '') {
    searchMeals()
  }else {
    store.commit('setSearchedMeals', [])
  }
})

onMounted(() => {
  keyword.value = route.params.name // Get name's params of list param
  if(keyword.value) {
    searchMeals()
  }
})

</script>

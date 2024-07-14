<template>
<Meals :meals="meals"/>
<!-- <pre>{{ meals }}</pre> -->
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'

const meals = computed(() => store.state.mealsByIngredient)
const route = useRoute()
onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>

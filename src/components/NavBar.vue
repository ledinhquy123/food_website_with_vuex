<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="h-full inline-flex items-center px-5">
      Home
    </router-link>

    <div class="flex gap-1">
      <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 transition-colors hover:bg-purple-200 h-full">
        Search Meals
      </router-link>
      <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 transition-colors hover:bg-purple-200 h-full">
        Meals By Letter
      </router-link>
      <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 transition-colors hover:bg-purple-200 h-full">
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

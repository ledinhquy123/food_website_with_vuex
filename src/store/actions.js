import axiosClient from '../axiosClient';

export function searchMeals({commit}, keyword) { // commit is destructuring to get commit of context in VueX
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({data}) => {
    // debugger
    commit('setSearchedMeals', data.meals)
  })
}

export function searchMealsByLetter({commit}, letter) { // commit is destructuring to get commit of context in VueX
  axiosClient.get(`search.php?f=${letter}`)
  .then(({data}) => {
    commit('setSearchedMealsByLetter', data.meals)
  })
}

export function searchMealsByIngredient({commit}, ingredient) { // commit is destructuring to get commit of context in VueX
  axiosClient.get(`filter.php?i=${ingredient}`)
  .then(({data}) => {
    // debugger
    commit('setSearchedMealsByIngredient', data.meals)
  })
}

export function mealsRandom({commit}) { // commit is destructuring to get commit of context in VueX
  axiosClient.get('random.php')
  .then(({data}) => {
    // debugger
    commit('setMealsRandom', data.meals[0])
  })
}

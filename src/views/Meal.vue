<template>
  <p>Single meal</p>
  <div v-for="mySingleMeal in MealDisplay" :key="mySingleMeal.id">
    <div>
      <img v-bind:src="mySingleMeal.strMealThumb" alt="">
    </div>
    <h2>Recette : {{ mySingleMeal.strMeal }}</h2>
    <h3>Catégorie : {{ mySingleMeal.strCategory }}</h3>
    <h3>Zone géographique : {{ mySingleMeal.strArea }}</h3>
    <h2>Ingrédients :</h2>
    <ul>
      <li><strong>{{ mySingleMeal.strIngredient1 }}</strong> : {{ mySingleMeal.strMeasure1 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient2 }}</strong> : {{ mySingleMeal.strMeasure2 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient3 }}</strong> : {{ mySingleMeal.strMeasure3 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient4 }}</strong> : {{ mySingleMeal.strMeasure4 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient5 }}</strong> : {{ mySingleMeal.strMeasure5 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient6 }}</strong> : {{ mySingleMeal.strMeasure6 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient7 }}</strong> : {{ mySingleMeal.strMeasure7 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient8 }}</strong> : {{ mySingleMeal.strMeasure8 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient9 }}</strong> : {{ mySingleMeal.strMeasure9 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient10 }}</strong> : {{ mySingleMeal.strMeasure10 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient11 }}</strong> : {{ mySingleMeal.strMeasure11 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient12 }}</strong> : {{ mySingleMeal.strMeasure12 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient13 }}</strong> : {{ mySingleMeal.strMeasure13 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient14 }}</strong> : {{ mySingleMeal.strMeasure14 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient15 }}</strong> : {{ mySingleMeal.strMeasure15 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient16 }}</strong> : {{ mySingleMeal.strMeasure16 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient17 }}</strong> : {{ mySingleMeal.strMeasure17 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient18 }}</strong> : {{ mySingleMeal.strMeasure18 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient19 }}</strong> : {{ mySingleMeal.strMeasure19 }}</li>
      <li><strong>{{ mySingleMeal.strIngredient20 }}</strong> : {{ mySingleMeal.strMeasure20 }}</li>
    </ul>
    <h2>Instructions :</h2>
    <p> {{ mySingleMeal.strInstructions}}</p>
    <h2>Voir d'autres recettes avec les ingrédients :</h2>
    <div>
      <router-link :to="{ name: 'Ingredients', params: {slugIngredient1: mySingleMeal.strIngredient1,}}"><strong>{{ mySingleMeal.strIngredient1 }}</strong></router-link>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Meal',
  components: {
    Footer
  },
  props: {
    slugSingle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      MealDisplay: []
    }
  },
  mounted () {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.slugSingle}`)
      .then(function (response) {
        return response.json()
      })
      .then(newResult => {
        console.log('newResult.meals :', newResult)
        this.MealDisplay = newResult.meals
        console.log('this.MealDisplay :', this.MealDisplay[0].strMealThumb)
        console.log('this.MealDisplay :', this.MealDisplay[0].strMeal)
        console.log('this.MealDisplay :', this.MealDisplay[0].strCategory)
        console.log('this.MealDisplay :', this.MealDisplay[0].strArea)
        console.log('this.MealDisplay :', this.MealDisplay[0].strIngredient1)
        // return this.MealDisplay
      })
      .catch(function (err) {
        console.warn(err)
      })
  }
}
</script>

<style>

</style>

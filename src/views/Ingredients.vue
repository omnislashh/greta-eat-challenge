<template>
  <h3>Découvrez tous nos plats incluant l'ingrédient</h3>
  {{this.slugIngredient1}}
  <p>{{this.IngredientsDisplay}}</p>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Ingredients',
  components: {
    Footer
  },
  props: {
    slugIngredient1: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      IngredientsDisplay: []
    }
  },
  mounted () {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.slugIngredient1}`)
      .then(function (response) {
        return response.json()
      })
      .then(newResult => {
        console.log('newResult :', newResult.meals)
        this.IngredientsDisplay = newResult.meals
        console.log('this.IngredientsDisplay :', this.IngredientsDisplay[0].strMealThumb)
        return this.IngredientsDisplay
      })
      .catch(function (err) {
        console.warn(err)
      })
  }
}
</script>

<style>

</style>

<template>
  <h3>Découvrez tous nos plats incluant l'ingrédient</h3>
  {{this.slugIngredient1}}
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
    fetch(`www.themealdb.com/api/json/v1/1/list.php?i=${this.slugIngredient1}`)
      .then(function (response) {
        return response.json()
      })
      .then(newResult => {
        console.log('newResult :', newResult)
        // this.IngredientsDisplay = newResult.meals
        // console.log('this.IngredientsDisplay :', this.MealDisplay[0].strMealThumb)
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

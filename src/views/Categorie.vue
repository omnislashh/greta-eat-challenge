<template>
  <h2>{{ slug }}</h2>
  <div>
    <div>
      <div v-for="mySingleObject in categoriesSingleDisplay" :key="mySingleObject.id">
        <router-link :to="{ name: 'Meal', params: {
          slugSingle: mySingleObject.idMeal,
          }
        }"><strong>{{ mySingleObject.strMeal }}</strong>
        <div class="img-container">
          <img v-bind:src="mySingleObject.strMealThumb" alt="">
        </div></router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Categorie',
  components: {
    Footer
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      categoriesSingleDisplay: []
    }
  },
  mounted () {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.slug}`)
      .then(function (response) {
        return response.json()
      })
      .then(newResult => {
        console.log('response :', newResult.meals)
        this.categoriesSingleDisplay = newResult.meals
        console.log('response :', this.categoriesSingleDisplay)
        return this.categoriesSingleDisplay
      })
      .catch(function (err) {
        console.warn(err)
      })
  }
}
</script>

<style>

</style>

<template>
  <h2>{{ slugArea }}</h2>
  <div>
    <div>
      <div v-for="mySingleObject in zoneSingleDisplay" :key="mySingleObject.id">
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
    slugArea: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      zoneSingleDisplay: []
    }
  },
  mounted () {
    console.log('this.slugArea', this.slugArea)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.slugArea}`)
      .then(function (response) {
        return response.json()
      })
      .then(areaResult => {
        console.log('response Zone:', areaResult.meals)
        this.zoneSingleDisplay = areaResult.meals
        console.log('response this.zoneSingleDisplay:', this.zoneSingleDisplay)
        return this.zoneSingleDisplay
      })
      .catch(function (err) {
        console.warn(err)
      })
  }
}
</script>

<style>

</style>

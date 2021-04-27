<template>
<div>
  <h2>This is a search page</h2>
</div>
<div>
  <label for="name">Search:</label>
  <input type="text" id="name" name="name" size="50" v-model="mySearch">
  <button @click="recherche">Rechercher</button>
  <button @click="getLucky">J'ai de la chance</button>
</div>
<div v-for="mySearchedObject in searched" :key="mySearchedObject.id">
  <router-link :to="{ name: 'Meal', params: {
    slugSingle: mySearchedObject.idMeal,
    }
  }"><strong>{{ mySearchedObject.strMeal }}</strong>
  <div class="img-container">
    <img v-bind:src="mySearchedObject.strMealThumb" alt="">
  </div>
  </router-link>
</div>
<Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Rechercher',
  components: {
    Footer
  },
  data () {
    return {
      searched: [],
      mySearch: ''
    }
  },
  methods: {
    recherche () {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.mySearch}`)
        .then(function (response) {
          return response.json()
        })
        .then(newResult => {
          console.log('response :', newResult.meals)
          this.searched = newResult.meals
          console.log('response :', this.searched)
          return this.searched
        })
        .catch(function (err) {
          console.warn(err)
        })
    },
    getLucky () {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(function (response) {
          return response.json()
        })
        .then(randomResult => {
          console.log('response random:', randomResult.meals)
          this.searched = randomResult.meals
          console.log('response this.searched:', this.searched)
          return this.searched
        })
        .catch(function (err) {
          console.warn(err)
        })
    }
  }
}
</script>

<style>

</style>

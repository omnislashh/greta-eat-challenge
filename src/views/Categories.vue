<template>
  <div>
    <p>Sélectionnez la catégorie de votre choix</p>
  </div>
  <div>
    <div>
      <div v-for="myObject in categoriesDisplay" :key="myObject.id">
        <router-link :to="{ name: 'Categorie', params: {
          slug: myObject.strCategory
          }
        }"><strong>{{ myObject.strCategory }}</strong>
        <div class="img-container">
          <img v-bind:src="myObject.strCategoryThumb" alt="">
        </div></router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Categories',
  components: {
    Footer
  },
  data () {
    return {
      categoriesDisplay: []
    }
  },
  mounted () {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(function (response) {
        return response.json()
      })
      .then(newResult => {
        console.log('response :', newResult.categories)
        this.categoriesDisplay = newResult.categories
        console.log('response :', this.categoriesDisplay)
        return this.categoriesDisplay
      })
      .catch(function (err) {
        console.warn(err)
      })
  }
}
</script>

<style>

</style>

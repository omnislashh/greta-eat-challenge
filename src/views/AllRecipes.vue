<template>
  <div>
    <h2>Recherche par ordre alphabétique</h2>
    <button @click="displayLettre('A')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>A</strong></button> /
    <button @click="displayLettre('B')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>B</strong></button> /
    <button @click="displayLettre('C')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>C</strong></button> /
    <button @click="displayLettre('D')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>D</strong></button> /
    <button @click="displayLettre('E')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>E</strong></button> /
    <button @click="displayLettre('F')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>F</strong></button> /
    <button @click="displayLettre('G')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>G</strong></button> /
    <button @click="displayLettre('H')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>H</strong></button> /
    <button @click="displayLettre('I')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>I</strong></button> /
    <button @click="displayLettre('J')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>J</strong></button> /
    <button @click="displayLettre('K')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>K</strong></button> /
    <button @click="displayLettre('L')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>L</strong></button> /
    <button @click="displayLettre('M')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>M</strong></button> /
    <button @click="displayLettre('N')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>N</strong></button> /
    <button @click="displayLettre('O')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>O</strong></button> /
    <button @click="displayLettre('P')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>P</strong></button> /
    <button @click="displayLettre('Q')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>Q</strong></button> /
    <button @click="displayLettre('R')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>R</strong></button> /
    <button @click="displayLettre('S')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>S</strong></button> /
    <button @click="displayLettre('T')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>T</strong></button> /
    <button @click="displayLettre('U')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>U</strong></button> /
    <button @click="displayLettre('V')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>V</strong></button> /
    <button @click="displayLettre('W')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>W</strong></button> /
    <button @click="displayLettre('X')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>X</strong></button> /
    <button @click="displayLettre('Y')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>Y</strong></button> /
    <button @click="displayLettre('Z')" :to="{ name: 'Lettre', params: {slugLettre: lettreActive}}"><strong>Z</strong></button> /
    <p>{{this.lettreActive}}</p>
    <Lettre v-if="showingLettre == true"/>
    <div>
      <div v-for="mySingleObject in renderingLetterDisplay" :key="mySingleObject.id">
        <router-link :to="{ name: 'Meal', params: {
          slugSingle: mySingleObject.idMeal,
          }
        }"><strong>{{ mySingleObject.strMeal }}</strong>
        <div class="img-container">
          <img v-bind:src="mySingleObject.strMealThumb" alt="">
        </div></router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Lettre from '../components/Lettre.vue'
export default {
  name: 'AllRecipes',
  components: {
    Lettre,
    Footer
  },
  data () {
    return {
      lettreActive: '',
      showingLettre: false,
      renderingLetterDisplay: []
    }
  },
  computed: {
  },
  methods: {
    displayLettre (letter) {
      console.log(this.lettreActive)
      this.showingLettre = false
      this.showingLettre = true
      this.lettreActive = letter
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.lettreActive}`)
        .then(function (response) {
          return response.json()
        })
        .then(newResult => {
          console.log('response :', newResult.meals)
          this.renderingLetterDisplay = newResult.meals
          console.log('response :', this.renderingLetterDisplay)
          return this.renderingLetterDisplay
        })
        .catch(function (err) {
          console.warn(err)
        })
      return this.lettreActive
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>

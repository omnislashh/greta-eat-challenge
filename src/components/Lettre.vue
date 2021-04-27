<template>
  <h3>Recettes commençants avec cette lettre : {{ slugLettre }}</h3>
  <!-- <p>{{this.LettreDisplay}}</p> -->
</template>

<script>
export default {
  name: 'Lettre',
  props: {
    slugLettre: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      LettreDisplay: []
    }
  }
  // mounted () {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.slugLettre}`)
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(newResult => {
  //       console.log('response :', newResult)
  //       this.LettreDisplay = newResult
  //       console.log('response :', this.LettreDisplay)
  //       return this.LettreDisplay
  //     })
  //     .catch(function (err) {
  //       console.warn(err)
  //     })
  // }
}
</script>

<style>

</style>

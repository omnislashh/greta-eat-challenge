<template>
  <div>
    <p>Sélectionnez la zone de votre choix</p>
  </div>
  <div>
    <div>
      <div v-for="myObject in zonesDisplay" :key="myObject.id">
        <router-link :to="{ name: 'Zone', params: {
          slugArea: myObject
          }
        }"><button><strong>{{ myObject }}</strong></button>
        </router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Zones',
  components: {
    Footer
  },
  data () {
    return {
      zonesDisplay: ['American', 'British', 'Canadian', 'Chinese', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Unknown', 'Vietnamese']
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.402829b9.png">
    <HelloWorld msg="Bienvenue sur GretaEat"/>
    <HomeCategorie />
    <HomeArea />
    <HomeAz />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '../components/Footer.vue'
import HomeCategorie from '../components/HomeCategorie.vue'
import HomeArea from '../components/HomeArea.vue'
import HomeAz from '../components/HomeAz.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Footer,
    HomeCategorie,
    HomeArea,
    HomeAz
  }
}
</script>

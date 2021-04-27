<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Retrouvez les recettes du monde entier, facilement et simplement grâce à Vue.js 3 et
      <a href="https://www.themealdb.com/" target="_blank" rel="noopener">TheMealDB</a> !
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

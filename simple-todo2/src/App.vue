<template>
  <div id="app">
    <simpletodo></simpletodo>
  </div>
</template>

<script>
import simpletodo from '../components/simple-todo.vue'

export default {
  name: 'app',

  components: {
    simpletodo
  },

  data() {
    return {
      msg: '',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}

h1 {
  margin-top: 30px;
  font-weight: normal;
}

h1>a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

li>div {
  margin-top: 10px;
}
li{
  margin-top: 12px;
}
</style>

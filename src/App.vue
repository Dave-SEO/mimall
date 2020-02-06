<template>
  <div id="app">
    <proxy></proxy>
    <author></author>
  </div>
</template>

<script>
import proxy from './components/proxy.vue'
import author from './components/gen.vue'

export default {
  name: 'app',
  components: {
    proxy,
    author
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
</style>

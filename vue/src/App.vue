<template>
  <div id="app">
    <CustomerPage />
  </div>
</template>

<script>
import CustomerPage from './components/CustomerPage.vue'

export default {
  name: 'app',
  components: {
    CustomerPage
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

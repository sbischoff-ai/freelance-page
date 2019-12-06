<template>
  <div id="app">
    <TheNavbar/>
    <ServiceCatalog v-bind:services="services"/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import ServiceCatalog from './components/ServiceCatalog'

const services = require('./data/services')

export default {
  name: 'app',
  components: {
    TheNavbar,
    ServiceCatalog
  },
  data() {
    return {
      services
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
}

body {
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <fx-button type="primary">123</fx-button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FxButton from "../packages/fxButton";

export default {
  name: 'App',
  components: {
    FxButton,
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

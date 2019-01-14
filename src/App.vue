<template>
  <div id="app">
    <hero/>
  </div>
</template>
<script>
import hero from "./components/Hero.vue";

export default {
  name: "app",
  components: {
    hero
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

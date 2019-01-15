<template>
  <div id="app">
    <AuthTokenInput/>
  </div>
</template>
<script>
import AuthTokenInput from "./components/AuthTokenInput.vue";

export default {
  name: "app",
  components: {
    AuthTokenInput
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

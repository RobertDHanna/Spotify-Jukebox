<template>
  <div id="app">
    <AuthTokenInput/>
    <SpotifyPlayer/>
  </div>
</template>
<script>
import AuthTokenInput from "./components/AuthTokenInput.vue";
import SpotifyPlayer from "./components/SpotifyPlayer.vue";

export default {
  name: "app",
  components: {
    AuthTokenInput,
    SpotifyPlayer
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

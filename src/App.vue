<template>
  <div id="app">
    <AuthTokenInput/>
    <div class="columns">
      <div class="column is-one-third">
        <SpotifyPlayer/>
      </div>
      <div class="column is-one-third">
        <TrackQueue/>
      </div>
      <div class="column is-one-third">
        <TrackSearch/>
      </div>
    </div>
  </div>
</template>
<script>
import AuthTokenInput from "./components/AuthTokenInput.vue";
import SpotifyPlayer from "./components/SpotifyPlayer.vue";
import TrackQueue from "./components/TrackQueue.vue";
import TrackSearch from "./components/TrackSearch.vue";

export default {
  name: "app",
  components: {
    AuthTokenInput,
    SpotifyPlayer,
    TrackQueue,
    TrackSearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: hsl(171, 100%, 41%);
  min-height: 100vh;
}
</style>

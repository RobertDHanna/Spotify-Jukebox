<template>
  <div class="AuthTokenInput--container">
    <input
      class="input is-primary"
      type="text"
      placeholder="Put your auth token here :)"
      @input="handleSpotifyAuthTokenChange"
      v-model="userProvidedSpotifyAuthToken"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_SPOTIFY_AUTH_TOKEN } from "../constants";

export default {
  data() {
    return {
      userProvidedSpotifyAuthToken: ""
    };
  },
  computed: { ...mapState(["spotifyAuthToken"]) },
  methods: {
    ...mapMutations(["setSpotifyAuthToken"]),
    handleSpotifyAuthTokenChange() {
      this.$store.commit({
        type: SET_SPOTIFY_AUTH_TOKEN,
        authToken: this.userProvidedSpotifyAuthToken
      });
    }
  }
};
</script>

<style scoped>
.AuthTokenInput--container {
  padding: 20px;
  width: 100%;
  display: inline-block;
}
.input {
  min-width: 150px;
  width: 30%;
  float: right;
  border-radius: 5px;
  box-shadow: 1px 1px;
}
</style>

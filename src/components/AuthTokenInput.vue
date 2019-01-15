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
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      userProvidedSpotifyAuthToken: ""
    };
  },
  computed: { ...mapState(["spotifyAuthToken"]) },
  methods: {
    ...mapActions(["setSpotifyAuthToken"]),
    handleSpotifyAuthTokenChange() {
      this.$store.dispatch({
        type: "setSpotifyAuthToken",
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
}
.input {
  min-width: 150px;
  width: 30%;
  float: right;
}
</style>

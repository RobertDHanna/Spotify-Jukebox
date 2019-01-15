<template>
  <div class="container SpotifyPlayer--container">
    <p>[Spotify Player]</p>
    <p>
      <b>Auth Token:</b>
      <i>{{this.spotifyAuthToken}}</i>
    </p>
    <a v-on:click="play({spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr'})" class="button">Play</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { makePlayer, playTrack } from "../spotify-player.js";
export default {
  data: function() {
    return {
      ready: false,
      player: null
    };
  },
  computed: {
    ...mapState(["spotifyAuthToken"])
  },
  methods: {
    initPlayer: async function() {
      return new Promise(resolve => {
        console.log("Creating player");
        this.player = makePlayer(
          "Jukebox Player",
          this.spotifyAuthToken,
          device_id => {
            this.ready = true;
            resolve();
          }
        );
        this.player.connect();
      });
    },
    play: async function({ spotify_uri }) {
      if (this.ready === false || this.player === null) {
        await this.initPlayer();
      }
      playTrack({ spotify_uri, playerInstance: this.player });
    }
  }
};
</script>

<style scoped>
.SpotifyPlayer--container {
  word-wrap: break-word;
}
</style>


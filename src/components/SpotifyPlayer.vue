<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title is-centered">Jukebox Player</div>
    </div>
    <div class="card-content">
      <p>
        <b>Auth Token:</b>
        <i>{{this.spotifyAuthToken}}</i>
      </p>
      <div class="field is-grouped">
        <div class="SpotifyPlayer--player-control-buttons-container">
          <a class="button is-dark is-outlined is-rounded SpotifyPlayer--control-button">
            <i class="far fa-pause-circle"></i>
          </a>
          <a class="button is-dark is-outlined is-rounded SpotifyPlayer--control-button">
            <i class="far fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
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
.card {
  max-width: 75%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 1px 1px;
}

.SpotifyPlayer--control-button i {
  font-size: 25px;
}

.SpotifyPlayer--player-control-buttons-container {
  margin: 0 auto;
}

.SpotifyPlayer--player-control-buttons-container a {
  margin: 10px;
}
</style>


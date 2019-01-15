import Vue from "vue";
import Vuex from "vuex";
import { SET_SPOTIFY_AUTH_TOKEN } from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spotifyAuthToken: "1234"
  },
  mutations: {
    [SET_SPOTIFY_AUTH_TOKEN]: (state, payload) => {
      state.spotifyAuthToken = payload.authToken;
    }
  }
});

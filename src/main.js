import Vue from "vue";
import Vuex from "vuex";
import "bulma/css/bulma.min.css";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    spotifyAuthToken: "hi kailey"
  },
  mutations: {
    setSpotifyAuthToken(state, authToken) {
      state.spotifyAuthToken = authToken;
    }
  },
  actions: {
    setSpotifyAuthToken({ commit }, { authToken }) {
      commit("setSpotifyAuthToken", authToken);
    }
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

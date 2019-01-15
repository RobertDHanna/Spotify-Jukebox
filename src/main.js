import Vue from "vue";
import "bulma/css/bulma.min.css";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

window.onSpotifyWebPlaybackSDKReady = () => {
  new Vue({
    store,
    render: h => h(App)
  }).$mount("#app");
};

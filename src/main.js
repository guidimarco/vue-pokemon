import Vue from "vue";
import App from "./App.vue";

// AXIOS
import AxiosPlugin from "./plugins/AxiosPlugin.js";

// AXIOS -> Vue
Vue.use(AxiosPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

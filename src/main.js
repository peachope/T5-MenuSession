import Vue from "vue";
import App from "./App.vue";
import router from './router'
import Vuex from 'vuex'
import store from './store'


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuex,
  render: (h) => h(App)
}).$mount("#app");


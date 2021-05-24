import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.use(axios);
export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    //change data in state
    SaveProducts(state, products) {
      state.products = products;
    },
  },
  getters: {
    allData: (state) => state.products,
  },
  actions: {
    fetchData: function({ commit }) {
      try {
        const api = "https://mocki.io/v1/a047254d-83f1-4f43-a50f-b027fc80cbc5";
        axios
          .get(api)
          .then((res) => {
            commit("SaveProducts", res.data); //call mutations
          })
          .catch((error) => console.log(error.message));
      } catch (error) {
        console.log("fetchData ERROR", error);
      }
    },
  },
  modules: {},
});

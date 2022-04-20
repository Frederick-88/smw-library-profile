import Vue from "vue";
import Vuex from "vuex";
import FacilitiesStore from "./facilities-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    facilities: FacilitiesStore,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

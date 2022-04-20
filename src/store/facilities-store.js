import {
  database,
  storageRef,
  createFacility,
  updateFacility,
  deleteFacility,
} from "@/firebase/db";

const FacilitiesStore = {
  namespaced: true,
  state: {
    facilityList: [],
    isFetchingFacilities: false,
  },
  getters: {},
  mutations: {
    setFacilities(state, data) {
      state.facilityList = data;
    },
    setIsFetchingFacilities(state, boolean) {
      state.isFetchingFacilities = boolean;
    },
  },
  actions: {
    async fetchFacilities({ commit }) {
      commit("setIsFetchingFacilities", true);

      database
        .collection("library-facilities")
        .get()
        .then((querySnapshot) => {
          const results = querySnapshot.docs;
          commit("setFacilities", results);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          commit("setIsFetchingFacilities", false);
        });
    },
    async createFacility({ commit }, data) {
      console.log(data);
    },
  },
};

export default FacilitiesStore;

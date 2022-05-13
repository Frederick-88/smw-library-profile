import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homepage/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () =>
      import(
        /* webpackChunkName: "admin-login" */ "../views/admin/AdminLogin.vue"
      ),
  },
  {
    path: "/admin/facilities",
    name: "AdminFacilities",
    component: () =>
      import(
        /* webpackChunkName: "admin-facilities" */ "../views/admin/AdminFacilities.vue"
      ),
  },
  {
    path: "/admin/programs",
    name: "AdminPrograms",
    component: () =>
      import(
        /* webpackChunkName: "admin-programs" */ "../views/admin/AdminPrograms.vue"
      ),
  },
  {
    path: "/admin/book-collections",
    name: "AdminBookCollections",
    component: () =>
      import(
        /* webpackChunkName: "admin-book-collections" */ "../views/admin/AdminBookCollections.vue"
      ),
  },
  {
    path: "/admin/partners",
    name: "AdminPartners",
    component: () =>
      import(
        /* webpackChunkName: "admin-partners" */ "../views/admin/AdminPartners.vue"
      ),
  },
  {
    path: "/admin/library-details",
    name: "AdminLibraryDetails",
    component: () =>
      import(
        /* webpackChunkName: "admin-library-details" */ "../views/admin/AdminLibraryDetails.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

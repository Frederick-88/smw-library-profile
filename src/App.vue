<template>
  <v-app>
    <Navbar />
    <v-main class="pa-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/base/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif !important;
}

.v-application {
  [class*="text-"] {
    color: #36405a;
    font-family: "Montserrat", sans-serif !important;
  }
  font-family: "Montserrat", sans-serif !important;
}
</style>

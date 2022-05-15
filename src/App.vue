<template>
  <v-app>
    <Navbar />

    <v-main class="pa-0">
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/base/Navbar.vue";
import Footer from "@/components/base/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif !important;
}

.v-application {
  font-family: "Montserrat", sans-serif !important;

  .admin-facilities,
  .admin-programs,
  .admin-book-collections,
  .admin-partners,
  .admin-library-details {
    padding-bottom: 75px; // space between footer and content
  }

  .divider-line {
    height: 1px;
    margin: 10px auto;
    max-width: 100%;
    position: relative;
    width: 300px;

    ul {
      display: flex;
      justify-content: center;
      padding-left: 0;
      list-style: none;
      left: 0;
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }

    li {
      transform: rotate(45deg);
      font-size: 14px;
      padding: 2px;
      display: inline-block;
    }
  }
}
</style>

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

// vue-slick-carousel imports
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

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

html,
body {
  scroll-behavior: smooth;
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
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
    }

    li {
      transform: rotate(45deg);
      display: inline-block;
    }
  }
}
</style>

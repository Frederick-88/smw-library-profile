<template>
  <div>
    <!-- -------------- -->
    <!-- Desktop Navbar -->
    <!-- -------------- -->
    <v-app-bar v-if="!isMobile" app color="primary" dark>
      <h2 class="mr-5">SMW Library</h2>

      <v-btn>next</v-btn>
      <v-btn>next</v-btn>
      <v-btn>next</v-btn>
      <v-btn>next</v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- ------------- -->
    <!-- Mobile Navbar -->
    <!-- ------------- -->
    <v-card
      v-if="isMobile"
      absolute
      class="mobile-navbar mx-auto overflow-hidden"
    >
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>SMW Library</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import globalMixins from "@/mixins/global-mixins.js";

export default {
  name: "Navbar",
  mixins: [globalMixins],
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style lang="scss">
.mobile-navbar {
  height: 100vh;
  position: absolute !important;
  width: 100vw;
  z-index: 99999;
  background-color: transparent !important;
}
</style>

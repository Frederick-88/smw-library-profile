<template>
  <v-main>
    <home-banner />
    <home-facilities />
  </v-main>
</template>

<script>
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HomeFacilities from "@/components/Home/HomeFacilities.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeFacilities,
  },
};
</script>

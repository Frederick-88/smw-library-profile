<template>
  <v-container class="profile-banner pt-0">
    <h2 class="banner-title text-center mb-5">Profil Singkat</h2>

    <div class="divider-line black">
      <ul>
        <li>
          <v-icon dense class="black--text">mdi-square</v-icon>
        </li>
        <li>
          <v-icon dense class="black--text">mdi-square</v-icon>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ProfileBanner",
};
</script>

<style lang="scss">
.profile-banner {
  margin-top: 140px;

  .banner-title {
    font-weight: 500;
    letter-spacing: 1.5px;
  }

  @include mobile {
    margin-top: 120px;

    .banner-title {
      font-size: 1.25rem;
      letter-spacing: 1px;
    }
  }
}
</style>

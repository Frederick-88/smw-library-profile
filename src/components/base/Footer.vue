<template>
  <v-footer class="footer py-3 px-10 black d-flex justify-space-between">
    <h5 class="footer-text white--text">
      © 2022 All Rights Reserved, SMA Maitreyawira Library
    </h5>
    <img
      class="footer-logo"
      :src="require('@/assets/images/smw-small-logo.png')"
    />
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  .footer-text {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: -4px;
  }

  .footer-logo {
    width: 45px;
  }
}
</style>

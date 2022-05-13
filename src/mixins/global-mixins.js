import { mapState } from "vuex";

const globalMixins = {
  //  add on resize to update adminTableHeight
  computed: {
    ...mapState(["adminToken"]),
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    isOnAdminSite() {
      return (
        this.adminToken &&
        this.$route.path &&
        this.$route.path.includes("admin")
      );
    },
    adminTableHeight() {
      return window.innerHeight - 250 - 25 + "px"; // 250px is estimation of navbar, browse layout header and margins. another 25 for more space from bottom.
    },
  },
};

export default globalMixins;

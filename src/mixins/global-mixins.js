import { mapState } from "vuex";
import { debounce } from "debounce";

const globalMixins = {
  data() {
    return {
      screenHeight: 0,
    };
  },
  computed: {
    ...mapState(["adminToken"]),
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    isTablet() {
      return this.$vuetify.breakpoint.smOnly;
    },
    isNotDesktop() {
      return this.isMobile || this.isTablet;
    },

    isOnAdminUrl() {
      return this.$route.path && this.$route.path.includes("admin");
    },
    isOnAdminSite() {
      return this.adminToken && this.isOnAdminUrl;
    },
    adminTableHeight() {
      return this.screenHeight - 250 - 25 + "px"; // 250px is estimation of navbar, browse layout header and margins. another 25 for more space from bottom.
    },
  },
  created() {
    window.addEventListener("resize", this.debounceHandleResize);
  },
  mounted() {
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.debounceHandleResize);
  },
  methods: {
    debounceHandleResize: debounce(function () {
      this.handleResize();
    }, 100),

    handleResize() {
      this.screenHeight = window.innerHeight;
    },
  },
};

export default globalMixins;

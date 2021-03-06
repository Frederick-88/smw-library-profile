import { mapState } from "vuex";

const adminAuthMixins = {
  computed: {
    ...mapState(["adminToken"]),
  },
  mounted() {
    this.checkAdminAuth();
  },
  methods: {
    checkAdminAuth() {
      if (!this.adminToken) {
        this.$toast.warning("Please login first.");
        this.$router.push({ path: "/admin/login" });
      }
      return;
    },
  },
};

export default adminAuthMixins;

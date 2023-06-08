<template>
  <div class="profile-history mt-15" :style="backgroundImageStyle">
    <v-container class="py-0">
      <h2 class="history-title white--text text-center">
        Sejarah Perpustakaan
      </h2>

      <p
        class="history-description white--text mt-8 mb-0 text-subtitle-2 text-sm-subtitle-1"
      >
        Perpustakaan SMA Maitreyawira merupakan pembaharuan dari perpustakaan SD
        dan SMP Maitreyawira, pada tahun 2015 berdirilah perpustakaan SMA
        Maitreyawira dengan berbagai koleksi buku. Perpustakaan SMA Maitreyawira
        berdiri karena kebutuhan para civitas akademik dalam menunjang proses
        pembelajaran sehari-hari. Perpustakaan SMA Maitreyawira merupakan suatu
        bagian di bawah naungan Yayasan Pancaran Maitri. Perpustakaan merupakan
        suatu bagian yang berdiri sendiri yang bertujuan utama yaitu membantu
        dalam proses pembelajaran. Perpustakaan yang baik merupakan salah satu
        sumber belajar di sekolah. Oleh karena itu, perlunya seluruh peserta
        didik dan tenaga kependidikan dapat kesempatan untuk memperluas
        pengetahuan dengan membaca buku pustaka yang diperlukan. Pada sisi lain,
        perpustakaan yang baik dan lengkap dapat menunjang proses belajar
        mengajar di sekolah, khususnya dapat memotivasi kemandirian belajar
        siswa dan gemar membaca sesuai dengan kurikulum yang berlaku.
      </p>

      <p
        class="history-description white--text mt-4 mb-0 text-subtitle-2 text-sm-subtitle-1"
      >
        Secara khusus fungsi perpustakaan sebagai sumber penyedia informasi dan
        pustaka sesuai kurikulum pendidikan SMA perlu sekali di tingkatkan
        sarana dan prasarana sesuai kemampuan sekolah. Sedangkan minat baca anak
        tidak mungkin meningkat positif apabila bahan pustaka kurang lengkap dan
        kurang menarik bagi anak. Untuk itu perpustakaan harus menyediakan bahan
        yang seirama dengan bakat, minat dan kegemaran anak. Sehingga anak-anak
        dan guru mencintai perpustakaan dan merasa butuh, karena koleksinya
        sangat variatif dan menantang. Mengingat pentingnya maksud dan fungsi
        perpustakaan sekolah itu perlulah disusun program yang jelas demi
        pengelolaan perpustakaan yang profesional.
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProfileHistory",
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.65) 100%), url(" +
          require("@/assets/images/library-history-bg.webp") +
          ")",
      };
    },
  },
};
</script>

<style lang="scss">
.profile-history {
  padding: 100px 0;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .history-title {
    font-weight: 500;
    letter-spacing: 1.5px;
  }

  .history-description {
    line-height: 1.6;
    text-align: justify;
  }

  @include mobile {
    .history-title {
      font-size: 1.25rem;
      letter-spacing: 1px;
    }
  }
}
</style>

<template>
  <div class="profile-vision-and-mission mt-2 mt-sm-5">
    <v-container class="profile-vision-and-mission__container">
      <v-row class="vision">
        <v-col class="vision-pic column pa-0 pa-md-3" cols="12" md="6">
          <v-img :src="visionImage" contain width="100%"></v-img>
        </v-col>
        <v-col class="vision-description-column" cols="12" md="6">
          <div>
            <h2 class="vision-title text-center mb-5">Visi</h2>
            <p
              class="px-0 px-md-8 vision-description text--secondary text-subtitle-2 text-sm-subtitle-1"
            >
              Terwujudnya perpustakaan sekolah sebagai media pengembangan minat
              baca dan kegemaran membaca serta pusat layanan informasi bagi
              siswa maupun warga sekolah untuk mewujudkan pendidikan cinta kasih
              alam.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mission">
        <v-col class="mission-description-column" cols="12" md="6">
          <div>
            <h2 class="mission-title text-center mb-5">Misi</h2>
            <p
              class="px-0 px-md-8 mission-description text--secondary mb-0 text-subtitle-2 text-sm-subtitle-1"
            >
              <span class="mb-4">
                1. Menyediakan berbagai koleksi bacaan untuk mengembangkan
                pengetahuan siswa.
              </span>
              <br />
              <span class="mb-4">
                2. Menjadikan perpustakaan sebagai jantungnya pendidikan
                sekolah.
              </span>
              <br />
              <span class="mb-4">
                3. Menjadikan perpustakaan sekolah sebagai tempat belajar yang
                nyaman dan menyenangkan.
              </span>
              <br />
              <span class="mb-4">
                4. Mengembangkan layanan informasi pustaka berbasis teknologi
                informasi komunikasi (TIK).
              </span>
              <br />
              <span>
                5. Menumbuhkankembangkan Gerakan Literasi Sekolah (GLS)
              </span>
            </p>
          </div>
        </v-col>
        <v-col class="mission-pic column pa-0 pa-md-3" cols="12" md="6">
          <v-img :src="missionImage" contain width="100%"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProfileVisionAndMission",
  computed: {
    visionImage() {
      return require("@/assets/images/vision.jpg");
    },
    missionImage() {
      return require("@/assets/images/mission.jpg");
    },
  },
};
</script>

<style lang="scss">
.profile-vision-and-mission {
  .vision-title,
  .mission-title {
    font-weight: 500;
    letter-spacing: 1.5px;

    @include mobile {
      font-size: 1.25rem;
      letter-spacing: 1px;
    }
  }

  .vision-description,
  .mission-description {
    line-height: 1.6;
    text-align: justify;
  }

  .vision-description-column,
  .mission-description-column {
    display: flex;
    align-items: center;
  }

  .mission-description-column {
    @include small-tablet {
      order: 2;
    }

    @include mobile {
      order: 2;
    }
  }

  .vision-pic,
  .mission-pic {
    display: flex;
    align-items: center;

    .v-image {
      max-height: 450px;
    }
  }

  .vision-pic {
    @include small-tablet {
      .v-image {
        max-height: 300px;
      }
    }

    @include mobile {
      .v-image {
        max-height: 250px;
      }
    }
  }

  .mission-pic {
    @include small-tablet {
      margin-bottom: 10px;

      .v-image {
        max-height: 250px;
      }
    }

    @include mobile {
      margin-bottom: 10px;

      .v-image {
        max-height: 200px;
      }
    }
  }
}
</style>

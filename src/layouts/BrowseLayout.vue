<template>
  <div class="browse-layout">
    <div
      class="browse-layout__header d-flex justify-space-between align-center"
    >
      <h3 class="d-flex align-center header-title">
        <v-icon color="black" class="header-icon mr-2">{{ headerIcon }}</v-icon>
        {{ headerTitle }}
      </h3>
      <v-btn
        v-if="isShowAddButton"
        class="header__add-button"
        outlined
        title="Add"
        :disabled="isLoading"
        @click="$emit('onclick-create-button')"
        >Add {{ subjectText }}
        <v-icon dense class="ml-1">mdi-plus</v-icon></v-btn
      >
    </div>

    <template v-if="isLoading">
      <div class="layout-loader__container">
        <div class="layout-loader">
          <div class="loader" />
          <v-icon dense class="loader__middle-icon ml-1">{{
            headerIcon
          }}</v-icon>
        </div>
        <p class="loader__text">Loading ...</p>
      </div>
    </template>
    <template v-else>
      <div class="browse-layout__content elevation-10 mt-10 rounded-xl">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BrowseLayout",
  props: {
    headerTitle: { type: String, default: "Title" },
    headerIcon: { type: String, default: "mdi-eye" },
    subjectText: { type: String, default: "Title" },
    isShowAddButton: { type: Boolean, default: true },
    isLoading: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.browse-layout {
  margin-top: 140px;

  .browse-layout__content,
  .browse-layout__header {
    margin-right: 50px;
    margin-left: 50px;
  }

  .browse-layout__header {
    .header-title {
      font-weight: 600;
    }

    .header-icon {
      font-size: 1.75rem;
    }

    .header__add-button {
      font-size: 0.8125rem;
    }
  }

  .browse-layout__content {
    overflow: hidden;

    th {
      font-size: 0.75rem !important;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    th,
    td {
      text-align: center !important;
    }

    .image-thumbnail {
      width: 125px;
      object-fit: contain;

      &.image--large {
        width: auto;
        height: 350px;
      }
    }

    .ellipsis {
      width: 400px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;
    }

    .button-list {
      min-width: 250px;
    }
  }

  .layout-loader__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    .layout-loader {
      position: relative;
    }

    .loader__middle-icon {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      color: #f9a825;
      font-size: 2.5rem;

      &.icon-agent {
        font-size: 2.75rem;
      }
    }

    .loader {
      border: 5px solid black;
      border-radius: 50%;
      border-top: 5px solid #f9a825;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
    }

    .loader__text {
      font-size: 1.125rem;
      font-weight: 500;
      margin: 30px 0 0;
      color: black;
    }

    /* Safari */
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>

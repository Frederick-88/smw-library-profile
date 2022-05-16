<template>
  <div class="smw-loader__container">
    <div class="smw-loader">
      <div class="loader" />
      <v-icon dense class="loader__middle-icon ml-1">{{ icon }}</v-icon>
    </div>
    <p class="loader__text">Loading ...</p>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    icon: { type: String, default: "mdi-account" },
  },
};
</script>

<style lang="scss">
.smw-loader__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  .smw-loader {
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
</style>

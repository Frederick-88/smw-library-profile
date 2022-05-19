const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");

    config.plugin("html").tap((args) => {
      args[0].title = "SMA Maitreyawira Library";
      args[0].meta = {
        description:
          "SMA Maitreyawira official library website. A library based on Batam, Indonesia. Has thousands of students across Batam city.",
        keywords:
          "sma maitreyawira, sma maitreyawira library, batam library, library, perpustakaan, perpustakaan batam, perpustakaan sma maitreyawira, sma maitreya perpustakaan, sma maitreyawira perpustakaan, perpustakaan indonesia",
      };
      return args;
    });
  },

  css: {
    loaderOptions: {
      // did not use sass because got error with vuetify, reference => https://joshuatz.com/posts/2019/vue-mixing-sass-with-scss-with-vuetify-as-an-example/#easy-solution
      scss: {
        data: `@import '@/assets/styles/screenSizeMixin.scss';`,
      },
    },
  },
};

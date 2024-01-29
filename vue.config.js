// vue.config.js
const mozaicSassConfig = require("@mozaic-ds/css-dev-tools/sassConfig");

module.exports = {
  // ✅ Code à ajouter 👇
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/_tokens.scss";
        `,
        sassOptions: mozaicSassConfig,
      },
    },
  },

  // Code en provenance de la conf du prjet [cdp-due--customer-space-module]
  publicPath: "/",
  assetsDir: "static",
  chainWebpack: (config) => {
    config.module.rules.delete("css");

    // vue.config.js
    config.plugin("html").tap((args) => {
      args[0].minify = {
        ...args[0].minify,
        removeAttributeQuotes: false,
      };
      return args;
    });

    config.module.rule("js").exclude.add(/\.test\.js$/);

    // ❌ Code à supprimer 👇
    // config.module
    //   .rule("css")
    //   .test(/\.scss$/)
    //   .use("vue-style-loader")
    //   .loader("postcss-loader")
    //   .tap((options) => {
    //     options = {
    //       postcssOptions: {
    //         syntax: require("postcss-scss"),
    //         plugins: require("@mozaic-ds/css-dev-tools/postcssPluginConfig"),
    //       },
    //     };
    //     return options;
    //   });

    if (process.env.NODE_ENV === "production") {
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");

      config.plugin("html").tap(() => [
        {
          preload: false,
          title: "customer-space-module",
          template: "public/index.html", // application context
          inject: false,
          minify: {
            removeAttributeQuotes: false,
          },
        },
      ]);
    }

    /*
    if (process.env.NODE_ENV === 'production' && 'fragmentMode' === 'applicationContextMode') { // TODO: generated, to simplify
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')

      config.plugin('html')
        .tap(args => {
          return [{
            preload: false,
            title: 'KOBI fragment',
            template: 'public/kobi-fragment-index.html',
            inject: false,
            minify: {
              removeAttributeQuotes: false
            }
          }]
        })
    }
    */
  },
};

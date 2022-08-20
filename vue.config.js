const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  chainWebpack: config => {
    // config.plugin("copy").use(CopyPlugin, [
    //   {
    //     patterns: [{ from: "src/api", to: "../api" }],
    //   },
    // ]);
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Portfolio By Sam";
        return args;
      })
  },
  pwa: {
    name: 'Portfolio by Sam',
    themeColor: '#e6ebf4',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // manifestOptions: {

    // },

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // }
  }
})

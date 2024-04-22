const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "Music App",
    short_name: "Music App",
    start_url: "/",
    themeColor: "#ff5e3a",
    icons: [
      {
        src: "assets/img/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
});

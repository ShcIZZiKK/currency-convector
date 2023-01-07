const { defineConfig } = require("@vue/cli-service");
process.env.NODE_ENV === "production" ? "/currency-convector/" : "/",
  (module.exports = defineConfig({
    transpileDependencies: true,

    publicPath:
      process.env.NODE_ENV === "production" ? "/currency-convector/" : "/",
  }));

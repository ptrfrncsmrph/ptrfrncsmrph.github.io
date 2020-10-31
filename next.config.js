const path = require("path");

module.exports = {
  webpack(config, _options) {
    config.node = { fs: "empty", child_process: "empty" };
    config.resolve.alias["@purescript"] = path.join(__dirname, "output");
    return config;
  },
  env: {},
  publicRuntimeConfig: {},
};

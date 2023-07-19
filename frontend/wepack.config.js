const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new NodePolyfillPlugin()]
};

module.exports = config;
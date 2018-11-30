var path = require("path");
const TSLintPlugin = require("tslint-webpack-plugin");
var config = {
  mode: "development",
  entry: ["./app.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new TSLintPlugin({
      files: ["./app.tsx"]
    })
  ]
};

module.exports = config;

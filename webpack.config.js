var path = require("path");
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
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {
              configuration: {
                extends: ["tslint:recommended", "tslint-microsoft-contrib"]
              },
              configFile: false,
              emitErrors: true,
              failOnHint: true,
              typeCheck: false,
              fix: false,
              tsConfigFile: "tsconfig.json"
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

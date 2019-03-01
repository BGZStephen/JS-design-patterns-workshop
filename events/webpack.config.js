const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: path.resolve(__dirname, "index.js"), // string | object | array
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        include: [
          path.resolve(__dirname)
        ],
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  target: "web", // enum
  serve: { //object
    port: 8000,
    content: './dist',
  },
}
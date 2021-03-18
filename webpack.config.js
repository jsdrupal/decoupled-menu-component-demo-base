module.exports = {
  mode: 'development',
  entry: "./src/index",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
      }],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      "node_modules",
    ],
  },
};

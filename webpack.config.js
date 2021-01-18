var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  entry: `${__dirname}/src/js/scripts.js`,
  output: {
    path: __dirname + "/public/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  }
}
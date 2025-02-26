const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ]
      },
      // TODO por algum motivo ao inserir este loader as fonts nao carregam
      // {
      //   test: /\.(ttf|woff|woff2)$/,
      //   loader: 'url-loader',
      // }
    ]
  }
}
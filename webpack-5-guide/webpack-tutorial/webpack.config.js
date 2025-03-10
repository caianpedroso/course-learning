const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    // TODO: Caso eu tenha uma cdn
    // publicPath: 'http://come-cdn.com/',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        // TODO existem 3 tipo de types asset/resource | asset/inline | asset o /resource trata como arquivo externo puxando a imagem externa, /inline trata como arquivo interno, e o asset é e junsao dos dois fazendo que imagens grande sejam externas e images pequena internas
        type: 'asset/resource',
        parser: {
          // TODO este seta a condicao para que o tamanho seja inline ou resource
          dataUrlCondition: {
            maxSize: 3 * 1024 // 3 kilobytes
          }
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
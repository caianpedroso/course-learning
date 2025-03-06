const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "auto", // Melhor compatibilidade
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Correção para Webpack 5
    },
    port: 9003,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: false // Evita que o overlay do Webpack atrapalhe a depuração
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      title: 'Contact App'
    }),
    new ModuleFederationPlugin({
      name: 'ContactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ContactPage': './src/Contact'
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" }
      }
    })
  ]
}

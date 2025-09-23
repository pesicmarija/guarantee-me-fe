const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // ili index.jsx, zavisi od tebe
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true, // briše stari build iz dist
    publicPath: "/", // bitno za React Router
  },
  mode: "development", // promeni na 'production' kad buildaš
  devtool: "inline-source-map", // lakši debug u dev modu
  devServer: {
    static: path.resolve(__dirname, "public"),
    historyApiFallback: true, // da React Router radi na refresh
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/u, // podrška za JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // podrška za CSS fajlove
        use: ["css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // podrška za slike
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"], // da možeš import bez ekstenzije
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.ejs",
      title: 'GuaranteeMe',
      inject: true
      // favicon: "./public/favicon.ico", // opcionalno
    }),
  ],
};

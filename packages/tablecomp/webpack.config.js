const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: '0.0.0.0',
    port: 3006,
    historyApiFallback: true
  },

  output: {
    publicPath: 'http://localhost:3006/',
    path: path.resolve(process.cwd(), 'dist')
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'tablecomp',
      library: { type: 'var', name: 'tablecomp' },
      filename: 'remoteEntry.js',
      remotes: {
      },
      exposes: {
        "./Table1" : './src/Table1'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};

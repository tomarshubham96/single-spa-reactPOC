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
  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: '0.0.0.0',
    port: 3007,
    historyApiFallback: true
  },
  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3007/',
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
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'footer',
      library: { type: 'var', name: 'footer' },
      filename: 'footer.js',
      remotes: {
        store:'store',
        reduxStore: 'reduxStore',
        counterSlice: 'counterSlice',
        mfMore: 'mfMore'
      },
      exposes: {
        "./Footer" : './src/Footer'
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
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};

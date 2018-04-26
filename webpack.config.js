const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader'],
        sideEffects: false, // tree-shaking
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  resolve:{
    extensions: ['*', '.js', '.jsx'],
    symlinks: false,
    alias: {
      Services: path.resolve(__dirname, 'src/Services'),
      Components: path.resolve(__dirname, 'src/App/Components')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"'
    // }),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: true,
        compress: {
          warnings: false, // supress uglify warnings
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true
        },
        output: {
          comments: false,
        },
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    // webpack.IgnorePlugin  import selective modules from a library
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const LiveReloadPlugin = require('webpack-livereload-plugin');

const deps = require('./package.json').dependencies;
const isDevelopment = process.env.NODE_ENV !== 'production';

/** @type { import('webpack').Configuration } */
const config = {
  mode: isDevelopment ? 'development' : 'production',
  entry: ['./src/index.ts'],
  devtool: 'source-map',
  devServer: {
    hot: false, // fix hot reloading
    liveReload: true,
    port: 3000,
    // server app on all paths
    historyApiFallback: true,
    static: {
      directory: './dist',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3000/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // extract css into files to do parallell loading in production
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.[jt]s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('ts-loader'),
          options: {
            getCustomTransformers: () => ({
              before: [isDevelopment && ReactRefreshTypeScript()].filter(
                Boolean
              ),
            }),
            transpileOnly: isDevelopment,
          },
        },
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
    ],
  },
  plugins: [
    !isDevelopment &&
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    isDevelopment &&
      new ReactRefreshWebpackPlugin({
        exclude: [/node_modules/, /bootstrap\.tsx$/],
      }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: './public/favicon.svg',
    }),
    new ModuleFederationPlugin({
      name: 'admin_host',
      filename: 'remoteEntry.js',
      remotes: {
        admin_remote: 'admin_remote@http://localhost:3001/remoteEntry.js',
      },
      exposes: {
        './Layout': './src/components/Layout',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
    isDevelopment && new LiveReloadPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    runtimeChunk: false,
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};

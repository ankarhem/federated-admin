const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const isDevelopment = process.env.NODE_ENV !== 'production';
const config = {
  mode: isDevelopment ? 'development' : 'production',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
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
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: './dist',
    },
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};

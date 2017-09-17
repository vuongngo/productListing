import path from 'path';
import webpack from 'webpack';
import  ExtractTextPlugin from 'extract-text-webpack-plugin';

const rootFolder = path.resolve(__dirname, '..');
const config = {
  context: rootFolder,

  entry: {
    main: './src/client'
  },

  output: {
    path: path.resolve(rootFolder, 'static/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: 'file-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: true,
              localIndentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourcemapContents: true,
              localIndentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss'
            }
          }
        ]
      },
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    extensions: ['*', '.js', '.css', '.html'],
    modules: ['src', 'node_modules'],
    alias: {
      app: path.resolve(rootFolder, 'src/app')
    }
  }
};

export default config;

const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Add HMR for development environments only.
var entry = ['./src/index.js'];
if (process.env.NODE_ENV === 'dev') {
  entry = [
    'webpack-dev-server/client?http://localhost:3333'
  ].concat(entry);
}

function getBuildTimestamp () {
  function pad2 (value) {
    return ('0' + value).slice(-2);
  }
  var date = new Date();
  var timestamp = [
    pad2(date.getUTCDate()),
    pad2(date.getUTCMonth()+1),
    date.getUTCFullYear()
  ]
  return timestamp.join('-');
}

var commitHash = childProcess.execSync('git rev-parse HEAD').toString();

// Plugins.
var plugins = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
    VERSION: JSON.stringify(require('./package.json').version),
    BUILD_TIMESTAMP: JSON.stringify(getBuildTimestamp()),
    COMMIT_HASH: JSON.stringify(commitHash)
  }),
];
var filename = 'app.js';
var outPath = 'public/assets/js';

const config = {
  devServer: {port: 3000},
  entry: entry,
  devtool : 'source-map',
  output: {
    path: path.join(__dirname, outPath),
    filename: filename,
    publicPath: '/public/assets/js/'
  },
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },

      // BABEL
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options: {
            compact: true
          }
      }
    ]
  },
  plugins: plugins
};

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,// true
        uglifyOptions: {
          mangle: {
            keep_fnames: true,
          },
          compress: {
            warnings: true
          },
          warnings: false,// true
          safari10: true
        },
      }),
    ],
  }
}

module.exports = config;

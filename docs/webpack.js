var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: 'src'
}).listen(9009, 'localhost', function(err, result) {
  if (err) console.log(err);

  console.log('Listening at localhost:9009');
});
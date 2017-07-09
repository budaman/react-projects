var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './app/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
   },
   module: {
      rules: [
         { test: /\.(js)$/, use: 'babel-loader' },
         { test: /\.css$/, use: ['style-loader', 'css-loader']}
      ]
   },
   devServer: {
      historyApiFallback: true //jeigu perkrauni puslapi su tarkim /popular pabaiga,
   },                         //narsykle galvoja kad visa serverio informacija is ten ir turi buti
   plugins: [                  //bet mes nustateme kad serveris eina is index.js / failo, todel sitas istaiso
      new HtmlWebpackPlugin({
      template: 'app/index.html'
   })
   ]
};

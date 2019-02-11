const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  mode: 'development',
  entry: './src/index.js', 
  output: { 
    path: path.resolve('src/js/'), 
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: './src/index.html'
    }
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader' ]
        },
      ] 
  }, 
  plugins: [
    //will automatically inject bundle js into ./dist/index.html
    new HTMLWebpackPlugin({
        template: './src/index.html', //source
        filename: './src/index.html'  //destination
    })
    // new HTMLWebpackPlugin( )
  ]
}
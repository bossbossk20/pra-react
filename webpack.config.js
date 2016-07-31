module.exports = {
    entry : './main.jsx',
    output : {
      publicPath : '/static/',
      path : 'static',
      filename : 'bundle.js'
    },
    devServer : {
      port : 7000
    },
    module : {
      loaders : [{
        test : /\.jsx?$/,
        loaders : ["babel-loader"],
        exclude: /node_module/
    },
    {
      test: /\.css$/,
      loader : 'style-loader!css-loader'
    }
  ]
  }
}

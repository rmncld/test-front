const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src/assets/styles"),
        exclude: /\.module\.scss$/
      },
      {
        test: /\.module\.s[ac]ss$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/styles/main.scss',
                './src/assets/styles/fonts.scss'
              ]
            },
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader  : 'url-loader?limit=30000',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test    : /\.(png|svg|jpg)$/,
        exclude: /(node_modules)/,
        loader  : 'url-loader?limit=30000&name=images/assets/[name].[ext]'
      }
    ]
  }
}

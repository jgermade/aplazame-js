
module.exports = {
  entry: './lib/aplazame.js',
  output: {
    filename: 'dist/aplazame.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
    ],
  }
};

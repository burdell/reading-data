const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    graphql: './src/graphql/index.ts',
    goodreads: './src/goodreads/index.ts'
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: { configFileName: 'tsconfig.json' }
        },
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'umd'
  }
}

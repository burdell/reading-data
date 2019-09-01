const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    graphql: './src/server/graphql/index.ts',
    goodreads: './src/server/goodreads/index.ts'
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
          options: { configFileName: 'tsconfig.server.json' }
        },
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: '[name]/index.js',
    libraryTarget: 'umd'
  }
}

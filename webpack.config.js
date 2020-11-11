/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const folderToBundle = 'public/js'

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, folderToBundle),
    publicPath: folderToBundle,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallBack: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

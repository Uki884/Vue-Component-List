const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.extensions = ['.js', '.vue', '.json']
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  })
  // config.module.rules.push({
  //   test: /\.s?css$/,
  //   loaders: [
  //     'style-loader',
  //     'css-loader',
  //     'sass-loader',
  //     {
  //       loader: 'sass-resources-loader',
  //       options: {
  //         resources: [
  //           './assets/stylesheets/_variables.scss',
  //           './assets/stylesheets/_mixins.scss'
  //         ],
  //         include: path.resolve(__dirname, '../')
  //       }
  //     }
  //   ]
  // })

  // config.module.rules.push({
  //   test: /\.vue$/,
  //   loader: 'storybook-addon-vue-info/loader',
  //   enforce: 'post'
  // })

  return config
}

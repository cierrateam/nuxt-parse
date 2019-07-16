// import { createMiddleware } from './module.middleware'
import plugin from './module.plugin'
import path from 'path'
const optionName = 'nuxt-parse'

module.exports = function(moduleOptions) {
  const consola = require('consola')
  const options = Object.assign(
    {},
    this.options[optionName],
    moduleOptions || {}
  )
  const { enabled } = options
  if (enabled === false) {
    consola.info('Skip activation of nuxt-parse module')
    return false
  }
  consola.info('Add nuxt-parse module to server middleware')

  this.addPlugin({
    src: path.resolve(__dirname, 'module.plugin.js'),
    options: {
      appId: options.appId,
      javascriptKey: options.javascriptKey,
      serverUrl: (options.serverUrl || 'https://parseapi.back4app.com/')
    }
  })
  return true
}

module.exports.meta = require('../package.json')

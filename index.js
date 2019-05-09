const deepmerge = require('deepmerge')

module.exports = (context, options = {}) => {
  let presets = []
  let plugins = []
  let { loose, debug, useBuiltIns, corejs, modules, targets } = options
  let envOptions = deepmerge({ loose, debug, modules, useBuiltIns, corejs, targets }, options)

  presets.unshift(['manpacker', envOptions])
  presets.push('@babel/react')
  plugins.push('transform-react-remove-prop-types')
  return { presets, plugins }
}

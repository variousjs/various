const base = require('./base')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { index, ...rest } = base.entry
const { NODE_ENV = 'development' } = process.env
const config = {
  ...base,
  // watch components change
  watch: NODE_ENV === 'development',
  entry: rest,
}

module.exports = config

export const MOUNTED_COMPONENTS_KEY = Symbol('MOUNTED_COMPONENTS')

export const MESSAGE_KEY = Symbol('MESSAGE')

export const CONFIG_KEY = Symbol('CONFIG')

export const DEPENDENCIES_KEY = Symbol('DEPENDENCIES')

export const ROOT = '#root'

export const VUE_FUNCTION_OPTIONS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeUnmount',
  'unmounted',
  'errorCaptured',
  'renderTracked',
  'renderTriggered',
  'activated',
  'deactivated',
  'setup',
  'data',
  'render',
]

export const VUE_VERSION = 3

export const BASE_DEPENDENCIES = [
  'react',
  'react-dom',
  '@variousjs/various',
  'app',
]

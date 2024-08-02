import {
  onComponentMounted as ocm,
  isModuleLoaded as im,
  preloadModules as pm,
} from '@variousjs/various'
import { getStore, subscribe } from './store'
import connector from './connector'
import {
  ERROR_TYPE,
  ENV_KEY,
  CONFIG_KEY,
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
} from '../config'
import { ErrorType, RequiredComponent } from '../types'

const getUrlHash = (url: string) => `${url}?${+new Date()}`

export const preloadModules: typeof pm = (names) => new Promise<void>((resolve, reject) => {
  window.requirejs(names, resolve, reject)
})

export const isModuleLoaded: typeof im = (name) => {
  const [m] = name.split('.')
  return window.requirejs.specified(m) && !!window.requirejs.s.contexts._.defined[m]
}

export const getMountedComponents = () => getStore(MOUNTED_COMPONENTS_KEY)

export const onComponentMounted: typeof ocm = (name, callback) => {
  const nextName = typeof name === 'string' ? [name] : name

  if (nextName.every((n) => getMountedComponents().includes(n))) {
    callback()
    return () => null
  }

  const unSubscribe = subscribe({
    [MOUNTED_COMPONENTS_KEY](value) {
      const names = value as string[]
      if (nextName.every((n) => names.includes(n))) {
        unSubscribe()
        callback()
      }
    },
  })

  return unSubscribe
}

export const resetModuleConfig = (name: string, url?: string) => {
  const dependencies = getStore(DEPENDENCIES_KEY)

  // ignore multiple custom module url
  if (url && window.requirejs.defined(name)) {
    return
  }

  let path = getUrlHash(dependencies[name])

  // custom module url, but module loaded error
  if (url) {
    path = `${url}#${name}`

    try {
      const { registry } = window.requirejs.s.contexts._
      if (registry[name].error) {
        path = getUrlHash(url)
      }
    } catch (e) {
      // ignore
    }
  }

  window.requirejs.undef(name)
  window.requirejs.config({
    paths: { [name]: path },
  })
}

export const getNameWithModule = (name: string, module?: string) => (module ? `${name}.${module}` : name)

export const getEnv = () => getStore(ENV_KEY)

const getConsolePrefix = (name?: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

function consoleError(name: string, text: string) {
  if (getEnv() === 'development') {
    window.console.error(...getConsolePrefix(name), text)
  }
}

export function consoleWarn(name: string, text: string) {
  if (getEnv() === 'development') {
    window.console.warn(...getConsolePrefix(name), text)
  }
}

export function getConfig<C extends object = {}>() {
  return getStore(CONFIG_KEY) as C
}

export const onError = (args: ErrorType) => {
  const {
    type,
    message,
    name,
    module,
  } = args
  const nameWithModule = getNameWithModule(name, module)
  const prefix = type === 'dispatch' || type === 'i18n'
    ? type
    : ERROR_TYPE[type]

  const middlewares = connector.getMiddlewares()

  middlewares?.onError?.({
    name: nameWithModule,
    errorType: prefix,
    errorMessage: message,
  })

  consoleError(nameWithModule, `[${prefix}] ${message}`)
}

export const isReactComponent = (component: RequiredComponent) => (
  !!component.prototype?.isReactComponent) || (
  typeof component === 'function'
    && String(component).includes('createElement(')
)

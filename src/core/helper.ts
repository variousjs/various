import {
  onComponentMounted as ocm,
  isDependencyLoaded as im,
  preloadDependencies as pp,
  VariousError as ve,
  ErrorType as et,
  ModuleDefined,
} from '@variousjs/various'
import { getStore, subscribe } from './store'
import connector from './connector'
import {
  ENV_KEY,
  CONFIG_KEY,
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
} from '../config'
import { RequiredComponent } from '../types'

const getUrlHash = (url: string) => `${url}?${+new Date()}`

export const preloadDependencies: typeof pp = (name) => new Promise<void>((resolve, reject) => {
  const names = typeof name === 'string' ? [name] : name
  window.requirejs(names, resolve, reject)
})

export const isDependencyLoaded: typeof im = (name) => window.requirejs.specified(name)
  && !!window.requirejs.s.contexts._.defined[name]

export const getMountedComponents = () => getStore(MOUNTED_COMPONENTS_KEY)

export const hasModule = (modules: ModuleDefined[], module: ModuleDefined) => modules
  .some((c) => c.name === module.name && c.module === module.module)

export const onComponentMounted: typeof ocm = (module, callback) => {
  const modules = Array.isArray(module) ? module : [module]

  if (modules.every((m) => hasModule(getMountedComponents(), m))) {
    callback()
    return () => null
  }

  const unSubscribe = subscribe({
    [MOUNTED_COMPONENTS_KEY](value) {
      const mountedModules = value as ModuleDefined[]
      if (modules.every((n) => hasModule(mountedModules, n))) {
        unSubscribe()
        callback()
      }
    },
  })

  return unSubscribe
}

export const resetDependencyConfig = (name: string, url?: string) => {
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
      /* istanbul ignore else  */
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
export const getNameWithModule = (moduleDefined: ModuleDefined) => {
  const { name, module } = moduleDefined
  return module ? `${name}.${module}` : name
}

export const getEnv = () => getStore(ENV_KEY)

const getConsolePrefix = (name: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

function consoleError(moduleDefined: ModuleDefined, e: Error) {
  const nameWithModule = getNameWithModule(moduleDefined)
  if (getEnv() === 'development') {
    window.console.error(...getConsolePrefix(nameWithModule), e)
  }
}

export function consoleWarn(moduleDefined: ModuleDefined, text: string) {
  const nameWithModule = getNameWithModule(moduleDefined)
  if (getEnv() === 'development') {
    window.console.warn(...getConsolePrefix(nameWithModule), text)
  }
}

export function getConfig<C extends object = {}>() {
  return getStore(CONFIG_KEY) as C
}

export const onError = (e: VariousError) => {
  const middlewares = connector.getMiddlewares()
  const { name, module, originalError } = e

  middlewares?.onError?.(e)
  consoleError({ name, module }, originalError)
}

export const isReactComponent = (component: RequiredComponent) => (
  !!component.prototype?.isReactComponent) || (
  typeof component === 'function'
    && String(component).includes('createElement(')
)

export class VariousError extends Error implements ve {
  type: et

  originalError: Error

  module?: string

  name: string

  constructor(data: {
    name: string,
    module?: string,
    type: et,
    originalError: Error,
  }) {
    super(data.originalError.message)
    this.type = data.type
    this.originalError = data.originalError
    this.module = data.module
    this.name = data.name
  }
}

import {
  onComponentMounted as ocm,
  isDependencyLoaded as im,
  preloadDependencies as pp,
  defineDependencies as dd,
  VariousError as ve,
  ErrorType as et,
  ModuleDefined,
  OnMessage,
  I18n,
  VariousComponentType,
} from '@variousjs/various'
import { getStore, subscribe, emit } from './store'
import createLogger from './logger'
import {
  CONFIG_KEY,
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  VUE_VERSION,
  VUE_FUNCTION_OPTIONS,
} from './config'
import { PublicActions, RequiredComponent } from './types'
import connector from './connector'

const getUrlHash = (url: string) => `${url}?${+new Date()}`

export const preloadDependencies: typeof pp = (name) => new Promise<void>((resolve, reject) => {
  const names = typeof name === 'string' ? [name] : name
  window.requirejs(names, resolve, reject)
})

export const defineDependencies: typeof dd = (deps) => {
  const dependencies = getStore(DEPENDENCIES_KEY)
  const next = {} as Record<string, string>

  Object.keys(deps).forEach((name) => {
    next[name] = `${deps[name]}#${name}`
  })

  window.requirejs.config({ paths: next })
  emit({ [DEPENDENCIES_KEY]: { ...dependencies, ...next } }, true)
}

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
      if (registry?.[name].error) {
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

export function getConfig<C extends object = {}>() {
  return getStore(CONFIG_KEY) as C
}

export const onError = (e: VariousError) => {
  const { name, module, type } = e
  const logger = createLogger({ name, module })

  logger.error(e, type)
}

export const isReactComponent = (component: RequiredComponent) => {
  if (component.$$typeof) {
    return true
  }
  if (component.prototype?.isReactComponent) {
    return true
  }
  if (typeof component === 'function') {
    return true
  }
  return false
}

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

export function isPromiseLike<T>(value: T | PromiseLike<T>): value is PromiseLike<T> {
  return value != null && typeof (value as any).then === 'function'
}

export function unMountComponent(moduleDefined: ModuleDefined) {
  const { name, module } = moduleDefined
  let mountedComponents = getMountedComponents()

  mountedComponents = mountedComponents
    .filter((item) => item.name !== name || item.module !== module)

  emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
  connector.deleteComponentActions({ name, module })
}

export function checkVueComponent(component: RequiredComponent) {
  const versionRegex = new RegExp(`^${VUE_VERSION}\\.`)

  return new Promise<boolean>((resolve, reject) => {
    window.requirejs(['vue'], (Vue: { version: string }) => {
      if (!versionRegex.test(Vue.version)) {
        reject(new Error(`Vue ${VUE_VERSION}+ required, detected an incompatible version`))
      }

      if (typeof component?.render === 'function' || typeof component?.setup === 'function') {
        resolve(true)
        return
      }

      resolve(false)
    })
  })
}

export function getComponentActions(componentNode: RequiredComponent, type?: VariousComponentType) {
  const actions: PublicActions = {}
  let onMessageAction: OnMessage | undefined
  let i18nAction: I18n | undefined

  Object
    .getOwnPropertyNames(componentNode)
    .forEach((method) => {
      if (typeof componentNode[method] !== 'function') {
        return
      }
      if (method === '$onMessage') {
        onMessageAction = componentNode[method]
        return
      }
      if (method === '$i18n') {
        i18nAction = componentNode[method]
        return
      }
      if (type === 'vue3' && VUE_FUNCTION_OPTIONS.includes(method)) {
        return
      }

      actions[method] = componentNode[method]
    })

  return { actions, onMessageAction, i18nAction }
}

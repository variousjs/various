import {
  onComponentMounted as ocm,
  isModuleLoaded as im,
  preloadModules as pp,
  removeLoadedModules as rm,
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
  BASE_DEPENDENCIES,
} from './config'
import { PublicActions, RequiredComponent } from '../types'
import connector from './connector'
import { createOnMessage } from './message'
import { createI18nConfig } from './i18n'

const getUrlHash = (url: string) => `${url}?${+new Date()}`

const hasModule = (modules: ModuleDefined[], module: ModuleDefined) => modules
  .some((c) => c.name === module.name && c.module === module.module)

export const preloadModules: typeof pp = (names) => new Promise<void>((resolve, reject) => {
  window.requirejs(names, resolve, reject)
})

export const removeLoadedModules: typeof rm = (names) => {
  names.forEach((name) => {
    if (!BASE_DEPENDENCIES.includes(name)) {
      window.requirejs.undef(name)
    }
  })
}

export const defineDependencies: typeof dd = (deps) => {
  const dependencies = getStore(DEPENDENCIES_KEY)
  const next = {} as Record<string, string>

  Object.keys(deps).forEach((name) => {
    if (!BASE_DEPENDENCIES.includes(name)) {
      next[name] = `${deps[name]}#${name}`
      window.requirejs.undef(name)
    }
  })

  window.requirejs.config({ paths: next })
  emit({ [DEPENDENCIES_KEY]: { ...dependencies, ...next } }, true)
}

export const isModuleLoaded: typeof im = (name) => window.requirejs.defined(name)

export const isModuleSpecified = (name: string) => window.requirejs.specified(name)

export const getMountedComponents = () => getStore(MOUNTED_COMPONENTS_KEY)

export const onComponentMounted: typeof ocm = (module, callback) => {
  const modules = Array.isArray(module) ? module : [module]

  if (modules.every((m) => hasModule(getMountedComponents(), m))) {
    callback()
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

  if (!window.requirejs) {
    return
  }

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

export function checkReactComponent(component: RequiredComponent, moduleDefined: ModuleDefined) {
  return new Promise<void>((reslove, reject) => {
    if (component.$$typeof || component.prototype?.isReactComponent || typeof component === 'function') {
      reslove()
      return
    }

    reject(new VariousError({
      ...moduleDefined,
      originalError: new Error('not a valid React component'),
      type: 'INVALID_COMPONENT',
    }))
  })
}

export function isPromiseLike<T>(value: T | PromiseLike<T>): value is PromiseLike<T> {
  return value != null && typeof (value as any).then === 'function'
}

export function checkVueComponent(component: RequiredComponent, moduleDefined: ModuleDefined) {
  const versionRegex = new RegExp(`^${VUE_VERSION}\\.`)

  return new Promise<void>((resolve, reject) => {
    window.requirejs(['vue'], (Vue: { version: string }) => {
      if (!versionRegex.test(Vue.version)) {
        reject(new Error(`Vue ${VUE_VERSION}+ required, detected an incompatible version`))
      }

      if (typeof component?.render === 'function' || typeof component?.setup === 'function') {
        resolve()
        return
      }

      reject(new VariousError({
        ...moduleDefined,
        originalError: new Error('not a valid Vue component'),
        type: 'INVALID_COMPONENT',
      }))
    })
  })
}

export function parseComponentActions(params: ModuleDefined & {
  componentNode: RequiredComponent,
  type?: VariousComponentType,
  i18nUpdate: () => void,
}) {
  const {
    componentNode,
    name,
    module,
    type,
    i18nUpdate,
  } = params

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

  if (i18nAction) {
    createI18nConfig(i18nAction, { name, module }, i18nUpdate)
  }

  connector.setComponentActions({ name, module }, actions)

  if (onMessageAction) {
    return createOnMessage({ name, module }, onMessageAction)
  }

  return () => null
}

export function updateMountedComponent(moduleDefined: ModuleDefined) {
  const mountedComponents = getMountedComponents()

  if (!hasModule(mountedComponents, moduleDefined)) {
    mountedComponents.push(moduleDefined)
  }

  emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
}

export function updateUnMountComponent(moduleDefined: ModuleDefined) {
  const { name, module } = moduleDefined
  let mountedComponents = getMountedComponents()

  mountedComponents = mountedComponents
    .filter((item) => item.name !== name || item.module !== module)

  emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
  connector.deleteComponentActions({ name, module })
}

export function getSelfInfo(params: ModuleDefined & { url?: string }) {
  const { name, module, url } = params
  const dependencies = getStore(DEPENDENCIES_KEY)

  return {
    name,
    module,
    url: url || dependencies[name],
  }
}

export function getClassNameWithModule(self: ModuleDefined, prefix: string) {
  const { name, module } = self
  return `${prefix} ${[name, module].filter(Boolean).join('-')}`
}

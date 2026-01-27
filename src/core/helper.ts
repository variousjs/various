import {
  onComponentMounted as ocm,
  isModuleLoaded as im,
  preloadModules as pp,
  removeLoadedModules as rm,
  defineDependencies as dd,
  VariousError as ve,
  ErrorType as et,
  ModuleDef,
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

export const getMountedComponents = () => getStore(MOUNTED_COMPONENTS_KEY).map((m) => m.module)

export const onComponentMounted: typeof ocm = (module, callback) => {
  const modules = Array.isArray(module) ? module : [module]

  if (modules.every((m) => getMountedComponents().includes(m))) {
    callback()
  }

  const unSubscribe = subscribe({
    [MOUNTED_COMPONENTS_KEY](value) {
      const mountedModules = value.map((m) => m.module)
      if (modules.every((n) => mountedModules.includes(n))) {
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
  if (url && isModuleLoaded(name)) {
    return
  }

  if (!dependencies[name] && url) {
    window.requirejs.config({
      paths: { [name]: `${url}#${name}` },
    })
    return
  }

  let path = getUrlHash(dependencies[name])

  if (url) {
    path = getUrlHash(`${url}#${name}`)
  }

  window.requirejs.undef(name)
  window.requirejs.config({
    paths: { [name]: path },
  })
}

export function getConfig<C extends object = {}>() {
  return getStore(CONFIG_KEY) as C
}

export const onError = (e: VariousError) => {
  const { module, type } = e
  const logger = createLogger(module)
  logger.error(e, type)
}

export class VariousError extends Error implements ve {
  type: et

  originalError: Error

  module: string

  constructor(data: {
    module: string,
    type: et,
    originalError: Error,
  }) {
    super(data.originalError.message)
    this.type = data.type
    this.originalError = data.originalError
    this.module = data.module
  }
}

export function checkReactComponent(component: RequiredComponent, moduleDef: ModuleDef) {
  return new Promise<void>((reslove, reject) => {
    if (component.$$typeof || component.prototype?.isReactComponent || typeof component === 'function') {
      reslove()
      return
    }

    reject(new VariousError({
      ...moduleDef,
      originalError: new Error('not a valid React component'),
      type: 'INVALID_COMPONENT',
    }))
  })
}

export function isPromiseLike<T>(value: T | PromiseLike<T>): value is PromiseLike<T> {
  return value != null && typeof (value as any).then === 'function'
}

export function checkVueComponent(component: RequiredComponent, moduleDef: ModuleDef) {
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
        ...moduleDef,
        originalError: new Error('not a valid Vue component'),
        type: 'INVALID_COMPONENT',
      }))
    })
  })
}

export function parseComponentActions(params: ModuleDef & {
  componentNode: RequiredComponent,
  type?: VariousComponentType,
  i18nUpdate: () => void,
}) {
  const {
    componentNode,
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
    createI18nConfig(i18nAction, { module }, i18nUpdate)
  }

  connector.setComponentActions({ module }, actions)

  if (onMessageAction) {
    return createOnMessage({ module }, onMessageAction)
  }

  return () => null
}

export function updateMountedComponent(moduleDef: ModuleDef) {
  const mountedComponents = getMountedComponents()

  if (!mountedComponents.includes(moduleDef.module)) {
    mountedComponents.push(moduleDef.module)
  }

  emit({
    [MOUNTED_COMPONENTS_KEY]: mountedComponents.map((m) => ({ module: m })),
  }, true)
}

export function updateUnMountComponent(moduleDef: ModuleDef) {
  const { module } = moduleDef
  let mountedComponents = getMountedComponents()

  mountedComponents = mountedComponents.filter((item) => item !== module)

  emit({
    [MOUNTED_COMPONENTS_KEY]: mountedComponents.map((m) => ({ module: m })),
  }, true)
  connector.deleteComponentActions({ module })
}

export function getSelfInfo(params: ModuleDef & { url?: string }) {
  const { module, url } = params
  const dependencies = getStore(DEPENDENCIES_KEY)

  return {
    module,
    url: url || dependencies[name],
  }
}

export function getClassNameWithModule(self: ModuleDefined, prefix: string) {
  const { name, module } = self
  return `${prefix} ${[name, module].filter(Boolean).join('-')}`
}

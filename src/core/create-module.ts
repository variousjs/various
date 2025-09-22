import { createModule as cm } from '@variousjs/various'
import { RequireError, RequiredComponent } from './types'
import { DEPENDENCIES_KEY } from './config'
import { getStore } from './store'
import connector from './connector'
import {
  isDependencyLoaded,
  resetDependencyConfig,
  VariousError,
  onError,
} from './helper'

const createModule: typeof cm = (config) => {
  const dependencies = getStore(DEPENDENCIES_KEY)
  const middlewares = connector.getMiddlewares()
  const { name, module, url } = config
  const loadStart = +new Date()

  if (url) {
    resetDependencyConfig(name, url)
  }

  return new Promise<any>((resolve, reject) => {
    if (!url && !dependencies[name]) {
      const error = new VariousError({
        name,
        module,
        type: 'NOT_DEFINED',
        originalError: new Error(`module "${name}" not defined`),
      })

      onError(error)
      reject(error)
      return
    }

    window.requirejs([name], (C: RequiredComponent) => {
      const loadEnd = +new Date()

      middlewares?.onLoad?.({
        name,
        module,
        loadStart,
        loadEnd,
        beenLoaded: isDependencyLoaded(name),
      })

      if (!C) {
        const error = new VariousError({
          name,
          module,
          type: 'INVALID_MODULE',
          originalError: new Error(`module "${name}" not content`),
        })

        resetDependencyConfig(name)
        onError(error)
        reject(error)
        return
      }

      const defaultModule = 'default' in C ? C.default : C
      const actualModule = !module ? defaultModule : C[module]

      if (!actualModule && module) {
        const error = new VariousError({
          name,
          module,
          type: 'SUBMODULE_NOT_DEFINED',
          originalError: new Error(`submodule "${module}" not defined`),
        })

        resetDependencyConfig(name)
        onError(error)
        reject(error)
        return
      }

      resolve(actualModule)
    }, (e: RequireError) => {
      const [requireModule] = e.requireModules

      resetDependencyConfig(name, url)
      resetDependencyConfig(requireModule)

      let errorType: VariousError['type'] = 'LOADING_ERROR'

      if (requireModule !== name) {
        errorType = 'SUBMODULE_LOADING_ERROR'
      }

      if (!e.message.includes('https://requirejs.org/docs/errors.html')) {
        errorType = requireModule === name ? 'SCRIPT_ERROR' : 'SUBMODULE_SCRIPT_ERROR'
      }

      const error = new VariousError({
        name,
        module: requireModule === name ? undefined : requireModule,
        type: errorType,
        originalError: e,
      })

      onError(error)
      reject(error)
    })
  })
}

export default createModule

import { createModule as cm, ObjectRecord } from '@variousjs/various'
import { RequireError } from '../types'
import { DEPENDENCIES_KEY } from './config'
import { getStore } from './store'
import connector from './connector'
import {
  isModuleLoaded,
  resetDependencyConfig,
  VariousError,
  onError,
  isModuleSpecified,
  getModuleInfo,
} from './helper'

const createModule: typeof cm = (config, logError = true) => {
  const dependencies = getStore(DEPENDENCIES_KEY)
  const middlewares = connector.getMiddlewares()
  const { url, module } = config
  const { name, entry } = getModuleInfo(module)
  const loadStart = +new Date()

  const logOnError = (e: VariousError) => {
    if (logError) {
      onError(e)
    }
  }

  if (url) {
    resetDependencyConfig(module, url)
  }

  return new Promise<any>((resolve, reject) => {
    if (!url && !dependencies[name] && !isModuleSpecified(module)) {
      const error = new VariousError({
        module,
        type: 'NOT_DEFINED',
        originalError: new Error(`module "${name}" not defined`),
      })

      logOnError(error)
      reject(error)
      return
    }

    window.requirejs([name], (C?: ObjectRecord) => {
      const loadEnd = +new Date()

      middlewares?.onLoad?.({
        module,
        loadStart,
        loadEnd,
        beenLoaded: isModuleLoaded(module),
      })

      if (!C) {
        const error = new VariousError({
          module,
          type: 'INVALID_MODULE',
          originalError: new Error(`module "${name}" invalid`),
        })

        resetDependencyConfig(module)
        logOnError(error)
        reject(error)
        return
      }

      const defaultModule = 'default' in C ? C.default : C
      const actualModule = !entry ? defaultModule : C[entry]

      if (actualModule === undefined && entry) {
        const error = new VariousError({
          module,
          type: 'SUBMODULE_NOT_DEFINED',
          originalError: new Error(`submodule "${entry}" not defined`),
        })

        resetDependencyConfig(module)
        logOnError(error)
        reject(error)
        return
      }

      resolve(actualModule)
    }, (e: RequireError) => {
      const [requireModule] = e.requireModules

      resetDependencyConfig(module, url)
      resetDependencyConfig(requireModule)

      let errorType: VariousError['type'] = 'LOADING_ERROR'

      if (requireModule !== name) {
        errorType = 'SUBMODULE_LOADING_ERROR'
      }

      if (!e.message.includes('https://requirejs.org/docs/errors.html')) {
        errorType = requireModule === name ? 'SCRIPT_ERROR' : 'SUBMODULE_SCRIPT_ERROR'
      }

      const error = new VariousError({
        module: requireModule,
        type: errorType,
        originalError: e,
      })

      logOnError(error)
      reject(error)
    })
  })
}

export default createModule

import { createModule as cm, ObjectRecord } from '@variousjs/various'
import { DEPENDENCIES_KEY } from './config'
import { getStore } from './store'
import connector from './connector'
import {
  VariousError,
  isModuleLoaded,
  resetDependencyConfig,
  onError,
  isModuleSpecified,
  getModuleInfo,
} from './helper'
import { importModule } from './system'

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

    importModule<ObjectRecord>(name).then((C?: ObjectRecord) => {
      const loadEnd = +new Date()

      middlewares?.onLoad?.({
        module,
        loadStart,
        loadEnd,
        beenLoaded: isModuleLoaded(module),
      })

      if (!C || (typeof C === 'object' && Object.keys(C).length === 0)) {
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
    }).catch((e: Error) => {
      resetDependencyConfig(module, url)

      let errorType: VariousError['type'] = 'LOADING_ERROR'

      if (!url && e.message && !e.message.includes(name)) {
        errorType = 'SUBMODULE_LOADING_ERROR'
      }

      const error = new VariousError({
        module: name,
        type: errorType,
        originalError: e,
      })

      logOnError(error)
      reject(error)
    })
  })
}

export default createModule

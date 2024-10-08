import { createModule as cm } from '@variousjs/various'
import { RequireError, RequiredComponent } from '../types'
import { DEPENDENCIES_KEY } from '../config'
import { getStore } from './store'
import connector from './connector'
import { isModuleLoaded, resetModuleConfig, VariousError } from './helper'

const createModule: typeof cm = (config) => {
  const dependencies = getStore(DEPENDENCIES_KEY)
  const middlewares = connector.getMiddlewares()
  const { name, module, url } = config
  const loadStart = +new Date()

  if (url) {
    resetModuleConfig(name, url)
  }

  return new Promise<any>((resolve, reject) => {
    if (!url && !dependencies[name]) {
      reject(new VariousError({
        name,
        module,
        type: 'NOT_DEFINED',
        originalError: new Error(`Module "${name}" not defined`),
      }))
      return
    }

    window.requirejs([name], (C: RequiredComponent) => {
      const loadEnd = +new Date()

      middlewares?.onLoad?.({
        name,
        module,
        loadStart,
        loadEnd,
        beenLoaded: isModuleLoaded({ name, module }),
      })

      if (!C) {
        resetModuleConfig(name)
        reject(new VariousError({
          name,
          module,
          type: 'INVALID_MODULE',
          originalError: new Error(`Module "${name}" not content`),
        }))
        return
      }

      const defaultModule = 'default' in C ? C.default : C
      const actualModule = !module ? defaultModule : C[module]

      if (!actualModule && module) {
        resetModuleConfig(name)
        reject(new VariousError({
          name,
          module,
          type: 'SUBMODULE_NOT_DEFINED',
          originalError: new Error(`Submodule "${module}" not defined`),
        }))
        return
      }

      resolve(actualModule)
    }, (e: RequireError) => {
      const [requireModule] = e.requireModules

      resetModuleConfig(name, url)
      resetModuleConfig(requireModule)

      let errorType: VariousError['type'] = 'LOADING_ERROR'

      if (requireModule !== name) {
        errorType = 'SUBMODULE_LOADING_ERROR'
      }

      if (!dependencies[requireModule]) {
        errorType = 'SUBMODULE_NOT_DEFINED'
      }

      if (!e.message.includes('https://requirejs.org/docs/errors.html')) {
        errorType = requireModule === name ? 'SCRIPT_ERROR' : 'SUBMODULE_SCRIPT_ERROR'
      }

      reject(new VariousError({
        name,
        module: requireModule === name ? undefined : requireModule,
        type: errorType,
        originalError: e,
      }))
    })
  })
}

export default createModule

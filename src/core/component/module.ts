/* eslint-disable prefer-promise-reject-errors */
import { createModule as cm } from '@variousjs/various'
import { RequireError, RequiredComponent } from '../../types'
import { ERROR_TYPE, DEPENDENCIES_KEY } from '../../config'
import { getStore } from '../store'
import connector from '../connector'
import { isModuleLoaded, resetModuleConfig } from './helper'
import { getNameWithModule } from '../helper'

const createModule: typeof cm = (config) => {
  const middlewares = connector.getMiddlewares()
  const { name, module, url } = config
  const nameWidthModule = getNameWithModule(name, module)
  const loadStart = +new Date()

  try {
    const { registry, urlFetched } = window.requirejs.s.contexts._
    Object.keys(registry).forEach((key) => {
      if (registry[key].error) {
        delete urlFetched[registry[key].map.url]
        delete registry[key]
      }
    })
  } catch (e) {
    // ignore
  }

  if (url) {
    resetModuleConfig(name, url)
  }

  return new Promise<any>((resolve, reject) => {
    window.requirejs([name], (C: RequiredComponent) => {
      const loadEnd = +new Date()

      middlewares?.onLoad?.({
        name: nameWidthModule,
        loadStart,
        loadEnd,
        duration: loadEnd - loadStart,
        beenLoaded: isModuleLoaded(name),
      })

      if (!C) {
        reject({
          errorMessage: 'no content',
          errorType: ERROR_TYPE.INVALID_COMPONENT,
        })
      }

      const actualModule = !module ? (C.default || C) : C[module]

      if (!actualModule) {
        reject({
          errorMessage: 'module not defined',
          errorType: ERROR_TYPE.INVALID_COMPONENT,
        })
      }

      resolve(actualModule)
    }, (e: RequireError) => {
      const dependencies = getStore(DEPENDENCIES_KEY)
      const [requireModule] = e.requireModules
      const errorType = requireModule === name
        ? ERROR_TYPE.LOADING_ERROR
        : ERROR_TYPE.DEPENDENCIES_LOADING_ERROR
      const errorMessage = `load \`${requireModule}\` error: ${e.message}`

      resetModuleConfig(name, url || dependencies[name])
      reject({ errorType, errorMessage })
    })
  })
}

export default createModule

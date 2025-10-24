import { createDispatch as cd } from '@variousjs/various'
import connector from './connector'
import { dispatch } from './store'
import { onError, VariousError } from './helper'
import createLogger from './logger'

const createDispatch: typeof cd = (moduleDefined) => async function (params) {
  const middlewares = connector.getMiddlewares()
  const logger = createLogger(moduleDefined)

  let {
    name,
    module,
    action,
    value,
  } = params

  if (middlewares?.onDispatch) {
    const check = await middlewares.onDispatch({
      target: { name, module },
      action,
      value,
      trigger: moduleDefined,
    })
    if (check === false) {
      logger.warn('blocked by middleware', 'DISPATCH')
      return Promise.resolve()
    }
    if (check !== true) {
      name = check.target.name
      module = check.target.module
      action = check.action
      value = check.value
    }
  }

  if (name === 'app') {
    const storeActions = connector.getStoreActions()
    const storeAction = storeActions[action]
    if (!storeAction) {
      const errorMessage = `action "${action}" is not present`
      const error = new VariousError({
        ...moduleDefined,
        type: 'DISPATCH',
        originalError: new Error(errorMessage),
      })
      onError(error)
      throw error
    }
    return dispatch(storeAction, value, moduleDefined)
  }

  const componentActions = connector.getComponentActions({ name, module })

  if (!componentActions) {
    const errorMessage = 'component is not ready'
    const error = new VariousError({
      ...moduleDefined,
      type: 'DISPATCH',
      originalError: new Error(errorMessage),
    })
    onError(error)
    throw error
  }

  const componentAction = componentActions[action]

  if (!componentAction) {
    const errorMessage = `action "${action}" is not present`
    const error = new VariousError({
      ...moduleDefined,
      type: 'DISPATCH',
      originalError: new Error(errorMessage),
    })
    onError(error)
    throw error
  }

  return Promise.resolve(componentAction(value, moduleDefined))
}

export default createDispatch

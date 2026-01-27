import { createDispatch as cd } from '@variousjs/various'
import connector from './connector'
import { dispatch } from './store'
import { onError, VariousError } from './helper'
import createLogger from './logger'

const createDispatch: typeof cd = (module) => async function (params) {
  const middlewares = connector.getMiddlewares()
  const logger = createLogger(module)

  let { action, payload, target } = params as {
    action: string,
    payload?: any,
    target: string,
  }

  if (middlewares?.onDispatch) {
    const check = await middlewares.onDispatch({
      target,
      action,
      payload,
      trigger: module,
    })
    if (check === false) {
      logger.warn('blocked by middleware', 'DISPATCH')
      return Promise.resolve()
    }
    if (check !== true) {
      target = check.target
      action = check.action
      payload = check.payload
    }
  }

  if (module === 'app') {
    const storeActions = connector.getStoreActions()
    const storeAction = storeActions[action]
    if (!storeAction) {
      const errorMessage = `action "${action}" is not present`
      const error = new VariousError({
        module,
        type: 'DISPATCH',
        originalError: new Error(errorMessage),
      })
      onError(error)
      throw error
    }
    return dispatch(storeAction, payload, module)
  }

  const componentActions = connector.getComponentActions(module)

  if (!componentActions) {
    const errorMessage = 'component is not ready'
    const error = new VariousError({
      module,
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
      module,
      type: 'DISPATCH',
      originalError: new Error(errorMessage),
    })
    onError(error)
    throw error
  }

  return Promise.resolve(componentAction(payload, module))
}

export default createDispatch

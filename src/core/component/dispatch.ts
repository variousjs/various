import { createDispatch as cd } from '@variousjs/various'
import connector from '../connector'
import { dispatch } from '../store'
import { onError, consoleWarn, VariousError } from '../helper'

const createDispatch: typeof cd = (moduleDefined) => async function (params) {
  const middlewares = connector.getMiddlewares()

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
      consoleWarn(moduleDefined, '[dispatch] blocked by middleware')
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
      const errorMessage = `Action "${action}" is not present`
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
    const errorMessage = 'Component is not ready'
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
    const errorMessage = `Action "${action}" is not present`
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

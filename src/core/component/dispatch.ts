import { createDispatch as cd } from '@variousjs/various'
import connector from '../connector'
import { dispatch } from '../store'
import { onError, consoleWarn, VariousError } from '../helper'

const createDispatch: typeof cd = (moduleDefined) => async function (params) {
  const middlewares = connector.getMiddlewares()

  let {
    name,
    module,
    method,
    value,
  } = params

  if (middlewares?.onDispatch) {
    const check = await middlewares.onDispatch({
      target: { name, module },
      method,
      value,
      trigger: moduleDefined,
    })
    if (check === false) {
      consoleWarn('[dispatch] blocked by middleware', moduleDefined.name, moduleDefined.module)
      return Promise.resolve()
    }
    if (check !== true) {
      name = check.target.name
      module = check.target.module
      method = check.method
      value = check.value
    }
  }

  if (name === 'app') {
    const storeActions = connector.getStoreActions()
    const action = storeActions[method]
    if (!action) {
      const errorMessage = `\`${method}\` is not present`
      const error = new VariousError({
        ...moduleDefined,
        type: 'DISPATCH',
        originalError: new Error(errorMessage),
      })
      onError(error)
      throw error
    }
    return dispatch(action, value, moduleDefined)
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

  const componentAction = componentActions[method]

  if (!componentAction) {
    const errorMessage = `\`${method}\` is not present`
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

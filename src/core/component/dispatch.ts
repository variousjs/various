import { createDispatch as cd } from '@variousjs/various'
import connector from '../connector'
import { dispatch } from '../store'
import { onError } from '../helper'

const createDispatch: typeof cd = (componentName) => function (name, method, value) {
  if (name === 'store') {
    const storeActions = connector.getStoreActions()
    const action = storeActions[method]
    if (!action) {
      const errorMessage = `\`store\` action \`${method}\` is not present`
      onError({
        name: componentName,
        type: 'dispatch',
        message: errorMessage,
      })
      throw new Error(errorMessage)
    }
    return dispatch(action, value, componentName)
  }

  const componentActions = connector.getComponentActions(name)

  if (!componentActions) {
    const errorMessage = `component \`${name}\` is not ready`
    onError({
      name: componentName,
      type: 'dispatch',
      message: errorMessage,
    })
    throw new Error(errorMessage)
  }

  const componentAction = componentActions[method]

  if (!componentAction) {
    const errorMessage = `\`${name}\` action \`${method}\` is not present`
    onError({
      name: componentName,
      type: 'dispatch',
      message: errorMessage,
    })
    throw new Error(errorMessage)
  }

  return Promise.resolve(componentAction(value, componentName))
}

export default createDispatch

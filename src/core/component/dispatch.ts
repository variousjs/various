import connector from '../connector'
import { dispatch } from '../store'
import { onError } from '../helper'

export default function (currentComponentName: string) {
  return function (componentName: string, method: string, value: any) {
    if (componentName === 'store') {
      const storeActions = connector.getStoreActions()
      const action = storeActions[method]
      if (!action) {
        const errorMessage = `\`store\` action \`${method}\` is not present`
        onError({
          name: currentComponentName,
          type: 'dispatch',
          message: errorMessage,
        })
        throw new Error(errorMessage)
      }
      return dispatch(action, { value, trigger: currentComponentName })
    }

    const componentActions = connector.getComponentActions(componentName)

    if (!componentActions) {
      const errorMessage = `component \`${componentName}\` is not ready`
      onError({
        name: currentComponentName,
        type: 'dispatch',
        message: errorMessage,
      })
      throw new Error(errorMessage)
    }

    const componentAction = componentActions[method]

    if (!componentAction) {
      const errorMessage = `\`${componentName}\` action \`${method}\` is not present`
      onError({
        name: currentComponentName,
        type: 'dispatch',
        message: errorMessage,
      })
      throw new Error(errorMessage)
    }

    return Promise.resolve(componentAction({ value, trigger: currentComponentName }))
  }
}

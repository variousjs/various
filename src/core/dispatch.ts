import getConsole from './console'
import { Actions, ComponentDispatcher, DispatchType, Store } from '../types'

type Ctx = {
  props: { dispatch: (next: DispatchType, params?: any) => Promise<any> },
}

export default function (
  storeDispatcher: Actions<Store>,
  componentDispatcher: Record<string, ComponentDispatcher>,
) {
  return function (
    this: Ctx,
    trigger: string,
    name: string,
    func: string,
    value: any,
  ) {
    const console = getConsole(trigger)
    const currentDispatch = this.props.dispatch

    if (name === 'store') {
      if (!storeDispatcher[func]) {
        const errorMessage = `[dispatch] \`store\` action \`${func}\` is not present`
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
      return currentDispatch(storeDispatcher[func], { value, trigger })
    }

    const actions = componentDispatcher[name]

    if (!actions) {
      const errorMessage = `[dispatch] component \`${name}\` is not ready`
      console.error(errorMessage)
      throw new Error(errorMessage)
    }

    if (!actions[func]) {
      const errorMessage = `[dispatch] \`${name}\` action \`${func}\` is not present`
      console.error(errorMessage)
      throw new Error(errorMessage)
    }

    return Promise.resolve(actions[func]({ value, trigger }))
  }
}

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
    const currentDispatch = this.props.dispatch

    if (name === 'store') {
      if (!storeDispatcher[func]) {
        throw new Error(`action \`${func}\` is not present`)
      }
      return currentDispatch(storeDispatcher[func], { value, trigger })
    }

    const actions = componentDispatcher[name]

    if (!actions) {
      throw new Error(`component \`${name}\` is not ready`)
    }

    if (!actions[func]) {
      throw new Error(`action \`${func}\` of component \`${name}\` is not present`)
    }

    return Promise.resolve(actions[func]({ value, trigger }))
  }
}

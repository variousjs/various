import { Entry } from '../types'

type Ctx = {
  props: { dispatch: Connector.dispatch },
}

export default function (
  storeDispatcher: Entry['actions'],
  componentDispatcher: Record<string, Entry['actions']>,
) {
  return function (
    this: Ctx,
    dispatcher: string,
    name: string,
    func: string,
    value: any,
  ) {
    const currentDispatch = this.props.dispatch

    if (name === 'store') {
      if (!storeDispatcher[func]) {
        throw new Error(`action \`${func}\` is not present`)
      }
      return currentDispatch(storeDispatcher[func], value, dispatcher)
    }

    const actions = componentDispatcher[name]

    if (!actions) {
      throw new Error(`component \`${name}\` is not ready`)
    }

    if (!actions[func]) {
      throw new Error(`action \`${func}\` of component \`${name}\` is not present`)
    }

    return actions[func](value, dispatcher)
  }
}

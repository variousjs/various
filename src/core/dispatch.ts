import { MOUNTED_COMPONENTS } from '../config'
import { Connector, Entry } from '../types'

type Ctx = {
  props: {
    dispatch: Connector.dispatch,
    [MOUNTED_COMPONENTS]: string[],
  },
}

export default function (
  dispatch: Connector.dispatch,
  storeDispatcher: Entry['actions'],
  componentDispatcher: { [name: string]: Entry['actions'] },
) {
  return function (
    this: Ctx,
    dispatcher: string,
    name: string,
    func: string,
    value: any,
  ) {
    const currentDispatch = this.props.dispatch || dispatch

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

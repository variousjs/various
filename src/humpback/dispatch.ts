/* eslint-disable no-throw-literal */
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

    if (name === 'global') {
      if (!storeDispatcher[func]) {
        throw `Dispatcher \`${func}\` not exists`
      }
      return currentDispatch(storeDispatcher[func], value, dispatcher)
    }

    if (!this.props[MOUNTED_COMPONENTS].includes(name)) {
      throw `Component \`${name}\` not ready`
    }

    const actions = componentDispatcher[name]

    if (!actions[func]) {
      throw `Dispatcher \`${func}\` not exists`
    }

    return actions[func](value, dispatcher)
  }
}

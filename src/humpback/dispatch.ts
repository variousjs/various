/* eslint-disable no-throw-literal */
import { MOUNTED_COMPONENTS } from '../config'

export default function (dispatch, storeDispatcher, componentDispatcher) {
  return function (caller, name, func, value) {
    const currentDispatch = this.props.dispatch || dispatch

    if (name === 'global') {
      if (!storeDispatcher[func]) {
        throw `Dispatcher \`${func}\` not exists`
      }
      return currentDispatch(storeDispatcher[func], value, caller)
    }

    if (!this.props[MOUNTED_COMPONENTS].includes(name)) {
      throw `Component \`${name}\` not ready`
    }

    const actions = componentDispatcher[name]

    if (!actions[func]) {
      throw `Dispatcher \`${func}\` not exists`
    }

    return actions[func](value, caller)
  }
}

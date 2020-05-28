import { MOUNTED_COMPONENTS } from './config'
import { dispatch } from './store'

export default function (storeDispatcher, componentDispatcher) {
  return function dispatcher(caller, name, func, value) {
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

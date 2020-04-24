import { MOUNTED_COMPONENTS } from './config'
import { dispatch } from './store'

export default function (storeDispatcher, componentDispatcher) {
  return function dispatcher(type, func, ...values) {
    const currentDispatch = this.props.dispatch || dispatch

    if (type === 'global') {
      if (!storeDispatcher[func]) {
        throw `Dispatcher \`${func}\` not exists`
      }
      return currentDispatch(storeDispatcher[func], ...values)
    }

    if (!this.props[MOUNTED_COMPONENTS].includes(type)) {
      throw `Component \`${type}\` not ready`
    }

    const actions = componentDispatcher[type]

    if (!actions[func]) {
      throw `Dispatcher \`${func}\` not exists`
    }

    return actions[func](...values)
  }
}

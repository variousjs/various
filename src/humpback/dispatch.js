import { MOUNTED_COMPONENTS } from './config'
import { dispatch } from './store'

export default function (storeDispatcher, componentDispatcher) {
  return function dispatcher(typeORname, funcORvalue, ...values) {
    if (typeORname === 'global') {
      if (!storeDispatcher[funcORvalue]) {
        throw `Dispatcher \`${funcORvalue}\` not exists`
      }
      const currentDispatch = this.props.dispatch || dispatch
      return currentDispatch(storeDispatcher[funcORvalue], ...values)
    }

    if (!this.props[MOUNTED_COMPONENTS].includes(typeORname)) {
      throw `Component \`${typeORname}\` not ready`
    }

    const actions = componentDispatcher[typeORname]

    if (!actions[funcORvalue]) {
      throw `Dispatcher \`${funcORvalue}\` not exists`
    }

    return actions[funcORvalue](...values)
  }
}

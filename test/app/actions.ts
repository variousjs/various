import { App } from '@variousjs/various'
import { Store } from '../types'

const actions: App<Store>['actions'] = {
  async setName({ emit, getStore }) {
    const next = getStore('name') === 'humpback' ? 'various' : 'humpback'
    emit({ name: next })
  },

  // type-check: payload specific string
  async setAction({ emit }, payload: string | undefined, trigger) {
    window.console.log(trigger)
    emit({ name: payload })
  },
}

export default actions

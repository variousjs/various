import { App } from '@variousjs/various'
import { Store } from '../types'

const actions: App<Store>['actions'] = {
  async setName({ emit, getStore }) {
    const next = getStore('name') === 'humpback' ? 'various' : 'humpback'
    emit({ name: next })
  },

  async setLocale({ emit, getStore }, payload) {
    let next = payload
    if (!next) {
      next = getStore('locale') === 'zh' ? 'en' : 'zh'
    }
    emit({ locale: next as 'jp' })
  },
}

export default actions

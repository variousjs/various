import { Dispatch } from '@variousjs/various'
import { Store } from '../types'

const actions: Record<string, Dispatch<Store>> = {
  async setName({ emit, getStore }) {
    const next = getStore('name') === 'humpback' ? 'various' : 'humpback'
    emit({ name: next })
  },

  async setLocale({ emit, getStore }, value) {
    let next = value
    if (!next) {
      next = getStore('locale') === 'zh' ? 'en' : 'zh'
    }
    emit({ locale: next })
  },
}

export default actions

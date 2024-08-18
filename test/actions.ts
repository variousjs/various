import { Dispatch } from '@variousjs/various'
import { Store } from './types'

const actions: Record<string, Dispatch<Store>> = {
  async setName({ emit }, value) {
    emit({ name: value })
  },

  async setLocale({ emit }, value) {
    emit({ locale: value })
  },

  async getLocale({ getStore }) {
    return getStore('locale')
  },
}

export default actions

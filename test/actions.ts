import { Actions } from '@variousjs/various'
import { Store } from './types'

const actions: Actions<Store> = {
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

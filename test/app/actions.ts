import { Dispatch } from '@variousjs/various'
import { Store } from '../types'

const actions: Record<string, Dispatch<Store>> = {
  async setName({ emit, getStore }) {
    const next = getStore('name') === 'humpback' ? 'various' : 'humpback'
    emit({ name: next })
  },
}

export default actions

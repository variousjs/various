import { Actions } from '@variousjs/various'
import { Store } from './types'

const actions: Actions<Store> = {
  async updateUserName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
}

export default actions

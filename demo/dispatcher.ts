/* eslint-disable import/no-unresolved */
import { Actions } from 'humpback'
import { Store } from './types'

const actions: Actions<Store> = {
  async updateUserName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
  getUserName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
  getNumber({ getStore }) {
    const { number } = getStore()
    return number
  },
  setNumber({ dispatch }, value) {
    dispatch({ number: value })
  },
}

export default actions

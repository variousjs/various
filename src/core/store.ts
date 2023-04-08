import Nycticorax from 'nycticorax'
import { Store } from '../types'

export const {
  createStore,
  getStore,
  connect,
  emit,
  subscribe,
  dispatch,
} = new Nycticorax<Store>()

export const getUserStore = () => {
  const globalStore = getStore()
  const keys = Object.keys(globalStore)
  const store: Record<string, any> = {}

  keys.forEach((key) => {
    store[key] = globalStore[key]
  })

  return store
}

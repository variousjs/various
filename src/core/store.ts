import Nycticorax from 'nycticorax'
import type { ObjectRecord } from '../public/types'
import { Store } from '../types'
import {
  MESSAGE_KEY,
  MOUNTED_COMPONENTS_KEY,
  CONFIG_KEY,
  DEPENDENCIES_KEY,
  LOCALE_KEY,
  STANDALONE_CONFIG_READY,
} from './config'

// re-exported so declaration emit can name the unique symbol keys
// referenced by the Nycticorax<Store> method signatures below
export {
  MESSAGE_KEY,
  MOUNTED_COMPONENTS_KEY,
  CONFIG_KEY,
  DEPENDENCIES_KEY,
  LOCALE_KEY,
  STANDALONE_CONFIG_READY,
}

export const {
  createStore,
  getStore,
  connect,
  emit,
  subscribe,
  dispatch,
  useStore,
} = new Nycticorax<Store>()

export function getUserStore<S extends object = ObjectRecord>() {
  const globalStore = getStore()
  const keys = Object.keys(globalStore)
  const store: Record<string, any> = {}

  keys.forEach((key) => {
    store[key] = globalStore[key]
  })

  return store as S
}

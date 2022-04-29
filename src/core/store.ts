import Nycticorax from 'nycticorax'
import { Store } from '../types'

export const {
  createStore,
  getStore,
  connect,
  emit,
  subscribe,
} = new Nycticorax<Store>()

import Nycticorax from 'nycticorax'
import { Connector } from '../types'

export const {
  createStore,
  getStore,
  connect,
  dispatch,
} = new Nycticorax<Connector.Store>()

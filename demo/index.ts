/* eslint-disable import/no-unresolved */
import { Entry } from 'humpback'
import actions from './dispatcher'
import store from './store'
import Container from './container'
import Loader from './loading'
import Error from './error'
import { Store, Config } from './types'

const entry: Entry<Store, Config> = {
  store,
  actions,
  Container,
  Loader,
  Error,
}

export default entry

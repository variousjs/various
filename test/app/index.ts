import { App, createComponent } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Loader from './loader'
import ErrorNode from './error'

const app: App<typeof store> = {
  store,
  Container: createComponent({ name: 'container' }),
  Loader,
  Error: ErrorNode,
  actions,
}

export default app

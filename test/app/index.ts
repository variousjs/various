import { App, createComponent } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Loader from './loader'
import ErrorNode from './error'
import middlewares from './middlewares'

const app: App<typeof store> = {
  store,
  Container: createComponent({ name: 'container' }),
  Loader,
  Error: ErrorNode,
  actions,
  middlewares,
}

export default app

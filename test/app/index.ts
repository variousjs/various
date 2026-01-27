import { App, createComponent } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Fallback from './loader'
import ErrorNode from './error'
import middlewares from './middlewares'

const app: App<typeof store> = {
  store,
  Root: createComponent({ module: 'container' }),
  Fallback,
  ErrorFallback: ErrorNode,
  actions,
  middlewares,
}

export default app

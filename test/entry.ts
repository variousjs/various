import moment from 'moment'
import 'moment_zhCN'
import { App } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Container from './container'
import Loader from './loader'
import Error from './error'

moment.locale('zh-cn')

if (window.location.hash === '') {
  window.location.hash = '#/'
}

const entry: App<typeof store> = {
  store,
  Container,
  Loader,
  Error,
  actions,
  middlewares: {
    onLoad(e) {
      window.console.log(`${e.name},${e.beenLoaded}`)
    },
    onError(e) {
      window.console.log(`${e.name},${e.errorType}`)
    },
    onMessage(e) {
      if (e.trigger === 'message-f') {
        return { ...e, value: { to: 'changed by middleware' } }
      }
      return true
    },
    async onDispatch(e) {
      if (e.method === 'updateValue') {
        await new Promise((r) => setTimeout(r, 100))
        return { ...e, value: 'changed by middleware' }
      }
      return true
    },
  },
}

export default entry

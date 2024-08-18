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

const middlewares: App['middlewares'] = {
  onLoad(e) {
    window.console.log(`${e.name},${e.beenLoaded}`)
  },
  onError(e) {
    window.console.log(`${e.name},${e.type}`)
  },
  onMessage(e) {
    if (e.event === 'block') {
      window.console.warn('block')
      return false
    }
    if (e.trigger.name === 'message-f') {
      return { ...e, value: { to: 'changed by middleware' } }
    }
    return true
  },
  async onDispatch(e) {
    if (e.action === 'updateValue') {
      await new Promise((r) => setTimeout(r, 100))
      return { ...e, value: 'changed by middleware' }
    }
    if (e.action === 'block') {
      window.console.warn('block')
      return false
    }
    return true
  },
}

const entry: App<typeof store> = {
  store,
  Container,
  Loader,
  Error,
  actions,
  middlewares: window.location.pathname.includes('middlewares.html') ? undefined : middlewares,
}

export default entry

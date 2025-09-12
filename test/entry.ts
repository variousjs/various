import moment from 'moment'
import 'moment_zhCN'
import { App } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Container from './container-node'
import Loader from './loader'
import ErrorNode from './error'
import Zh from './components/i18n/global.json'

declare global {
  interface Window { Cypress: any }
}

moment.locale('zh-cn')

if (window.location.hash === '') {
  window.location.hash = '#/'
}

const middlewares: App['middlewares'] = {
  onLoad(e) {
    if (window.Cypress) {
      window.console.log(`${e.name},${e.beenLoaded}`)
    }
  },
  onError(e) {
    if (window.Cypress) {
      window.console.log(`${e.name},${e.type}`)
    }
  },
  onMessage(e) {
    if (e.event === 'block') {
      if (window.Cypress) {
        window.console.log('block')
      }
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
      if (window.Cypress) {
        window.console.log('block')
      }
      return false
    }
    return true
  },
  onLog(e) {
    if (window.Cypress) {
      window.console.log(e.message)
      return false
    }
    return true
  },
}

const entry: App<typeof store> = {
  store,
  Container,
  Loader,
  Error: ErrorNode,
  actions,
  middlewares: window.location.pathname.includes('middlewares.html') ? undefined : middlewares,
  i18n: window.location.pathname.includes('i18n2.html')
    ? () => ({
      localeKey: 'locale',
      resources: { zh: Zh },
    })
    : async () => {
      await new Promise((r) => setTimeout(r, 0))

      if (window.location.pathname.includes('i18n.html')) {
        throw new Error('get resources error')
      }

      return {
        localeKey: 'locale',
        resources: { zh: Zh },
      }
    },
}

export default entry

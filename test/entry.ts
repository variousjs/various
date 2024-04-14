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
      console.log(e)
    },
    // error(e) {
    //   console.log(e)
    // },
    onMessage(e) {
      if (e.trigger === 'message-f') {
        return false
      }
      return { ...e, event: '!!!' }
    },
    async onDispatch(e) {
      await new Promise((r) => setTimeout(r, 1000))
      console.log(e)
      return true
    },
  },
}

export default entry

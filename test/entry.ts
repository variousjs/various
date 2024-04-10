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
    load(e) {
      console.log(e)
    },
    // error(e) {
    //   console.log(e)
    // },
    async message(e) {
      if (e.component === 'message-f') {
        return false
      }
      await new Promise((r) => setTimeout(r, 1000))
      return { ...e, event: '!!!' }
    },
    async dispatch(e) {
      await new Promise((r) => setTimeout(r, 1000))
      console.log(e)
      return true
    },
  },
}

export default entry

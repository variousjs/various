import moment from 'moment'
import 'moment_zhCN'
import { Entry } from '@variousjs/various'
import actions from './actions'
import store from './store'
import Container from './container'
import Loader from './loader'
import Error from './error'

moment.locale('zh-cn')

if (window.location.hash === '') {
  window.location.hash = '#/'
}

const entry: Entry<typeof store> = {
  store,
  Container,
  Loader,
  Error,
  actions,
  middlewares: {
    // performance(e) {
    //   console.log(e)
    // },
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
      console.log(e)
      return false
    },
  },
}

export default entry

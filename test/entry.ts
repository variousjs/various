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
}

export default entry

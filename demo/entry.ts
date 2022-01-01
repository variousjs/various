import moment from 'moment'
import 'moment_zhCN'

moment.locale('zh-cn')

export { default as actions } from './dispatcher'
export { default as store } from './store'
export { default as Container } from './container'
export { default as Loader } from './loading'
export { default as Error } from './error'

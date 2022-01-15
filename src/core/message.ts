import { dispatch } from './store'
import { MESSAGE_KEY } from '../config'

export const getPostMessage = (type: string) => (name: string, value: any) => dispatch({
  [MESSAGE_KEY]: {
    timestamp: +new Date(),
    type,
    name,
    value,
  },
})

import { OnMessage } from '@variousjs/various'
import { Store } from './types'

const onMessage: OnMessage<Store> = ({ getStore }, message) => {
  console.log(getStore())
  console.log(message)
}

export default onMessage

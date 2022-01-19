import { Message } from '@variousjs/various'
import { dispatch, getStore } from './store'
import { MESSAGE_KEY } from '../config'
import { Connector } from '../types'

type Keys = (keyof Connector.Store)[]
type OnMessage = ((params: Message) => void)

export const getPostMessage = (type: string) => (name: string, value: any) => dispatch({
  [MESSAGE_KEY]: {
    timestamp: +new Date(),
    type,
    name,
    value,
  },
})

export const getOnMessage = (type: string, onMessage: OnMessage) => (keys: Keys) => {
  if (keys[0] === MESSAGE_KEY) {
    const { name, value, type: triggerType } = getStore()[MESSAGE_KEY] as Connector.Message
    if (triggerType !== type) {
      onMessage({ name, value, type: triggerType })
    }
  }
}

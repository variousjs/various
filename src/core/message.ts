import { OnMessage as onMessageListener, Message } from '@variousjs/various'
import { dispatch, getStore } from './store'
import { MESSAGE_KEY } from '../config'
import { Connector } from '../types'

type Keys = (keyof Connector.Store)[]
type OnMessage = onMessageListener<Connector.Store> | ((params: Message) => void)

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
    const { name, value, type: triggerType } = getStore()[MESSAGE_KEY]
    if (triggerType !== type) {
      if (type === 'store') {
        const trigger = onMessage as onMessageListener<Connector.Store>
        trigger({ getStore, dispatch }, { name, value, type: triggerType })
      } else {
        const trigger = onMessage as ((params: Message) => void)
        trigger({ name, value, type: triggerType })
      }
    }
  }
}

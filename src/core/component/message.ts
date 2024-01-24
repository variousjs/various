import { OnMessage, Message } from '@variousjs/various'
import { emit, subscribe } from '../store'
import { MESSAGE_KEY } from '../../config'

export const getPostMessage = (component: string) => (event: string, value?: any) => emit({
  [MESSAGE_KEY]: {
    timestamp: +new Date(),
    component,
    event,
    value,
  },
})

export const getOnMessage = (componentName: string, onMessage: OnMessage) => subscribe({
  [MESSAGE_KEY](v) {
    const { component, value, event } = v as Message
    if (component !== componentName) {
      onMessage({ event, value, component })
    }
  },
})

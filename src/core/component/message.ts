import { emit, subscribe } from '../store'
import { MESSAGE_KEY } from '../../config'
import { Store, MessageInvoker } from '../../types'

export const getPostMessage = (component: string) => (event: string, value: any) => emit({
  [MESSAGE_KEY]: {
    timestamp: +new Date(),
    component,
    event,
    value,
  },
})

export const getOnMessage = (componentName: string, onMessage: MessageInvoker) => subscribe({
  [MESSAGE_KEY](v) {
    const { component, value, event } = v as Store[typeof MESSAGE_KEY]
    if (component !== componentName) {
      onMessage({ event, value, component })
    }
  },
})

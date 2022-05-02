import { MessageInvoker } from '@variousjs/various'
import { emit, getStore } from './store'
import { MESSAGE_KEY } from '../config'
import { Store } from '../types'

export const getPostMessage = (type: string) => (name: string, value: any) => emit({
  [MESSAGE_KEY]: {
    timestamp: +new Date(),
    type,
    name,
    value,
  },
})

export const getOnMessage = (
  type: string,
  onMessage: MessageInvoker,
) => (keys: (keyof Store)[]) => {
  if (keys[0] === MESSAGE_KEY) {
    const { name, value, type: triggerType } = getStore()[MESSAGE_KEY]
    if (triggerType !== type) {
      onMessage({ name: name!, value, type: triggerType! })
    }
  }
}

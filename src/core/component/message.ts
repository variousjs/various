import { OnMessage, Message, createPostMessage as cpm } from '@variousjs/various'
import connector from '../connector'
import { consoleWarn } from '../helper'
import { emit, subscribe } from '../store'
import { MESSAGE_KEY } from '../../config'

export const getPostMessage: typeof cpm = (component) => async (event, value) => {
  const middlewares = connector.getMiddlewares()
  let next = { component, event, value }

  if (middlewares?.message) {
    const check = await middlewares.message(next)

    if (check === false) {
      consoleWarn(component, '[message] blocked by middleware')
      return
    }

    if (check !== true) {
      next = { ...next, ...check }
    }
  }

  emit({
    [MESSAGE_KEY]: {
      timestamp: +new Date(),
      component,
      event: next.event,
      value: next.value,
    },
  })
}

export const getOnMessage = (componentName: string, onMessage: OnMessage) => subscribe({
  [MESSAGE_KEY](v) {
    const { component, value, event } = v as Message
    if (component !== componentName) {
      onMessage({ event, value, component })
    }
  },
})

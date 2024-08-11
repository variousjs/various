import { ModuleDefined, OnMessage, createPostMessage as cpm } from '@variousjs/various'
import connector from '../connector'
import { consoleWarn } from '../helper'
import { emit, subscribe } from '../store'
import { MESSAGE_KEY } from '../../config'

export const getPostMessage: typeof cpm = (moduleDefined) => async (event, value) => {
  const middlewares = connector.getMiddlewares()
  let next = { trigger: moduleDefined, event, value }

  if (middlewares?.onMessage) {
    const check = await middlewares.onMessage(next)

    if (check === false) {
      consoleWarn(moduleDefined, '[message] blocked by middleware')
      return
    }

    if (check !== true) {
      next = { ...next, ...check }
    }
  }

  emit({
    [MESSAGE_KEY]: {
      timestamp: +new Date(),
      event: next.event,
      trigger: moduleDefined,
      value: next.value,
    },
  })
}

export const getOnMessage = (moduleDefined: ModuleDefined, onMessage: OnMessage) => subscribe({
  [MESSAGE_KEY](v) {
    const { trigger, value, event } = v as Parameters<OnMessage>[0]
    if (moduleDefined.name !== trigger.name && moduleDefined.module !== trigger.module) {
      onMessage({ event, value, trigger })
    }
  },
})

import { ModuleDef, OnMessage, createPostMessage as cpm } from '@variousjs/various'
import connector from './connector'
import createLogger from './logger'
import { emit, subscribe } from './store'
import { MESSAGE_KEY } from './config'

export const createPostMessage: typeof cpm<never> = (module) => async ({ event, payload }) => {
  const middlewares = connector.getMiddlewares()
  const logger = createLogger(module)

  let next = { trigger: module, event, payload }

  if (middlewares?.onMessage) {
    const check = await middlewares.onMessage(next)

    if (check === false) {
      logger.warn('blocked by middleware', 'POST_MESSAGE')
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
      trigger: module,
      payload: next.payload,
    },
  })
}

export const createOnMessage = (module: ModuleDef, onMessage: OnMessage) => subscribe({
  [MESSAGE_KEY](v) {
    const { trigger, payload, event } = v!
    if (module !== trigger) {
      onMessage({ event, payload, trigger })
    }
  },
})

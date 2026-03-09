import { createDispatch as cd } from '@variousjs/various'
import connector from './connector'
import { dispatch, emit, getStore } from './store'
import { onError, VariousError } from './helper'
import createLogger from './logger'
import { I18NActions, LOCALE_KEY } from './config'

const createDispatch: typeof cd<never> = (module) => async function (params) {
  const middlewares = connector.getMiddlewares()
  const logger = createLogger(module)

  let { action, payload, target } = params

  if (middlewares?.onDispatch) {
    const check = await middlewares.onDispatch({
      target,
      action,
      payload,
      trigger: module,
    })
    if (check === false) {
      logger.warn('blocked by middleware', 'DISPATCH')
      return Promise.resolve()
    }
    if (check !== true) {
      target = check.target
      action = check.action
      payload = check.payload
    }
  }

  if (target === 'app') {
    const storeActions = connector.getStoreActions()
    const storeAction = storeActions[action]

    if (action === I18NActions.SetLocale) {
      emit({ [LOCALE_KEY]: payload }, true)
      return payload
    }

    if (action === I18NActions.GetLocale) {
      return getStore(LOCALE_KEY)
    }

    if (action === I18NActions.UpdateI18nConfig) {
      const locale = getStore(LOCALE_KEY)

      connector.setGlobalI18nConfig(payload)
      emit({ [LOCALE_KEY]: undefined }, true)
      emit({ [LOCALE_KEY]: locale }, true)
      return payload
    }

    if (!storeAction) {
      const errorMessage = `action "${action}" is not present`
      const error = new VariousError({
        module,
        type: 'DISPATCH',
        originalError: new Error(errorMessage),
      })
      onError(error)
      throw error
    }
    return dispatch(storeAction, payload, module)
  }

  const componentActions = connector.getComponentActions(target)

  if (!componentActions) {
    const errorMessage = 'component is not ready'
    const error = new VariousError({
      module,
      type: 'DISPATCH',
      originalError: new Error(errorMessage),
    })
    onError(error)
    throw error
  }

  const componentAction = componentActions[action]

  if (!componentAction) {
    const errorMessage = `action "${action}" is not present`
    const error = new VariousError({
      module,
      type: 'DISPATCH',
      originalError: new Error(errorMessage),
    })
    onError(error)
    throw error
  }

  return Promise.resolve(componentAction({ payload, trigger: module }))
}

export default createDispatch

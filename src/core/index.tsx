import React, { Component, ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { App, Config } from '@variousjs/various'
import { createStore } from './store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  ROOT,
  MESSAGE_KEY,
  ERROR_TYPE,
  ENV_KEY,
  CONFIG_KEY,
} from '../config'
import connector from './connector'
import { onError } from './helper'
import { Container as ContainerNode } from './default-component'
import { ErrorState, Store } from '../types'

export { getUserStore as getStore } from './store'
export { default as createDispatch } from './component/dispatch'
export { getPostMessage as createPostMessage } from './component/message'

export { default as Nycticorax } from 'nycticorax'

export * from './component'
export { getConfig, getEnv } from './helper'

export default (config: Config & App<Store>) => {
  const {
    dependencies,
    env,
    root,
    store = {},
    actions = {},
    Loader: LoaderComponent,
    Error: ErrorComponent,
    Container: ContainerComponent = ContainerNode,
    middlewares,
    ...rest
  } = config

  if (middlewares) {
    connector.setMiddlewares(middlewares)
  }

  connector.setStoreActions(actions)

  if (LoaderComponent) {
    connector.setLoaderComponent(LoaderComponent)
  }
  if (ErrorComponent) {
    connector.setErrorComponent(ErrorComponent)
  }
  const ErrorNode = connector.getErrorComponent()

  createStore({
    ...store,
    [MOUNTED_COMPONENTS_KEY]: [],
    [ENV_KEY]: (env === 'production' || env === 'development') ? env : 'production',
    [CONFIG_KEY]: rest,
    [DEPENDENCIES_KEY]: dependencies,
    [MESSAGE_KEY]: null,
  })

  class R extends Component<{}, ErrorState> {
    state = {
      errorType: undefined,
      errorMessage: '',
    }

    componentDidCatch(e: Error) {
      onError({
        name: 'container',
        message: e.message,
        type: ERROR_TYPE.APP_ERROR,
      })
      this.setState({ errorType: ERROR_TYPE.APP_ERROR, errorMessage: e.message })
    }

    render() {
      const { errorType, errorMessage } = this.state

      if (errorType) {
        return (
          <ErrorNode
            $type={ERROR_TYPE[errorType]}
            $message={errorMessage}
            $store={store as Store}
          />
        )
      }

      return (
        <ContainerComponent />
      )
    }
  }

  (R as ComponentType).displayName = 'various-container'

  createRoot(document.querySelector(root || ROOT) as Element).render(<R />)
}

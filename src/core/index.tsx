import React, { Component, ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from './store'
import { Container } from './default-component'
import {
  MOUNTED_COMPONENTS_KEY, COMPONENT_PATHS_KEY, ROOT, MESSAGE_KEY, ERROR_TYPE, ENV_KEY, CONFIG_KEY,
} from '../config'
import connector from './connector'
import { onError } from './helper'
import { Entry, ErrorState, Config, Store } from '../types'

export { getUserStore as getStore } from './store'
export { default as createDispatch } from './component/dispatch'
export { getPostMessage as createPostMessage } from './component/message'

export { default as Nycticorax } from 'nycticorax'

export * from './component'
export { getConfig, getEnv } from './helper'

export default (config: Config & Entry<Store>) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dependencies, entry,
    env,
    root,
    components = {},
    store = {},
    actions = {},
    Loader: LoaderComponent,
    Error: ErrorComponent,
    Container: ContainerNode = Container,
    ...rest
  } = config

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
    [COMPONENT_PATHS_KEY]: components,
    [MESSAGE_KEY]: {},
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
        type: ERROR_TYPE.CONTAINER_ERROR,
      })
      this.setState({ errorType: ERROR_TYPE.CONTAINER_ERROR, errorMessage: e.message })
    }

    render() {
      const { errorType, errorMessage } = this.state

      if (errorType) {
        return (
          <ErrorNode
            $type={ERROR_TYPE[errorType]}
            $message={errorMessage}
            $store={store}
          />
        )
      }

      return (
        <ContainerNode />
      )
    }
  }

  (R as ComponentType).displayName = 'various-container'

  createRoot(document.querySelector(root || ROOT) as Element).render(<R />)
}

import React, { Component, ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { App, Config, VariousError as ve } from '@variousjs/various'
import { createStore } from './store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  ROOT,
  MESSAGE_KEY,
  ENV_KEY,
  CONFIG_KEY,
} from '../config'
import connector from './connector'
import { onError, VariousError } from './helper'
import { Container as ContainerNode } from './default-component'
import { Store } from '../types'

export { default as Nycticorax } from 'nycticorax'

export { getUserStore as getStore } from './store'
export { default as createDispatch } from './component/dispatch'
export { getPostMessage as createPostMessage } from './component/message'

export {
  getConfig,
  getEnv,
  preloadPackages,
  isModuleLoaded,
  getMountedComponents,
  onComponentMounted,
} from './helper'

export { default as createModule } from './create-module'
export { default as createComponent } from './create-component'
export { default as renderComponent } from './render-component'

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

  class R extends Component<{}, { isError: boolean }> {
    private error?: ve

    state = {
      isError: false,
    }

    componentDidCatch(e: Error) {
      const error = new VariousError({
        name: 'app',
        type: 'APP_ERROR',
        originalError: e,
      })
      onError(error)
      this.error = error
      this.setState({ isError: true })
    }

    render() {
      const { isError } = this.state

      if (isError) {
        return (
          <ErrorNode
            $name="app"
            $error={this.error!}
            $store={store as Store}
          />
        )
      }

      return (
        <ContainerComponent />
      )
    }
  }

  (R as ComponentType).displayName = 'various-app'

  createRoot(document.querySelector(root || ROOT) as Element).render(<R />)
}

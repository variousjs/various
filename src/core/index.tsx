import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { App, Config } from '@variousjs/various'
import { createStore } from './store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  ROOT,
  MESSAGE_KEY,
  CONFIG_KEY,
} from './config'
import connector from './connector'
import { createI18nConfig } from './i18n'
import { Container as ContainerNode } from './default-component'
import ErrorBoundary from './error-boundary'
import { Store } from '../types'

export { default as Nycticorax } from 'nycticorax'

export { getUserStore as getStore } from './store'
export { default as createDispatch } from './dispatch'
export { createPostMessage } from './message'
export { default as createLogger } from './logger'

export {
  getConfig,
  preloadModules,
  isModuleLoaded,
  getMountedComponents,
  onComponentMounted,
  defineDependencies,
} from './helper'

export { default as createModule } from './create-module'
export { default as createComponent } from './create-component'
export { default as renderComponent } from './render-component'

// eslint-disable-next-line no-undef
export const version = VERSION

export default (config: Config & App<Store>) => {
  const {
    dependencies,
    root,
    store = {},
    actions = {},
    Loader: LoaderComponent,
    Error: ErrorComponent,
    Container: ContainerComponent = ContainerNode,
    middlewares,
    i18n,
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

  createStore({
    ...store,
    [MOUNTED_COMPONENTS_KEY]: [],
    [CONFIG_KEY]: rest,
    [DEPENDENCIES_KEY]: dependencies,
    [MESSAGE_KEY]: null,
  })

  ContainerComponent.displayName = 'various-container'

  class R extends Component<{}, { isError: boolean }> {
    static displayName = 'various-app'

    componentDidMount() {
      createI18nConfig(i18n)
    }

    render() {
      return (
        <ErrorBoundary name="app">
          <ContainerComponent />
        </ErrorBoundary>
      )
    }
  }

  createRoot(document.querySelector(root || ROOT) as Element).render(<R />)
}

import React, { Component } from 'react'
import { App, Config } from '@variousjs/various'
import { createStore } from './store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  MESSAGE_KEY,
  CONFIG_KEY,
} from './config'
import connector from './connector'
import { createI18nConfig } from './i18n'
import { Root as RootComponent } from './default-component'
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
  removeLoadedModules,
} from './helper'

export { default as createModule } from './create-module'
export { default as createComponent } from './create-component'
export { default as renderComponent } from './render-component'

// eslint-disable-next-line no-undef
export const version = VERSION

export const getApp = (config: Config & App<Store>) => {
  const {
    dependencies,
    store = {},
    actions = {},
    Fallback,
    ErrorFallback,
    Root = RootComponent,
    middlewares,
    i18n,
    ...rest
  } = config

  if (middlewares) {
    connector.setMiddlewares(middlewares)
  }

  connector.setStoreActions(actions)

  if (Fallback) {
    connector.setFallbackComponent(Fallback)
  }
  if (ErrorFallback) {
    connector.setErrorFallbackComponent(ErrorFallback)
  }

  createStore({
    ...store,
    [MOUNTED_COMPONENTS_KEY]: [],
    [CONFIG_KEY]: rest,
    [DEPENDENCIES_KEY]: dependencies,
    [MESSAGE_KEY]: null,
  })

  Root.displayName = 'various-app-root'

  return class extends Component {
    static displayName = 'various-app'

    componentDidMount() {
      createI18nConfig(i18n)
    }

    render() {
      return (
        <ErrorBoundary name="app" url={dependencies.app}>
          <Root />
        </ErrorBoundary>
      )
    }
  }
}

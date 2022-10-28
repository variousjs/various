import React, { ComponentType, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from './store'
import { Loader, Error, Container } from './built-in'
import createComponent from './create-component'
import { MOUNTED_COMPONENTS_KEY, COMPONENT_PATHS_KEY, ROOT, MESSAGE_KEY, ERROR_TYPE, ENV_KEY, CONFIG_KEY } from '../config'
import onError from './error'
import { Entry, ErrorState, Config, ComponentDispatcher } from '../types'

export { default as Store } from 'nycticorax'
export { isComponentLoaded, getMountedComponents, preloadComponents, onComponentMounted } from './component-helper'

export default (config: Config & Entry) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dependencies, entry,
    env = 'production',
    root,
    components = {},
    store = {},
    actions = {},
    Loader: LoaderNode = Loader,
    Error: ErrorNode = Error,
    Container: ContainerNode = Container,
    ...rest
  } = config
  const componentDispatcher: Record<string, ComponentDispatcher> = {}
  const storeDispatcher = { ...actions }
  const COMPONENTS: Record<string, ComponentType> = {}

  createStore({
    ...store,
    [MOUNTED_COMPONENTS_KEY]: [],
    [ENV_KEY]: env === 'production' || env === 'development' ? env : 'production',
    [CONFIG_KEY]: rest,
    [COMPONENT_PATHS_KEY]: components,
    [MESSAGE_KEY]: {},
  })

  const componentCreator = (
    name: string,
    onMounted?: () => void,
  ) => {
    const C = createComponent({
      name,
      storeDispatcher,
      componentDispatcher,
      Loader: LoaderNode,
      Error: ErrorNode,
      onMounted,
    })

    return (props: any) => (<C {...props} />)
  }

  const $component = (nameWidthSub: string) => {
    const [name] = nameWidthSub.split('.')
    if (!components[name]) {
      const errorMessage = 'component not defined'
      onError({
        name: nameWidthSub,
        message: errorMessage,
        type: 'NOT_DEFINED',
      })
      return () => (
        <ErrorNode
          $message={errorMessage}
          $type={ERROR_TYPE.NOT_DEFINED}
          $env={env}
          $store={store}
          $config={rest}
        />
      )
    }
    if (COMPONENTS[nameWidthSub]) {
      return COMPONENTS[nameWidthSub]
    }
    const component = componentCreator(nameWidthSub)
    COMPONENTS[nameWidthSub] = component
    return component
  }

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
            $env={env}
            $store={store}
            $config={rest}
          />
        )
      }

      return (
        <ContainerNode
          $component={$component}
          $config={rest}
          $env={env}
        />
      )
    }
  }

  createRoot(document.querySelector(root || ROOT) as Element).render(<R />)
}

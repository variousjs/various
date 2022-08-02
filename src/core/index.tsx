import React, { ComponentType, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from './store'
import { Loader, Error, Container } from './built-in'
import createComponent from './create-component'
import { MOUNTED_COMPONENTS, ROOT_CONTAINER, MESSAGE_KEY, ERROR_TYPE } from '../config'
import getConsole from './console'
import { Entry, ErrorState, Config, ComponentDispatcher } from '../types'

export { default as Store } from 'nycticorax'
export { isComponentLoaded, getMountedComponents, preloadComponents } from './component-helper'

export default (config: Config & Entry) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dependencies, entry,
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
  const console = getConsole()

  createStore({
    ...store,
    [MOUNTED_COMPONENTS]: [],
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
      config: { ...rest, components },
      onMounted,
    })

    return (props: Record<string, any>) => (<C {...props} />)
  }

  const $component = (nameWidthSub: string) => {
    const [name] = nameWidthSub.split('.')
    if (!components[name]) {
      const errorMessage = 'component not defined'

      console.error(`[${ERROR_TYPE.INVALID_COMPONENT}] ${errorMessage}`, nameWidthSub)
      return () => (
        <ErrorNode $message={errorMessage} $type={ERROR_TYPE.NOT_DEFINED} />
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
      console.error(`[${ERROR_TYPE.CONTAINER_ERROR}] ${e.message}`, 'container')
      this.setState({ errorType: ERROR_TYPE.CONTAINER_ERROR, errorMessage: e.message })
    }

    render() {
      const { errorType, errorMessage } = this.state

      if (errorType) {
        return (
          <ErrorNode
            $type={ERROR_TYPE[errorType]}
            $message={errorMessage}
          />
        )
      }

      return (
        <ContainerNode
          $component={$component}
          $config={rest}
        />
      )
    }
  }

  createRoot(document.querySelector(root || ROOT_CONTAINER) as Element).render(<R />)
}

import React, { ComponentType, Component } from 'react'
import { render } from 'react-dom'
import { createStore } from './store'
import { Loader, Error, Container } from './built-in'
import createComponent from './create-component'
import {
  MOUNTED_COMPONENTS,
  ROOT_CONTAINER,
  MESSAGE_KEY,
  ERROR_TYPE,
} from '../config'
import {
  Entry,
  ErrorState,
  Config,
  Connector,
} from '../types'

export { default as Store } from 'nycticorax'

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
  const componentDispatcher: { [name: string]: Entry['actions'] } = {}
  const storeDispatcher = { ...actions }
  const COMPONENTS: { [key: string]: ComponentType } = {}

  createStore({
    ...store,
    [MOUNTED_COMPONENTS]: [],
    [MESSAGE_KEY]: {} as Connector.Message,
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

    return (props: { [key: string]: any }) => (<C {...props} />)
  }

  const $component = (nameWidthSub: string) => {
    const [name] = nameWidthSub.split('.')
    if (!components[name]) {
      return () => (
        <ErrorNode message="Component not defined" type={ERROR_TYPE.NOT_DEFINED} />
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
      this.setState({ errorType: ERROR_TYPE.CONTAINER_ERROR, errorMessage: e.message })
    }

    render() {
      const { errorType, errorMessage } = this.state

      if (errorType) {
        return (
          <ErrorNode
            type={ERROR_TYPE[errorType]}
            message={errorMessage}
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

  render((<R />), document.querySelector(root || ROOT_CONTAINER))
}

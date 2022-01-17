import React, { ComponentType, Component } from 'react'
import { render } from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { createStore } from './store'
import Routes from './routes'
import { Loader, Error, Container } from './built-in'
import createComponent from './create-component'
import {
  MOUNTED_COMPONENTS,
  ERROR_TYPE,
  ROOT_CONTAINER,
  MESSAGE_KEY,
} from '../config'
import {
  Entry,
  ErrorState,
  ComponentProps,
  Config,
  Connector,
} from '../types'

export { default as Store } from 'nycticorax'
export const Router = Routes
export {
  Route,
  Link,
  generatePath,
  Redirect,
  Prompt,
  NavLink,
  matchPath,
  Switch,
} from 'react-router-dom'

export default (config: Config & Entry) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dependencies, entry,
    routerMode,
    root,
    components = {},
    store = {},
    actions = {},
    Loader: LoaderNode = Loader,
    Error: ErrorNode = Error,
    Container: ContainerNode = Container,
    ...rest
  } = config
  const RouterMode: typeof HashRouter = routerMode === 'browser' ? BrowserRouter : HashRouter
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
    routerProps?: ComponentProps['$router'] | {},
    onMounted?: () => void,
  ) => {
    const C = createComponent({
      name,
      storeDispatcher,
      componentDispatcher,
      Loader: LoaderNode,
      Error: ErrorNode,
      config: { ...rest, components },
      routerProps,
      onMounted,
    })

    return (props: { [key: string]: any }) => (<C {...props} />)
  }

  const $component = (nameWidthSub: string) => {
    const [name] = nameWidthSub.split('.')
    if (!components[name]) {
      return () => (
        <ErrorNode type={ERROR_TYPE.NOT_DEFINED} />
      )
    }
    if (COMPONENTS[name]) {
      return COMPONENTS[name]
    }
    const component = componentCreator(nameWidthSub)
    COMPONENTS[name] = component
    return component
  }

  class R extends Component<{}, ErrorState> {
      state = {
        errorType: undefined,
        errorMessage: '',
      }

      componentDidCatch(e: Error) {
        this.setState({ errorType: 'CONTAINER_ERROR', errorMessage: e.message })
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

  render((
    <RouterMode>
      <R />
    </RouterMode>
  ), document.querySelector(root || ROOT_CONTAINER))
}

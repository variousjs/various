import React, { ComponentType, Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import {
  RouteComponentProps,
  HashRouter,
  BrowserRouter,
  withRouter,
} from 'react-router-dom'
import {
  createStore,
  connect,
  dispatch,
  subscribe,
  getStore,
} from './store'
import Routes from './routes'
import { Loader, Error, Container } from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import { getPostMessage, getOnMessage } from './message'
import preload from './preload'
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
  ContainerProps,
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
    onMessage = () => null,
    Loader: LoaderNode = Loader,
    Error: ErrorNode = Error,
    Container: ContainerNode = Container,
    ...rest
  } = config
  const RouterMode: typeof HashRouter = routerMode === 'browser' ? BrowserRouter : HashRouter
  // const storeKeys = Object.keys(store)
  const storeKeys = [] as string[]
  const componentDispatcher: { [name: string]: Entry['actions'] } = {}
  const storeDispatcher = { ...actions }
  const COMPONENTS: { [key: string]: ComponentType } = {}
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)

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

  const $render: ContainerProps['$render'] = ({
    name,
    url,
    target,
    props,
    module,
    onMounted,
  }) => {
    if (url) {
      window.requirejs.undef(name)
      window.requirejs.config({
        paths: {
          [name]: `${url}#`,
        },
      })
    }

    const C = componentCreator(
      module ? `${name}.${module}` : name,
      {},
      onMounted,
    )
    render(<C {...props} />, target)
    return () => unmountComponentAtNode(target as Element)
  }

  class R extends Component<Entry['store'] & RouteComponentProps & { dispatch: Connector.dispatch }, ErrorState> {
      state = {
        errorType: undefined,
        errorMessage: '',

        stateStore: getStore(),
      }

      private unsubscribe: () => void

      dispatch = currentDispatch.bind(this, 'store')

      postMessage = getPostMessage('store')

      componentDidMount() {
        this.unsubscribe = subscribe(getOnMessage('store', onMessage))
      }

      componentDidCatch(e: Error) {
        this.setState({ errorType: 'CONTAINER_ERROR', errorMessage: e.message })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const { errorType, errorMessage, stateStore } = this.state
        const {
          history,
          location,
          match,
          staticContext,
        } = this.props

        if (errorType) {
          return (
            <ErrorNode
              type={ERROR_TYPE[errorType]}
              message={errorMessage}
            />
          )
        }

        const storeData: Entry['store'] = {}

        storeKeys.forEach((key) => {
          storeData[key] = this.props[key]
        })

        return (
          <ContainerNode
            $component={$component}
            $render={$render}
            $config={rest}
            $dispatch={this.dispatch}
            // $store={storeData}
            $store={stateStore}
            $preload={preload}
            $router={{
              history,
              location,
              match,
              staticContext,
            }}
            $postMessage={this.postMessage}
          />
        )
      }
  }

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  const RwithRouter = withRouter(R)
  const X = connect(key0, ...keyn)(RwithRouter as any)

  render((
    <RouterMode>
      <X />
    </RouterMode>
  ), document.querySelector(root || ROOT_CONTAINER))
}

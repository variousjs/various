import React, { ComponentType } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import {
  RouteComponentProps,
  HashRouter,
  Switch,
  BrowserRouter,
  withRouter,
} from 'react-router-dom'
import { Config } from '@variousjs/various'
import { createStore, connect, dispatch } from './store'
import Routes from './routes'
import { Loader, Error, Container } from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import preload from './preload'
import { MOUNTED_COMPONENTS, ERROR_TYPE, ROOT_CONTAINER } from '../config'
import {
  RequireJsError,
  RequireError,
  Entry,
  ErrorState,
  ComponentProps,
  ContainerProps,
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
} from 'react-router-dom'

export default (config: Config & Entry, ctx: { onError: RequireJsError }) => {
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
  const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
  const componentDispatcher: { [name: string]: Entry['actions'] } = {}
  const storeDispatcher = { ...actions }
  const COMPONENTS: { [key: string]: ComponentType } = {}
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)

  createStore({
    ...store,
    [MOUNTED_COMPONENTS]: [],
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

  class R extends React.Component<Entry['store'] & RouteComponentProps & {
      dispatch: typeof dispatch,
      [MOUNTED_COMPONENTS]: string[],
    }, ErrorState> {
      state = {
        errorType: undefined,
        errorMessage: '',
      }

      dispatch = currentDispatch.bind(this, 'store')

      componentDidCatch(e: Error) {
        this.setState({ errorType: 'CONTAINER_ERROR', errorMessage: e.message })
      }

      render() {
        const { errorType, errorMessage } = this.state
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
          if (key !== MOUNTED_COMPONENTS) {
            storeData[key] = this.props[key]
          }
        })

        const mounted = this.props[MOUNTED_COMPONENTS]

        return (
          <ContainerNode
            $component={$component}
            $render={$render}
            $mounted={mounted}
            $config={rest}
            $dispatch={this.dispatch}
            $store={storeData}
            $preload={preload}
            $router={{
              history,
              location,
              match,
              staticContext,
            }}
          />
        )
      }
  }

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  const RwithRouter = withRouter(R)
  const X = connect(key0, ...keyn)(RwithRouter as any)

  try {
    render((
      <RouterMode>
        <Switch>
          <X />
        </Switch>
      </RouterMode>
    ), document.querySelector(root || ROOT_CONTAINER))
  } catch (e) {
    ctx.onError(e as RequireError)
  }
}

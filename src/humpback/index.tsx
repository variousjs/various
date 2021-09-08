/* eslint-disable react/destructuring-assignment */
import { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import getRoutes from './routes'
import getBuiltIn from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import preload from './preload'
import { MOUNTED_COMPONENTS, ERROR_TYPE, ROOT_CONTAINER } from '../config'
import {
  Dependency,
  HumpbackConfig,
  Entry,
  ErrorState,
  Connector,
  ComponentProps,
  ContainerProps,
} from '../types'

export default (
  React: Dependency.React,
  ReactDOM: Dependency.ReactDOM,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  Nycticorax: Dependency.Nycticorax,
) => {
  const { render, unmountComponentAtNode } = ReactDOM
  const {
    HashRouter,
    Switch,
    BrowserRouter,
    withRouter,
  } = ReactRouterDOM
  const nycticorax = new Nycticorax<Connector.Store>()
  const { createStore, connect, dispatch } = nycticorax
  const { Loader, Error, Container } = getBuiltIn(React)

  return (config: HumpbackConfig & Entry, ctx: { onError: Dependency.RequireJsError }) => {
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
    const Router: Dependency.ReactRouterDOM['HashRouter'] = routerMode === 'browser' ? BrowserRouter : HashRouter
    const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
    const componentDispatcher: { [name: string]: Entry['actions'] } = {}
    const storeDispatcher = { ...actions }
    const COMPONENTS: { [key: string]: ComponentType } = {}
    const Routes = getRoutes(React, ReactRouterDOM, ErrorNode)
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
        React,
        ReactDOM,
        ReactRouterDOM,
        nycticorax,
      }, {
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
          <ErrorNode type={ERROR_TYPE.NOT_DEFINED as 'NOT_DEFINED'} />
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
        errorType: '',
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
            Router={Routes}
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
        <Router>
          <Switch>
            <X />
          </Switch>
        </Router>
      ), document.querySelector(root || ROOT_CONTAINER))
    } catch (e) {
      ctx.onError(e as Dependency.RequireError)
    }
  }
}

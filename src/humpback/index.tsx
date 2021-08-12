/* eslint-disable react/destructuring-assignment */
import { ComponentType } from 'react'
import getRoutes from './routes'
import getBuiltIn from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import { MOUNTED_COMPONENTS, ERROR_TYPE, ROOT_CONTAINER } from '../config'
import {
  Dependency, HumpbackConfig, Entry, ErrorState, Connector, ComponentProps, ContainerProps,
} from '../types'

export default (
  React: Dependency.React,
  ReactDOM: Dependency.ReactDOM,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  Nycticorax: Dependency.Nycticorax,
) => {
  const { render, unmountComponentAtNode } = ReactDOM
  const { HashRouter, Switch, BrowserRouter } = ReactRouterDOM
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
    const Routes = getRoutes(React, ErrorNode)
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

    const $component = (name: string) => {
      if (!components[name]) {
        return () => (
          <ErrorNode type={ERROR_TYPE.NOT_DEFINED as 'NOT_DEFINED'} />
        )
      }
      if (COMPONENTS[name]) {
        return COMPONENTS[name]
      }
      const component = componentCreator(name)
      COMPONENTS[name] = component
      return component
    }

    const $render: ContainerProps['$render'] = ({
      name,
      url,
      target,
      props,
      onMounted,
    }) => {
      const unMount = () => unmountComponentAtNode(target as Element)

      const key = `${name}+${url}`
      if (COMPONENTS[key]) {
        const C = COMPONENTS[key]
        render(<C {...props} />, target)
        return unMount
      }

      if (!components[name] && !url) {
        const C = () => (
          <ErrorNode type={ERROR_TYPE.NOT_DEFINED as 'NOT_DEFINED'} />
        )
        render(<C />, target)
        return unMount
      }

      if (url) {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: `${url}#`,
          },
        })
      }

      const C = componentCreator(name, {}, onMounted)
      COMPONENTS[key] = C
      render(<C {...props} />, target)

      return unMount
    }

    class R extends React.Component<Entry['store'] & {
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
          />
        )
      }
    }

    // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
    const [key0, ...keyn] = storeKeys
    const X = connect(key0, ...keyn)(R)

    try {
      render((
        <Router>
          <Switch>
            <X />
          </Switch>
        </Router>
      ), document.querySelector(root || ROOT_CONTAINER))
    } catch (e) {
      ctx.onError(e)
    }
  }
}

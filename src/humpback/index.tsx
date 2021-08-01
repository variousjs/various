/* eslint-disable react/destructuring-assignment */
import { ComponentType } from 'react'
import getRoutes from './routes'
import getBuiltIn from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import { MOUNTED_COMPONENTS, ERROR_TYPE, ROOT_CONTAINER } from '../config'
import {
  Dependency, HumpbackConfig, Entry, ErrorState, Store, ErrorType,
} from '../types'

export default (
  React: Dependency.React,
  ReactDOM: Dependency.ReactDOM,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  Nycticorax: Dependency.Nycticorax,
) => {
  const { render } = ReactDOM
  const { HashRouter, Switch, BrowserRouter } = ReactRouterDOM
  const nycticorax = new Nycticorax<Store>()
  const { createStore, connect, dispatch } = nycticorax
  const { Loader, Error, Container } = getBuiltIn(React)

  return (config: HumpbackConfig & Entry, ctx: { onError: Dependency.RequireJsError }) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      dependencies,
      components = {},
      store = {},
      actions = {},
      Loader: L = Loader,
      Error: E = Error,
      Container: C = Container,
      ...rest
    } = config
    const Router: Dependency.ReactRouterDOM['HashRouter'] = rest.routerMode === 'browser' ? BrowserRouter : HashRouter
    const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
    const componentDispatcher: { [name: string]: Entry['actions'] } = {}
    const storeDispatcher = { ...actions }
    const COMPONENTS: { [key: string]: ComponentType } = {}
    const Routes = getRoutes(React, E)
    const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)

    createStore({
      ...store,
      [MOUNTED_COMPONENTS]: [],
    })

    Object.keys(components).forEach((name) => {
      const R = createComponent({
        React,
        ReactRouterDOM,
        nycticorax,
      }, {
        name,
        storeDispatcher,
        componentDispatcher,
        Loader: L,
        Error: E,
        config: { ...rest, components },
      })
      // eslint-disable-next-line react/jsx-props-no-spreading
      COMPONENTS[name] = (props) => (<R {...props} />)
    })

    const componentCreator = (name: string) => {
      if (COMPONENTS[name]) {
        return COMPONENTS[name]
      }
      return () => (<E type={ERROR_TYPE.NOT_DEFINED} />)
    }

    class R extends React.Component<Entry['store'] & {
      dispatch: typeof dispatch,
      [MOUNTED_COMPONENTS]: string[],
    }, ErrorState> {
      state = {
        errorType: '',
        errorMessage: '',
      }

      dispatch = currentDispatch.bind(this, 'global')

      componentDidCatch(e: Error) {
        this.setState({ errorType: 'CONTAINER_ERROR', errorMessage: e.message })
      }

      render() {
        const { errorType, errorMessage } = this.state

        if (errorType) {
          return (
            <E type={ERROR_TYPE[errorType as ErrorType]} message={errorMessage} />
          )
        }

        const storeData: Entry['store'] = {}

        storeKeys.forEach((key) => {
          if (key !== MOUNTED_COMPONENTS) {
            storeData[key] = this.props[key]
          }
        })

        const mounted = this.props[MOUNTED_COMPONENTS] as string[]

        return (
          <C
            Router={Routes}
            $component={componentCreator}
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
      ), document.querySelector(rest.root || ROOT_CONTAINER))
    } catch (e) {
      ctx.onError(e)
    }
  }
}

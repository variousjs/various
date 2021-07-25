/* eslint-disable react/destructuring-assignment */
import { ComponentType } from 'react'
import getRoutes from './routes'
import getBuiltIn from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import { MOUNTED_COMPONENTS, ERRORS, ROOT_CONTAINER } from '../config'
import {
  Ny, Rrd, Config, Entry, State, OnError, Store,
} from '../types'

export default (
  React: typeof window.React,
  ReactDOM: typeof window.ReactDOM,
  ReactRouterDOM: Rrd,
  Nycticorax: Ny,
) => {
  const { render } = ReactDOM
  const { HashRouter, Switch, BrowserRouter } = ReactRouterDOM
  const nycticorax = new Nycticorax<Store>()
  const { createStore, connect, dispatch } = nycticorax
  const { Loader, Error, Container } = getBuiltIn(React)

  return (config: Config & Entry, ctx: { onError: OnError }) => {
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
    const Router: Rrd['HashRouter'] = rest.routerMode === 'browser' ? BrowserRouter : HashRouter
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
      return () => (<E type={ERRORS.NOT_DEFINED} />)
    }

    class R extends React.Component<Entry['store'] & {
      dispatch: typeof dispatch,
      [MOUNTED_COMPONENTS]: string[],
    }, State> {
      state = {
        errorCode: '',
        errorMessage: '',
      }

      dispatch = currentDispatch.bind(this, 'global')

      componentDidCatch(e: Error) {
        this.setState({ errorCode: 'CONTAINER_ERROR', errorMessage: e.message })
      }

      render() {
        const { errorCode, errorMessage } = this.state

        if (errorCode) {
          return (<E type={ERRORS[errorCode as keyof typeof ERRORS]} message={errorMessage} />)
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

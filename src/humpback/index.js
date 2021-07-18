import getRoutes from './routes'
import getBuiltIn from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import { MOUNTED_COMPONENTS, ERRORS, ROOT_CONTAINER } from '../config'

export default (React, ReactDOM, ReactRouterDOM, Nycticorax) => {
  const { render } = ReactDOM
  const { HashRouter, Switch, BrowserRouter } = ReactRouterDOM
  const nycticorax = new Nycticorax()
  const { createStore, connect, dispatch } = nycticorax
  const { Loader, Error, Container } = getBuiltIn(React)

  return (config, ctx) => {
    const {
      dependencies,
      components,
      store = {},
      actions = {},
      Loader: L = Loader,
      Error: E = Error,
      Container: C = Container,
      ...rest
    } = config
    const Router = rest.routerMode === 'browser' ? BrowserRouter : HashRouter
    const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
    const componentDispatcher = {}
    const storeDispatcher = { ...actions }
    const COMPONENTS = {}
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
        Loading: L,
        Error: E,
        config: { ...rest, components },
      })
      // eslint-disable-next-line react/jsx-props-no-spreading
      COMPONENTS[name] = (props) => (<R {...props} />)
    })

    const componentCreator = (name) => {
      if (COMPONENTS[name]) {
        return COMPONENTS[name]
      }
      return () => (<E type={ERRORS[0]} />)
    }

    class R extends React.Component {
      state = {
        errorCode: undefined,
        errorMessage: undefined,
      }

      dispatch = currentDispatch.bind(this, 'global')

      componentDidCatch(e) {
        this.setState({ errorCode: 4, errorMessage: e.message })
      }

      render() {
        const { errorCode, errorMessage } = this.state

        if (errorCode) {
          return (<E type={ERRORS[errorCode]} message={errorMessage} />)
        }

        const storeData = {}

        storeKeys.forEach((key) => {
          if (key !== MOUNTED_COMPONENTS) {
            storeData[key] = this.props[key]
          }
        })

        return (
          <C
            Router={Routes}
            $component={componentCreator}
            $mounted={this.props[MOUNTED_COMPONENTS]}
            $config={rest}
            $dispatch={this.dispatch}
            $store={storeData}
          />
        )
      }
    }

    const X = connect(...storeKeys)(R)

    try {
      render((
        <Router>
          <Switch>
            <X />
          </Switch>
        </Router>
      ), document.querySelector(rest.root || ROOT_CONTAINER))
    } catch (e) {
      ctx.errorFn(e)
    }
  }
}

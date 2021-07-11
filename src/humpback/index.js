import getRoutes from './routes'
import getBuiltIn from './built-in'
import createComponent from './create-component'
import getDispatch from './dispatch'
import { MOUNTED_COMPONENTS } from '../config'

export default (React, ReactDOM, ReactRouterDOM, Nycticorax) => {
  const { render } = ReactDOM
  const { HashRouter: Router, Switch } = ReactRouterDOM
  const nycticorax = new Nycticorax()
  const { createStore, connect, dispatch } = nycticorax
  const { Loading, Error, Container } = getBuiltIn(React)

  return (config) => {
    const {
      dependencies,
      components,
      store = {},
      dispatcher = {},
      loading: L = Loading,
      error: E = Error,
      container: C = Container,
      ...rest
    } = config
    const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
    const componentDispatcher = {}
    const storeDispatcher = { ...dispatcher }
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
      return () => (<E error="Component undefined" />)
    }

    class R extends React.Component {
      state = {
        error: undefined,
      }

      dispatch = currentDispatch.bind(this, 'global')

      componentDidCatch(e) {
        this.setState({ error: e.message || 'Container Error' })
      }

      render() {
        const { error } = this.state

        if (error) {
          return (<E error={error} />)
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

    render((
      <Router>
        <Switch>
          <X />
        </Switch>
      </Router>
    ), document.querySelector('#root'))
  }
}

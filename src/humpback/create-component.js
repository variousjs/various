import getDispatch from './dispatch'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS } from '../config'

export default function ({
  React,
  ReactRouterDOM,
  nycticorax,
},{
  config,
  name,
  storeDispatcher,
  componentDispatcher,
  Loading,
  Error,
}) {
  const { withRouter } = ReactRouterDOM
  const { connect, getStore, dispatch } = nycticorax
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)
  const { components, dependencies, ...rest } = config

  class R extends React.Component {
    state = {
      component: undefined,
      error: undefined,
    }

    dispatch = currentDispatch.bind(this, name)

    componentDidMount() {
      this.mountComponent()
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Component Error' })
    }

    componentWillUnmount() {
      let mountedComponents = getStore()[MOUNTED_COMPONENTS]
      mountedComponents = mountedComponents.filter((item) => item !== name)
      dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[name]
    }

    mountComponent = () => {
      window.requirejs([name], (C) => {
        if (!C) {
          this.setState({ error: 'Component Name Error' })
          return
        }

        const mountedComponents = getStore()[MOUNTED_COMPONENTS]
        const actions = {}

        if (!mountedComponents.includes(name)) {
          mountedComponents.push(name)
        }

        Object
          .getOwnPropertyNames(C)
          .forEach((method) => {
            if (!IGNORE_STATIC_METHODS.includes(method) && typeof C[method] === 'function') {
              actions[method] = C[method]
            }
          })

        componentDispatcher[name] = actions // eslint-disable-line no-param-reassign

        this.setState({ component: C.default || C }, () => {
          dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
        })
      }, (e) => {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: `${components[name]}#`,
          },
        })
        this.setState({ error: e.message || 'Component Load Error' })
      })
    }

    onReload = () => {
      this.setState({ component: undefined, error: undefined }, () => {
        this.mountComponent()
      })
    }

    render() {
      const {
        history,
        location,
        match,
        staticContext,

        // eslint-disable-next-line react/prop-types
        MOUNTED_COMPONENTS: mountedComponents, silent, ...propsRest
      } = this.props
      const { component: C, error } = this.state
      const store = {}
      const componentProps = {}

      if (error) {
        return !silent
          ? (
            <Error error={error} reload={this.onReload} />
          )
          : null
      }

      if (!C) {
        return !silent
          ? (
            <Loading />
          )
          : null
      }

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS) {
          store[key] = this.props[key]
          delete this.props[key]
        }
      })

      Object.keys(propsRest).forEach((key) => {
        if (store[key] !== propsRest[key]) {
          componentProps[key] = propsRest[key]
        }
      })

      return (
        <div>
          <C
            // eslint-disable-next-line react/jsx-props-no-spreading
            // {...propsRest}
            {...componentProps}
            config={rest}
            mountedComponents={mountedComponents}
            store={store}
            dispatch={this.dispatch}
            history={history}
            location={location}
            match={match}
          />
        </div>
      )
    }
  }

  return connect(...storeKeys)(withRouter(R))
}

import getDispatch from './dispatch'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS, ERRORS } from '../config'

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
      errorCode: undefined,
      errorMessage: undefined,
    }

    dispatch = currentDispatch.bind(this, name)

    componentDidMount() {
      this.mountComponent()
    }

    componentDidCatch(e) {
      this.setState({ errorCode: 'SCRIPT_ERROR', errorMessage: e.message })
      window.requirejs.undef(name)
      window.requirejs.config({
        paths: {
          [name]: `${components[name]}#`,
        },
      })
      this.unMountComponent()
    }

    componentWillUnmount() {
      this.unMountComponent()
    }

    unMountComponent = () => {
      let mountedComponents = getStore()[MOUNTED_COMPONENTS]
      mountedComponents = mountedComponents.filter((item) => item !== name)
      dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[name]
    }

    mountComponent = () => {
      try {
        const { registry, urlFetched } = window.requirejs.s.contexts._
        Object.keys(registry).forEach((key) => {
          if (registry[key].error) {
            delete urlFetched[registry[key].map.url]
            delete registry[key]
          }
        })
      } catch (e) {
        // ignore
      }

      window.requirejs([name], (C) => {
        if (!C) {
          this.setState({ errorCode: 'COMPONENT_NAME_ERROR' })
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

        const [module] = e.requireModules

        this.setState({
          errorCode: module === name ? 'LOADING_ERROR' : 'DEPENDENCIES_LOADING_ERROR',
          errorMessage: e.message,
        })
      })
    }

    onReload = () => {
      this.setState({
        component: undefined,
        errorCode: undefined,
        errorMessage: undefined,
      }, () => {
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
      const { component: C, errorMessage, errorCode } = this.state
      const store = {}
      const componentProps = {}

      if (errorCode) {
        return !silent
          ? (
            <Error
              type={ERRORS[errorCode]}
              message={errorMessage}
              reload={errorCode === 'COMPONENT_NAME_ERROR' ? undefined : this.onReload}
            />
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
        <C
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...propsRest}
          {...componentProps}
          $config={rest}
          $dispatch={this.dispatch}
          $store={store}
          $mounted={mountedComponents}
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

  return connect(...storeKeys)(withRouter(R))
}

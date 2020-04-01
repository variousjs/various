import React, { Component } from 'react'
import getDispatch from './dispatch'
import {
  connect,
  getStore,
  dispatch,
  subscribe,
} from './store'
import {
  IGNORE_STATIC_METHODS,
  MOUNTED_COMPONENTS,
  COMPONENT_PACKAGES,
} from './config'

export default function ({
  config,
  name,
  storeDispatcher,
  componentDispatcher,
  Loading,
  Error,
  router,
}) {
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)

  class R extends Component {
    state = {
      component: undefined,
      error: undefined,
      unset: !this.props[COMPONENT_PACKAGES][name],
    }

    dispatch = currentDispatch.bind(this)

    componentDidMount() {
      this.unsubscribe = subscribe((keys) => {
        if (!keys.includes(COMPONENT_PACKAGES) || !this.state.unset) {
          return
        }

        const packages = getStore()[COMPONENT_PACKAGES]

        if (packages[name]) {
          this.unsubscribe()

          this.setState({ unset: false }, () => {
            this.mountComponent()
          })
        }
      })

      if (!this.state.unset) {
        this.mountComponent()
      }
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Component Error' })
    }

    componentWillUnmount() {
      this.unsubscribe()
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
            if (!IGNORE_STATIC_METHODS.includes(method)) {
              actions[method] = C[method]
            }
          })

        componentDispatcher[name] = actions // eslint-disable-line no-param-reassign

        this.setState({ component: C }, () => {
          dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
        })
      }, (e) => {
        this.setState({ error: e.message || 'Component Load Error' })
      })
    }

    onReload = () => {
      window.requirejs.undef(name)
      window.requirejs.config({
        paths: {
          [name]: this.props[COMPONENT_PACKAGES][name].slice(0, -3),
        },
      })
      this.setState({ component: undefined, error: undefined }, () => {
        this.mountComponent()
      })
    }

    render() {
      const { component: C, error, unset } = this.state
      const store = {}

      if (unset) {
        return null
      }

      if (!this.props[MOUNTED_COMPONENTS].includes(name) && C) {
        // eslint-disable-next-line no-param-reassign
        return null
      }

      if (error) {
        return (
          <Error error={error} reload={this.onReload} />
        )
      }

      if (!C) {
        return (
          <Loading />
        )
      }

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS && key !== COMPONENT_PACKAGES) {
          store[key] = this.props[key]
        }
      })

      return (
        <C
          NAME={name}
          CONFIG={{ ...config, packages: this.props[COMPONENT_PACKAGES] }}
          MOUNTED_COMPONENTS={this.props[MOUNTED_COMPONENTS]}
          store={store}
          dispatch={this.dispatch}
          {...router} // eslint-disable-line react/jsx-props-no-spreading
        />
      )
    }
  }

  return connect(...storeKeys)(R)
}

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import getDispatch from './dispatch'
import { connect, getStore, dispatch } from './store'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS } from './config'

export default function ({
  config,
  name,
  storeDispatcher,
  componentDispatcher,
  Loading,
  Error,
}) {
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)
  const { components, dependencies, ...rest } = config

  class R extends Component {
    static propTypes = {
      history: PropTypes.func.isRequired,
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
    }

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
            if (!IGNORE_STATIC_METHODS.includes(method)) {
              actions[method] = C[method]
            }
          })

        componentDispatcher[name] = actions // eslint-disable-line no-param-reassign

        this.setState({ component: C }, () => {
          dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
        })
      }, (e) => {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: components[name].slice(0, -3),
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
      const { history, location, match } = this.props
      const mountComponent = this.props[MOUNTED_COMPONENTS]
      const { component: C, error } = this.state
      const store = {}

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
        if (key !== MOUNTED_COMPONENTS) {
          store[key] = this.props[key]
          delete this.props[key]
        }
      })

      // eslint-disable-next-line react/prop-types
      delete this.props.staticContext
      // eslint-disable-next-line react/prop-types
      const { MOUNTED_COMPONENTS: M, ...propsRest } = this.props

      return (
        <C
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsRest}
          config={rest}
          mountedComponents={mountComponent}
          store={store}
          dispatch={this.dispatch}
          history={history}
          location={location}
          match={match}
        />
      )
    }
  }

  return connect(...storeKeys)(withRouter(R))
}

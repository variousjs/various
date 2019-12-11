import React, { Component } from 'react'
import { connect, getStore } from './store'
import { IGNORE_STATIC_METHODS } from './config'

export default function ({
  name,
  storeMethods,
  componentMethods,
  Loading,
  Error,
}) {
  const storeKeys = Object.keys(getStore())

  class R extends Component {
    state = {
      component: undefined,
      error: undefined,
    }

    componentDidMount() {
      window.require([name], (C) => {
        const actions = {}

        Object
          .getOwnPropertyNames(C)
          .forEach((name) => {
            if (!IGNORE_STATIC_METHODS.includes(name)) {
              actions[name] = C[name]
            }
          })

        componentMethods[name] = actions
        this.setState({ component: C })
      }, (e) => {
        this.setState({ error: e.message || 'Component Error' })
      })
    }

    dispatch = (name, func, ...values) => {
      if (name === 'global' && storeMethods[func]) {
        return this.props.dispatch(storeMethods[func], ...values)
      }
      const actions = componentMethods[name]
      if (actions) {
        return actions[func](...values)
      }
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Error' })
    }

    render() {
      const { component: C, error } = this.state
      const store = {}

      if (error) {
        return (
          <Error error={error} />
        )
      }

      if (!C) {
        return (
          <Loading />
        )
      }

      storeKeys.forEach((key) => {
        store[key] = this.props[key]
      })

      return (
        <C store={store} dispatch={this.dispatch} />
      )
    }
  }

  return connect(...storeKeys)(R)
}

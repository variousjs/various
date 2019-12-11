import React, { Component } from 'react'
import { connect, getStore } from './state'
import { IGNORE_STATIC_METHODS } from './config'

export default function ({
  name,
  storeMethods,
  componentMethods,
  Loading,
  Error,
}) {
  const stateKeys = Object.keys(getStore())

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
      const state = {}

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

      stateKeys.forEach((key) => {
        state[key] = this.props[key]
      })

      return (
        <C state={state} dispatch={this.dispatch} />
      )
    }
  }

  return connect(...stateKeys)(R)
}

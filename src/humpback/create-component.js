import React, { Component } from 'react'
import { connect, getStore, dispatch } from './store'
import { IGNORE_STATIC_METHODS, LOADED_COMPONENTS } from './config'

export default function ({
  name,
  storeMethods,
  componentMethods,
  Loading,
  Error,
  router,
}) {
  const storeKeys = Object.keys(getStore())

  class R extends Component {
    state = {
      component: undefined,
      error: undefined,
    }

    componentDidMount() {
      window.require([name], (C) => {
        if (!C) {
          this.setState({ error: 'Component Name Error' })
          return
        }

        const loadedComponents = getStore()[LOADED_COMPONENTS]
        const actions = {}

        loadedComponents.push(name)
        dispatch({ [LOADED_COMPONENTS]: loadedComponents }, true)

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
        this.setState({ error: e.message || 'Component Load Error' })
      })
    }

    dispatch = (name, func, ...values) => {
      if (name === 'global') {
        if (!storeMethods[func]) {
          throw `Method \`${func}\` not exists`
        }
        return this.props.dispatch(storeMethods[func], ...values)
      }

      if (!this.props[LOADED_COMPONENTS].includes(name)) {
        throw `Component \`${name}\` not ready`
      }

      const actions = componentMethods[name]

      if (!actions[func]) {
        throw `Method \`${func}\` not exists`
      }

      return actions[func](...values)
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Component Error' })
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
        <C
          store={store}
          dispatch={this.dispatch}
          {...router}
        />
      )
    }
  }

  return connect(...storeKeys)(R)
}

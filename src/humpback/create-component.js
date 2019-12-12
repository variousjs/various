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

    // async componentDidMount() {
    //   if (name === 'b') {
    //     await new Promise((r) => setTimeout(r, 10000))
    //   }
    componentDidMount() {
      window.require([name], (C) => {
        const loadedComponents = getStore()[LOADED_COMPONENTS]
        const actions = {}

        if (!loadedComponents.find((n) => n === name)) {
          loadedComponents.push(name)
          dispatch({ [LOADED_COMPONENTS]: loadedComponents })
        }

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
      if (name === 'global' && storeMethods[func]) {
        return this.props.dispatch(storeMethods[func], ...values)
      }

      if (!this.props[LOADED_COMPONENTS].includes(name)) {
        throw `Component \`${name}\` no exists`
      }

      const actions = componentMethods[name]

      if (actions) {
        return actions[func](...values)
      }
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

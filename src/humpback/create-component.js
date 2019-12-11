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

  let subscribe = () => null
  let subscribeCalled

  class R extends Component {
    state = {
      component: undefined,
      error: undefined,
    }

    static getDerivedStateFromProps(props) {
      const loadedComponents = props[LOADED_COMPONENTS]

      if (loadedComponents && loadedComponents.join() !== subscribeCalled) {
        subscribeCalled = loadedComponents.join()
        subscribe(loadedComponents)
      }
    }

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

    subscribe = (func) => {
      if(!(typeof func).includes('function')) {
        throw new Error('`subscribe` not a function')
      }
      subscribe = func
      return () => {
        subscribe = () => null
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
        if (key !== LOADED_COMPONENTS) {
          store[key] = this.props[key]
        }
      })

      return (
        <C
          store={store}
          subscribe={this.subscribe}
          dispatch={this.dispatch}
          {...router}
        />
      )
    }
  }

  return connect(...storeKeys)(R)
}

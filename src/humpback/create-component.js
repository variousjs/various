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

        Object
          .getOwnPropertyNames(C)
          .forEach((method) => {
            if (!IGNORE_STATIC_METHODS.includes(method)) {
              actions[method] = C[method]
            }
          })

        componentMethods[name] = actions // eslint-disable-line no-param-reassign

        this.setState({ component: C }, () => {
          dispatch({ [LOADED_COMPONENTS]: loadedComponents }, true)
        })
      }, (e) => {
        this.setState({ error: e.message || 'Component Load Error' })
      })
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Component Error' })
    }

    dispatch = (component, func, ...values) => {
      if (component === 'global') {
        if (!storeMethods[func]) {
          throw `Method \`${func}\` not exists`
        }
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        return this.props.dispatch(storeMethods[func], ...values)
      }

      // eslint-disable-next-line react/destructuring-assignment
      if (!this.props[LOADED_COMPONENTS].includes(component)) {
        throw `Component \`${component}\` not ready`
      }

      const actions = componentMethods[component]

      if (!actions[func]) {
        throw `Method \`${func}\` not exists`
      }

      return actions[func](...values)
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
        // eslint-disable-next-line react/destructuring-assignment
        store[key] = this.props[key]
      })

      return (
        <C
          store={store}
          dispatch={this.dispatch}
          {...router} // eslint-disable-line react/jsx-props-no-spreading
        />
      )
    }
  }

  return connect(...storeKeys)(R)
}

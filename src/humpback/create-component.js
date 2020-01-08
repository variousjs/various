import React, { Component } from 'react'
import { connect, getStore, dispatch } from './store'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS } from './config'

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

        const mountedComponents = getStore()[MOUNTED_COMPONENTS]
        const actions = {}

        mountedComponents.push(name)

        Object
          .getOwnPropertyNames(C)
          .forEach((method) => {
            if (!IGNORE_STATIC_METHODS.includes(method)) {
              actions[method] = C[method]
            }
          })

        componentMethods[name] = actions // eslint-disable-line no-param-reassign

        this.setState({ component: C }, () => {
          dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
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
        // eslint-disable-next-line react/prop-types
        return this.props.dispatch(storeMethods[func], ...values)
      }

      if (!this.props[MOUNTED_COMPONENTS].includes(component)) {
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
        if (key !== MOUNTED_COMPONENTS) {
          store[key] = this.props[key]
        }
      })

      return (
        <C
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

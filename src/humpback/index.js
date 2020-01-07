import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { createStore, connect, dispatch } from './store'
import RoutesWrapper from './routes'
import createComponent from './create-component'
import {
  Loading,
  Error,
  Container,
  MOUNTED_COMPONENTS,
} from './config'

export default (config) => {
  const {
    packages,
    store = {},
    routes = [],
    methods = {},
    loading: L = Loading,
    error: E = Error,
    container: C = Container,
    ...rest
  } = config
  const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
  const componentMethods = {}
  const componentCreator = (name) => withRouter((router) => {
    const R = createComponent({
      name,
      storeMethods: methods,
      componentMethods,
      Loading: L,
      Error: E,
      router,
    })
    return <R />
  })

  class Routes extends Component {
    static propTypes = {
      // eslint-disable-next-line react/require-default-props
      config: PropTypes.array,
    }

    shouldComponentUpdate() {
      return false
    }

    render() {
      const { config: cs } = this.props
      if (cs) {
        return cs
      }
      return (
        <RoutesWrapper
          routes={routes}
          methods={methods}
          Loading={L}
          Error={E}
          componentMethods={componentMethods}
        />
      )
    }
  }

  class R extends Component {
    static propTypes = {
      history: PropTypes.func.isRequired,
    }

    state = {
      error: undefined,
    }

    componentDidMount() {
      const { history } = this.props
      this.unsubscribe = history.listen(() => {
        Object.keys(componentMethods).forEach((key) => delete componentMethods[key])
        dispatch({ [MOUNTED_COMPONENTS]: [] }, true)
      })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Container Error' })
    }

    dispatch = (name, func, ...values) => {
      if (name === 'global') {
        if (!methods[func]) {
          throw `Method \`${func}\` not exists`
        }
        return dispatch(methods[func], ...values)
      }

      if (!this.props[MOUNTED_COMPONENTS].includes(name)) {
        throw `Component \`${name}\` not ready`
      }

      const actions = componentMethods[name]

      if (!actions[func]) {
        throw `Method \`${func}\` not exists`
      }

      return actions[func](...values)
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<E error={error} />)
      }

      const storeData = {}

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS) {
          storeData[key] = this.props[key]
        }
      })

      return (
        <C
          dispatch={this.dispatch}
          Routes={Routes}
          componentCreator={componentCreator}
          config={{ ...rest, routes }}
          store={storeData}
          MOUNTED_COMPONENTS={this.props[MOUNTED_COMPONENTS]}
        />
      )
    }
  }

  createStore({ ...store, [MOUNTED_COMPONENTS]: [] })

  const X = connect(...storeKeys)(withRouter(R))

  render((
    <Router>
      <X />
    </Router>
  ), document.querySelector('#root'))
}

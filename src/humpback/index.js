import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, connect, dispatch } from './store'
import Routes from './routes'
import {
  Loading,
  Error,
  Container,
  LOADED_COMPONENTS,
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
  const storeKeys = Object.keys(store)
  const RoutesWidthConfig = () => (
    <Routes
      routes={routes}
      methods={methods}
      Loading={L}
      Error={E}
    />
  )

  createStore({ ...store, [LOADED_COMPONENTS]: [] })

  class R extends Component {
    state = {
      error: undefined,
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Container Error' })
    }

    dispatch = (func, ...values) => {
      if (!methods[func]) {
        throw `Method \`${func}\` not exists`
      }
      return dispatch(methods[func], ...values)
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<E error={error} />)
      }

      const storeData = {}

      storeKeys.forEach((key) => {
        storeData[key] = this.props[key]
      })

      return (
        <C
          dispatch={this.dispatch}
          Routes={RoutesWidthConfig}
          config={{ ...rest, routes }}
          store={storeData}
        />
      )
    }
  }

  const X = connect(...storeKeys)(R)

  render((
    <Router>
      <X />
    </Router>
  ), document.querySelector('#root'))
}

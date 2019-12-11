import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, connect } from './state'
import Routes from './routes'
import { Loading, Error, Container } from './config'

export default (config) => {
  const {
    packages,
    state = {},
    routes = [],
    methods = {},
    loading: L = Loading,
    error: E = Error,
    container: C = Container,
    ...rest
  } = config
  const stateKeys = Object.keys(state)
  const RoutesWidthConfig = () => (
    <Routes
      routes={routes}
      methods={methods}
      Loading={L}
      Error={E}
    />
  )

  createStore({ ...state })

  class R extends Component {
    state = {
      error: undefined,
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Container Error' })
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<E error={error} />)
      }

      const stateData = {}

      stateKeys.forEach((key) => {
        stateData[key] = this.props[key]
      })

      return (
        <C
          Routes={RoutesWidthConfig}
          config={{ ...rest, routes }}
          state={stateData}
        />
      )
    }
  }

  const X = connect(...stateKeys)(R)

  render((
    <Router>
      <X />
    </Router>
  ), document.querySelector('#root'))
}

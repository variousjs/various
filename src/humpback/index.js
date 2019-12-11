import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, connect } from './state'
import Routes from './routes'

export default (config) => {
  const {
    packages,
    state = {},
    routes = [],
    methods = {},
    loading = () => (
      <div>loading</div>
    ),
    error = ({ message }) => (
      <div>{message}</div>
    ),
    container: C = () => (
      <h1 style={{ textAlign: 'center', paddingTop: '20%' }}>Empty</h1>
    ),
    ...rest
  } = config
  const stateKeys = Object.keys(state)
  const RoutesWidthConfig = () => (<Routes routes={routes} methods={methods} />)

  createStore({ ...state })

  class R extends Component {
    state = {
      error: undefined,
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Error' })
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<h3>{error}</h3>)
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

  const Container = connect(...stateKeys)(R)

  render((
    <Router>
      <Container />
    </Router>
  ), document.querySelector('#root'))
}

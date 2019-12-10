import React, { Fragment, Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, connect } from './state'
import Routes from './routes'

export default (config) => {
  const {
    state = {},
    routes = [],
    methods = {},
    container: C = (<Fragment />),
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
        return (<h1>{error}</h1>)
      }

      const stateData = {}

      stateKeys.forEach((key) => {
        stateData[key] = this.props[key]
      })

      return (
        <C Routes={RoutesWidthConfig} routes={routes} state={stateData} />
      )
    }
  }

  const Container = connect(...Object.keys(state))(R)

  render((
    <Router>
      <Container />
    </Router>
  ), document.querySelector('#root'))
}

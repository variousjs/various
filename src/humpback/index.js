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

  createStore({ ...store })

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

      const state = {}

      return (
        <C Routes={Routes} />
      )
    }
  }

  const Container = connect(...Object.keys(store))(R)

  render((
    <Router>
      <Container />
    </Router>
  ), document.querySelector('#root'))
}

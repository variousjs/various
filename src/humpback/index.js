import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore } from 'nycticorax'
import Container from './container'

export default (config) => {
  const {
    store = {},
    routes = [],
    actions = {},
  } = config

  createStore({ ...store })

  render((
    <Router>
      <Container routes={routes} actions={actions} />
    </Router>
  ), document.querySelector('#root'))
}

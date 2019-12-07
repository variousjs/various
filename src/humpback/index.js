import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore } from 'nycticorax'
import Container from './container'

export default (config) => {
  const {
    store = {},
    routes = [],
    methods = {},
  } = config

  createStore({ ...store })

  render((
    <Router>
      <Container routes={routes} methods={methods} />
    </Router>
  ), document.querySelector('#root'))
}
